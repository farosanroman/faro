import React,{useEffect,useState} from 'react';
//import firebase from 'firebase'
import { useRecoilState,useRecoilValue} from "recoil";
import {persona} from '../store/atomfaro';
import {useFirebase} from '../hooks/usefirebase';
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import { useRecoilState, useRecoilValueLoadable} from "recoil";
//import { monederocomponente,onlinestatusflag} from '../../../../go/src/components/store/atom';
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
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {useFetch}  from '../hooks/usefetch'
import {useFetchPost}  from '../hooks/usefetchpost'

//https://m.youtube.com/watch?feature=emb_logo&time_continue=1818&v=mrTPrbSoAx0   react forms hook
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInForm(props) {
  const classes = useStyles();
  const [mensaje,setMensaje]=useState("");
  const [ isLoading, isError , error, user,  signin,signup,signupgmail,signout,deleteuser,sendPasswordResetEmail,confirmPasswordReset] =useFirebase("");
  const [openSnackBar,setOpenSnackBar]= useState(true);
  const [mensajeSnackBar,setMensajeSnackBar]= useState("");
  const [ data, isLoadingFaro, isErrorFaro , fetchData] = useFetch("");
 
 // const [COMPONENTE, setCOMPONENTE] = useRecoilState(monederocomponente);
  function clickSignin(event) {
    //   alert("firebase user "+correo)
    setMensaje("user.user.uid")
    setOpenSnackBar(true)
       signin("ppa@gmail.com","1231232")
     
       //setCUENTA({id:MAIL,name:"Jose Luis Perales",country:"VE",currency:"VES",date:Date()})
      // setSAMPLE(jsonCustomer)
    //  event.preventDefault();
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

     if ((isLoading==false)&&(isError==false)&&(user!=null)){
       
       //alert(JSON.stringify(user.user.uid))
      // {"code":"auth/user-not-found","message":"There is no user record corresponding to this identifier. The user may have been deleted."}
       //alert(JSON.stringify(error))
       //alert(JSON.stringify(user))
       var loginn={id:user.user.uid,name:user.user.displayName,photoURL:user.user.photoURL,email:user.user.email,emailverified:user.user.emailVerified,phone:user.user.phoneNumber,cedula:"V33333",photo:"",lat:0,lng:0,operationType:user.operationType.signIn}
       //var ppa={"user":{"uid":"EYcXmcykgVctpo6WOvobIjXyQfw2","displayName":null,"photoURL":null,"email":"ppa@gmail.com","emailVerified":false,"phoneNumber":null,"isAnonymous":false,"tenantId":null,"providerData":[{"uid":"ppa@gmail.com","displayName":null,"photoURL":null,"email":"ppa@gmail.com","phoneNumber":null,"providerId":"password"}],"apiKey":"AIzaSyACfHViztnTvTHEdPC5tm-lMebjTQEwIsY","appName":"[DEFAULT]","authDomain":"vinotinto-7f56f.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyACfHViztnTvTHEdPC5tm-lMebjTQEwIsY","refreshToken":"AE0u-Nf8caiWYk9QISHVJ5wIuZRlTA8czHAHnjB5jRX8KoQGlxwOMmyQSLiGsOIXMWjxzoJHNsONmuICu422kNz4nOJL-tNIlrBdiToC0CVYZP18rpo9ha6Xy_c5ZoBiVjPnX_O2KCUukcsdwl6OGDrm5Mo66q5ynh2LgF0imSHZxKARGSBTUU0UpWFARnqD9ibudYNN0CJe_lmjO57WkApcgPik8-3d_A","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNjYzOGY4NDlkODVhNWVkMGQ1M2NkNDI1MzE0Y2Q1MGYwYjY1YWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlub3RpbnRvLTdmNTZmIiwiYXVkIjoidmlub3RpbnRvLTdmNTZmIiwiYXV0aF90aW1lIjoxNjAwNzA3OTcyLCJ1c2VyX2lkIjoiRVljWG1jeWtnVmN0cG82V092b2JJalh5UWZ3MiIsInN1YiI6IkVZY1htY3lrZ1ZjdHBvNldPdm9iSWpYeVFmdzIiLCJpYXQiOjE2MDA3MDc5NzIsImV4cCI6MTYwMDcxMTU3MiwiZW1haWwiOiJwcGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInBwYUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m4n5P8r6zwp_8Rjmf3BYhJgnmYKbPR9XppG9QvCsCD3oCKgCkSehGHLZKa7lAOos5hvPD9C5jhxWkxO7R3axkXinGE5EMcMnbTJvKn0N68HqLd4H94VVwaJQ95LdaqiIZfezfgkxGnUCYhtGl8pNysaC6sTQlTRThVpL3vYxoi3fj67IsezvY5ujiEdLxYxEXY4QMilgNv55xDZroGPFhwjbc7brfm-DWtsfOdZvyZDizCsKTChcsp__IlQecfdxDWAYwhy04CvrkgwZlbGcnYpqrATbZoABYRVFbIgWS3gZK89KdeZkpDNGBf6RwhGRoIypVEcbeSJXnSgy91ECIw","expirationTime":1600711572000},"redirectEventId":null,"lastLoginAt":"1600707972787","createdAt":"1599848736863","multiFactor":{"enrolledFactors":[]}},"credential":null,"additionalUserInfo":{"providerId":"password","isNewUser":false},"operationType":"signIn"}
      // alert(loginn.email)
       if (loginn.email!=""){
        //alert(loginn.email)
        setMensajeSnackBar("Autenticando la asignacion del correo:"+user.user.email+" de "+user.displayName)
         //user.email="ppazpurua@gmail.com"
         const url='http://openfaroapi.azurewebsites.net/api/autenticacionapp?login=ppazpurua@gmail.com&clave=9999&idfaroaplicacion=3&plataforma=SIN&uuid=SIN'
      //   console.log(url)
         fetchData(url)
        
       // fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337');
       //AQUI LA LA AUTENTICACION
      
      
       var log={mail:"ppazpu@gmail.com",idorganiacion:1,organizacion:"AD",idfuncional:2,funcional:"Comando",codcne:1212122929,nombrecodcne:"Colegio XYZ",idrol:202,rol:"coordinador",}
     }else{
       
     //  setMensajeSnackBar("Debe presionar el Boton de Google para autenticarse...")
     }
 
   
      //BUSCA PERSONA CON CORREO
      //HACE EL LOG
     }
     if ((isLoading==false)&&(isError==true)){
      // {"code":"auth/user-not-found","message":"There is no user record corresponding to this identifier. The user may have been deleted."}
       //alert(JSON.stringify(error))
       setMensaje(error.code)
     }
    },[isLoading, isError ,error, user, ]); 

    useEffect(() => {
      //alert(JSON.stringify(data))
      if (isLoadingFaro) {
      //  setFlagCircular(true)
      }
      if ((data!=undefined)&&(!isLoadingFaro)&&(data.length>0))      
      {
        
       // alert(JSON.stringify(data))
        if (data[0].id==1){
          //
          //
          //SE AUTENTICO si existe en Faro   SE AUTENTICO
          //
          //
          //
        props.changePage(10)
     
       // setOpen(true)
        }else{
         // setFlagDialog(true)
     
        }
        //ROJO
      }
    },[data,isLoadingFaro]);

    function handleCloseSnackBar() {
      // onClick("V3664204")
      //setLoginAuth(login)
      if (openSnackBar==true){
       // props.loginclick() 
        setOpenSnackBar(false)
      }else{
        setMensajeSnackBar("Debe presionar el Boton de Google para autenticarse...")
  
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() =>clickSignin()}
          >
            Sign In
          </Button>
          <Typography variant="body2" color="secondary">
             {mensaje}
        </Typography>
          <Grid container>
            <Grid item xs>

              <Link href="#" onClick={() => props.changePage(3)} variant="body2">
                {"Forgot password?"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" onClick={() => props.changePage(2)} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Snackbar
          open={openSnackBar}
          autoHideDuration={2000}
          onClose={handleCloseSnackBar}
          anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
       >
               <SnackbarContent style={{backgroundColor:'#1DA1F2',}}
                     message={<span id="client-snackbar">{mensajeSnackBar}</span>}
                />
        </Snackbar>
    </Container>
  );
}

// onClick={() =>{setFlagCircular(true)
//     fetchData('https://f2020.azurewebsites.net/api/FaroFormularioBase?code=5mWvvpNVz/at91R4awZb7g/rSfVWeHbMSARrVFbEdZWtC2fWBaGtnQ==&id=jsonlite');}}