import React, {useEffect, useState,Fragment } from 'react';
import { useRecoilValue} from "recoil";
import { codcne,organizacion,roles} from '../store/atom';

import {useFetch} from '../hooks/usefetch'; 
import {PromisePostFormularios} from '../helpers/promisepostformularios';
import {PromiseSendGrid} from '../helpers/promisesendgrid';

import clsx from 'clsx';
//import { Application } from '../App';
//import {antenacercana} from './helpers'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ReactDOM from 'react-dom';

import {Editor} from 'primereact/editor';
//https://www.slatejs.org/examples/richtext
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer,ScaleControl} from 'react-mapbox-gl';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

//import {observadores} from '../data/observadores.json';
//import {antenas} from '../data/antenas.json';
//import {celular} from '../data/celular.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
//import {RESP} from '../../data/resp.json';
//import {roles} from  '../../data/roles.json';
//import {LIBERTADOR} from '../data/libertador.json';
import {usePosition} from '../../hooks/useposition';
//import {useGeolocation} from '../hooks/usegeolocation';
//import { greatCircle, point,circle } from '@turf/turf';
import Title2 from '../layout/title';
//import PieChart, { Title,Font, Series , Label ,Connector,  Size, Export,Legend } from 'devextreme-react/pie-chart';
//import {EEMMPP} from  '../../data/EEMMPP.json';
//import {formulario} from  '../../data/formulario.json';
import {getPersona,getTestigos} from '../helpers/helperpersonas'
import {postMensaje} from '../helpers/helpermensajes'
import CircularProgress from '@material-ui/core/CircularProgress';
//import Chart from 'react-google-charts';
//https://github.com/alex3165/react-mapbox-gl/issues/763
//https://www.youtube.com/watch?v=JJatzkPcmoI
//https://github.com/leighhalliday/mapbox-react-demo

