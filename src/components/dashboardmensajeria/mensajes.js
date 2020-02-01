import React, {useEffect, useState,Fragment } from 'react';
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
import {RESP} from '../../data/resp.json';
import {roles} from  '../../data/roles.json';
//import {LIBERTADOR} from '../data/libertador.json';
import {usePosition} from '../../hooks/useposition';
//import {useGeolocation} from '../hooks/usegeolocation';
import { greatCircle, point,circle } from '@turf/turf';
import Title2 from '../dashboard/title';
import PieChart, { Title,Font, Series , Label ,Connector,  Size, Export,Legend } from 'devextreme-react/pie-chart';
import {EEMMPP} from  '../../data/EEMMPP.json';
import {formulario} from  '../../data/formulario.json';
import {getPersona,getTestigos} from '../helpers/helperpersonas'
import {postMensaje} from '../helpers/helpermensajes'
import CircularProgress from '@material-ui/core/CircularProgress';
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
  const names = [
    'Formador',
    'Facilitador',
    'Testigo',
    'Activista',
    'Influencer'
  ];
  const direcciones= [
    {"key":1,"cedula":"V3664204","celular":"4126340692","mail":"ppazpurua@gmail.com","twt":"pazpurua","mensaje":"Prueba de Concepto SMS, TWT, MAIL"},
    {"key":2,"cedula":"V888888","celular":"4142863817","mail":"franciscojcastrom@gmail.com","twt":"fcastrom","mensaje":"Te esperan 8.000 observadore"},
   {"key":3,"cedula":"V888888","celular":"4264020509","mail":"gboyerizo@gmail.com","twt":"gboyerizo","mensaje":"Te esperan 8.000 observadore"}
  ]
  const roles2 = [
    { id: 243, rol: "Transcriptor Formacion" },
    { id: 229, rol: "Formadores Nacionales" },
    { id: 230, rol: "Enlaces Formacion UCAB" },
    { id: 231, rol: "Facilitadores" },
    { id: 232, rol: "Observadores" },
    { id: 242, rol: "Soporte Formacion" },
   
    { id: 246, rol: "Coordinador de Partido" },
    { id: 247, rol: "Observador 9D" },
   { id: 245, rol: "Observador Inactivo" }
  ]
  export default function Mensajes() {
  
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    //const { state, dispatch } = React.useContext(Application);
    const [personName, setPersonName] = React.useState([]);

    const [codpartido, setCodigoPartido] = React.useState("10");
    const [codestado, setCodigoEstado] = React.useState("");
    const [posestado, setPosEstado] = React.useState(0);
    const [codmunicipio, setCodigoMunicipio] = React.useState("");
    const [posmunicipio, setPosMunicipio] = React.useState(0);
   
    const [codparroquia, setCodigoParroquia] = React.useState("130101");
    const [posparroquia, setPosParroquia] = React.useState("130101");
   
    const [idrol, setIdRol] = React.useState("0");
  
    const [flagCircular, setFlagCircular] = React.useState(false);
    const [encabezado, setEncabezado] = React.useState("Actividades de Formacion");
    const [texto, setTexto] = React.useState("Actividades de Formacion mañana: Taller de Testigo en el Colegio Jose Maria Vargas en la Parroquia General Paez");
    
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
        const [pos, setPos] = React.useState([-66.9188,5.58]);
    
        const [zoom, setZoom] = useState([5]);
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();
    const [ FORMULARIOS,SetFORMULARIOS ] = useState(RESP);
   // const [RESPUESTAS,SetRESPUESTAS]=useState({enviados:0,preguntas:[],respondidos:0,invalidos:0,isLoading:false })
    const [TESTIGOS,setTESTIGOS]=useState([])
    const [TESTIGOSLOCATION,setTESTIGOSLOCATION]=useState(null)
    const [MENSAJES,setMENSAJES]=useState(null)
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
       // calculos(FORMULARIOS)
      },[]);
    //alert(respuestas)
  //alert(JSON.stringify(RESP))
    //  const stategeo = useGeolocation();
  ///function 
  //console.log("stategeo"+JSON.stringify(state.positions))
  const handleChangeCambios=input=>e=>{
    if (input=="formularios"){
     //alert("cedula")
      //setMensajeAsignacion({ ...mensajeasignacion, cedula: e.target.value })
    }
    if (input=="estado"){
      //alert(JSON.stringify(e.target.value)) 
      var index = EEMMPP.findIndex(obj => obj.cneestado==e.target.value);
    // alert(index)
      setCodigoEstado(e.target.value)
      setPosEstado(index)
     }
     if (input=="municipio"){
      var index = EEMMPP[posestado].items.findIndex(obj => obj.cnemunicipio==e.target.value);
      //alert(index)
        setPosMunicipio(index)
      setCodigoMunicipio(e.target.value)
     }
     if (input=="parroquia"){
      setCodigoParroquia(e.target.value)
      var index = EEMMPP[posestado].items[posmunicipio].items.findIndex(obj => obj.cneparroquia==e.target.value);
      //alert(index)
        setPosParroquia(index)
     }
     if (input=="rol"){
      setIdRol(e.target.value)
     }
    
   }
   const handleChangeTexto=input=>e=>{
        setTexto(e.target.value)
   }
   function handleChange(event) {
    setPersonName(event.target.value);
  }
