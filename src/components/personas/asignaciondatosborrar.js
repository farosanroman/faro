import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Asignacion', 'Direcciones', 'Roles'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1:Asignacion...';
    case 1:
      return 'Step 2: Direcciones?';
    case 2:
      return 'Step 3: Otros Roles';
    default:
      return 'Unknown step';
  }
}

export default function AsignacionDatosBorrar() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}
            
            <br/>
           {(activeStep==0)&&(
           <Grid container spacing={3}>
           
           <Grid item xs={12} sm={6} md={3}>
           
        <TextField
                          id="cedula"
                          label="Cedula"
                           //value={re.nombre1}
                            //onChange={handleChangePersona('nombre1')}
                            //defaultValue={re.nombre1}
                            //error={true}
                            margin="dense"
            />
        </Grid>
           </Grid>)}
           {(activeStep==1)&&(
           <Grid container spacing={3}>
           
           <Grid item xs={12} sm={6} md={3}>
           
        <TextField
                          id="correo"
                          label="Correo"
                           //value={re.nombre1}
                            //onChange={handleChangePersona('nombre1')}
                            //defaultValue={re.nombre1}
                            //error={true}
                            margin="dense"
            />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
           
           <TextField
                             id="celular"
                             label="Celular"
                              //value={re.nombre1}
                               //onChange={handleChangePersona('nombre1')}
                               //defaultValue={re.nombre1}
                               //error={true}
                               margin="dense"
               />
           </Grid>
           <Grid item xs={12} sm={6} md={3}>
           
           <TextField
                             id="twt"
                             label="Twitter"
                              //value={re.nombre1}
                               //onChange={handleChangePersona('nombre1')}
                               //defaultValue={re.nombre1}
                               //error={true}
                               margin="dense"
               />
           </Grid>
           </Grid>)}

           {(activeStep==2)&&(
           <Grid container spacing={3}>
           
           <Grid item xs={12} sm={6} md={3}>
           
        <TextField
                          id="rol"
                          label="Rol"
                           //value={re.nombre1}
                            //onChange={handleChangePersona('nombre1')}
                            //defaultValue={re.nombre1}
                            //error={true}
                            margin="dense"
            />
        </Grid>
           </Grid>)}

            </Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}