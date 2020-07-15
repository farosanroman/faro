import React, {useEffect, useState,Fragment } from 'react';
//import { Application } from '../App';
//import {antenacercana} from './helpers'
//https://codesandbox.io/s/xenodochial-tu-pwly8  pintar
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer,ScaleControl} from 'react-mapbox-gl';
import {inside, points,polygon,pointsWithinPolygon} from '@turf/turf';
//import inside from 'turf-inside';

import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

import Circle from 'react-circle';
import NativeSelect from '@material-ui/core/NativeSelect';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
//import {observadores} from '../data/observadores.json';
//import {antenas} from '../data/antenas.json';
//import {celular} from '../data/celular.json';
//import {WORLD} from '../../data/world.json';
//import {USA} from '../../data/USA.json';
//import {COLOMBIA} from '../../data/COLOMBIA.json';
import {PARR} from '../../data/PARR.json';
import {PALATLNG} from '../../data/PALATLNG.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
import {MUNICIPIOSGEO} from '../../data/MUNICIPIOSGEO.json';
import {MUNICIPIOS} from '../../data/MUNICIPIOS.json';

//import {RESP} from '../../data/resp.json';
import {PAPROPERTIES} from  '../../data/PAPROPERTIES.json';

//import {LIBERTADOR} from '../data/libertador.json';
//import {usePosition} from '../../hooks/useposition';
//import {useGeolocation} from '../hooks/usegeolocation';
import { greatCircle, point,circle } from '@turf/turf';
import Title2 from '../layout/title';
import {func1} from '../helpers/helperpolygons'
import {pointInPolygon} from '../helpers/helperpolygons'
import {resultados,getLocation,getPersona,getPersonasCODCNE,getCentrosCODCNE} from '../helpers/helpers'
import {analisiscentros} from './helperanalisis'

import CircularProgress from '@material-ui/core/CircularProgress';
import {EEMMPP} from  '../../data/EEMMPP.json';
function Leyenda() {
  return (

    <Typography variant="body2" color="textSecondary" align="center">
 <InputLabel  htmlFor="age-native-simple">Centro Poblados
      {'Metropolis >500M '} {'Ciudad Intermedia 500M-300M '} {'Ciudad Pequenna 300M-50M '} {'Poblacion Rural 50M-100 '} {'Poblacion Dispersa <100 '} 
      </InputLabel>
    </Typography>
  );
}
//import PieChart, { Title,Font, Series , Label ,Connector,  Size, Export,Legend } from 'devextreme-react/pie-chart';
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
    font: {
      fontSize: 20
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
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
      card: {
        maxWidth:200,
        minWidth:200,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
        
      },
  }));

  export default function Polylines() {
  
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    const [pos, setPos] = React.useState([-66.9188,8.808]);
    //const { state, dispatch } = React.useContext(Application);
    const [CODESTADO, setCODESTADO] = React.useState();
    const [MUNICIPIOSPOINT, setMUNICIPIOSPOINT] = React.useState({"type":"FeatureCollection", "features": []});
    const [MUNICIPIOSGEO2, setMUNICIPIOSGEO2] = React.useState({"type":"FeatureCollection", "features": []});
 
    const [CENTROSURBANOSGEO, setCENTROSURBANOSGEO] = React.useState([]);
    const [CENTROSRURALESGEO, setCENTROSRURALESGEO] = React.useState([]);

    const [comentario, setComentario] = React.useState("");
 
    const [flagCircular, setFlagCircular] = React.useState(false);
  
    const [zoom, setZoom] = useState([6]);
    //const { latitude, longitude, timestamp, accuracy, error } = usePosition();
    //const [ FORMULARIOS,SetFORMULARIOS ] = useState(RESP);
    //const [RESPUESTAS,SetRESPUESTAS]=useState({enviados:0,preguntas:[],respondidos:0,invalidos:0,isLoading:false })
    const [PA, setPA] = useState({"type":"FeatureCollection", "features": []});
    
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        //calculos(FORMULARIOS)
       
        console.log(JSON.stringify(PA))
        setFlagCircular(true);
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
          setFlagCircular(false);
           //this.setState({PA:pa,isLoading:false })
         });
         
       })
      .catch(error => {
           alert(error)
          this.setState({ error, isLoading: false })
      });

      },[]);
 ///////////////////////
 const handleMunicipios = id => {


MUNICIPIOSGEO.features.map((munigeo,igeo)=>{
  MUNICIPIOSGEO.features[igeo].properties.poblacion=Math.floor(Math.random() * 10)*1;
 })
 var puntos=MUNICIPIOS.map((muni,index)=>{ 
  return(
    {
       "type":"Feature",
       "properties":{"nombre":"o.cellid","partido":muni.lat,"color":"red","width":index},                             
       "geometry":{"type":"Point","coordinates":[muni.lng*1.0,muni.lat*1.0 ]
     }
    }
   )    
  })
   const   redpoint={
    "type":"FeatureCollection",
    "features":puntos
    
  }
  setMUNICIPIOSGEO2(MUNICIPIOSGEO)
   setMUNICIPIOSPOINT(redpoint)
 console.log(JSON.stringify(MUNICIPIOSGEO))



 };
