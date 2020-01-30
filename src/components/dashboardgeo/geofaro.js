import React, { useState,Fragment,useEffect } from 'react';
import { Application } from '../../App';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardBody from '@material-ui/core/CardBody';
//import CardTitle from '@material-ui/core/CardTitle';
//import CardText from '@material-ui/core/CardText';

//CardTitle, CardSubtitle, Button
import { Grid, Paper, Typography } from "@material-ui/core";
import Icon from '../helpers/icon';
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer} from 'react-mapbox-gl';
import Centro     from      './centro'
import CardPersona     from      './cardpersona'
import Button from '@material-ui/core/Button';
//import { Application } from '../App';

//import {ESTADOSGEO} from '../data/ESTADOSGEO.json';


import {resultados,getLocation,getPersona,getPersonasCODCNE,getCentrosCODCNE} from '../helpers/helpers'
//import {CENTROSVOTACION} from '../../data/centrosvotacion.json';
import {LIBERTADOR} from '../../data/libertador.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
import {padron} from '../../data/padron.json';
import {PAMIRANDA} from '../../data/PAMIRANDA.json';
import Divider from '@material-ui/core/Divider';
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
const Map = MapGL({accessToken: TOKEN });
const mapStyle = {  flex: 1,  height: "75vh",width: "100%"};
const circleLayout= MapGL.CircleLayout = { visibility: 'visible' };
const circlePaint= MapGL.CirclePaint = { 'circle-color': 'red', 'circle-radius': 3,};
const linePaint = MapGL.LinePaint = {'line-color': 'orange', 'line-width': 1};
const symbolLayout= MapGL.SymbolLayout = { 'text-field': '{nombre}', 'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'], 'text-offset': [0, 0.6], 'text-anchor': 'top'};
//const useStyles = makeStyles({
  
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
      maxWidth:450,
      minWidth:300
      
    },
    Paper:{ padding: theme.spacing(2,2),
    }
   // toolbarMargin: theme.mixins.toolbar
  }));
  
//export default function Geo({lnglat0,zoom0,centros0,GetCentros,GetPersonasCODCNE}) {
  export default function GeoFaro() {
  const { state, dispatch } = React.useContext(Application);

  const [centros, setCentros] = React.useState([]);
  const [personas, setPersonas] = React.useState([]);
  const [TESTIGOS, setTESTIGOS] = React.useState( new Array(1000));

  //alert("GEOOOOOoooo "+JSON.stringify(state))
  
//alert('geo'+JSON.stringify(state))
    const classes = useStyles();
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
        //alert('DidMount '+JSON.stringify(centrosjson))
        //var intzoom = Math.round( zoom );
        //setCentros(centrosjson)
        //const arrayzoom=[intzoom]
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
       
        
                 // setCentros(centros);
                //alert(JSON.stringify(centrosjson))
            
            //alert(JSON.stringify(evt.features[0].properties.ID))
            //this.props.onsetgeojson(evt.features[0].properties.COD_ESTADO,evt.features[0].properties.ESTADO)
         }
   function onCentroClick(evt) {
     //console.log("evt evt evt evt evt")
     //console.log(evt.features[0].properties)
     //alert(JSON.stringify(''+evt.features[0].properties.codcne.substring(0,2)))
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
    //      alert(JSON.stringify(map))
         // console.log(map)
         // dispatch({
           // type: 'ROLESPERSONAS',
          //  stateprop:map
          //});  
          
          //this.setState({persona:formDataPersona,identificacion:imagecedula,isLoading:false})
         //var intzoom = Math.round( zoom );
         //intzoom=intzoom.toString()
        // console.log(intzoom)
         //this.setState({zoom:[intzoom],lnglat:lnglat,centro:centro,rolespersonas:map,isLoading:false})
         
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
        //alert(JSON.stringify(centros))
       // const radiocentro=3;
       // if (state.zoom>12) radiocentro=10
     
       
     
  return (
    <Fragment>
      <div className={classes.root}>
     <Grid container >
     
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Centro/>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={4} xl={8}>
        <Map        
              //style="mapbox://styles/mapbox/streets-v8"
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
    <Divider />
    <Grid container>
    
      {padron.map((item, index) => (
        <Grid item xl={2} md={3} sm={6} xs={12}>
            <SimpleCard testigo={item} />
      </Grid>
      ))}
      </Grid>


      <Grid container spacing={2}>
          
      {padron.map((item, index) => (
         <Grid item xl={2} md={3} sm={6} xs={12}>
     
     <CardPersona persona={item}/>
     
          </Grid>
      ))}  
    
      </Grid>


      

      
 </div>
    </Fragment>

  );
}
//export default Geof;

 function SimpleCard({testigo}) {
 const classes = useStyles();
 // const bull = <span className={classes.bullet}>•</span>;
 function handleSubmit(event) {
  //alert(JSON.stringify(this.state.testigo))
  //this.setState({cedula:"cedula",celular:"celular8888",email:"email888"})
  // this.props.onsetdatospersonales('98989898')
 //  this.props.setCurrentClick(this.state.testigo.properties.celular,this.state.testigo.properties.correo)
// this.setState({celular: '0414222'});

 //alert('A name was submitted: ' + this.state.value);
// this.onSetDatosPersonales("aa")

};
  return (

<Card className={classes.card}>
<CardContent>
  <Typography className={classes.title} color="textSecondary" gutterBottom>
  {testigo.rol}
  </Typography>
  <Typography variant="h5" component="h2">
  {testigo.nombreapellido}
  </Typography>
  <Typography className={classes.pos} color="textSecondary">
  {testigo.celular}-{testigo.correo}
  </Typography>
  <Typography variant="body2" component="p">
  
            {testigo.nombre}, {testigo.descripcion}

  
  </Typography>
</CardContent>
<CardActions>
<Button  color="success" onClick={handleSubmit}>Cambios</Button>

</CardActions>
</Card>
  );
}
