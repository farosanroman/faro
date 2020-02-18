import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AsignacionCedula from './asignacioncedula';
import AsignacionDirecciones from './asignaciondirecciones';
import AsignacionRol from './asignacionrol';
import AsignacionOrganizacion from './asignacionorganizacion';
import { reducer, defaultState } from '../../ContextPersona';

import {useFetchPost}  from '../hooks/usefetchpost'
import CircularProgress from '@material-ui/core/CircularProgress';
//export const Application = React.createContext({ state: null, dispatch: null });
export const ApplicationPersona = React.createContext({ statep: null, dispatchp: null });

//import PaymentForm from './PaymentForm';
//import Review from './Review';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Faro del Cabo de San Roman
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const steps = ['Cedula', 'Direcciones', 'Rol','Organizacion','Asignacion'];

function getStepContent(step) {
  switch (step) {
    case 0:
        return (
        
        <AsignacionCedula />
        
        )
     // return <AddressForm />;
    case 1:
            return <AsignacionDirecciones />
      //return <PaymentForm />;
    case 2:
            return <AsignacionRol />
    case 3:
            return <AsignacionOrganizacion />
    case 4:
        return <Copyright />
     // return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function AsignacionPasos() {
  const [statep, dispatchp] = React.useReducer(reducer, defaultState);
  const { statepp, dispatchpp  } = React.useContext(ApplicationPersona);
    
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [ dataPost, isLoadingPost, isErrorPost , postData] = useFetchPost('');
  
  const [ dataPost2, isLoadingPost2, isErrorPost2 , postData2] = useFetchPost('');
  const [flagCircular, setFlagCircular] = React.useState(false);
  useEffect(() => {
   // alert("pasos "+JSON.stringify(statep.persona.caracteristicas[1]))
     dispatchp({
        type: 'LOGIN',
        stateprop: true
      });
   },[]);
  useEffect(() => {
   if (!isLoadingPost&&dataPost!=undefined) {
      alert("post"+JSON.stringify(dataPost))
      //  setFlagCircular(true)
      setFlagCircular(false)
      setActiveStep(0)

    }  
  },[dataPost,isLoadingPost]);
  useEffect(() => {
    if (!isLoadingPost2&&dataPost2!=undefined) {
       alert("post"+JSON.stringify(dataPost2))
       //  setFlagCircular(true)
       setFlagCircular(false)
       setActiveStep(0)
 
     }  
   },[dataPost2,isLoadingPost2]);
  const handleNext = () => {

    if (activeStep==steps.length-1){
      setFlagCircular(true)
      //alert(JSON.stringify(statep.persona.caracteristicas))
      postData("https://openfaroapi.azurewebsites.net/api/personaspost",ppaa)

     // postData2("https://f2020.azurewebsites.net/api/FaroFormularioPersonaPost?code=rkmGB0kHPzpU/Nxb7L8NT1PAw6jmOxslIH2eXiyjh9vmFIjFRFblAw==",statep.persona)

      //setActiveStep(1)
    }else{
    setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
   // alert("back "+JSON.stringify(statep.persona.caracteristicas[1]))
     
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
     
      <main className={classes.layout}>
      
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Asignacion al Faro V2.0
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} orientation="horizontal">
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                 Gracias por el Registro de nuestro Ciudadano
                </Typography>
                <Typography variant="subtitle1">
                  El ciudadano ha sido asignado.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                 <ApplicationPersona.Provider value={{ statep, dispatchp }}>
                     {getStepContent(activeStep)}
                
                 </ApplicationPersona.Provider>
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button  onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button 
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={false}
                  >
                    {activeStep === steps.length - 1 ? 'Asignar' : 'Proximo'}
                  </Button> {flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={17}   thickness={4} className={classes.progress} />}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <pre>{JSON.stringify(statep.persona, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
}


var ppaa=
{
  "flag": "1",
  "msj": "",
  "flagasignacion": "1",
  "idorganizacion": "10",
  "organizacion": "Mesa de la Unidad Democrática",
  "nombre1": "ALZRIN",
  "nombre2": "OLEVITH",
  "apellido1": "ORTA",
  "apellido2": "",
  "identificacion": "V11309550",
  
  "id": "V11309550",
  "pasaporte": "V11309550",
  "idnacionalidad": 245,
  "nacionalidad": "Venezuela",
  "idpaisnacimiento": 245,
  "paisnacimiento": "Venezuela",
  "idestadocivil": 2,
  "estadocivil": "Casado(a)",
  "idsexo": 2,
  "sexo": "Masculino",
  "fechanacimientovar": "1972/12/13",
  "fechanacimientojson": "1972-12-13T00:00:00.000Z",
  "idtipopersona": 25,
  "tipopersona": 25,
  "idprofesion": 40,
  "profesion": "SIN ASIGNAR",
  "idocupacion": "",
  "ocupacion": "",
  "idcaracteristicaopcion": 7,
  "re": [
    {
      "idformulario": "RE",
      "formulario": "Registro Electoral Nacional",
      "idpregunta": "RE",
      "pregunta": "Centro de Votación",
      "idrespuesta": "RE",
      "respuesta": "130902021",
      "codcne": "130902021",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 10.49501,
      "lng": -66.82804,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "MIRANDA",
      "municipionombre": "SUCRE",
      "parroquianombre": "LEONCIO MARTINEZ",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "130902021"
    }
  ],
  "direcciones": [
    {
      "idformulario": "DIR",
      "formulario": "Direcciones",
      "idpregunta": "DIR",
      "pregunta": "Direcciones",
      "idrespuesta": "TW",
      "respuesta": "@alzrin",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "@alzrin"
    },
    {
      "idformulario": "DIR",
      "formulario": "Direcciones",
      "idpregunta": "DIR",
      "pregunta": "Direcciones",
      "idrespuesta": "TC",
      "respuesta": "04168330312",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "04168330312"
    },
    {
      "idformulario": "DIR",
      "formulario": "Direcciones",
      "idpregunta": "DIR",
      "pregunta": "Direcciones",
      "idrespuesta": "EM",
      "respuesta": "alzrin@gmail.com",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "alzrin@gmail.com"
    }
  ],
  "roles": [
    {
      "idformulario": "ROL",
      "formulario": "Rol",
      "idpregunta": "ROL",
      "pregunta": "Asignacion",
      "idrespuesta": "242",
      "respuesta": "Soporte Electoral",
      "codcne": "00000000000",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "1038",
      "funcionalnombre": "Formación",
      "lat": 9.09,
      "lng": -66.47,
      "idestado": "00",
      "idmunicipio": "00",
      "idparroquia": "00",
      "idcircunscripcion": "0",
      "idcentro": "000",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "VENEZUELA",
      "centrodireccion": "",
      "texto": "00000000000"
    }
  ],
  "caracteristicas": [
    {
      "idformulario": "FORM",
      "formulario": "Caracteristicas",
      "idpregunta": "1",
      "pregunta": "Experiencia Electoral",
      "idrespuesta": "1",
      "respuesta": "Alta",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "Alta"
    },
    {
      "idformulario": "FORM",
      "formulario": "Caracteristicas",
      "idpregunta": "2",
      "pregunta": "Formacion",
      "idrespuesta": "2",
      "respuesta": "TSU / Univ. Incompleta",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "TSU / Univ. Incompleta"
    },
    {
      "idformulario": "FORM",
      "formulario": "Caracteristicas",
      "idpregunta": "3",
      "pregunta": "Experiencia Docente",
      "idrespuesta": "1",
      "respuesta": "Si",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "Si"
    },
    {
      "idformulario": "FORM",
      "formulario": "Caracteristicas",
      "idpregunta": "4",
      "pregunta": "Organizacion",
      "idrespuesta": "6",
      "respuesta": "SC",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "SC"
    },
    {
      "idformulario": "FORM",
      "formulario": "Caracteristicas",
      "idpregunta": "5",
      "pregunta": "Calificacion Formacion Electoral",
      "idrespuesta": "2",
      "respuesta": "Media",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "Media"
    },
    {
      "idformulario": "FORM",
      "formulario": "Caracteristicas",
      "idpregunta": "6",
      "pregunta": "Formación Electoral 2018",
      "idrespuesta": "2",
      "respuesta": "No",
      "codcne": "",
      "descripcion": "",
      "codcnenombre": "",
      "idfuncional": "",
      "funcionalnombre": "",
      "lat": 0,
      "lng": 0,
      "idestado": "",
      "idmunicipio": "",
      "idparroquia": "",
      "idcircunscripcion": "",
      "idcentro": "",
      "idmesa": "",
      "estadonombre": "",
      "municipionombre": "",
      "parroquianombre": "",
      "circunscripcionnombre": "",
      "centronombre": "",
      "centrodireccion": "",
      "texto": "No"
    }
  ]
}