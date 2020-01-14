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
//export const Application = React.createContext({ state: null, dispatch: null });
export const ApplicationPersona = React.createContext({ statep: null, dispatchp: null });

//import PaymentForm from './PaymentForm';
//import Review from './Review';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
        return <AsignacionCedula />
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
 
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [{ dataPost, isLoadingPost, isErrorPost }, postData] = useFetchPost('');
  useEffect(() => {
     dispatchp({
        type: 'LOGIN',
        stateprop: true
      });
   },[]);
  useEffect(() => {
   if (!isLoadingPost&&dataPost!=undefined) {
     // alert("post"+JSON.stringify(dataPost))
      //  setFlagCircular(true)
    }  
  },[dataPost,isLoadingPost]);
  const handleNext = () => {
    if (activeStep==steps.length-1){
      //alert(JSON.stringify(statep.persona.caracteristicas))
      postData("https://f2020.azurewebsites.net/api/FaroFormularioPersonaPost?code=rkmGB0kHPzpU/Nxb7L8NT1PAw6jmOxslIH2eXiyjh9vmFIjFRFblAw==",statep.persona)

      //setActiveStep(1)
    }else{
    setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
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
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <pre>{JSON.stringify(statep.persona.caracteristicas, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
}
