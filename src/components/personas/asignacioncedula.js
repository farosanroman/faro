import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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
    const [persona, setPersona] = React.useState("");
    
    const [codcne, setCodcne] = React.useState("");
    const [flagCircular, setFlagCircular] = React.useState(false);
    const [dummy, setDummy] = React.useState("");
    const [ data, isLoading, isError , fetchData] = useFetch("");
    const [ data2, isLoading2, isError2 , fetchData2] = useFetch("");
//const [{ data9, isLoading9, isError9 }, fetchData9] = useFetch("");
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
//alert("asignacoin cdula")
},[]);  
useEffect(() => {
      if (isLoading) {
      //  setFlagCircular(true)
      }
      if ((data!=undefined)&&(!isLoading))      
      {
      //  alert("data")
        setFlagCircular(false)
       // data=data[0]
     // alert("useEffect eeee "+data.length+' '+JSON.stringify(data)+' ')
       dispatchp({
          type: 'PERSONA',
          stateprop: data
        });
       // setDummy("dummy")
     //  if (data.length>0){
         setPersona(data)
        setNombre1(data.nombre1) 
        setNombre2(data.nombre2) 
        setApellido1(data.apellido1) 
        setApellido2(data.apellido2) 
      // }
      }
    },[data,isLoading]);


    // useEffect(() => {
    //   alert(JSON.stringify("undefined "+JSON.stringofy(statep.persona)))
    //   if ( ((dummy!="")||(statep.persona!=""))&&(statep.persona!=undefined)){
     
    //    alert("!=undefined")
    //     setNombre1(statep.persona.nombre1) 
    //     setNombre2(statep.persona.nombre2) 
    //     setApellido1(statep.persona.apellido1) 
    //     setApellido2(statep.persona.apellido2) 
       
    // }
    // },[dummy]);

  useEffect(() => {
  //  alert("data2 "+JSON.stringify(data2))
  },[data2]);


    const handleChangeCambios=input=>e=>{
     
    //  alert("data2"+JSON.stringify(data2))
     
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
       //  fetchData2('https://f2020.azurewebsites.net/api/FaroFormularioBase?code=5mWvvpNVz/at91R4awZb7g/rSfVWeHbMSARrVFbEdZWtC2fWBaGtnQ==&id=jsonlite');
    
         fetchData('https://openfaroapi.azurewebsites.net/api/personagetv2?idorganizacion=16&identificacion=V6505691')
       //  fetchData('https://openfaroapi.azurewebsites.net/api/personaget?identificacion=V6505691')
        
         
          
        
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
                   Faro 2.0
        </Button>
        <Button
                   variant="outlined" color="primary"
                   onClick={() =>{setFlagCircular(true)
                    fetchData('https://f2020.azurewebsites.net/api/FaroFormularioBase?code=5mWvvpNVz/at91R4awZb7g/rSfVWeHbMSARrVFbEdZWtC2fWBaGtnQ==&id=jsonlite');}}
                  >
                   CosmosDB 1.0
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
        </Grid>
       {(persona!="")&&
       <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="codcne"
            name="lastName"
            label="Cod CNE"
            fullWidth
            autoComplete="lname"
            defaultValue={codcne}
            // value={(data.re[0]==undefined) ?'': data.re[0].codcne }
            value={(persona.re[0]==undefined) ?'': persona.re[0].codcne }
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
            defaultValue={""}
            value={(persona.re[0]==undefined) ?'': persona.re[0].estadonombre }
           
           // value={statep.persona.re[0].estadonombre}
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
            value={(persona.re[0]==undefined) ?'': persona.re[0].municipionombre }
           
            // value={statep.persona.re[0].municipionombre}
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
            value={(persona.re[0]==undefined) ?'': persona.re[0].parroquianombre }
          
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
            value={(persona.re[0]==undefined) ?'': persona.re[0].centronombre }
           
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="direccion"
            name="lastName"
            label="Direccion"
            fullWidth
            autoComplete="Direccion"
            defaultValue={""}
            value={(persona.re[0]==undefined) ?'': persona.re[0].centrodirecion }
            multiline
            rows="4"
          />

        </Grid>
        </Grid>
        }
      
    </React.Fragment>
  );
}