//////////////////////////
const handleTurf = id => {
  setFlagCircular(true);
  PALATLNG.map((palatlng,index)=>{ 
    //console.log(index+" "+palatlng.lat)
    PA.features.map((pa,indexpa)=>{
     // console.log(indexpa)
     // console.log(JSON.stringify([[palatlng.lng,palatlng.lat]]))
     //console.log(indexpa+" "+JSON.stringify(pa.geometry.coordinates))
     // console.log(JSON.stringify(pa.geometry.coordinates))
      var pointsss = points([[palatlng.lng,palatlng.lat],[palatlng.lng,palatlng.lat],[palatlng.lng,palatlng.lat],[palatlng.lng,palatlng.lat]]);   
      var poin = point([palatlng.lng,palatlng.lat]);   
     // alert(JSON.stringify(poin))
     if (indexpa<1125){
      var poly=polygon(pa.geometry.coordinates);
      
var isInside1 = inside(poin, poly);
if (isInside1){
 // console.log(index+" "+indexpa+" "+JSON.stringify(pa.properties)+" "+pa.geometry.coordinates.length)
    
  console.log(index+" "+indexpa+" "+JSON.stringify(pa.properties))
         //var ptsWithin = pointsWithinPolygon(pointss,poly);
     //    console.log(JSON.stringify(poin))

       //  console.log(JSON.stringify(poly))
}
     }     
    })
    
  })
  setFlagCircular(false);
 }

 
  ///////////////////////////////////////////////////////     
    ///////////////////////////////////////////////////////     
      useEffect(() => {  
      setFlagCircular(true);
       getCentrosCODCNE(CODESTADO,result => {  
        analisiscentros(result,result2 => {  
            alert(JSON.stringify(result2))
        })
         console.log(result)
         var centrosfiltro=[]
         var ruralesfiltro=[]
         for (var i = 0; i < result.length; i++) {
           var flag=false
           for (var j = 0; j < CIUDADESGEO.features.length; j++) {
                     var p={"type":"Point","coordinates":[result[i].lng,result[i].lat]}
                     var poly=CIUDADESGEO.features[j].geometry
                     if (pointInPolygon(p,poly)){
                      centrosfiltro.push(result[i])
                      j=CIUDADESGEO.features.length+1 
                      flag=true
                    }
                     
           }
           if (flag==false) {ruralesfiltro.push(result[i])}         
         }
         const  featurescentrosjson=centrosfiltro.map(o=>{               
          return(
            {
              "type":"Feature",
              "properties":{"nombre":o.nombrecentro,"codcne":o.codcne,"correo":o.correo,},                             
              "geometry":{"type":"Point","coordinates":[o.lng,o.lat]
              }
            }
      )     
   }) 
   const  featuresruralesjson=ruralesfiltro.map(o=>{               
    return(
      {
        "type":"Feature",
        "properties":{"nombre":o.nombrecentro,"codcne":o.codcne,"correo":o.correo,},                             
        "geometry":{"type":"Point","coordinates":[o.lng,o.lat]
        }
      }
        )     
     })   
     let centrosjson={"type":"FeatureCollection","features":[] }

            centrosjson.features=featurescentrosjson;
     let ruralesjson={"type":"FeatureCollection","features":[] }

           ruralesjson.features=featuresruralesjson;

   setCENTROSURBANOSGEO(centrosjson) 
   setCENTROSRURALESGEO(ruralesjson)
   setComentario(result.length+ " centros "+centrosfiltro.length+" Urbanos")
   //alert(JSON.stringify(centrosjson))
   
   setFlagCircular(false);
   //alert(result.length+" "+JSON.stringify(centrosfiltro.length))
      })
     
      },[CODESTADO]);
