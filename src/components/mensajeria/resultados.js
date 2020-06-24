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
import {RESP} from '../../data/resp.json';

//import {LIBERTADOR} from '../data/libertador.json';
import {usePosition} from '../../hooks/useposition';
//import {useGeolocation} from '../hooks/usegeolocation';
import { greatCircle, point,circle } from '@turf/turf';
import Title2 from '../layout/title';
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

  export default function Resultados() {
  
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    const [pos, setPos] = React.useState([-66.9188,10.508]);
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
    const [ FORMULARIOS,SetFORMULARIOS ] = useState(RESP);
    const [RESPUESTAS,SetRESPUESTAS]=useState({enviados:0,preguntas:[],respondidos:0,invalidos:0,isLoading:false })
  
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        calculos(FORMULARIOS)
      },[]);
    //alert(respuestas)
  //alert(JSON.stringify(RESP))
    //  const stategeo = useGeolocation();
  ///function 
  //console.log("stategeo"+JSON.stringify(state.positions))
  const calculos = (e) => {
    //alert("calculos")
   //alert(JSON.stringify(this.state.FORMULARIOS))
 var respondidos=0
 var enviados=0
 var invalidos=0
   var preguntas=[]
     var respuestasC=[]
     var features=[];
     //alert(JSON.stringify(respuestas))
     var FORMULARIOS=e;
     var  form=FORMULARIOS
     //alert(JSON.stringify(form))
     
     for (let i = 0; i < FORMULARIOS[0].preguntas.length; ++i) {
          var respuestas=[]
          for (let j = 0; j < FORMULARIOS[0].preguntas[i].respuestas.length; ++j) {
              respuestas.push({idrespuesta:FORMULARIOS[0].preguntas[i].respuestas[j].idrespuesta,x:form[0].preguntas[i].respuestas[j].respuesta,y:0})
          }
          //alert(JSON.stringify(respuestas))
          
          preguntas.push({key:i,idpregunta:FORMULARIOS[0].preguntas[i].idpregunta,pregunta:FORMULARIOS[0].preguntas[i].pregunta,respuestas:respuestas})
     }
     //alert(JSON.stringify(preguntas))
     //for (let i = 0; i < form.length; ++i) {
      // for (let i = 0; i < form.length; ++i) {
      //   console.log(form)
      //   console.log(form[i].preguntas)
      // }
         for (let i = 0; i < form.length; ++i) {
           console.log(form[i].preguntas)
           if (form[i].medios[1].procesos.existe==false){
             invalidos+=1;
           }
           if (form[i].preguntas[0].idrespuesta>0){
             respondidos+=1;
           }
           if ((form[i].medios[1].procesos.envio==true)&&(form[i].medios[1].procesos.existe==true)){
             enviados+=1;
           }
           
           for (let j = 0; j < preguntas.length; ++j) {
            
           for (let k = 0; k < preguntas[j].respuestas.length; ++k) {
               if (form[i].preguntas[j].idrespuesta==preguntas[j].respuestas[k].idrespuesta){
                   preguntas[j].respuestas[k].y+=1;
                   //alert()
                   
                 }
            //}
           //preguntas
        } 
       }
       }
       //enviados=enviados*1.0-invalidos*1.0;
   //alert(JSON.stringify(preguntas))
  SetRESPUESTAS({enviados:enviados,preguntas:preguntas,respondidos:respondidos,invalidos:invalidos,isLoading:false });
 //SetRESPUESTAS({enviados:0,preguntas:[],respondidos:0,invalidos:0,isLoading:false });   
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
var respuestasC=RESPUESTAS.preguntas.map(r=>{ 
  ii+=1;
   return(
       <Grid>
      <PieChart
      id={'pie'}
      dataSource={r.respuestas}
      palette={['deepskyblue','red', 'orange', 'limegreen', 'lightgrey', '#DEB887', '#87CEFA', '#BDBDBD']}

     
     // onPointClick={this.pointClickHandler}
     // onLegendClick={this.legendClickHandler}
    > 
     <Title text={r.pregunta}>
     <Font color="black" size="15"/>
       </Title>  
      <Series
        argumentField={'x'}
        valueField={'y'}
      >
        <Label visible={true}>
          <Connector visible={true} width={1} />
          
        </Label>
      </Series>
      <Legend
      verticalAlignment={'bottom'}
      horizontalAlignment={'center'}
      itemTextPosition={'bottom'}
      visible={true}
    />
      <Size width={300} />
      <Export enabled={false} />
    </PieChart>
   </Grid>
       )  
     
 }) 

var featuresGREEN=[] 
var featuresYELLOW=[]
var featuresWHITE=[] 
var featuresRED=[]
for (var i = 0; i < FORMULARIOS.length; i++) {
     featuresWHITE.push( {
         "type":"Feature",
         "properties":{
           "place":FORMULARIOS[i].cv.municipio,
           "login":"espresso",
           "lat":"38.91427",
           "lon":"-66.86699"
           
         }, 
                 
         "geometry":{
           "type":"Point",
           "coordinates":FORMULARIOS[i].cv.location.coordinates
         }
       })
       if (FORMULARIOS[i].medios[1].procesos.envio==true){
         featuresGREEN.push( {
           "type":"Feature",
           "properties":{
             "place":FORMULARIOS[i].cv.municipio,
             "login":"espresso",
             "lat":"38.91427",
             "lon":"-66.86699"
             
           }, 
                   
           "geometry":{
             "type":"Point",
             "coordinates":FORMULARIOS[i].cv.location.coordinates
           }
         })
       }
       if (FORMULARIOS[i].preguntas[0].idrespuesta>0){
         featuresYELLOW.push( {
           "type":"Feature",
           "properties":{
             "place":FORMULARIOS[i].cv.municipio,
             "login":"espresso",
             "lat":"38.91427",
             "lon":"-66.86699"
             
           }, 
                   
           "geometry":{
             "type":"Point",
             "coordinates":FORMULARIOS[i].cv.location.coordinates
           }
         })
       }
       if (FORMULARIOS[i].medios[1].procesos.existe==false){
         featuresRED.push( {
           "type":"Feature",
           "properties":{
             "place":FORMULARIOS[i].cv.municipio,
             "login":"espresso",
             "lat":"38.91427",
             "lon":"-66.86699"
             
           }, 
                   
           "geometry":{
             "type":"Point",
             "coordinates":FORMULARIOS[i].cv.location.coordinates
           }
         })
       }

}

//}//FORMULARIOS length
//var rr=preguntas[0].respuestas

const pointsWHITE={
 "type":"FeatureCollection",
 "features":featuresWHITE
}      
const pointsGREEN={
 "type":"FeatureCollection",
 "features":featuresGREEN
}     
const pointsRED={
 "type":"FeatureCollection",
 "features":featuresRED
}      
const pointsYELLOW={
 "type":"FeatureCollection",
 "features":featuresYELLOW
}      
console.log("zooooooooooooooooooooooooooooom"+state.zoom+"zooooooooooooooooooooooooooom")
var heading="Registrados: "+RESPUESTAS.enviados+" Invalidos: "+RESPUESTAS.invalidos+" Enviados: "+RESPUESTAS.enviados+" Respondidos: "+RESPUESTAS.respondidos
return (
<Fragment>
<div className={classes.root}>
 <Title2>Resultados del Formulario</Title2>
 <Container maxWidth="lg" className={classes.container}>

 <span className="badge badge-success m-2">{heading}</span>

 <Grid container spacing={3}>
 {respuestasC}

</Grid>
 </Container> 
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
         circlePaint={{'circle-color': 'gainsboro','circle-radius': 4, }}         
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

         <GeoJSONLayer
          data={pointsGREEN}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'lime','circle-radius': 4, }}         
          symbolLayout={{
            'text-field': '{place}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'lime'
          }}
          />
         <GeoJSONLayer
          data={pointsRED}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'red','circle-radius': 2.5, }}         
          symbolLayout={{
            'text-field': '{place}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'red'
          }}
          />
   
         <GeoJSONLayer
          data={pointsYELLOW}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'yellow','circle-radius': 4, }}         
          symbolLayout={{
            'text-field': '{place}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'yellow'
          }}
          />

</Map>


        </div>

</Fragment>
)
        }
