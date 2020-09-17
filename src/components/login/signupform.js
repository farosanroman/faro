import React,{useEffect,useState} from 'react';

import firebase from 'firebase'
import {useFirebase} from '../hooks/usefirebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { useRecoilState, useRecoilValueLoadable} from "recoil";

//import { monederocomponente,onlinestatusflag} from '../../../../go/src/components/store/atom';
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
//import { IoLogoGoogle } from 'react-icons/fa';
import {FaGoogle } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    margin: theme.spacing.unit * 0,
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [ isLoading, isError , error, user,  signin,signup,signupgmail,signout,deleteuser,sendPasswordResetEmail,confirmPasswordReset] =useFirebase("");
  const [loginauth, setLoginAuth] = useState({uid:"0",name:"",photoURL:"",email:"",phone:"",cedula:"",lat:0,lng:0})

  //const [COMPONENTE, setCOMPONENTE] = useRecoilState(monederocomponente);
  const [ dataPost, isLoadingPost, isErrorPost , postData] = useFetchPost('');
  const [flagCircular, setFlagCircular] = React.useState(false);
  
  const [nombre1, setNombre1] = React.useState("");
  const [nombre2, setNombre2] = React.useState("");
  const [apellido1, setApellido1] = React.useState("");
  const [apellido2, setApellido2] = React.useState("");
  
  const [correo, setCorreo] = React.useState("");
  const [correoError, setCorreoError] = React.useState({flag:false,helper:"ok"});
  const [pwd, setPwd] = React.useState("");
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
    function SignIn(user) {
      // alert("firebase user "+JSON.stringify(user))
       var login={id:user.providerData[0].uid,name:user.displayName,photoURL:user.photoURL,email:user.email,phone:user.metadata.phoneNumber,cedula:"",photo:"",lat:0,lng:0}
       //login.email=""
       setLoginAuth(login)
      // setControlmenues((loginauth.email=="ppazpurua@gmail.com")||(loginauth.email=="rpicoh@gmail.com")||(loginauth.email=="oazpurua@gmail.com"))
    
       // alert(JSON.stringify(login))
       //setMensajeSnackBar(user.displayName)
       
     }
    const handleChangeCambios=input=>e=>{ 
      if (input=="N1"){        
        setNombre1(e.target.value)
      }
      if (input=="A1"){        
        setApellido1(e.target.value)
      }
      if (input=="EM"){
          const isValid = inputs[0].isValid(e.target.value);
          if (isValid){
            setCorreoError({flag:false,helper:"Sintaxis Correcta"})
        
          } else{
            setCorreoError({flag:true,helper:"Sintaxis Incorrecta"})
          }
         setCorreo(e.target.value)
        }
        if (input=="PW"){
        setPwd(e.target.value)
        }
       }  
        function clickRegistro(type) {
         //   alert("firebase user "+correo)
         if (type=="firebase"){  
         signup("ppa@gmail.com","1231232")
            
         }
         if (type=="google"){  
          // signup("ppa@gmail.com","1231232")
             signupgmail()
          }
            //setCUENTA({id:MAIL,name:"Jose Luis Perales",country:"VE",currency:"VES",date:Date()})
           // setSAMPLE(jsonCustomer)
           //event.preventDefault();
          }
         function handleSubmit(event) {
           // alert('A name was submitted: ' + correo);
          //  setFlagCircular(true)
          //  //alert(JSON.stringify(customer))
          //  postData("https://monederoapi.azurewebsites.net/api/PostCutomer?code=AlQBaa9sWYAUNeRpUS6S0O5ZBJodGJxY89bZcwTRbsQ1YoaOReNBMQ==",customer)

            event.preventDefault();
          }
          useEffect(() => {   
            console.log("isLoading:"+isLoading+" isError:"+isError+" error:"+error+" user:"+JSON.stringify(user) )
          // signup("pppazpurua@gmail.com","123123")
         //  signin("pppazpurua@gmail.com","123123")
          // signout("pppazpurua@gmail.com","123123")
          // deleteuser("pppazpurua@gmail.com","123123")
           ///signupgmail()   
           //sendPasswordResetEmail("ppazpurua@gmail.com")  
           //123789
          },[isLoading, isError ,error, user, ]); 

          // useEffect(() => {
            
          //   if (!isLoadingPost&&dataPost!=undefined) {
          //    //  alert("post"+JSON.stringify(dataPost))
          //      //  setFlagCircular(true)
          //      setFlagCircular(false)
               
         
          //    }  
          //  },[dataPost,isLoadingPost]);
          
           const uiConfig = {
            signInFlow: 'popup',
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
            //signInSuccessUrl: '/signedIn',
            // We will display Google and Facebook as auth providers.
            signInOptions: [
              firebase.auth.OAuthProvider('microsoft.com'),
              firebase.auth.TwitterAuthProvider.PROVIDER_ID,
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
                
             //   firebase.auth.MicrosoftAuthProvider.PROVIDER_ID, 
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                  firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                  
                 // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
            ],
            callbacks:{
              signInSuccess:(user)=>{
                alert(JSON.stringify(user))
                //SignIn(user)
              }
            }
          }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
                value={nombre1}
                onChange={handleChangeCambios('N1')}
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
                value={apellido1}
                onChange={handleChangeCambios('A1')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={correo}
                onChange={handleChangeCambios('EM')}
                error={correoError.flag}     
                helperText={correoError.helper}
                defaultValue={correo}
        
              />


            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={pwd}
                onChange={handleChangeCambios('PW')}
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quieres ser contactado por correo."
              />
            </Grid>
            <Grid item xs={12}>
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() =>clickRegistro("firebase")}
          >
            Sign Up
          </Button>
          </Grid>
          <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<FaGoogle />}
            onClick={() =>clickRegistro("google")}
          >
            Google
          </Button>
          </Grid>
          </Grid> 
          {flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={10}   thickness={4} className={classes.progress} />}
          <Grid container justify="flex-end">
            <Grid item>
            <Link href="#" onClick={() => props.changePage(1)} variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
          {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}

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