/////////////////////////////////
///////////////////////////////////







  function onResize (map, event)  {
   //alert(map.getZoom()+" " +JSON.stringify(event))
  }
  const handleChangeCambios=input=>e=>{
    
    if (input=="estado"){
     // alert(JSON.stringify(e.target.value)) 
      var index = EEMMPP.findIndex(obj => obj.cneestado==e.target.value);
    // alert(index)
       var cod=e.target.value.substring(0,2)
      setCODESTADO(cod)
      //setPosEstado(index)
     }
    }



   function onZoom (map, event)  {
     var zoomint=Math.round(map.getZoom());
   
            setZoom(zoomint+(event)*1.1)
          }
      function onControlClick(map,event){
        var z=zoom
        z+=event
   
      }
 
const handleInterseccion = id => {
  var a=0
  
  //alert(a)
  //alert(JSON.stringify(func1({a:999})))
  var chacao={"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-66.86648285220637,10.547065812599794],[-66.85106526213166,10.534706725606188],[-66.84499798628454,10.535777779305338],[-66.84723508822026,10.533705752425973],[-66.84771313574767,10.525801551983824],[-66.84598901355122,10.521770577285338],[-66.84902305253324,10.498507164212297],[-66.84440981668895,10.491634051146493],[-66.84452567135637,10.480287837919786],[-66.84798971439658,10.481516877004744],[-66.85470212388573,10.479155828975298],[-66.8572430940725,10.480048808159482],[-66.86195818975469,10.483072828611846],[-66.86997459035034,10.485250815734428],[-66.86994547759159,10.493149972906204],[-66.86689262126768,10.500595090939822],[-66.86204546594162,10.508173241950711],[-66.86327173368704,10.519100400660978],[-66.86904566288901,10.528349545158989],[-66.87063874499933,10.53307857187393],[-66.8711089771884,10.54229174772203],[-66.86648285220637,10.547065812599794]]]},"properties":{"PARROQUIA":"Chacao","MUNICIPIO":"Chacao","ESTADO":"Miranda"}}
 var poly=chacao.geometry 
 var p= {"type":"Point","coordinates":[-66.8529648285220637,10.499912599794]}
//alert(CIUDADESGEO.features.length)
 //alert(pointInPolygon(p,poly))
 setCODESTADO(id)



 };

return (

<Fragment>
<div className={classes.root}>
 <Title2>Laboratorio GeoEspacial</Title2>
 
      
     
        
       
        <Select
         className={classes.formControl}
        value={CODESTADO+"0000"}
        onChange={handleChangeCambios('estado')}
         input={<Input name="Estado" id="age-helper" />}
       >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {EEMMPP.map((item, index) => (
                 <MenuItem value={item.cneestado}>{item.name}</MenuItem>
              
               ))}
       
      
      </Select>
      {flagCircular&&<CircularProgress 
  variant="indeterminate"
  disableShrink
  
  size={17}
  thickness={4}
 className={classes.progress} />}     
 <Button variant="outlined" color="primary" onClick={() => handleMunicipios("01")}>Municipios</Button>
 <Button variant="outlined" color="primary" onClick={() => handleInterseccion("01")}>Circunscripciones</Button>
 <Button variant="outlined" color="primary" onClick={() => handleInterseccion("01")}>Diputados</Button>

 <Button variant="outlined" color="primary" onClick={() => handleInterseccion("01")}>GeoCiudades</Button>

 
 <Button variant="outlined" color="primary" onClick={() => handleTurf("12")}>Intersecciones</Button>
 
 <div>{comentario}</div>
 <Grid container  spacing={0}     alignItems="center"  >
 <Grid item xs ><SimpleCard persona={pp} />
</Grid><Grid item xs   ><SimpleCard persona={pp} />
</Grid><Grid item xs  ><SimpleCard persona={pp} />
</Grid>
<Grid item xs  ><SimpleCard persona={pp} />
</Grid>
<Grid item xs  ><SimpleCard persona={pp} />
</Grid>

</Grid>

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
           data={PA}
           fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
           linePaint={{'line-color': 'purple','line-width': .3}}
                     //fillOnMouseEnter={this.MouseEnter} 
         // fillOnClick={this.onFillMapClick}
       />  
        

        <GeoJSONLayer
           data={MUNICIPIOSGEO2}
           fillPaint={{'fill-color': 
           {
            "property": "poblacion",
            "stops": [
                      [0, "#FF0000"],
                      [1, "#FFA07A"],
                      [2, "#FF4500"],
                      [3, "#fcbba1"],
                      [4, "#FF8C00"],
                      [5, "#98FB98"],
                      [6, "#ef3b2c"],
                      [7, "#98FB98"],
                      [8, "#87CEFA"],
                      [9, "#1E90FF"]
                   ]
          }
           ,'fill-outline-color': 'purple','fill-opacity': .2}}
           linePaint={{'line-color': 'firebrick','line-width': 1}}
                     //fillOnMouseEnter={this.MouseEnter} 
         // fillOnClick={this.onFillMapClick}
       />     
       <GeoJSONLayer
              data={ESTADOSGEO}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'darkblue','line-width': 1.5}}
         
             
            />
 

