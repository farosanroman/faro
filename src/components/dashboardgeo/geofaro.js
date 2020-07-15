import React, { useState,Fragment,useEffect,useMemo } from 'react';
import { Application } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
//import  voronoi, {turf } from '@turf/voronoi';
//import  { randomPoint } from '@turf/random';
//import turf , {  randomPoint } from '@turf/turf';
import { greatCircle, point ,randomPoint,voronoi} from '@turf/turf';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
//import CardBody from '@material-ui/core/CardBody';
//import CardTitle from '@material-ui/core/CardTitle';
//import CardText from '@material-ui/core/CardText';

//CardTitle, CardSubtitle, Button
import { Grid, Paper, Typography } from "@material-ui/core";
import Icon from '../helpers/icon';
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer} from 'react-mapbox-gl';
import GeoFaroHistoria     from      './geofarohistoria'
import GeoFaroResumen     from      './geofaroresumen'
import GeoFaroActividad     from      './geofaroactividad'
import CardPersona     from      './cardpersona'
import Button from '@material-ui/core/Button';
//import { Application } from '../App';

//import {ESTADOSGEO} from '../data/ESTADOSGEO.json';
import {observadores} from '../../data/observadores.json';

import CircularProgress from '@material-ui/core/CircularProgress';
import {useFetch}  from '../hooks/usefetch'
import {useFetchPost}  from '../hooks/usefetchpost'
import {resultados,getLocation,getPersona,getPersonasCODCNE,getCentrosCODCNE} from '../helpers/helpers'
//import {CENTROSVOTACION} from '../../data/centrosvotacion.json';
import {LIBERTADOR} from '../../data/libertador.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
//import {padron} from '../../data/padron.json';
import {PAMIRANDA} from '../../data/PAMIRANDA.json';
import {atc} from '../../data/atc.json';
import {voronoijson} from '../../data/voronoijson.json';
import Divider from '@material-ui/core/Divider';
import { grey } from '@material-ui/core/colors';
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
const Map = MapGL({accessToken: TOKEN });
const mapStyle = {  flex: 1,  height: "75vh",width: "100%"};
const circleLayout= MapGL.CircleLayout = { visibility: 'visible' };
const circlePaint= MapGL.CirclePaint = { 'circle-color': 'red', 'circle-radius': 3,};
const linePaint = MapGL.LinePaint = {'line-color': 'orange', 'line-width': 1};
const symbolLayout= MapGL.SymbolLayout = { 'text-field': '{nombre}', 'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'], 'text-offset': [0, 0.6], 'text-anchor': 'top'};
//const useStyles = makeStyles({
 // alert(JSON.stringify(atc[0]))
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },  paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
     
    },
    card: {
      maxWidth:300,
      minWidth:160,
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
      
    },
    Paper:{ padding: theme.spacing(2,2),
    },
   
    media: {
      height: 140,
    },
    avatarlarge: {
      backgroundColor: grey[500],margin: 5,
      width: 50,
      height: 50,
      alignSelf:"center"
    },
    divider: {
      margin: 10
    },
   // toolbarMargin: theme.mixins.toolbar
  }));
  
