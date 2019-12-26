import React,{useEffect} from 'react';
// PARA BUSCAR PERSONA EN VINOTINTO
//import { Application } from '../App';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Application } from '../../App';

import {useFetch}  from '../hooks/usefetch'

var config = {
  apiKey: "AIzaSyDZ08hKl01qFilc3nJ4oRmO8wq49pcsw8s",
  authDomain: "vinotinto-7f56f.firebaseapp.com",
// projectId: "vinotinto-7f56f",
//  storageBucket: "vinotinto-7f56f.appspot.com",
//  messagingSenderId: "892393449979",
//  appId: "1:892393449979:web:f8a44a97924a8aeaee435e"
};
firebase.initializeApp(config);
export default function DialogoLogin(props) {
  const { state, dispatch } = React.useContext(Application);
  const [open, setOpen] = React.useState(true);
  const [cedula, setCedula] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [cedulaError, setCedulaError] = React.useState({flag:false,helper:"ok"});
  const [login, setLogin] = React.useState(false);
  const [loginauth, setLoginAuth] = React.useState({uid:"0",name:"",photoURL:"",email:"",phone:"",cedula:"",lat:0,lng:0})

  const [persona,setPersona]=React.useState("")
  const [openSnackBar,setOpenSnackBar]= React.useState(false);
  const [mensajeSnackBar,setMensajeSnackBar]=React.useState("");

const [{ data, isLoading, isError }, fetchData] = useFetch("");
useEffect(() => {
  //alert(JSON.stringify(data)+" "+JSON.stringify(isLoading))  
  if ((data!=undefined)&&(!isLoading))

  {
  
    props.login()
  }
},[data,isLoading]);


const uiConfig = {
  //https://www.youtube.com/watch?v=zq0TuNqV0Ew
  //https://stackoverflow.com/questions/37603118/firebase-auth-onauthstatechanged-not-working
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  //signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
     //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
       // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
       // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  callbacks:{
    signInSuccess:(user)=>{
    // alert(JSON.stringify(user))

      //SignIn(user)
    }
  }
};
useEffect(() => {
  //setOpenSnackBar(true)
  //setMensajeSnackBar("Autenticando en Twitter...")
 //A U T O M A T I C O
 fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337');
  firebase.auth().onAuthStateChanged(
    user=>{
      
  // alert("automatico"+JSON.stringify(user))
      //setLoginAuth(login)
     
      SignIn(user)
    }

    
  )
   
},[]);
function SignIn(user) {
//  alert("firebase user "+JSON.stringify(user))
  var login={id:user.providerData[0].uid,name:user.displayName,photoURL:user.photoURL,email:user.email,phone:user.metadata.phoneNumber,cedula:"",photo:"",lat:0,lng:0}

  setMensajeSnackBar(JSON.stringify(login))
  setLoginAuth(login)
  setOpenSnackBar(true)
  setMensajeSnackBar("Buscando Persona...")
  fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337');
  //AQUI LA LA AUTENTICACION
 // props.login()
}

//alert("fetchDATA"+JSON.stringify(state)) 



function handleGetLogin()  {   //de Faro
  //Cuando no se activa el autimatico
  setOpenSnackBar(true)
  setMensajeSnackBar("Autenticando a ")
  if (cedula=='xxx'){
      fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337');
    }
  }
    
  
    function handleClose() {
     // onClick("V3664204")
      setOpen(false);
    }

    
    function handleCloseSnackBar() {
      // onClick("V3664204")
       setOpenSnackBar(false)
     }
  function handleClickOpen(props) {
    setOpen(true);
  }
 
  const handleChangeCambios=input=>e=>{
 
if (input=="correo"){
  //var flag=/\S+@\S+\.\S+/.test(e.target.value)
  
 // var flag=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(e.target.value)
  var flag=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e.target.value)

  if (flag){       
   // setCorreoError({flag:false,helper:"Sintaxis Correcta"})
       //this.setState({errorCelular:false,helperTextCelular:"Sintaxis Correcta"})
   }else{
   // setCorreoError({flag:true,helper:"Sintaxis Inorrecta"})
       //this.setState({errorCelular:true,helperTextCelular:"Sintaxis Erronea"})
   }
}
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
  return (
    <div>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={3000}
          onClose={handleCloseSnackBar}
          anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
       >
               <SnackbarContent style={{backgroundColor:'#1DA1F2',}}
                     message={<span id="client-snackbar">{mensajeSnackBar}</span>}
                />
        </Snackbar>
      <Button   color="inherit" onClick={handleClickOpen}>
    
      <Typography >
     
      
      </Typography>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Control de Acceso</DialogTitle>
        <DialogContent>
          <DialogContentText >
            Escriba la cedula.
          </DialogContentText>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleGetLogin} color="primary">
            LOGIN
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
