import React, {useEffect, useState,Fragment } from 'react';
import { useRecoilValue} from "recoil";
import { codcne,organizacion,roles} from '../store/atom';
//import { Application } from '../../App';
import {useFetch} from '../hooks/usefetch'; 
import CircularProgress from '@material-ui/core/CircularProgress';
//import {antenacercana} from './helpers'
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer,ScaleControl} from 'react-mapbox-gl';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import {observadores} from '../../data/observadores.json';
import {antenas} from '../../data/antenas.json';
//import {celular} from '../data/celular.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
import {LIBERTADOR} from '../../data/libertador.json';
import {PAMIRANDA} from '../../data/PAMIRANDA.json';
import {usePosition} from '../../hooks/useposition';
import {voronoijson} from '../../data/voronoijson.json';
//import {useGeolocation} from '../hooks/usegeolocation';
import { greatCircle, point,circle } from '@turf/turf';
import Title from '../layout/title';

//import Chart from 'react-google-charts';
//https://github.com/alex3165/react-mapbox-gl/issues/763
//https://www.youtube.com/watch?v=JJatzkPcmoI
//https://github.com/leighhalliday/mapbox-react-demo CLASIC react-mapbox-gl UBER
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
    }
  }));

  export default function Geo() {
  
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    const ORGANIZACION = useRecoilValue(organizacion);
    const ROLES = useRecoilValue(roles);
    const CODCNE = useRecoilValue(codcne);
    const [rolesjson, setRolesJson]=useState({"type":"FeatureCollection","features":[] });
    const [rejson, setReJson]=useState({"type":"FeatureCollection","features":[] });

    const [flagCircular, setFlagCircular] = React.useState(false); 
    const [data, isLoading, isError , fetchData] = useFetch(""); 
    const [cant,setCant]=React.useState(0)
    const [pos, setPos] = React.useState([-66.9188,10.508]);
    //const { state, dispatch } = React.useContext(Application);
    const [state,setState]=useState( {
        flagLogin:false,
        geolocation:{country:"VE",countrylong:"VE",estado:"ES",municipio:"MU",municipiolong:"MUNICIPIO",ciudad:"VE",ciudadlong:"VE",urbanizacion:"URB",urbanizacionlong:"URB",ruta:"RUTA",rutalong:"RUTALONG",premisa:"PREMISA",premisalong:"PREMISALONG",postalcode:"postalcode"},
        position:{ latitude:8.4881081498923305, longitude:-66.888521423339844, timestamp:0, accuracy:0, error:null },  //hook
        positions:[],
        
        ///// GeoJSON
        lnglat:[-66.888,9.508],
        zoom:5,
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
  //  const stategeo = useGeolocation();
  useEffect(() => {
    var partidos=""
    // alert(JSON.stringify(ORGANIZACION))
     ORGANIZACION.map(function (partido) {
       if (partido.selected)partidos+=partido.id+","; 
       
     });
     partidos=partidos.substring(0, partidos.length - 1);
     if (partidos=="")partidos="NADA"
     // alert(JSON.stringify(ROLES))
     var roles=""
     ROLES.map(function (rol) {
       if (rol.selected)roles+=rol.idrol+","; 
       
     });
     roles=roles.substring(0, roles.length - 1);
     if (roles=="")roles="NADA"
 fetchData('http://openfaroapi.azurewebsites.net/api/personasget?codigocne='+CODCNE+'&idpartido='+partidos+'&idnodofuncional=1039&roles='+roles);
 console.log('http://openfaroapi.azurewebsites.net/api/personasget?codigocne='+CODCNE+'&idpartido='+partidos+'&idnodofuncional=1039&roles='+roles)
 //fetchData('http://openfaroapi.azurewebsites.net/api/personasget?codigocne=&idpartido=&idnodofuncional=1039&roles=');
    
},[CODCNE,ORGANIZACION,ROLES]);
useEffect(() => {
  //alert("in "+option)
 //alert(JSON.stringify(data))
  if (isLoading) {
    setFlagCircular(true)
  }
  //alert(data[0].type)
  if ((data!=undefined)&&(!isLoading))      
  {
   // console.log(JSON.stringify(data))
  // alert("fetch"+JSON.stringify(data))
  // const  featuresrolesjson=data.map(d=>{               
    // return(
    //   {
    //     "type":"Feature",
    //     "properties":{"nombre":"o.cellid","partido":d.partido,"color":"red"},                             
    //     "geometry":{"type":"Point","coordinates":[d.lng,d.lat ]
    //     }
    //   }
    //  )     
    // })   

    const  featuresrejson=data.map(d=>{               
     return(
     {
        "type":"Feature",
        "properties":{"nombre":"o.cellid","partido":d.partido,"color":"red","width":10},                             
        "geometry":{"type":"Point","coordinates":[d.relng,d.relat ]
      }
    }
    )     
    })   

// setRolesJson(personasRolesCollection)

let personasReCollection={
  "type":"FeatureCollection",
  "features":featuresrejson
}
setReJson(personasReCollection)
setCant(data.length)
//handleKPIDay(data)
  setFlagCircular(false)
   
  }
},[data,isLoading]);
  //console.log("stategeo"+JSON.stringify(state.positions))
  function onResize (map, event)  {
   //alert(map.getZoom()+" " +JSON.stringify(event))
  }
  function onZoomEnd (map, event)  {
    //console.log("onZoomEnd")
    //console.log(map.getZoom());
    var zoomint=Math.round(map.getZoom());
   
    setZoom(zoomint)
    //dispatch({
      //  type: 'ZOOM',
     //   stateprop:zoomint
    //})
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
        "properties":{"nombre":"red","color":10,"radio":20},                             
        "geometry":{"type":"Point","coordinates":[state.position.longitude,state.position.latitude]
        }
      },
      {
        "type":"Feature",
        "properties":{"nombre":"red","color":50,"radio":40},                             
        "geometry":{"type":"Point","coordinates":[-66.798,9.408]
        }
      },
      {
        "type":"Feature",
        "properties":{"nombre":"red","color":70,"radio":60},                             
        "geometry":{"type":"Point","coordinates":[-65,9.108]
        }
      }
    
    ]
    }
  
  
   
   const  dronecoordinate=state.positions.map(p=>{               
    return(
      [p.longitude,p.latitude]
)     
})  

   let drone={
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": 
            dronecoordinate
           
          
        }
      }
    ]
  }

