import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {getPersona} from '../helpers/helperpersonas'
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
export default function AsignacionCedula() {
    const classes = useStyles();
  
    const [cedula, setCedula] = React.useState("");
    const [cedulaError, setCedulaError] = React.useState({flag:false,helper:"ok"});
    const [nombre1, setNombre1] = React.useState("");
    const [nombre2, setNombre2] = React.useState("");
    
    const [apellido1, setApellido1] = React.useState("");
    const [apellido2, setApellido2] = React.useState("");
    const [codcne, setCodcne] = React.useState("");
    const [estado, setEstado] = React.useState("");
    const [municipio, setMunicipio] = React.useState("");
    const [parroquia, setParroquia] = React.useState("");
    const [nombre, setNombre] = React.useState("");
    const [direccion, setDireccion] = React.useState("");

   
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
        }
        const handleGetPersona = () => {   //de Faro
  
            //this.setState({ isLoading: true });
           // alert('The value is: ' + JSON.stringify(cedula));
            //let cedula="V3664204";    
             
            getPersona(cedula,result => {  
              //alert("ppa")
             //    alert(JSON.stringify(result[0].direcciones))
                 var correo="";
                 var celular="";
                 //alert(JSON.stringify(result))
                 if (result.length==0){
                  setCedulaError({flag:true,helper:"Cedula NO ha sido registrada en Faro!!!"})
            
                 }
                 if (result.length>0){
                ///alert(JSON.stringify(result))
                 for (let i = 0; i < result[0].direcciones.length; ++i) {
                     if ((result[0].direcciones[i].IdOpcion==8)&&(result[0].direcciones[i].TipoDireccion==1)){
                       celular=result[0].direcciones[i].direccion
                     }
                     if ((result[0].direcciones[i].IdOpcion==5)&&(result[0].direcciones[i].TipoDireccion==2)){
                       correo=result[0].direcciones[i].direccion
                     }
                 } 
                 setNombre1(result[0].nombre1) 
                 setNombre2(result[0].nombre2) 
                 setApellido1(result[0].apellido1) 
                 setApellido2(result[0].apellido2) 
                 setCodcne(result[0].cv.codcne) 
                 setEstado(result[0].cv.estado)
                 setMunicipio(result[0].cv.municipio)
                 setParroquia(result[0].cv.parroquia)
                 setNombre(result[0].cv.nombre)
                 setDireccion(result[0].cv.direccion) 
                 var rolesstr=""
                 /*
                 for (let ii = 0; ii < result[0].rol.length; ++ii) {
                     rolesstr+=" | "+result[0].rol[ii].rol
                 }
                 const formDataPersona={
                   "identificacion":result[0].identificacion,
                   "nombre1":result[0].nombre1,
                   "nombre2":result[0].nombre2,
                   "apellido1":result[0].apellido1,
                   "apellido2":result[0].apellido2,
                   "sexo":result[0].sexo,
                   "edad":result[0].edad,
                   "fechanac":result[0].fechanac,
                   "correo":correo,
                   "telefono":celular,
                   "estado":result[0].cv.estado,
                   "municipio":result[0].cv.municipio,
                   "parroquia":result[0].cv.parroquia,
                   "codcne":result[0].cv.codcne,
                   "nombre":result[0].cv.nombre,
                   "accion":"",
                   "rol": rolesstr,
                   "direcciones":result[0].direcciones,
                   "roles":result[0].rol
                   
                 
                 };
                  */
                // formDataPersona.nombre2="Jose"
                // formDataPersona.apellido1="Gonzales"
                // formDataPersona.apellido2="Iturbe"
               
                 // dispatch({
               //    type: 'PERSONA',
               //    stateprop:formDataPersona
               //  });  
                // alert(JSON.stringify(formDataPersona.direcciones))
                //GetPersona("")
                 }
                 //this.setState({persona:formDataPersona,identificacion:imagecedula,isLoading:false})
                 
              });
                
          
        
        }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Busqueda de Persona
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField

          autoFocus
          margin="dense"
          id="cedula"
          label="Cedula"
          onChange={handleChangeCambios('cedula')}
          error={cedulaError.flag}     
          helperText={cedulaError.helper}
          defaultValue={cedula}

/>
        </Grid>
        <Grid item xs={12} sm={6}>
       
        <Button
                   variant="outlined" color="primary"
                   onClick={handleGetPersona}
                  >
                   Buscar
                  </Button>

        </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
        Registro Electoral
      </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
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
            id="lastName"
            name="lastName"
            label="Segundo Apellido"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={apellido2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Cod CNE"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={codcne}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Estado"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={estado}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Municipio"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={municipio}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Parroquia"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={parroquia}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Centro"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={nombre}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Direccion"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={direccion}
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