//  const handleChangeCambios=input=>e=>{
  
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
const handleClickBuscar =input=>{  
 
  setFlagCircular(true)
  getTestigos("TESTIGOS",result => {  
   // alert(JSON.stringify(result))
    setTESTIGOS(result)
  //alert(JSON.stringify(TESTIGOS))
  
  var featuresTESTIGOS=[]
  for (var i = 0; i < result.length; i++) {
    featuresTESTIGOS.push( {
        "type":"Feature",
        "properties":{
          "place":result[i].nombre,
          
        }, 
                
        "geometry":{
          "type":"Point",
          "coordinates":[result[i].lng,result[i].lat]
        }
      })
  }
  const pointsTESTIGOS={
    "type":"FeatureCollection",
    "features":featuresTESTIGOS
   }      
   setFlagCircular(false)
   setTESTIGOSLOCATION(pointsTESTIGOS)
 //  alert(JSON.stringify(pointsTESTIGOS))
  })
 
}
const handleClickGrabarMensajes =input=>{  
  setFlagCircular(true)
 
//  setFlagCircular(false)
  //alert(this.state.sms+" "+this.state.mail)
  
  //this.setState({loadIndicatorVisible:true}) 
  //var rols=[]
  //for (let i = 0; i < this.state.ROLES.length; ++i) {
  //  for (let j = 0; j < roles.length; ++j) {
  //    if (this.state.ROLES[i]==roles[j].id){
  //      rols.push(roles[j])
  //    }
  //  }
 // }
 // alert(JSON.stringify(rols))
  var mensajes=[]
  var personas=TESTIGOS;
 var fecha=new Date()

  for (let i = 0; i < personas.length; ++i) {
//alert(JSON.stringify(personas[i]))
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
   // if (this.state.flagFormulario){
  //  for (let j = 0; j < this.state.formulariosbase.length; ++j) {
  //       if (this.state.formulariosbase[j].id==this.state.formulario)
  //       {preguntas=this.state.formulariosbase[j].preguntas}
  //  }
 // }
    var fecha=new Date()
    var mensaje= {
    "id":personas[i].identificacion+"*"+formulario.id,
    "type":"formulario",
    
    "idformulario":formulario.id,
    "fecha": fecha,
    "cedula": personas[i].identificacion,
    
    "nombreapellido":personas[i].nombreapellido,
    "idpartido": personas[i].idpartido,
    "partido": personas[i].orientacion,
    "sexo": personas[i].sexo,
    "fechanac":  personas[i].fechanac,
    "edad":  personas[i].edad,
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
    "encabezado": "this.state.CONFIGURACION.mensaje.encabezado",
    "contenido": "this.state.CONFIGURACION.mensaje.contenido",
    "flagFormulario":false,
    "formulario":"sin",
    "imagen": ""
},
  "preguntas": preguntas,
  
  //"roles": rols,
     "medios": [
      {
        "medio": "sms",
        "destino": personas[i].celular,
        "activado":false,
        "procesos":{
          "existe":true,
          "envio":false,
          "fechaenvio":null,
          "apertura":false,
          "fechaapertura":null,
          "click":false,
          "fechaclick":null,
          "respuesta":false,
          "fecharespuesta":null
        }
},
      {
            "medio": "correo",
            "destino": personas[i].correo,
            "activado":true,
            "procesos":{
              "existe":true,
              "envio":false,
              "fechaenvio":null,
              "apertura":false,
              "fechaapertura":null,
              "click":false,
              "fechaclick":null,
              "respuesta":false,
              "fecharespuesta":null
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
              "apertura":false,
              "fechaapertura":null,
              "click":false,
              "fechaclick":null,
              "respuesta":false,
              "fecharespuesta":null
            }
        }
    ]

    }
   // alert("mensajes"+JSON.stringify(mensajes))
    mensajes.push(mensaje)
    postMensaje(mensaje,res => {  
      // alert(res.length)
       //alert("formulario"+JSON.stringify(res)+"formulario")
      if (i>=TESTIGOS.length-1){
       setFlagCircular(false) 
       setTESTIGOSLOCATION([])
       setTESTIGOS([])
      }
     });
    //alert("post"+JSON.stringify(mensaje)+"formulario")
    //postMensaje(mensaje,res => {  
      // alert(res.length)
       //alert("formulario"+JSON.stringify(res)+"formulario")
      // if (i>=personas.length){
        // setTimeout(() => {
        //  this.setState({loadIndicatorVisible:false}) 

        
        // }, 0);
 
     //   }
    // });
    // alert(i)

}

