import React, {useEffect, useState,Fragment } from 'react';
import clsx from 'clsx';
//import { Application } from '../App';
//import {antenacercana} from './helpers'
//import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
// import TextField from '@material-ui/core/TextField';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer,ScaleControl} from 'react-mapbox-gl';
//import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

//import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
// import Select from '@material-ui/core/Select';
// import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
//import {observadores} from '../data/observadores.json';
//import {antenas} from '../data/antenas.json';
//import {celular} from '../data/celular.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
//import {RESP} from '../../data/resp.json';
import {roles} from  '../../data/roles.json';
//import {LIBERTADOR} from '../data/libertador.json';
import {usePosition} from '../../hooks/useposition';
//import {useGeolocation} from '../hooks/usegeolocation';
import { greatCircle, point,circle } from '@turf/turf';
import Title2 from '../layout/title';
//import PieChart, { Title,Font, Series , Label ,Connector,  Size, Export,Legend } from 'devextreme-react/pie-chart';
//import {EEMMPP} from  '../../data/EEMMPP.json';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getMensajes,SendGrid, getpostMensaje} from '../helpers/helpermensajes'
//import Chart from 'react-google-charts';
//https://github.com/alex3165/react-mapbox-gl/issues/763
//https://www.youtube.com/watch?v=JJatzkPcmoI
//https://github.com/leighhalliday/mapbox-react-demo
var linearoja={"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[-66,9],[-80.31606674194336,25.77392392167507]]}}]}
const style={   Paper:{padding:1,marginTop:1,marginBottom:1}}
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
  const Map = MapGL({accessToken: TOKEN });
  const mapStyle = {  flex: 1,  height: "75vh",width: "100%"};
  
  
  const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
  }));
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

  function useInterval({ startImmediate, duration, callback }) {
    const [count, updateCount] = useState(0);
    const [intervalState, setIntervalState] = useState(
      startImmediate === undefined ? true : startImmediate
    );
    const [intervalId, setIntervalId] = useState(null);
  
    useEffect(() => {
      if (intervalState) {
        const intervalId = setInterval(() => {
          updateCount(count + 1);
          callback && callback();
        }, duration);
        setIntervalId(intervalId);
      }
  
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      };
    }, [intervalState, count]);
    return {
      intervalId,
      start: () => {
        setIntervalState(true);
      },
      stop: () => {
        setIntervalState(false);
      }
    };
  }
  export default function Intervalos() {
  
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    const [flagCircular, setFlagCircular] = React.useState(false);
    //const { state, dispatch } = React.useContext(Application);
   
  
    const [state,setState]=useState( {
        flagLogin:false,
        geolocation:{country:"VE",countrylong:"VE",estado:"ES",municipio:"MU",municipiolong:"MUNICIPIO",ciudad:"VE",ciudadlong:"VE",urbanizacion:"URB",urbanizacionlong:"URB",ruta:"RUTA",rutalong:"RUTALONG",premisa:"PREMISA",premisalong:"PREMISALONG",postalcode:"postalcode"},
        position:{ latitude:8.4881081498923305, longitude:-66.888521423339844, timestamp:0, accuracy:0, error:null },  //hook
        positions:[],
        
        ///// GeoJSON
        lnglat:[-66.888,9.508],
        zoom:20,
        radio:3,
        /////
        centro:"Centro de Votacion",
        centros:null,
        ruta:{
          "type":"FeatureCollection",
          "features":[ {
            "type":"Feature",
            "properties":{"nombre":'ppa',"latitude":10.55555,"timestamp":0},                             
            "geometry":{"type":"LineString","coordinates":[[-66.8721358,9.4783499 ]] }
          }]
        },
        })
    const [zoom, setZoom] = useState([5]);
    const [pos, setPos] = React.useState([-66.9188,5.508]);
    
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();
   // const [ FORMULARIOS,SetFORMULARIOS ] = useState(RESP);
    const [RESPUESTAS,SetRESPUESTAS]=useState({enviados:0,preguntas:[],respondidos:0,invalidos:0,isLoading:false })
    const [ MENSAJES,SetMENSAJES ] = useState([]);
    
    const [time, setTime] = useState(null);
    const [activo, setActivo] = useState(false);
    const { start, stop } = useInterval({
      duration: 5000,
      startImmediate: false,
      callback: () => {
        console.log(Date())
        setTime(new Date().toLocaleTimeString());
        //setFlagCircular(false) 
        
        //stop()
        //var delayInMilliseconds = 10000; //1 second

        //setTimeout(function() {
        // start()
        // setFlagCircular(true)
        //}, delayInMilliseconds);
        //    }
        stop()
        SetMENSAJES([])
        setFlagCircular(true)
        getMensajes("criteria",result => {
          if (result.length==0)setActivo(false)
          console.log(result)
          SetMENSAJES(result)
          for (let i = 0; i < result.length; ++i) {
            var criteria={"id":result[i].id}
           // alert()
            getpostMensaje(criteria,result2 => {
              //alert(JSON.stringify(result2))
                  console.log("getPostMensaje"+JSON.stringify(result2))
            })
          }
          SendGrid("criteria",result => {
                
          })
         // alert(JSON.stringify(result))
          setFlagCircular(false)
          if (activo==true){
              start()
          }
        })
      }
    });

    function handleStart (){  
      setActivo(true)
      start()
   }

 function handleStop (){  
       setActivo(false)
    }

 
  function onResize (map, event)  {
   //alert(map.getZoom()+" " +JSON.stringify(event))
  }
   function onZoom (map, event)  {
     var zoomint=Math.round(map.getZoom());
     //dispatch({
    //  type: 'ZOOM',
    //  stateprop:zoomint
    //});
            //setZoom([map.getZoom()])    
      //alert(zoomint+" "+event)
         
            setZoom(zoomint+(event)*1.1)
          }
      function onControlClick(map,event){
        var z=state.zoom
        z+=event
      //  dispatch({
      //    type: 'ZOOM',
      //    stateprop:z
      //  });
      }
    // console.log(props.positions.length+" possssssssssss ")
   // setCenter([stategeo.longitude,stategeo.latitude])
    let redpoint={
      "type":"FeatureCollection",
      "features":[{
        "type":"Feature",
        "properties":{"nombre":"red"},                             
        "geometry":{"type":"Point","coordinates":[state.position.longitude,state.position.latitude]
        }
      }]
    }

  //coordendas de centride de parroquias
    

  var centro=[state.position.longitude,state.position.latitude]
  //var centro=[ -80.23521423339844,25.791081498923305 ]
//  if (latitude>1){
//  centro=[longitude,latitude]
//  if (zoom<8)setZoom([50])  
//}
 //console.log(JSON.stringify(drone))
// var center = [  -66.8658,10.4645];
// var radius = 7;
//alert(JSON.stringify(RESPUESTAS))
var ii=0
    
///var respuestas=[]
//alert(JSON.stringify(RESPUESTAS.preguntas))

var featuresWHITE=[] 

for (var i = 0; i < MENSAJES.length; i++) {
     featuresWHITE.push( {
         "type":"Feature",
         "properties":{
           "place":"MENSAJES[i].cv.municipio",
           "login":"espresso",
           "lat":"38.91427",
           "lon":"-66.86699"
           
         }, 
                 
         "geometry":{
           "type":"Point",
           "coordinates":MENSAJES[i].cv.location.coordinates
         }
       })


}

//}//FORMULARIOS length
//var rr=preguntas[0].respuestas

const pointsWHITE={
 "type":"FeatureCollection",
 "features":featuresWHITE
}      
      
//console.log("zooooooooooooooooooooooooooooom"+state.zoom+"zooooooooooooooooooooooooooom")
var heading="Registrados: "+RESPUESTAS.enviados+" Invalidos: "+RESPUESTAS.invalidos+" Enviados: "+RESPUESTAS.enviados+" Respondidos: "+RESPUESTAS.respondidos
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return (
<Fragment>
<div className={classes.root}>
 <Title2>Envio de Mensajes</Title2>
 <Container maxWidth="lg" className={classes.container}>
 
 <div>The time is now {time}</div>
     
 <Grid container spacing={3}>
          
            
        <Grid item xs={4} sm={4} md={3}>

        <Button variant="contained" color="primary" className={classes.button}
       // onClick={() => start()}
       onClick={handleStart}

        >
        Start Interval
      </Button>
      </Grid>       
      <Grid item xs={4} sm={4} md={3}>
      {flagCircular&&<CircularProgress className={classes.progress} />}

</Grid>       

      <Grid item xs={4} sm={4} md={3}>

<Button variant="contained" color="primary" className={classes.button}
   
   onClick={handleStop}
>
Stop Interval
</Button>
</Grid>       
        </Grid>
<Map       
   //style="mapbox://styles/mapbox/streets-v8"
   style="mapbox://styles/mapbox/dark-v9"
   // style="mapbox://styles/mapbox/light-v9"
   //center={[-66.8726,10.4713]} 
   //center={[longitude,latitude]} 
   //zoom={[10]}
   center={pos} 
   //center={[state.position.latitude,state.position.longitude]} 
    zoom={[zoom]}
   //onZoom={onZoom}
   onResize={onResize}
   containerStyle={mapStyle}        
   onControlClick={onControlClick}
//onClick={this._onClickMap}  
//<ZoomControl onControlClick={onControlClick}/>

> 
<ZoomControl onControlClick={onZoom}/>
<ScaleControl />
<GeoJSONLayer
          data={CIUDADESGEO}
          fillPaint={{'fill-color': 'lightgray','fill-outline-color': 'yellow','fill-opacity': 0.2}}
          linePaint={{            'line-color': 'darkgray',            'line-width': .3          }}
          
        /> 
<GeoJSONLayer
              data={ESTADOSGEO}
              //fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': '#58D3F7','line-width': 1.0}}
             
            />  
 <GeoJSONLayer
          data={redpoint}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'red','circle-radius': 4, }}         
          symbolLayout={{
            'text-field': '{nombre0}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'black'
          }}
          />

<GeoJSONLayer
          data={pointsWHITE}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'yellow','circle-radius': 4, }}         
          symbolLayout={{
            'text-field': '{place}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'gainsboro'
          }}
          />


</Map>

</Container>
        </div>

</Fragment>
)
        }