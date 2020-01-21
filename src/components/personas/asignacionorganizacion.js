import React,{useEffect,useReducer} from 'react';
import { ApplicationPersona } from './asignacionpasos';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import {getPersona} from '../helpers/helperpersonas'
import {EEMMPP} from  '../../data/EEMMPP.json';
import {roles} from  '../../data/roles.json';
import {organizacion} from  '../../data/organizacion.json';
import {militancia} from  '../../data/militancia.json';
import {formacion} from  '../../data/formacion.json';
import {experiencia} from  '../../data/experiencia.json';
import {caracteristicasf} from  '../../data/caracteristicasf.json';
//import { Application } from '../../App';
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
export default function AsignacionOrganizacion() {
    const classes = useStyles();
  //  const { state, dispatch } = React.useContext(Application);
    const [cedula, setCedula] = React.useState("");
    const [cedulaError, setCedulaError] = React.useState({flag:false,helper:"ok"});
    const [nombre1, setNombre1] = React.useState("");
    const [nombre2, setNombre2] = React.useState("");
    const [apellido1, setApellido1] = React.useState("");
    const [apellido2, setApellido2] = React.useState("");
    const { statep, dispatchp  } = React.useContext(ApplicationPersona);
        
    const [respuestas,setRespuestas]= React.useState(["","","","","",""]);
    const [caracteristicas,setCaracteristicas]= React.useState({});
    //const [preguntasrespuestas,setPreguntasRespuestas]= React.useState([{idpregunta:0,idrespueta:1},{idpregunta:1,idrespueta:0},{idpregunta:2,idrespueta:0},{idpregunta:3,idrespueta:0},{idpregunta:4,idrespueta:0},{idpregunta:5,idrespueta:0}]);
    //const [rrr,setRRR]= React.useState([]);
    const [fecha,setFecha]= React.useState("");
    //const [values, dispatchvalues] = useReducer((state, action) => {
    //  return action ;
    //}, [{idrespuesta:"2",respuesta:"respuesta"},{idrespuesta:"0",respuesta:"respuesta"},{idrespuesta:"0",respuesta:"respuesta"},{idrespuesta:"0",respuesta:"respuesta"},{idrespuesta:"0",respuesta:"respuesta"},{idrespuesta:"0",respuesta:"respuesta"}]);
    
    useEffect(() => {
      //alert("useEffect1 "+JSON.stringify(statep.persona.caracteristicas.length))
      //alert("useEffect1 "+JSON.stringify(caracteristicasf[0]))
      
     //alert("orga "+JSON.stringify(statep.persona.caracteristicas[1]))
     //console.log(statep.persona.caracteristicas)
     if (statep.persona.caracteristicas[0]!=undefined){
        setNombre1(statep.persona.nombre1)
        setNombre2(statep.persona.nombre2)
        setApellido1(statep.persona.apellido1)
        setApellido2(statep.persona.apellido2)
     
     //////////////AQUI   armar las respuestas para COMENZAR LA VENTANA DESDE EL INICIO Y CUAN VA PARA ATRAS
     //setRespuestas()
    
     //statep.persona.caracteristicas
     var inicio = caracteristicasf[0].preguntas.map(function (item, index, array) { 
      //caracteristicasf[0].preguntas[index].respuestas[statep.persona.caracteristicas[index].idrespuesta].respuesta
      //alert(index+" "+statep.persona.caracteristicas[index].idrespuesta)
          return statep.persona.caracteristicas[index].idrespuesta; 
     });
           // dispatchvalues(inicio)
    
           setRespuestas(inicio)
          // alert("uinicio "+JSON.stringify(inicio))
    }
          },[]);
          
    useEffect(() => {
      //dispatchvalues(respuestas)
     // alert("useEffect2 "+JSON.stringify(statep.persona.caracteristicas))
      //alert("useEffect3 "+JSON.stringify(respuestas))
      let car=[]
      //var pos=caracteristicasf[0].preguntas[0]
       //var carr = respuestas.map(function (item, index, array) {
          // var indexr =caracteristicasf[0].preguntas[index].respuestas.findIndex(obj => obj.idrespuesta==item.idrespuesta)
         //  var respuestachar="SIN RESPUESTA"
      // alert(indexr)
        //   if (indexr>=0){
              //alert(caracteristicasf[0].preguntas[index].respuestas[indexr].respuesta)
          //    respuestachar=caracteristicasf[0].preguntas[index].respuestas[indexr].respuesta
          // }
           //return {}
         //  return {idpregunta:"xxx",pregunta:"ORGANIZACION",idrespuesta:respuestas[index],respuesta:respuestachar,descripcion:respuestachar,codcne:"",idestado:"",estadonombre:"",idmunicipio:"",municipionombre:"",idparroquia:"",parroquianombre:""}; 
      //});
     
      if (JSON.stringify(caracteristicas) == "{}"){
        //alert("nada")
      }else{
        //alert("cambio de caracteristicas  "+JSON.stringify(caracteristicas))
      dispatchp({
        type: 'CARACTERISTICAS',
        stateprop: caracteristicas
      });
    }
    },[caracteristicas]);
 

 
    const handleChangeCambiosF=input=>e=>{
      
     // alert(JSON.stringify(statep.persona))
     var r=respuestas 
      r[input]=e.target.value

      setRespuestas(r)
     
     var car=statep.persona.caracteristicas
      // alert(JSON.stringify(car))
       car[input].idrespuesta=e.target.value
          
     // var carr = respuestas.map(function (item, index, array) {
        // var indexr =caracteristicasf[0].preguntas[index].respuestas.findIndex(obj => obj.idrespuesta==item.idrespuesta)
     //    var respuestachar="SIN RESPUESTA"
     //    return {idpregunta:"xxx",pregunta:"ORGANIZACION",idrespuesta:respuestas[index],respuesta:respuestachar,descripcion:respuestachar,codcne:"",idestado:"",estadonombre:"",idmunicipio:"",municipionombre:"",idparroquia:"",parroquianombre:""}; 
    //});
   //alert("fecha "+JSON.stringify(car))
    setCaracteristicas(car)
//    dispatchp({
//      type: 'CARACTERISTICAS',
//      stateprop: car
 //   });
      //var rrr=respuestas
     //rrr[input]=e.target.value
      
     //setRespuestas(rrr)
      //dispatchval(rrr)
      //setFecha(Date())
    }


    const idselect = (posList) => {
      alert("idselect "+JSON.stringify(respuestas))
      var r=0
      if (respuestas.length>0){r=respuestas[posList].idrespuesta}
      return r
    };
  
       const error='ABC'
    return (
    <React.Fragment>
 
        <Typography variant="h6" gutterBottom>
        Registro Electoral
      </Typography>

        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            disabled={true}
            id="firstName"
            name="firstName"
            label="Primer Nombre"
            fullWidth
            autoComplete="fname"
            defaultValue={nombre1}
            value={nombre1}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            disabled={true}
            id="lastName"
            name="lastName"
            label="Segundo Nombre"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={nombre2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            disabled={true}
            id="firstName"
            name="firstName"
            label="Primer Apellido"
            fullWidth
            autoComplete="fname"
            defaultValue={nombre1}
            value={apellido1}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            disabled={true}
            id="lastName"
            name="lastName"
            label="Segundo Apellido"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={apellido2}
          />
        </Grid>
        </Grid>
        <Grid container spacing={3}>
     

        {caracteristicasf[0].preguntas.map((item, index) => (
             <Grid item xs={12} sm={6}>
       <FormControl component="fieldset" className={classes.formControl}>
       <List>  
        <FormControl className={classes.formControl}>
         <InputLabel id="demo-simple-select-label">{item.pregunta}</InputLabel>
         <Select
       value={respuestas[index]}
       onChange={handleChangeCambiosF(index)}     
         input={<Input name="Rol" id="age-helper" />}
       >
        
         {item.respuestas.map((item, index) => (
                  <MenuItem value={item.idrespuesta}>{item.respuesta}</MenuItem>
          ))}
        </Select>
       </FormControl>
       </List>
       </FormControl>
       </Grid>
))}
        
        </Grid>
       
    </React.Fragment>
  );
}
