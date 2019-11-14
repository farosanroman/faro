import React, {useEffect, useState,Fragment } from 'react';
//import { Application } from '../App';
//import {antenacercana} from './helpers'
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer,ScaleControl} from 'react-mapbox-gl';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
//import {observadores} from '../data/observadores.json';
//import {antenas} from '../data/antenas.json';
//import {celular} from '../data/celular.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
//import {RESP} from '../../data/resp.json';
import {PAPROPERTIES} from  '../../data/PAPROPERTIES.json';

//import {LIBERTADOR} from '../data/libertador.json';
import {usePosition} from '../../hooks/useposition';
//import {useGeolocation} from '../hooks/usegeolocation';
import { greatCircle, point,circle } from '@turf/turf';
import Title2 from '../dashboard/title';
import PieChart, { Title,Font, Series , Label ,Connector,  Size, Export,Legend } from 'devextreme-react/pie-chart';
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

  export default function Polylines() {
  
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    const [pos, setPos] = React.useState([-66.9188,8.808]);
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
    const [zoom, setZoom] = useState([6]);
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();
    //const [ FORMULARIOS,SetFORMULARIOS ] = useState(RESP);
    //const [RESPUESTAS,SetRESPUESTAS]=useState({enviados:0,preguntas:[],respondidos:0,invalidos:0,isLoading:false })
    const [PA, setPA] = useState({"type":"FeatureCollection", "features": []});
    
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        //calculos(FORMULARIOS)
        var url="http://nodefaro.azurewebsites.net/parroquias"
			 // url="https://archivosamarillos.blob.core.windows.net/manualesfaro/0101.json"
       //alert(url)
       fetch(url)        
       .then(response => {
         response.json().then(data => {  
         // alert(JSON.stringify(data))           
          // alert(PA.features+" "+PAe.features+" "+PAf.features+" "+PAg.features.length)
          // let features=[...PA.features,...PAe.features,...PAf.features,...PAg.features]
          // alert(features.length+" "+PAPROPERTIES.features.length)
          // PA.features=features;
					//var pa=data.PA
					//var pa=JSON.parse(data)
					var pa=data;
           for (var i = 0; i < pa.features.length; i++) {
             
             pa.features[i].properties.CODCNE="000000";
             pa.features[i].properties.NOMBRE="XXXXXX";   
             pa.features[i].properties.UNIDADPORC=0.0;
             pa.features[i].properties.OFICIALISMOPORC="0.0";
             pa.features[i].properties=PAPROPERTIES.features[i].properties;
					 }
          //this.setState({ jsontext:pa });
          setPA(pa)
           //this.setState({PA:pa,isLoading:false })
         });
         
       })
      .catch(error => {
           alert(error)
          this.setState({ error, isLoading: false })
      });
      },[]);
 
 
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
return (

<Fragment>
<div className={classes.root}>
 <Title2>Estructuras GeoElectorales</Title2>
 <Map       
   //style="mapbox://styles/mapbox/streets-v8"
   //style="mapbox://styles/mapbox/dark-v9"
   style="mapbox://styles/mapbox/light-v9"
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
          fillPaint={{'fill-color': 'black','fill-outline-color': 'black','fill-opacity': 0.6}}

          linePaint={{
            'line-color': 'darkgray',
            'line-width': .3
          }}
        />
<GeoJSONLayer
              data={ESTADOSGEO}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'darkblue','line-width': 1.5}}
         
             
            />
             <GeoJSONLayer
           data={PA}
           fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
           linePaint={{'line-color': 'purple','line-width': .3}}
                     //fillOnMouseEnter={this.MouseEnter} 
         // fillOnClick={this.onFillMapClick}
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


</Map>


        </div>

</Fragment>
)
        }
