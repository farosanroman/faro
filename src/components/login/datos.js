import React,{useEffect} from 'react';

import { useRecoilState, useRecoilValueLoadable} from "recoil";
import { monederocomponente,onlinestatusflag} from '../store/atom';
import {useFetchPost}  from '../hooks/usefetchpost'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://reactjs.com/">
        BlackHole
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 140,
  },  alignItemsAndJustifyContent: {
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formSelect: {
    width: '100%', // Fix IE 11 issue.
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    margin: theme.spacing.unit * 0,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [COMPONENTE, setCOMPONENTE] = useRecoilState(monederocomponente);
  const [ dataPost, isLoadingPost, isErrorPost , postData] = useFetchPost('');
  const [flagCircular, setFlagCircular] = React.useState(false);
  const [nombre1, setNombre1] = React.useState("");
  const [nombre2, setNombre2] = React.useState("");
  const [apellido1, setApellido1] = React.useState("");
  const [apellido2, setApellido2] = React.useState("");
  
  const [correo, setCorreo] = React.useState("");
  const [correoError, setCorreoError] = React.useState({flag:false,helper:"ok"});
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
    }])
    const [value, setValue] = React.useState('female');
    const [state, setState] = React.useState({
      nacionalidad: '',
      name: 'hai',
    });
  
    const handleChangeNacionalidad = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
    const handleChangeSex = (event) => {
      setValue(event.target.value);
    };
  
  
    const handleChangeCambios=input=>e=>{
 

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

        }
        function clickRegistro() {
            alert("firebase user "+correo)
            //setCUENTA({id:MAIL,name:"Jose Luis Perales",country:"VE",currency:"VES",date:Date()})
           // setSAMPLE(jsonCustomer)
           //event.preventDefault();
          }
         function handleSubmit(event) {
           // alert('A name was submitted: ' + correo);
           setFlagCircular(true)
           //alert(JSON.stringify(customer))
           postData("https://monederoapi.azurewebsites.net/api/PostCutomer?code=AlQBaa9sWYAUNeRpUS6S0O5ZBJodGJxY89bZcwTRbsQ1YoaOReNBMQ==",customer)

            event.preventDefault();
          }
          useEffect(() => {
            
            if (!isLoadingPost&&dataPost!=undefined) {
             //  alert("post"+JSON.stringify(dataPost))
               //  setFlagCircular(true)
               setFlagCircular(false)
               
         
             }  
           },[dataPost,isLoadingPost]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Datos Personales
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container  justify="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Primer Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item  alignItems="center" xs={12} sm={6}>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{shrink: true,}}
               />

            </Grid>
            <Grid item   xs={12} sm={6}>
            <div className={classes.alignItemsAndJustifyContent}>
               <FormLabel style={{ display: 'flex' }} component="legend"><div>Sexo</div><span>&nbsp;&nbsp;</span></FormLabel>
             <RadioGroup alignItems="center" row={true} aria-label="gender" style={{ display: 'flex' }} name="gender1" value={value} onChange={handleChangeSex}>
                <FormControlLabel value="female" control={<Radio />} label="F" />
                <FormControlLabel value="male" control={<Radio />} label="M" />
             </RadioGroup>
             </div>
            </Grid>
            <Grid item  alignItems="center" xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formSelect} >
             <InputLabel htmlFor="outlined-nacionalidad-native-simple">Nacionalidad</InputLabel>
            <Select
             native
             value={state.age}
             onChange={handleChangeNacionalidad}
         
             label="Nacionalidad"
             inputProps={{
               name: 'nacionalidad',
               id: 'outlined-nacionalidad-native-simple',
              }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
            </Grid>
            <Grid item  alignItems="center" xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formSelect} >
        <InputLabel htmlFor="outlined-residencia-native-simple">Residencia</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChangeNacionalidad}
         
          label="Residencia"
          inputProps={{
            name: 'residencia',
            id: 'outlined-residencia-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="telefono"
                label="Phone"
                name="phone"
                autoComplete="phone"
                value={correo}
                onChange={handleChangeCambios('EM')}
                error={correoError.flag}     
                helperText={correoError.helper}
                defaultValue={correo}
        
              />


            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            //onClick={() =>clickRegistro()}
          >
           Register
          </Button>
          {flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={10}   thickness={4} className={classes.progress} />}
        
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
var customer=
{
  "id":"ppazpurua@gmail.com",
  
  "type":"customer",
  "pk":"ppazpurua@gmail.com",
  "first_name": "Julio",
  "last_name": "Hernandez",
  "email_address": "ppazpurua@gmail.com",
  "phone_number": "string",
  "nationality": "VE",
  "employment_status": "self_employed",
  "address": {
    "line_1": "Avenida XXXXX 5",
    "line_2": "Edif Lomas Piso 2A",
    "postal_code": "08291",
    "city": "Bogota",
    "region": "La Avenida",
    "country": "CO"
  },
  "identificacion": {
    "type": "PASAPORTE",
    "country": "VE",
    "number": "2323232323233323",
    "status": "ACTIVO",
    "expiration_date": "2018-12-25T00:00:00.000Z"
  }

}