const getCirclePoint=(q)=>{
  console.log("aaaaaaaaaaaaaaaaaaaaaaa    "+q)
  return {'circle-color': 'yellow','circle-radius': 5,'circle-opacity': 1,'circle-stroke-color': 'white' , 'circle-stroke-width':6,'circle-stroke-opacity':.2,'circle-blur': 0.1,}
}
const getColor = (part) => {
  console.log(">>>>>>>>>>>>>>>>>"+part)
  var color="pink"
 
  ORGANIZACION.map((o, i) => {
    if (o.nombre ==part ) {
     
       color=o.color;
       console.log(o.nombre+" "+part+" "+o.color)
      }
   });
 // var partido={"AD":"white","MPJ":"orange","VP":"blue"}
  return color;
};
console.log("zooooooooooooooooooooooooooooom"+state.zoom+"zooooooooooooooooooooooooooom")
return (
<Fragment>
<div className={classes.root}>
{flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={20}   thickness={4} className={classes.progress} />}
<table><tr><td>
<Title>Distribucion Geoespacial</Title></td><td>&nbsp;&nbsp;&nbsp;</td><td>    <Title>{"   "+cant+" personas..."}</Title> </td></tr></table>  

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
    onZoomEnd={onZoomEnd}
   //onZoom={onZoom}
   onResize={onResize}
   containerStyle={mapStyle}        
   onControlClick={onControlClick}
//<ZoomControl onControlClick={onControlClick}/>

> 
<ZoomControl onControlClick={onZoom}/>
<ScaleControl />
<GeoJSONLayer
          data={CIUDADESGEO}
          fillPaint={{'fill-color': 'lightgray','fill-outline-color': 'yellow','fill-opacity': .05}}
          linePaint={{            'line-color': 'gray',            'line-width': 1          }}
          
        /> 
      
               <GeoJSONLayer
              data={ESTADOSGEO}
              //fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': '#58D3F7','line-width': 1.0}}
             
            />  
                         <GeoJSONLayer
              data={LIBERTADOR}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'deepskyblue','line-width': 1}}
             
            />

             <GeoJSONLayer
              data={PAMIRANDA}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'deepskyblue','line-width': 1}}
             
            />
               <GeoJSONLayer
              data={voronoijson}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'red','line-width': .5}}
             
            />
               <GeoJSONLayer
              data={ESTADOSGEO}
              //fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'lime','line-width': 1.0}}
             
            />  
       
        <GeoJSONLayer
          data={drone}
          circlePaint={{'circle-color': 'yellow','circle-radius': 4,'circle-opacity': 0.6 }}   
          linePaint={{
            'line-color': 'lightyellow',
            'line-width': 2,
           'line-opacity': 0.6
          }}
          
        />   

<GeoJSONLayer
          data={redpoint}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'yellow','circle-radius': 14,'circle-opacity': 0.1 }}         
         
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



{/* 'circle-radius':  [
            "interpolate",
            ["linear"],
            ["get", "radio"],
            10, 10,
            20, 15,
            30, 20,
            40, 40
          ] */}

<GeoJSONLayer
          data={redpoint}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{
          'circle-color': {
              "property": "color",
              "stops": [
                        [10, "#fff5f0"],
                        [20, "#fee0d2"],
                        [30, "#fcbba1"],
                        [40, "#fc9272"],
                        [50, "#fb6a4a"],
                        [60, "#ef3b2c"],
                        [70, "#cb181d"],
                        [80, "#a50f15"],
                        [90, "#67000d"]
                     ]
            },
            'circle-radius': {
              "property": "radio",
               "stops": [
                         [20, 20],
                         [40, 40],
                         [50,50],
                         [60, 60]
                       ]
               }
    
            
         
          }}         
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
          data={ rejson}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={getCirclePoint('{nombre}')}         
          symbolLayout={{
            'text-field': '{partido}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'white'
          }}
          />
  


</Map>


        </div>

</Fragment>
)
        }