//export default function Geo({lnglat0,zoom0,centros0,GetCentros,GetPersonasCODCNE}) {
  export default function GeoFaro() {
  const { state, dispatch } = React.useContext(Application);


  
  const [data, isLoading, isError , fetchData] = useFetch("");
  //const [optionn, setOptionn] = React.useState("");
  const [centros,setCentros]=React.useState(state.centros);
  const [centrosgeojson,setCentrosgeojson]=React.useState([]);
  
//  const [GeoJsonCentros,setGeoJsonCentros]= React.useState([]);
  const [personas,setPersonas]=React.useState([]);
  const [personasgeojson,setPersonasgeojson]=React.useState([]);
  const [flagCircular, setFlagCircular] = React.useState(false);
  //alert("GEOOOOOoooo "+JSON.stringify(state))
  
//alert('geo'+JSON.stringify(state))
    const classes = useStyles();
    useEffect(() => {
     
    //  dispatch({
    //    type: 'RESET',
    //    stateprop:123
    //  });   
      setFlagCircular(false)
      //alert("state.centros "+JSON.stringify(state.centros))
      const  featurescentrosjson=state.centros.map(o=>{               
        return(
          {
            "type":"Feature",
            "properties":{"nombre":o.nombrecentro,"codcne":o.codcne,"correo":o.correo,},                             
            "geometry":{"type":"Point","coordinates":[o.lng,o.lat]
            }
          }
    )     
 })
 //centrosjson.features=featurescentrosjson;
 let centrosjson={
   "type":"FeatureCollection",
   "features":featurescentrosjson
 }
setCentrosgeojson(centrosjson)  
      //alert("centros "+JSON.stringify())
      //setCentros(result) 
     //coordendas de centride de parroquias
        
   
     //alert("punto "+JSON.stringify(centrosjson))   
     //setPunto(centrosjson)
    
   },[]);
    useEffect(() => {
      //alert("in "+option)
      
      if (isLoading) {
        setFlagCircular(true)
      }
      //alert(data[0].type)
      if ((data!=undefined)&&(!isLoading))      
      {
      
       if ((data.length>0)&&(data[0].type=="padron")){
        //alert("padron"+JSON.stringify(data))
        setPersonas(data)
  
       }
       if ((data.length>0)&&(data[0].type)!="padron"){
        setCentros(data)
        
        
        
        // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        // var points=[]
        // for (let i = 0; i < data.length; ++i) { 
        //   if (data[i].lat>0){
        //   points.push({
        //     "type":"Feature",
        //     "properties":{},                             
        //     "geometry":{"type":"Point","coordinates":[data[i].lng,data[i].lat]
        //     }
        //   })
        // }}
        
        // let Voronoijson={
        //   "type":"FeatureCollection",
        //   "bbox": [-72.6, 9, -66.38, 11.83],

        //   "features":points
        // }
        // console.log("logggg")
        // console.log(JSON.stringify(points))
        // var options = {
        //   bbox: [-72.6, 9, -61.97, 11.83]
        // };
        // var voronoiPolygons0 = voronoi({
        //   "type": "FeatureCollection",
        //   "features": points}, options);
        //    console.log("voronoi")
        //   console.log(JSON.stringify(voronoiPolygons0))
        

        
       }
      }
    },[data,isLoading]);

    useEffect(() => {
      setFlagCircular(false)
     // alert("personas sss "+JSON.stringify(personas))
      
    let padronjson={
      "type":"FeatureCollection",
      "features":[]
    }
    //coordendas de centride de parroquias
//        const  padronfeatures=personas.map(p=>{               
//             return(
//               {
//                 "type":"Feature",
//                 "properties":{"nombre":p.nombreapellido,"codcne":p.codcne,"correo":p.correo,},                             
//                 "geometry":{"type":"Point","coordinates":[p.re[0].lng,p.re[0].lat]
//                 }
//               }
//         )     
//      })   
//      const  padronfeatures2=padron.map(p=>{               
//       return(
//         {
//           "type":"Feature",
//           "properties":{"nombre":p.nombreapellido,"codcne":p.codcne,"correo":p.correo,},                             
//           "geometry":{"type":"Point","coordinates":[p.lng,p.lat]
//           }
//         }
//   )     
// })   
//      padronjson.features=padronfeatures2;
     //alert("personas 222 "+JSON.stringify(padronjson))
     setPersonasgeojson(padronjson)
   },[personas]);
   
   useEffect(() => {
    setFlagCircular(false)
   //alert("centros "+JSON.stringify(centros))
   resultados(centros,resultados=>{
    //alert(JSON.stringify(resultados))
    dispatch({
     type: 'RESULTADOS',
     stateprop:resultados
   });    
   //this.setState({zoom:[intzoom],lnglat:lnglat,rolespersonas:[],centro:nombre,centros:centrosjson,resultado:resultados,isLoading:false}) 
  } )
      const  featurescentrosjson=centros.map(o=>{               
           return(
             {
               "type":"Feature",
               "properties":{"nombre":o.nombrecentro,"codcne":o.codcne,"correo":o.correo,},                             
               "geometry":{"type":"Point","coordinates":[o.lng,o.lat]
               }
             }
       )     
    })
    //centrosjson.features=featurescentrosjson;
    let centrosjson={
      "type":"FeatureCollection",
      "features":featurescentrosjson
    }
 
   //alert("punto "+JSON.stringify(centrosjson))   
   //setPunto(centrosjson)
    setCentrosgeojson(centrosjson)
    // setGeoJsonCentros(centrosjson)
   dispatch({
    type: 'CENTROS',
    stateprop:centros
  });
  
 },[centros]);



    function onMapClick(evt) {
      
        var codcne=evt.features[0].properties.ID
        var centro=evt.features[0].properties.ESTADO
        setCentrosgeojson([])
        //fetchData('https://f2020.azurewebsites.net/api/FaroPersonasCentroGet?code=pNHwI2vpHlgY2la6to4uUECNsX7wdSsgKwKwCB6sX/8b2pmb0/N2Sg==&id=131801022');
       // codcne="130101"
        fetchData('https://faro2018consultas.azurewebsites.net/api/centrosxcodcne?codcne='+codcne);
        
        // alert(codcne)

       dispatch({
         type: 'CENTRO',
         stateprop:centro
       });    

       dispatch({
        type: 'LNGLAT',
        stateprop:[evt.lngLat.lng,evt.lngLat.lat]
      });  
  }
   function onCentroClick(evt) {
    //GetPersonasCODCNE(evt.features[0].properties.codcne.substring(0,2),evt.features[0].properties.nombre,[state.zoom],state.zoom)
    getPersonasCODCNE(evt.features[0].properties.codcne.substring(0,2),result => {  
     console.log(result)
     setPersonas(result)  
      var map=[]
      //var j=0
      for (let i = 0; i < result.length; ++i) {
        var flag=true;
         for (let j = 0; j < map.length; ++j) {
           if (map[j].idrol==result[i].idrol) {
              flag=false
           }             
         }
         if (flag==true)   map.push({idrol:result[i].idrol,rol:result[i].rol,personas:[]} )
        //list[i].children = []; // initialize the children
    }
     
        for (let i = 0; i < map.length; ++i) {
         for (let j = 0; j < result.length; ++j) {
            if (map[i].idrol==result[j].idrol){
                  map[i].personas.push({cedula:result[j].identificacion,nombreapellido:result[j].nombreapellido})
            }
         }
        }
 
         
      });
        

   }

        //console.log({this.props.nombre})
        function onZoom (map, event)  {
            dispatch({
              type: 'ZOOM',
              stateprop:[map.getZoom()]
            });  
            //console.log(map.getZoom())
            //setZoom2(map.getZoom())
          }
     // alert(JSON.stringify(state.centros))
     
  return (
    <Fragment>
      <div className={classes.root}>
      <Grid container spacing={2}>
     
     
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Map        
             // style="mapbox://styles/mapbox/streets-v8"
             // style="mapbox://styles/mapbox/dark-v9"
               style="mapbox://styles/mapbox/light-v9"
              center={state.lnglat} 
              zoom={state.zoom}
              containerStyle={mapStyle}        
              onZoom={onZoom}
        //onClick={this._onClickMap}  
       > 
       
       <GeoJSONLayer
          data={voronoijson}
          fillPaint={{'fill-color': 'gray','fill-outline-color': 'white','fill-opacity': 0.005}}
          linePaint={{
            'line-color': 'red',
            'line-width': .3
          }}
          
        />   
          <GeoJSONLayer
              data={ESTADOSGEO}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'darkblue','line-width': 2}}
              fillOnClick={onMapClick}           
          />
          <GeoJSONLayer
              data={CIUDADESGEO}
              fillPaint={{'fill-color': 'black','fill-outline-color': 'purple','fill-opacity': 0.1}}
              linePaint={{'line-color': 'darkgray','line-width': .3
          }}          
        />
        <GeoJSONLayer
              data={LIBERTADOR}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'purple','line-width': 2}}             
        />
         <GeoJSONLayer
          data={centrosgeojson}
          circleLayout={{ visibility: 'visible' }}
         //circlePaint={{'circle-color': 'purple','circle-radius': state.radio, }} 
         circlePaint={{'circle-color': 'white','circle-radius': 3,'circle-opacity': 1,'circle-stroke-color': 'purple' , 'circle-stroke-width': 1}}         
          
        // onClick={onMapClick}     
        circleOnClick={onCentroClick}
        //   fillOnClick={this.onMapClick}  
          symbolLayout={{
            'text-field': '{nombre}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            "text-size": 10
            
          }}
          symbolPaint={{
            'text-color': 'black'
          }}
          />
 
        <GeoJSONLayer
          data={personasgeojson}
          circleLayout={{ visibility: 'visible' }}
         //circlePaint={{'circle-color': 'purple','circle-radius': state.radio, }} 
          circlePaint={{'circle-color': 'dodgerblue','circle-radius': 2,'circle-opacity': 1,'circle-stroke-color': 'dodgerblue' , 'circle-stroke-width': 1,'circle-blur': .1}}         
          
        // onClick={onMapClick}     
          circleOnClick={onCentroClick}
        //   fillOnClick={this.onMapClick}  
          symbolLayout={{'text-field': '{nombre}','text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],'text-offset': [0, 0.6],'text-anchor': 'top', "text-size": 10 }}
          symbolPaint={{ 'text-color': 'black'}}
        />
       
        <ZoomControl position={"bottomRight"} />
        </Map>
        </Grid>
    </Grid>
    {flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={17}   thickness={4} className={classes.progress} />}
    <Grid container spacing={2} justify="center">
    <Grid item xl={4} md={4} sm={6} xs={12}>
        <GeoFaroHistoria/>
      </Grid>
      <Grid item xl={4} md={4} sm={6} xs={12}>
        <GeoFaroResumen/>
      </Grid>
      <Grid item xl={4} md={4} sm={6} xs={12}>
        <GeoFaroActividad/>
      </Grid>
      </Grid>

    <Divider />
    
    <Grid container spacing={2}>
    <Grid item xl={4} md={4} sm={6} xs={12}>
       <SimpleCard persona={observadores[0]} />
      </Grid>
      {observadores.map((o, index) => (
    <Grid item xl={4} md={4} sm={6} xs={12}>
    <SimpleCard persona={o} />
   </Grid>
       ) )}
      </Grid>
      
 </div>
    </Fragment>

  );
}
//export default Geof;

 function SimpleCard({persona}) {
//https://codesandbox.io/s/50l225l964
  // alert(JSON.stringify(testigo))
 const classes = useStyles();
 // const bull = <span className={classes.bullet}>•</span>;
 var RANDOM=Math.floor(Math.random() * (70- 1 + 1) + 1);
var url ="https://i.pravatar.cc/100?img="+RANDOM
 function handleSubmit(event) {


};
  return (

<Card className={classes.card}>
<CardContent>
<Grid container 
       spacing={0}
       direction="column"
       alignItems="center"
       justify='center'
        
         >
           <Grid item >
         <Avatar aria-label="recipe"  src={url} className={classes.avatarlarge} >
            
            </Avatar>
            </Grid>
         </Grid>
  <Typography className={classes.title} color="textSecondary" gutterBottom>
  {"Testigo"}
  </Typography>
  <Typography gutterBottom variant="h8" component="h5">
  {persona.nombre1} {persona.apellido1}
  </Typography>
  <Typography className={classes.pos} color="textSecondary">
  {"o412-6345638"}-{"ppwilsom@gmail.com"}
  </Typography>
  <Divider className={classes.divider} light />

</CardContent>
<CardActions>
<Button  color="success" onClick={handleSubmit}>Cambios</Button>

</CardActions>
</Card>
  );
}