//DRAFT.JS SAMPLE
//https://codepen.io/Kiwka/pen/YNYvyG
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
  
  export default function Mensajes() {
  
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    //const { state, dispatch } = React.useContext(Application);
    const CODCNE = useRecoilValue(codcne);
    const ORGANIZACION = useRecoilValue(organizacion);
    const ROLES = useRecoilValue(roles);
    const [formularios,setFormularios]=React.useState([])
    const [formulario,setFormulario]=React.useState("")
    const [formulariojson,setFormulariojson]=React.useState({mensaje:{encabezado:""}})
    
    const [personName, setPersonName] = React.useState([]);

    const [rejson, setReJson]=useState({"type":"FeatureCollection","features":[] });

    const [flagCircular, setFlagCircular] = React.useState(false); 
    const [data, isLoading, isError , fetchData]     = useFetch(""); 
    const [dataP, isLoadingP, isErrorP , fetchDataP] = useFetch(""); 
    
    const [dataF, isLoadingF, isErrorF , fetchDataF] = useFetch(""); 
  
    const [cant,setCant]=React.useState(0)
   
    const [encabezado, setEncabezado] = React.useState("Actividades de Formacion");
    const [texto, setTexto] = React.useState("Actividades de Formacion mañana: Taller de Testigo en el Colegio Jose Maria Vargas en la Parroquia General Paez");
    const [TESTIGOS,setTESTIGOS]=useState([]) 
    const [cantregistros,setCantregistros]=useState([]) 
    const [state,setState]=useState( {
        //flagLogin:false,
        //geolocation:{country:"VE",countrylong:"VE",estado:"ES",municipio:"MU",municipiolong:"MUNICIPIO",ciudad:"VE",ciudadlong:"VE",urbanizacion:"URB",urbanizacionlong:"URB",ruta:"RUTA",rutalong:"RUTALONG",premisa:"PREMISA",premisalong:"PREMISALONG",postalcode:"postalcode"},
        position:{ latitude:8.4881081498923305, longitude:-66.888521423339844, timestamp:0, accuracy:0, error:null },  //hook
      //  positions:[],
        
        ///// GeoJSON
        lnglat:[-66.888,9.508],
        zoom:20,
        radio:3,
        /////
        // centro:"Centro de Votacion",
        // centros:null,
        // ruta:{
        //   "type":"FeatureCollection",
        //   "features":[ {
        //     "type":"Feature",
        //     "properties":{"nombre":'ppa',"latitude":10.55555,"timestamp":0},                             
        //     "geometry":{"type":"LineString","coordinates":[[-66.8721358,9.4783499 ]] }
        //   }]
        // },
        })
        const [pos, setPos] = React.useState([-66.9188,5.58]);
    
        const [zoom, setZoom] = useState([5]);
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();
    //const [ FORMULARIOS,SetFORMULARIOS ] = useState(RESP);
   // const [RESPUESTAS,SetRESPUESTAS]=useState({enviados:0,preguntas:[],respondidos:0,invalidos:0,isLoading:false })
   
    const [TESTIGOSLOCATION,setTESTIGOSLOCATION]=useState(null)
    const [MENSAJES,setMENSAJES]=useState(null)
    
    
    useEffect(() => {
    // alert("[]")
     //var url="https://farodesarrollo2010.azurewebsites.net/api/GetFormularioBaseById?code=VHv965PUWi0HhNnfc2PWxUCnakhMkt60HOV90NOMkZ1fPsx6JMRqFQ==&id=experiencia"
     var url='http://farodesarrollo2010.azurewebsites.net/api/GetFormulariosBase?code=LJUvmxMGdxdjn8ZY8maaAWOD4b9FaDtdMbYap8/yMXcNaXBR8khW3w=='
     //var url='https://farodesarrollo2010.azurewebsites.net/api/GetFormulariosBase'
     //var url='https://farodesarrollo2010.azurewebsites.net/api/GetFormularioBaseById?code=VHv965PUWi0HhNnfc2PWxUCnakhMkt60HOV90NOMkZ1fPsx6JMRqFQ==&id=EXPERIENCIA'
   fetchData(url);
   //fetchData('http://openfaroapi.azurewebsites.net/api/personasget?codigocne=&idpartido=&idnodofuncional=1039&roles=');
      
  },[]);
  useEffect(() => {
  // alert("formularios "+JSON.stringify(data))
    if (isLoading) {
      setFlagCircular(true)
    }
    //alert(data[0].type)
    if ((data!=undefined)&&(!isLoading))      
    {
   //   console.log(JSON.stringify(data))
   //  alert("fetchF "+JSON.stringify(data))
     setFormularios(data)
    setFlagCircular(false)
     
    }
  },[data,isLoading]);
  useEffect(() => {
    // alert("formularios "+JSON.stringify(data))
      if (isLoadingF) {
        setFlagCircular(true)
      }
      //alert(data[0].type)
      if ((dataF!=undefined)&&(!isLoadingF))      
      {
     //   console.log(JSON.stringify(dataF))
       //alert("fetchF "+JSON.stringify(dataF))
     if (JSON.stringify(dataF)!="[]"){
       setFormulariojson(dataF[0])
       setEncabezado(dataF[0].mensaje.encabezado)
     }
      setFlagCircular(false)
       
      }
    },[dataF,isLoadingF]);

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
   fetchDataP('http://openfaroapi.azurewebsites.net/api/personasget?codigocne='+CODCNE+'&idpartido='+partidos+'&idnodofuncional=1039&roles='+roles);
   //console.log('http://openfaroapi.azurewebsites.net/api/personasget?codigocne='+CODCNE+'&idpartido='+partidos+'&idnodofuncional=1039&roles='+roles)
   //fetchData('http://openfaroapi.azurewebsites.net/api/personasget?codigocne=&idpartido=&idnodofuncional=1039&roles=');
  //},[CODCNE,ORGANIZACION,ROLES]);
      
  },[CODCNE,ORGANIZACION,ROLES]);
  useEffect(() => {
    //alert("in "+option)
   //alert(JSON.stringify(data))
    if (isLoadingP) {
      setFlagCircular(true)
    }
    //alert(data[0].type)
    if ((dataP!=undefined)&&(!isLoadingP))      
    {
     // console.log(JSON.stringify(data))
    // alert("fetch"+JSON.stringify(data))
    setTESTIGOS(dataP)
      const  featuresrejson=dataP.map(d=>{               
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
  setCant(dataP.length)
  //handleKPIDay(data)
    setFlagCircular(false)
     
    }
  },[dataP,isLoadingP]);
  
  const handleChangeCambios=input=>e=>{
   //alert(e.target.value)
    if (input=="formulario"){
     // console.log(JSON.stringify(e))
      //alert(JSON.stringify(e)) 
      
     setFormulario(e.target.value)
      //setMensajeAsignacion({ ...mensajeasignacion, cedula: e.target.value })
      const url="https://farodesarrollo2010.azurewebsites.net/api/GetFormularioBaseById?code=VHv965PUWi0HhNnfc2PWxUCnakhMkt60HOV90NOMkZ1fPsx6JMRqFQ==&id="+e.target.value
      fetchDataF(url);
    }
   
    
   }
  
  function onResize (map, event)  {
   //alert(map.getZoom()+" " +JSON.stringify(event))
  }
   function onZoom (map, event)  {
     var zoomint=Math.round(map.getZoom());
 
            setZoom(zoomint+(event)*1.1)
          }
      function onControlClick(map,event){
        var z=state.zoom
        z+=event

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
var ii=0
    

const handleClickGrabarMensajes =input=>{  
  setFlagCircular(true)
 
 // var mensajes=[]
  var personas=TESTIGOS;
 var fecha=new Date()
// personas.length
var correos=[{"correo":"gboyerizo@gmail.com","cedula":"V6505691"},{"correo":"gabo2595@gmail.com","cedula":"V24218683"},{"correo":"ppazpurua@gmail.com","cedula":"V3664204"}]
correos.push({"correo":"lospinos16.2017@gmail.com","cedula":"V6505691"})
correos.push({"correo":"danelighernandezs@gmail.com","cedula":"V6505691"})

 var FORMULARIOS=[] 
  for (let i = 0; i <5; ++i) {
    var celular=personas[i].celular
   if (celular==null){
       celular="00"
   }
   if (celular.length<2){
    celular="00"
    }
    if ((celular.substring(0,1)=="0")){
      personas[i].celular=celular.substring(1,celular.length)
      //alert(personas[i].celular)
    }
    
    var preguntas=formulario.preguntas;
    var fecha=new Date()
    var mensaje= {
    "id":correos[i].cedula+"*"+formulario,
    //"id":personas[i].identificacion+"*"+formulario,
    "type":"formulario",
    
    "idformulario":formulario,
    "fecha": fecha,
 //   "cedula": personas[i].identificacion,
     "cedula":correos[i].cedula,  
     "persona":personas[i],
    "cv": {
      "codcne":  personas[i].cvcodcne,
      "nombre":  personas[i].cvcentro,
      "estado": personas[i].estado,
      "municipio": personas[i].municipio,
      "parroquia": personas[i].parroquia,
      "lng":personas[i].lng,
      "lat": personas[i].lat,
      "location": {
          "type": "Point",
          "coordinates": [
            personas[i].lng,
            personas[i].lat
          ]
      },
      "direccion":""
  },
  "mensaje": {
    "encabezado": encabezado,
    "contenido": texto,
    "flagFormulario":false,
    "formulario":"sin",
    "imagen": ""
},
  "preguntas": formulariojson,
  
  //"roles": rols,
     "medios": [
     

      {
            "medio": "correo",
            //"destino": personas[i].correo,
            "destino": correos[i].correo,
            "activado":true,
            "procesos":{
              "existe":true,
              "envio":false,
              "fechaenvio":null,
              "cantenvios":0,
              "click":false,
              "fechaclick":null,
              "respuesta":false,
              "fecharespuesta":null,
              "cancelado":false,
              "fechacancelacion":null,
              "diascancelacion":90,
            }
          },
          {
            "medio": "sms",
            "destino": personas[i].celular,
            "activado":false,
            "procesos":{
              "existe":true,
              "envio":false,
              "fechaenvio":null,
              "cantenvios":0,
    
              "click":false,
              "fechaclick":null,
              "respuesta":false,
              "fecharespuesta":null,
              "cancelado":false,
              "fechacancelacion":null,
              "diascancelacion":90,
            }
          },
        {
            "medio": "twt",
            "destino": "pazpurua",
            "activado":false,
           
            "procesos":{
              "existe":true,
              "envio":false,
              "fechaenvio":null,
              "cantenvios":0,

              "click":false,
              "fechaclick":null,
              "respuesta":false,
              "fecharespuesta":null,
              "cancelado":false,
              "fechacancelacion":null,
              "diascancelacion":90,
            }
        }
    ]

    }
   // console.log(JSON.stringify(mensaje))
   //alert("mensajes"+JSON.stringify(mensajes))
    FORMULARIOS.push(mensaje)
    

}
PromisePostFormularios(FORMULARIOS,callback=> {
  //alert(JSON.stringify(callback.length))
  setFlagCircular(false)
  console.log(callback.length)
  setCantregistros(callback.length)
 // setHeatmap(callback) 
 // console.log("callback "+JSON.stringify(callback))
});  
//this.setState({MENSAJES:mensajes });
//this.setState({ CONFIGURACIONTEXTO: "Creados y Registrados: "+this.state.MENSAJES.length+" mensajes"});
//alert("mensajes"+JSON.stringify(mensajes))

//alert(formularios.length)
var MENSAJES=FORMULARIOS.map(f =>{
  //const head='<head><h1>wwwEncabezadoQQQQ</h1></head>'
  var table='<table><tr><th>Month</th><th>Savings</th></tr><tr><td>January</td><td>$100</td></tr><tr><td>January</td><td>$100</td></tr></table>'  
  var boton='<body><img src="https://th.bing.com/th/id/OIP.0gGbWbkHhtYt9-R3j0a-2AHaEK?w=307&h=180&c=7&o=5&pid=1.7" alt="Girl in a jacket" width="200" height="200"><h1>aaaa</h1><br/><a href="https://poliflash.github.io/PoliData/?cedula=V3664204"><button  style="background-color:red;color:yellow;font-size:40px">Click para ir al Formulario 101</button></a></body>'
  var lnk='<br/><a href="cualquier url" target="_blank">https://poliflash.github.io/PoliData/?cedula=V3664204</a>'
  var ht='<html>'+f.mensaje.contenido+'<br/>'+table+'<br/>'+boton+lnk+'</html>'
  var encabezado=f.mensaje.encabezado;
  encabezado=encabezado.replace("<p>","")
  encabezado=encabezado.replace("</p>","")
  var  message = {   
    "personalizations": [ { "to": [ { "email": f.medios[0].destino} ] } ],
   from: { email: "ppazpurua@gmail.com" },        
   subject: "🇻🇪📣 FaroV2.120 "+encabezado,
   content: [{
       type: 'text/html',
       value:ht
   }]
  };
  return message
})
console.log(JSON.stringify(MENSAJES))
//alert(MENSAJES.length)
//var correos=[message]
PromiseSendGrid(MENSAJES,callback=> {
  //alert(JSON.stringify(callback.length))
  setFlagCircular(false)
  console.log(callback.length)
  setCantregistros(callback.length)
 // setHeatmap(callback) 
 // console.log("callback "+JSON.stringify(callback))
}); 
}


//c//onsole.log("zooooooooooooooooooooooooooooom"+state.zoom+"zooooooooooooooooooooooooooom")
var heading="Testigos: "+TESTIGOS.length
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
const header0 = (
  <div id="toolbar">
    <b>Encabezado</b>
 </div>
);
//alert("fff "+JSON.stringify(formulariojson))
var formulariodatos=formulariojson.mensaje.encabezado
//alert(formulariodatos)

const getCirclePoint=(q)=>{
 // console.log("aaaaaaaaaaaaaaaaaaaaaaa    "+q)
  return {'circle-color': 'yellow','circle-radius': 4,'circle-opacity': 1,'circle-stroke-color': 'white' , 'circle-stroke-width':2,'circle-stroke-opacity':.2,'circle-blur': 0.2,}
}
return (
<Fragment>
<div className={classes.root}>
 <Title2>Generacion de Mensajess</Title2>
 <Container maxWidth="lg" className={classes.container}>

 <span className="badge badge-success m-2">{heading}</span>
 {flagCircular&&<CircularProgress disableShrink  size={20}   thickness={4} className={classes.progress} />} 
 <Grid container spacing={3}>
          
       <Grid item xs={12} sm={6} md={3}>

        <InputLabel htmlFor="age-simple">Formularios</InputLabel>
        <Select
          value={formulario}
          onChange={handleChangeCambios('formulario')}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          {formularios.map((item, index) => (
                 <MenuItem value={item.formulario}>{item.formulario}</MenuItem>
              
               ))}
        </Select>
        <br/>
        <span className="badge badge-success m-2">{formulariodatos}</span>

        </Grid>
        
       
        
       
        <Grid item xs={12} sm={6} md={6}>
          <Editor style={{height:'50px'}} value={encabezado} onTextChange={(e) => setEncabezado(e.htmlValue)} headerTemplate={header0}/>
          <Editor style={{height:'100px'}} value={texto} onTextChange={(e) => {console.log(e.htmlValue);setTexto(e.htmlValue)}} headerTemplate={header}/>

        </Grid>
        </Grid>

        <Grid container spacing={3}>

        <Grid item xs={6} sm={3} md={3}>
        <FormControlLabel
        control={ 
          <Checkbox checked={state.checkedA} onChange={handleChangeCambios('checkedA')} value="checkedA" />
        }
        label="Correo" />
      </Grid>
       <Grid item xs={6} sm={3} md={3}>
       <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChangeCambios('checkedA')} value="checkedA" />
        }
        label="SnackBar"
      />
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
       <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChangeCambios('checkedA')} value="checkedA" />
        }
        label="Twitter"
      />
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
       <FormControlLabel
        control={
          <Checkbox  disabled checked={state.checkedA} onChange={handleChangeCambios('checkedA')} value="checkedA" />
        }
        label="SMS"
      />
      </Grid>
        </Grid>
        <Grid container spacing={3}>
        {/* <Grid item xs={6} sm={3} md={3}>

        <Button variant="contained" color="primary" className={classes.button} onClick={handleClickBuscar}>
        Busqueda
      </Button>
      </Grid>        */}
      <Grid item xs={6} sm={3} md={3}>

