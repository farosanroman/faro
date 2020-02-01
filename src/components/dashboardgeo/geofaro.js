import React, { useState,Fragment,useEffect } from 'react';
import { Application } from '../../App';
import { makeStyles } from '@material-ui/core/styles';

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
import CardPersona     from      './cardpersona'
import Button from '@material-ui/core/Button';
//import { Application } from '../App';

//import {ESTADOSGEO} from '../data/ESTADOSGEO.json';
import {useFetch}  from '../hooks/usefetch'
import {useFetchPost}  from '../hooks/usefetchpost'
import {resultados,getLocation,getPersona,getPersonasCODCNE,getCentrosCODCNE} from '../helpers/helpers'
//import {CENTROSVOTACION} from '../../data/centrosvotacion.json';
import {LIBERTADOR} from '../../data/libertador.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
import {padron} from '../../data/padron.json';
import {PAMIRANDA} from '../../data/PAMIRANDA.json';
import {atc} from '../../data/atc.json';
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

  const [centros, setCentros] = React.useState([]);
  const [personas, setPersonas] = React.useState([]);
  const [TESTIGOS, setTESTIGOS] = React.useState( new Array(1000));

  const [{ data, isLoading, isError }, fetchData] = useFetch("");
  //alert("GEOOOOOoooo "+JSON.stringify(state))
  
//alert('geo'+JSON.stringify(state))
    const classes = useStyles();

    useEffect(() => {
      if (isLoading) {
      //  setFlagCircular(true)
      }
      if ((data!=undefined)&&(!isLoading))      
      {
       // setFlagCircular(false)
       // data=data[0]
      alert("fetch"+JSON.stringify(data))
      
      }
    },[data,isLoading]);
    let padronjson={
      "type":"FeatureCollection",
      "features":[]
    }
    //coordendas de centride de parroquias
       const  padronfeatures=padron.map(p=>{               
            return(
              {
                "type":"Feature",
                "properties":{"nombre":p.nombreapellido,"codcne":p.codcne,"correo":p.correo,},                             
                "geometry":{"type":"Point","coordinates":[p.lng,p.lat]
                }
              }
        )     
     })   
     padronjson.features=padronfeatures;
    function onMapClick(evt) {
      
        var codcne=evt.features[0].properties.ID
        var centro=evt.features[0].properties.ESTADO
      
        fetchData('https://f2020.azurewebsites.net/api/FaroPersonasCentroGet?code=pNHwI2vpHlgY2la6to4uUECNsX7wdSsgKwKwCB6sX/8b2pmb0/N2Sg==&id=131801022');
        // alert(codcne)
        getCentrosCODCNE(codcne,result => {  
         //alert(JSON.stringify(result))
         setCentros(result) 
         let centrosjson={
          "type":"FeatureCollection",
          "features":[]
        }
        //coordendas de centride de parroquias
           const  featurescentrosjson=result.map(o=>{               
                return(
                  {
                    "type":"Feature",
                    "properties":{"nombre":o.nombrecentro,"codcne":o.codcne,"correo":o.correo,},                             
                    "geometry":{"type":"Point","coordinates":[o.lng,o.lat]
                    }
                  }
            )     
         })   
         centrosjson.features=featurescentrosjson;
       
        dispatch({
         type: 'CENTROS',
         stateprop:centrosjson
       });
       
       dispatch({
         type: 'CENTRO',
         stateprop:centro
       });    
       dispatch({
         type: 'LNGLAT',
         stateprop:[evt.lngLat.lng,evt.lngLat.lat]
       });  
       
       //alert("GEO status.centros   "+JSON.stringify(centros))
        //console.log(intzoom)
        resultados(result,resultados=>{
          //alert(JSON.stringify(resultados))
          dispatch({
           type: 'RESULTADOS',
           stateprop:resultados
         });    
         //this.setState({zoom:[intzoom],lnglat:lnglat,rolespersonas:[],centro:nombre,centros:centrosjson,resultado:resultados,isLoading:false}) 
        } )
       
       })
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
            console.log(map.getZoom())
            //setZoom2(map.getZoom())
          }
     //  alert()
     
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
          data={state.centros}
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
              data={ESTADOSGEO}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'darkblue','line-width': 2}}
              fillOnClick={onMapClick}           
            />
                 <GeoJSONLayer
          data={CIUDADESGEO}
          fillPaint={{'fill-color': 'black','fill-outline-color': 'purple','fill-opacity': 0.1}}
          linePaint={{
            'line-color': 'darkgray',
            'line-width': .3
          }}
          
        />
        <GeoJSONLayer
              data={PAMIRANDA}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'purple','line-width': 1.5}}
             
            />
        <GeoJSONLayer
          data={padronjson}
          circleLayout={{ visibility: 'visible' }}
         //circlePaint={{'circle-color': 'purple','circle-radius': state.radio, }} 
         circlePaint={{'circle-color': 'dodgerblue','circle-radius': 6,'circle-opacity': 1,'circle-stroke-color': 'dodgerblue' , 'circle-stroke-width': 3,'circle-blur': 1}}         
          
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
       
        <ZoomControl position={"bottomRight"} />
        </Map>
        </Grid>
    </Grid>
    <Grid container spacing={2} justify="center">
    <Grid item xl={6} md={6} sm={6} xs={12}>
        <GeoFaroHistoria/>
      </Grid>
     
      <Grid item xl={6} md={6} sm={6} xs={12}>
        <GeoFaroResumen/>
      </Grid>
      </Grid>

    <Divider />
    <Grid container spacing={2}>
    
      {atc.map((item, index) => (
        <Grid item xl={3} md={3} sm={3} xs={12}>
            <SimpleCard persona={item} />
      </Grid>
      ))}
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