var ppa=
{"flag":1,"msj":"","flagasignacion":1,"idpersona":44,"nombre1":"GABRIEL","nombre2":"FRANCISCO JOSE","apellido1":"BOYERIZO","apellido2":"LOPEZ","identificacion":"V6505691","codcnecentrovotacion":"13090202100","nombrecentrovotacion":"INSTITUTO MEJORAMIENTO PROFESIONAL DEL MAGISTERIO","idestadocentrovotacion":"13","nombreestadocentrovotacion":"MIRANDA","idmunicipiocentrovotacion":"09","nombremunicipiocentrovotacion":"SUCRE","idparroquiacentrovotacion":"02","nombreparroquiacentrovotacion":"LEONCIO MARTINEZ","direccioncentrovotacion":"URBANIZACION MONTE CRISTO IZQUIERDA AVENIDA MONTE CRISTO. FRENTE AVENIDA ROMULO GALLEGO. DERECHA CALLE EDIFICIO AVENIDA  ROMULO GALLEGOS URBANIZACION LOS RUICES EDIFICIO","idnacionalidad":245,"nacionalidad":"Venezuela","idpaisnacimiento":245,"paisnacimiento":"Venezuela","idestadocivil":2,"estadocivil":"Casado(a)","idsexo":2,"sexo":"Masculino","idestatus":1,"fechacreacionpersona":"2014/09/15","fechacreacionpersonavar":"15/09/2014","fechanacimiento":"1967/07/19","fechanacimientovar":"19/07/1967","fechanacimientojson":"1967-07-19T00:00:00.000Z","idtipopersona":25,"tipopersona":"","idprofesion":9,"profesion":"COMPUTACION","idocupacion":0,"ocupacion":"","idcaracteristicaopcion":1,"re":[{"idrespuesta":"RE","respuesta":"RE","codcne":"13090202100","descripcion":"","codcnenombre":"","lat":-66.82804,"lng":10.49501,"idestado":"13","idmunicipio":"09","idparroquia":"02","idcircunscripcion":"1","estadonombre":"MIRANDA","municipionombre":"SUCRE","parroquianombre":"LEONCIO MARTINEZ","circunscripcionnombre":"","centronombre":"INSTITUTO MEJORAMIENTO PROFESIONAL DEL MAGISTERIO"}],"direcciones":[{"idrespuesta":"TF","respuesta":"TELEFONO FIJO","codcne":"","descripcion":"","codcnenombre":"","idfuncional":"","funcionalnombre":"","lat":0,"lng":0,"idestado":"","idmunicipio":"","idparroquia":"","idcircunscripcion":"","estadonombre":"","municipionombre":"","parroquianombre":"","circunscripcionnombre":"","centronombre":"","texto":"02123658657"},{"idrespuesta":"TW","respuesta":"TWITTER","codcne":"","descripcion":"","codcnenombre":"","idfuncional":"","funcionalnombre":"","lat":0,"lng":0,"idestado":"","idmunicipio":"","idparroquia":"","idcircunscripcion":"","estadonombre":"","municipionombre":"","parroquianombre":"","circunscripcionnombre":"","centronombre":"","texto":"@gboyerizo"},{"idrespuesta":"TC","respuesta":"TELEFONO CELULAR","codcne":"","descripcion":"","codcnenombre":"","idfuncional":"","funcionalnombre":"","lat":0,"lng":0,"idestado":"","idmunicipio":"","idparroquia":"","idcircunscripcion":"","estadonombre":"","municipionombre":"","parroquianombre":"","circunscripcionnombre":"","centronombre":"","texto":"04264020511"},{"idrespuesta":"EM","respuesta":"EMAIL","codcne":"","descripcion":"","codcnenombre":"","idfuncional":"","funcionalnombre":"","lat":0,"lng":0,"idestado":"","idmunicipio":"","idparroquia":"","idcircunscripcion":"","estadonombre":"","municipionombre":"","parroquianombre":"","circunscripcionnombre":"","centronombre":"","texto":"gboyerizo@gmail.com"}],"roles":[{"idrespuesta":"242","respuesta":"Soporte Electoral","codcne":"00000000000","descripcion":"Soporte Electoral","codcnenombre":"","idfuncional":"1038","funcionalnombre":"Formación","lat":-66.47,"lng":9.09,"idestado":"00","idmunicipio":"00","idparroquia":"00","idcircunscripcion":"0","estadonombre":"","municipionombre":"","parroquianombre":"","circunscripcionnombre":"","centronombre":"VENEZUELA"},{"idrespuesta":"243","respuesta":"Transcriptor","codcne":"00000000000","descripcion":"Transcriptor","codcnenombre":"","idfuncional":"1038","funcionalnombre":"Formación","lat":-66.47,"lng":9.09,"idestado":"00","idmunicipio":"00","idparroquia":"00","idcircunscripcion":"0","estadonombre":"","municipionombre":"","parroquianombre":"","circunscripcionnombre":"","centronombre":"VENEZUELA"}],"formularios":[{"idorganizacion":"","idevento":"","idtipoformulario":"FORM","tipoformulario":"FORMACION","idformulario":"FORM","formulario":"Caracteristicas","identificacion":"V6505691","preguntas":[{"idpregunta":"3","pregunta":"Experiencia Docente","respuestas":[{"idrespuesta":"1","respuesta":"Si","seleccionada":1}]}]}]}