<Button variant="contained" color="primary" className={classes.button} onClick={handleClickGrabarMensajes}>
Registro
</Button>
{(cantregistros>0)&&<span className="badge badge-success m-2">{cantregistros+" registrados..."}</span>}

</Grid> 
<Grid item xs={6} sm={3} md={3}>

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
          data={TESTIGOSLOCATION}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'yellow','circle-radius': 8,'circle-opacity': .5 }}         
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
          <GeoJSONLayer
          data={TESTIGOSLOCATION}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': '#58D3F7','circle-radius': 3, }}         
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

<GeoJSONLayer
          data={ rejson}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={getCirclePoint('{nombre}')}         
          symbolLayout={{
            'text-field': '{nombre}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'white'
          }}
          />

</Map>

</Container>
        </div>

</Fragment>
)
        }

        const header = (
          <div id="toolbar">
          <span className="ql-formats">
            {/* <select className="ql-font">
              <option value="serif"></option>
              <option value="monospace"></option>
              <option defaultValue></option>
            </select> */}
            <select className="ql-size">
              {/*<option value="8"></option>
                    <option value="9"></option>
              <option value="10"></option>
              <option value="11"></option>
              <option value="12"></option>
              <option value="13"></option>
              <option value="14"></option>
              <option value="16"></option>
              <option value="18"></option>
              <option value="24"></option>
              <option value="36"></option>*/}
            </select>
            </span>
            <span className="ql-formats">
              <button className="ql-bold" aria-label="Bold"></button>
              <button className="ql-italic" aria-label="Italic"></button>
              <button className="ql-underline" aria-label="Underline"></button>
              </span>
            <span className="ql-formats">
              <button className='ql-list' value='ordered'></button>
            <button className='ql-list' value='bullet'></button>
            <select className="ql-align"></select>
          </span>
          {/* <span className="ql-formats">
                <select title="Text Color" className="ql-color" defaultValue="rgb(0, 0, 0)">
                  <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)"/>
                  <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"/>
                  <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"/>
                  <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"/>
                  <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"/>
                  <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"/>
                  <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"/>
                  <option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"/>
                  <option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"/>
                  <option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"/>
                  <option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"/>
                  <option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"/>
                  <option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"/>
                  <option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"/>
                  <option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"/>
                  <option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"/>
                  <option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"/>
                  <option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"/>
                  <option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"/>
                  <option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"/>
                  <option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"/>
                  <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"/>
                  <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"/>
                  <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"/>
                  <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"/>
                  <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"/>
                  <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"/>
                  <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"/>
                  <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"/>
                  <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"/>
                  <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"/>
                  <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"/>
                  <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"/>
                  <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"/>
                </select>
                <span className="ql-formats"/>
                <select title="Background Color" className="ql-background" defaultValue="rgb(255, 255, 255)">
                    <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)"/>
                    <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"/>
                  <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"/>
                  <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"/>
                  <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"/>
                  <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"/>
                  <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"/>
                  <option value="rgb(255, 255, 255)" label="rgb(255, 255, 255)"/>
                  <option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"/>
                  <option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"/>
                  <option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"/>
                  <option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"/>
                  <option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"/>
                  <option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"/>
                  <option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"/>
                  <option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"/>
                  <option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"/>
                  <option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"/>
                  <option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"/>
                  <option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"/>
                  <option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"/>
                  <option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"/>
                  <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"/>
                  <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"/>
                  <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"/>
                  <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"/>
                  <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"/>
                  <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"/>
                  <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"/>
                  <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"/>
                  <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"/>
                  <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"/>
                  <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"/>
                  <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"/>
                  <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"/>
                </select>
            </span> */}
         </div>
        
        );

  

// export  const mailVerify=(correos,callback)=>{
  
//   const  urls=correos.map(c=>
    
//       "http://nodechatbotjson.azurewebsites.net/mailverify?mail="+c  
  
//   )
  
// Promise.all(urls.map(url =>
//   fetch(url)
//   .then(response => response.json())
//   .catch(error => console.log('There was a problem!', error))

// ))
// .then(data => {
//   //alert(JSON.stringify(data))
//   callback(data)
// })
// //https://w.trhou.se/bhriv87fql
// }

