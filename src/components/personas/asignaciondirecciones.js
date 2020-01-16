import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import {getPersona} from '../helpers/helperpersonas'
//import { Application } from '../../App';

import { ApplicationPersona } from './asignacionpasos';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
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
export default function AsignacionDirecciones() {
    const classes = useStyles();
   // const { state, dispatch } = React.useContext(Application);
    const { statep, dispatchp  } = React.useContext(ApplicationPersona);
    const [cedula, setCedula] = React.useState("");
    const [cedulaError, setCedulaError] = React.useState({flag:false,helper:"ok"});
    const [nombre1, setNombre1] = React.useState("");
    const [nombre2, setNombre2] = React.useState("");
    const [apellido1, setApellido1] = React.useState("");
    const [apellido2, setApellido2] = React.useState("");
    
    const [correo, setCorreo] = React.useState("");
    const [correoError, setCorreoError] = React.useState({flag:false,helper:"ok"});
  
    const [celular, setCelular] = React.useState("");
    const [celularError, setCelularError] = React.useState({flag:false,helper:"ok"});
  
    const [twt, setTwt] = React.useState("");
    const [twtError, setTwtError] = React.useState("");
    const [index, setIndex] = React.useState(1)
    const [flagCircular, setFlagCircular] = React.useState(false);

    const [inputs, setInputs] = React.useState([
      
        {
          id: 'email',
          label: 'Email',
          placeholder: 'john@acme.com',
          value: correo,
          error: false,
          helperText: 'Formato de Correo',
          getHelperText: error =>
            error
              ? 'Ooops. No tiene el formato de correo'
              : 'Formato de mail correcto',
          isValid: value => /\S+@\S+\.\S+/.test(value)
        },
      {
        id: 'phone',
        label: 'Phone',
        placeholder: '999-999-9999',
        value: celular,
        error: false,
        helperText: 'Formato de Telefono',
        getHelperText: error =>
          error
            ? 'Woops. No es un formato de celular'
            : 'Formato de Celular',
        isValid: value =>
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
            value
          )
      },
      {
        id: 'twitter',
        label: 'Twitter',
        placeholder: '@abcdef',
        value: twt,
        error: false,
        helperText: 'Un formato de nombre de Twitter',
        getHelperText: error =>
          error
            ? 'Ooops. No tiene el formato de twitter'
            : 'Formato twitter correcto',
        isValid: value => /^@?(\w){1,15}$/.test(value)
      }
    ]);
    const [input, setInput] = React.useState(inputs[1])
      function closeDialog(id){
       // alert("closeDialog")
        //setflagOpenDireccion(false);
  
      }
 //alert(JSON.stringify(state.asignacion))
   // setApellido1("state.asignacion.apellido1")    
   useEffect(() => {
    // console.log(JSON.stringify(statep))
   // alert("DIRECCIONES "+JSON.stringify(statep))
      setNombre1(statep.persona.nombre1)
      setNombre2(statep.persona.nombre2)
      setApellido1(statep.persona.apellido1)
      setApellido2(statep.persona.apellido2)
      setCorreo("123")
  },[]);
  const onChange = ({ target: { id, value } }) => {
   alert(id+" "+value)
   
   if (id=="email"){setIndex(0);setCorreo(value)}
   if (id=="phone"){alert("aaa");setIndex(1);setCelular(value)}
   alert(index)
   if (id=="twt")setIndex(2)
   setInput(inputs[index])

   const isValid = input.isValid(value);

   alert(index)

   var newInput = {
    ...inputs[index],
    value: value,
    error: !isValid,
    helperText: input.getHelperText(!isValid)
  };
  alert(JSON.stringify(newInput))
  //setInput(newInput)
  var i=inputs[index]
  i[index]=newInput
  setInputs(i)

  }
    const handleChangeCambios=input=>e=>{
 
        if (input=="cedula"){
        //  console.log(e.target.value)
          var ced=e.target.value
          if (((ced.substring(0, 1)=='v')||(ced.substring(0, 1)=='V'))){       
            setCedulaError({flag:false,helper:"Sintaxis Correcta"})
              if (isNaN(ced.substring(1,ced.length)*1)){
                setCedulaError({flag:true,helper:"Solo numeros despues de la V"})            
              }else{
                setCedulaError({flag:false,helper:"Vamos bien"})        
              }        
            }else{
            setCedulaError({flag:true,helper:"Falta la V al comienzo"})
               //this.setState({errorCelular:true,helperTextCelular:"Sintaxis Erronea"})
           }
          setCedula(e.target.value)
        }
        if (input=="EM"){
          const isValid = inputs[0].isValid(e.target.value);
          if (isValid){
            setCorreoError({flag:false,helper:"Sintaxis Correcta"})
        
          } else{
            setCorreoError({flag:true,helper:"Sintaxis Incorrecta"})
          }
         // alert(isValid)  
        // alert(JSON.stringify(statep.persona.direcciones))     
      
          setCorreo(e.target.value)
        }
        if (input=="TC"){
          const isValid = inputs[1].isValid(e.target.value);
          if (isValid){
            setCelularError({flag:false,helper:"Sintaxis Correcta"})
        
          } else{
            setCelularError({flag:true,helper:"Sintaxis Incorrecta"})
          }
         // alert(isValid)         
          setCelular(e.target.value)
        }
        if (input=="TW"){
          const isValid = inputs[2].isValid(e.target.value);
          if (isValid){
            setTwtError({flag:false,helper:"Sintaxis Correcta"})
        
          } else{
            setTwtError({flag:true,helper:"Sintaxis Incorrecta"})
          }
         // alert(isValid)  
        // alert(JSON.stringify(statep.persona.direcciones))     
      
          setTwt(e.target.value)
        }

        let i=0
        for (const index in statep.persona.direcciones) {
          //alert('item  '+JSON.stringify(index))
          if (statep.persona.direcciones[index].idrespuesta==input){
             statep.persona.direcciones[index].texto=e.target.value
             dispatchp({
               type: 'PERSONA',
               stateprop: statep.persona
             });
          }
          i++;
       }  
        }
        function cambio(item, index) {
          statep.persona.direcciones[index].texto="99999999"; 
        }
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
        <Typography variant="h6" gutterBottom>
        Direcciones
      </Typography>
      <Grid container spacing={3}>
 
        <Grid item xs={12} sm={6}>
        <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Correo"
            value={correo}
            onChange={handleChangeCambios('EM')}
            error={correoError.flag}     
            helperText={correoError.helper}
            defaultValue={correo}
  
         
         />
         
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Celular"
            value={celular}
            onChange={handleChangeCambios('TC')}
            error={celularError.flag}     
            helperText={celularError.helper}
            defaultValue={celular}
  
         
         />
        
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoFocus
            margin="dense"
            id="twitter"
            label="Twitter"
            value={twt}
            onChange={handleChangeCambios('TW')}
            error={twtError.flag}     
            helperText={twtError.helper}
            defaultValue={twt}
          />
        </Grid>

      </Grid>
    
    </React.Fragment>
  );
}

