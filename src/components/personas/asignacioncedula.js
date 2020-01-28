import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {getPersona} from '../helpers/helperpersonas'
import {useFetch}  from '../hooks/usefetch'
import {useFetchPost}  from '../hooks/usefetchpost'
//import { Application } from '../../App';
import { ApplicationPersona } from './asignacionpasos';
import CircularProgress from '@material-ui/core/CircularProgress';
//url="https://openfaroapi.azurewebsites.net/api/personaget?identificacion=V3664511"
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
    const { statep, dispatchp  } = React.useContext(ApplicationPersona);
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
    const [flagCircular, setFlagCircular] = React.useState(false);
    const [dummy, setDummy] = React.useState("");
const [{ data, isLoading, isError }, fetchData] = useFetch("");
/*
const [{ dataPost, isLoadingPost, isErrorPost }, postData] = useFetchPost('');
useEffect(() => {
 if (isLoadingPost) {
    alert("post"+JSON.stringify(dataPost))
    //  setFlagCircular(true)
  }  
/},[dataPost,isLoadingPost]);
postData("https://f2020.azurewebsites.net/api/FaroFormulariosPersona?code=nbjfp6Cn8Mx3/WPr3DCwMXV8EZbfw2CB8UIMOTyfW8TYtlBSsbXGqw==",{id:{cedula:"V3664204"}})
 */          
useEffect(() => {
      if (isLoading) {
      //  setFlagCircular(true)
      }
      if ((data!=undefined)&&(!isLoading))      
      {
        setFlagCircular(false)
       // data=data[0]
      // alert("fetch"+JSON.stringify(data))
       dispatchp({
          type: 'PERSONA',
          stateprop: data[0]
        });
        setDummy("dummy")

        //dispatchp({
        //  type: 'PERSONA',
        //  stateprop: statep.persona
        //});
      }
    },[data,isLoading]);

    useEffect(() => {

      if ((dummy!="")||(statep.persona!="")){
     
        /*
      statep.persona.identificacion=data.identificacion
       statep.persona.nombre1=data.nombre1
       statep.persona.nombre2=data.nombre2
       statep.persona.apellido1=data.apellido1
       statep.persona.apellido2=data.apellido2
       statep.persona.idnacionalidad= data.idnacionalidad
       statep.persona.nacionalidad=data.nacionalidad
       statep.persona.idpaisnacimiento=data.idpaisnacimiento
       statep.persona.paisnacimiento=data.paisnacimiento
       statep.persona.idestadocivil=data.idestadocivil
       statep.persona.estadocivil=data.estadocivil
       statep.persona.idsexo=data.idsexo
       statep.persona.sexo=data.sexo
       statep.persona.fechanacimientojson=data.fechanacimientojson
       statep.persona.fechanacimientovar=data.fechanacimientovar
       
       let re=[{ 
       "idpregunta":"XX",  
       "idrespuesta": "RE",
       "respuesta": "RE",
       "codcne": data.codcnecentrovotacion,
       "descripcion": "",
       "codcnenombre": "",
       "lat": -66.86699,
       "lng": 10.48358,
       "idestado": "",
       "idmunicipio": "",
       "idparroquia": "",
       "idcircunscripcion": "",
       "estadonombre":data.nombreestadocentrovotacion,
       "municipionombre":data.nombremunicipiocentrovotacion,
       "parroquianombre":data.nombreparroquiacentrovotacion,
       "circunscripcionnombre": "",
       "centronombre":data.nombrecentrovotacion,
       "direccioncentrovotacion":data.direccioncentrovotacion,
       }
      ]
      statep.persona.re=re
       */
     
        setNombre1(statep.persona.nombre1) 
        setNombre2(statep.persona.nombre2) 
        setApellido1(statep.persona.apellido1) 
        setApellido2(statep.persona.apellido2) 
        setCodcne(statep.persona.re[0].codcne) 
        setEstado(statep.persona.re[0].estadonombre)
        setMunicipio(statep.persona.re[0].municipionombre)
        setParroquia(statep.persona.re[0].parroquianombre)
        setNombre(statep.persona.re[0].centronombre)
        setDireccion(statep.persona.re[0].direccioncentrovotacion)
       
    }
    },[dummy]);

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
         // alert("get"+JSON.stringify(statep))
         setFlagCircular(true)
         fetchData('https://openfaroapi.azurewebsites.net/api/personaget?identificacion=V3664204');
            //this.setState({ isLoading: true });
           // alert('The value is: ' + JSON.stringify(cedula));
            //let cedula="V3664204";    
                  /*
            getPersona(cedula,result => {  
              //alert("ppa")
                //1alert(JSON.stringify(result))
                 var correo="";
                 var celular="";
                 //alert(JSON.stringify(result))
                 if (result.length==0){
                  setCedulaError({flag:true,helper:"Cedula NO ha sido registrada en Faro!!!"})
            
                 }
                // if (result.length>0){
                ///alert(JSON.stringify(result))
                // for (let i = 0; i < result[0].direcciones.length; ++i) {
                //     if ((result[0].direcciones[i].IdOpcion==8)&&(result[0].direcciones[i].TipoDireccion==1)){
                //       celular=result[0].direcciones[i].direccion
                //     }
                //     if ((result[0].direcciones[i].IdOpcion==5)&&(result[0].direcciones[i].TipoDireccion==2)){
                //       correo=result[0].direcciones[i].direccion
                //     }
                // } 
                 setNombre1(result.nombre1) 
                 setNombre2(result.nombre2) 
                 setApellido1(result.apellido1) 
                 setApellido2(result.apellido2) 
                 setCodcne(result.codcncentrovotacion) 
                 setEstado(result.nombreestadocentrovotacion)
                 setMunicipio(result.nombremunicipiocentrovotacion)
                 setParroquia(result.nombreparroquiacentrovotacion)
                 setNombre(result.nombrecentrovotacion)
                 setDireccion(result.direccioncentrovotacion) 
                 //dispatch({
                 // type: 'ASIGNACION',
                 // stateprop: result
                //});
                 var rolesstr=""
                
                
              });
                */
          
        
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
                   onClick={() =>{setFlagCircular(true)
                    fetchData('https://f2020.azurewebsites.net/api/FaroFormularioBase?code=5mWvvpNVz/at91R4awZb7g/rSfVWeHbMSARrVFbEdZWtC2fWBaGtnQ==&id=jsonlite');}}
                  >
                   Buscar Pizarra
         </Button>
        <Button
                   variant="outlined" color="primary"
                   onClick={handleGetPersona}
                   
                  >
                   Buscar Faro
        </Button>
                  {flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={17}   thickness={4} className={classes.progress} />}
        </Grid>
        </Grid>
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="codcne"
            name="lastName"
            label="Cod CNE"
            fullWidth
            autoComplete="lname"
            defaultValue={codcne}
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