//this.setState({MENSAJES:mensajes });
//this.setState({ CONFIGURACIONTEXTO: "Creados y Registrados: "+this.state.MENSAJES.length+" mensajes"});
//alert("mensajes"+JSON.stringify(mensajes))

}


console.log("zooooooooooooooooooooooooooooom"+state.zoom+"zooooooooooooooooooooooooooom")
var heading="Testigos: "+TESTIGOS.length
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

const header = (
  <div id="toolbar">
  <span className="ql-formats">
    <select className="ql-font">
			<option value="serif"></option>
			<option value="monospace"></option>
			<option defaultValue></option>
		</select>
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
  <span className="ql-formats">
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
    </span>
 </div>

);
return (
<Fragment>
<div className={classes.root}>
 <Title2>Generacion de Mensajess</Title2>
 <Container maxWidth="lg" className={classes.container}>

 <span className="badge badge-success m-2">{heading}</span>
 
 <Grid container spacing={3}>
          
       <Grid item xs={12} sm={6} md={3}>

        <InputLabel htmlFor="age-simple">Formularios</InputLabel>
        <Select
          value={10}
          onChange={handleChangeCambios('formulario')}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
           <MenuItem value={0}>Sin Formulario</MenuItem>
          <MenuItem value={10}>Conectividad</MenuItem>
          <MenuItem value={20}>Servicios Publicos</MenuItem>
          <MenuItem value={30}>Claps</MenuItem>
          <MenuItem value={40}>CarnetPatria</MenuItem>
          <MenuItem value={50}>Activismo</MenuItem>
          <MenuItem value={50}>Ambiente</MenuItem>
        </Select>
        </Grid>
        
       
        
       
        <Grid item xs={12} sm={6} md={6}>
          <Editor style={{height:'50px'}} value={encabezado} onTextChange={(e) => setEncabezado(e.htmlValue)} headerTemplate={header}/>
          <Editor style={{height:'100px'}} value={texto} onTextChange={(e) => setTexto(e.htmlValue)} headerTemplate={header}/>

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
        <Grid item xs={6} sm={3} md={3}>

        <Button variant="contained" color="primary" className={classes.button} onClick={handleClickBuscar}>
        Busqueda
      </Button>
      </Grid>       
      <Grid item xs={6} sm={3} md={3}>

<Button variant="contained" color="primary" className={classes.button} onClick={handleClickGrabarMensajes}>
Registro
</Button>
</Grid> 
<Grid item xs={6} sm={3} md={3}>
{flagCircular&&<CircularProgress className={classes.progress} />}
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

</Map>

</Container>
        </div>

</Fragment>
)
        }