<GeoJSONLayer
          data={MUNICIPIOSPOINT}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'red','circle-radius': 
         [
          "interpolate",
          ["linear"],
          ["get", "width"],
          0,2,
          100, 3,
          200, 4,
          300,6,
          400, 10
        ]
         ,'circle-opacity': 0.7,
         "circle-stroke-width": 1 }}         
         
          />
<GeoJSONLayer
          data={CENTROSRURALESGEO}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'green','circle-radius': 3, 
         'circle-stroke-color': 'red' , 'circle-stroke-width':2,'circle-stroke-opacity':.2,'circle-blur': 0.1
        }}  
        // onClick={onMapClick}     
        //circleOnClick={onCentroClick}
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
          data={CENTROSURBANOSGEO}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'orange','circle-radius': 3,
         'circle-stroke-color': 'red' , 'circle-stroke-width':2,'circle-stroke-opacity':.2,'circle-blur': 0.1
        }}  
        // onClick={onMapClick}     
        //circleOnClick={onCentroClick}
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
</Map>


        </div>
<Leyenda className={classes.font}/>
</Fragment>
)
        }


        var pp= {
          "id": 369432,
          "FechaAsignado": "2018-11-23T14:24:11.813Z",
          "idnodoorganizacional": 5298,
          "codcne": "050502010",
          "muestra": 1,
          "E": 5,
          "RE": "050702001",
          "nombre": "(***) ESCUELA BASICA ESTADAL CONCENTRADA EL ROBLECITO",
          "estado": "BARINAS",
          "municipio": "OBISPOS",
          "parroquia": "LA LUZ",
          "idrol": 247,
          "rol": "Testigo Electoral",
          "identificacion": "V8139366",
          "nombre1": "YLDEGAR",
          "nombre2": "JOSE",
          "apellido1": "CECILIO",
          "evaluacion": "",
          "idpartido": 0,
          "descripcion": null,
          "facilitador": "",
          "celular": "04245299871",
          "correo": "constructorapuntabrava@gmail.com",
          "sexo": "0",
          "fechanac": "1960-11-09",
          "edad": 58,
          "cvcodcne": "050702001",
          "cvestado": "BARINAS",
          "cvmunicipio": "ROJAS",
          "cvparroquia": "LIBERTAD",
          "cvcentro": "ESCUELA BASICA LUIS UGUETO",
          "lng": -69.63098,
          "lat": 8.327147,
          "cuenta": ""
      }

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
<Circle animate={true} animationDuration="1s"   progress={60} size={50} percentSpacing={20}  bgColor="green"  
                    textColor="black" progressColor="orange"    roundedStroke={false}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>
 
 <Circle animate={true} animationDuration="1s"   progress={60} size={50} percentSpacing={20}  bgColor="lightgray"  
                    textColor="black" progressColor="black"    roundedStroke={false}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>
            
 <Circle animate={true} animationDuration="1s"   progress={67.45} size={50} percentSpacing={20}  bgColor="red"  
                    textColor="dodgerblue" progressColor="dodgerblue"    roundedStroke={false}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>
</Grid>

                    
                   </Grid>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            {"Miranda"}
            </Typography>
            <Typography gutterBottom variant="h8" component="h5">
            {"Total"}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {'12 Diputados Lista'}
            </Typography>
            <Divider className={classes.divider} light />
          
          </CardContent>
         <CardActions>
          
          </CardActions>
          </Card>
            );
          }
