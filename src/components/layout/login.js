import React,{useEffect,useState} from 'react';
import { useRecoilState,useRecoilValue, useSetRecoilState} from "recoil";
import { flagLogin,login,funcionales,roles} from '../store/atom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import TuneIcon from '@material-ui/icons/Tune';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Footer from './footer'
import Avatar from '@material-ui/core/Avatar';
import MouseIcon from '@material-ui/icons/Mouse';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';


import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//import { Application } from '../../App';
import {useFetch}  from '../hooks/usefetch'
import {useFetchPost}  from '../hooks/usefetchpost'
import {useGeolocation}  from '../hooks/usegeolocation'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © Octopus '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 
  inline: {
    display: 'inline',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];
const config = {
  apiKey: "AIzaSyACfHViztnTvTHEdPC5tm-lMebjTQEwIsY",
  authDomain: "vinotinto-7f56f.firebaseapp.com",
  databaseURL: "https://vinotinto-7f56f.firebaseio.com",
  projectId: "vinotinto-7f56f",
  storageBucket: "vinotinto-7f56f.appspot.com",
  messagingSenderId: "892393449979",
  appId: "1:892393449979:web:f8a44a97924a8aeaee435e",
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  //signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
   // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
     //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
       // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
       // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    
    signInSuccessWithAuthResult: () => false
  }
  // ,callbacks:{
  //          signInSuccess:(user)=>{
  //           alert(JSON.stringify(user))
  //            //SignIn(user)
  //          }
  //        }
};
//firebase.initializeApp(config);
//https://github.com/firebase/firebaseui-web-react#using-firebaseauth-with-local-state
//https://stackoverflow.com/questions/60420906/how-do-i-implement-firebase-authentication-with-local-state-with-hooks
export default function Login(props) {

   
  const [LOGIN, setLOGIN] = useRecoilState(login);
  const [FLAGLOGIN, setFLAGLOGIN] = useRecoilState(flagLogin);
  const [FUNCIONALES, setFUNCIONALES] = useRecoilState(funcionales);
  const [ROLES, setROLES] = useRecoilState(roles);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [state, setState] = React.useState({
    top: true,
    left: true,
    bottom: false,
    right: false,
  });
  const classes = useStyles();
  const [loginauth, setLoginAuth] = useState({uid:"0",name:"",photoURL:"",email:"",phone:"",cedula:"",lat:0,lng:0})
  const [open, setOpen] = useState(false);
  const [flagDialog, setFlagDialog] = useState(false);
  
  const [pos, setPos] = useState(null);
  const [flag, setFlag] = useState(false);
  const [flagAsignacion, setFlagAsignacion] = useState(false);
  const [openSnackBar,setOpenSnackBar]= useState(true);
  const [mensajeSnackBar,setMensajeSnackBar]= useState("");
  const [ data, isLoading, isError , fetchData] = useFetch("");
  const [ dataF, isLoadingF, isErrorF , fetchDataF] = useFetch("");
  const [ dataR, isLoadingR, isErrorR , fetchDataR] = useFetch("");
  const [signedIn, setSignIn]= useState(false);
  const [ dataPost, isLoadingPost, isErrorPost , postData] = useFetchPost('');
  const stategeo = useGeolocation();
  const handleLogin2 = (event) => {
    //alert()
    setOpenLogin(true)
    setAnchorEl(event.currentTarget);
   
  };
  const handleCloseLogin = () => {
    setAnchorEl(null);
    
   setOpenLogin(false)
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleDrawer = (side, open) => event => {
    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //setGETINDICADORES(true)
    setState({ ...state, [side]: open });
  };
  useEffect(() => {
    //NO BORRAR ACTIVA AUTOMATICO
    // const unregisterAuthObserver = firebase.auth()
    //   .onAuthStateChanged(
    //     (user) => {
    //      // alert(JSON.stringify(user))
    //       SignIn(user)
    //       //setSignIn({isSignedIn: !!user})
    //     }
    //   );
  
    // // Now you either return just unregisterAuthObserver
    // // which will be called when the component is unmounted
    // return unregisterAuthObserver;
  

  }, []); // Important, pass an empty array so to execute useEffect hook only once

//   useEffect(() => {   
//     //alert(user)
//     firebase.auth().onAuthStateChanged(
//       user=>{
//        // alert(JSON.stringify(user))
   
//         SignIn(user)
//       }
  
//     )
     
// },[]);
function SignIn(user) {
     // alert("firebase user "+JSON.stringify(user))
   //  console.log(JSON.stringify(user))
      var loginn={id:user.providerData[0].uid,name:user.displayName,photoURL:user.photoURL,email:user.email,phone:user.metadata.phoneNumber,cedula:"",photo:"",lat:0,lng:0,idorg:0,org:"",idfuncional:0,funcional:"",idrol:0,rol:"",codcne:"000000000"}
      setLoginAuth(loginn)
   
      //alert(JSON.stringify(login.email))
      //setMensajeSnackBar(user.displayName)
      setOpenSnackBar(true)
      if (loginn.email!=""){
        setMensajeSnackBar("Autenticando la asignacion del correo:"+user.email+" de "+user.displayName)
        //user.email="ppazpurua@gmail.com"
        const url='http://openfaroapi.azurewebsites.net/api/autenticacionapp?login='+user.email+'&clave=9999&idfaroaplicacion=3&plataforma=SIN&uuid=SIN'
     //   console.log(url)
        fetchData(url)
       
      // fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337');
      //AQUI LA LA AUTENTICACION
     
     
      var log={mail:"ppazpu@gmail.com",idorganiacion:1,organizacion:"AD",idfuncional:2,funcional:"Comando",codcne:1212122929,nombrecodcne:"Colegio XYZ",idrol:202,rol:"coordinador",}
    }else{
      
      setMensajeSnackBar("Debe presionar el Boton de Google para autenticarse...")
    }

  }
  useEffect(() => {
    //alert(JSON.stringify(data))
    if (isLoading) {
    //  setFlagCircular(true)
    }
    if ((data!=undefined)&&(!isLoading)&&(data.length>0))      
    {
      if (data[0].id==1){
     // alert(JSON.stringify(data))
      setOpen(true)
      }else{
        setFlagDialog(true)
   
      }
      //ROJO
    }
  },[data,isLoading]);
  
  function flogin(pos){
           loginauth.idorg=data[pos].idorganizacion;
           loginauth.org=data[pos].nombreorganizacion;
           loginauth.idfuncional=data[pos].idnodofuncional
          // alert("login"+data[pos].idnodofuncional)
           loginauth.funcional=data[pos].nombrenodofuncional
           loginauth.idrol=data[pos].idrol
          loginauth.rol=data[pos].nombrerol
           loginauth.codcne=data[pos].codigocanonicocne
         //console.log(JSON.stringify(data[pos]))
          //alert(JSON.stringify(loginauth))
          var logcosmosdb={
            "type": "Feature",
            "properties": {
                "mail": loginauth.email,
                "timestamp": new Date(),
                "sistema": "PizarraV1",
                "idorganiacion": data[pos].idorganizacion,
                "organizacion": data[pos].nombreorganizacion,
                "idfuncional": data[pos].idnodofuncional,
                "funcional": data[pos].nombrenodofuncional,
                "codcne":data[pos].codigocanonicocne,
                "nombrecodcne": data[pos].nombrenodoorganizacional,
                "idrol": data[pos].idrol,
                "rol": data[pos].nombrerol,
                "idpartido":data[pos].idpartido,
                "partido":data[pos].nombrepartido,

                "plataforma": "",
                "modelo": "",
                "version": "80",
                "speed": "",
                "ip": "",
                "evento": "login",
                "descripcion": "Acceso al sistema FARO2.0 de : GABRIEL BOYERIZO",
                "idbitacorasql": 0,
                "trigger": {
                    "accion": "sinaccion",
                    "destino": loginauth.email,
                    "mensaje": "Acceso al sistema FARO2.0 de : GABRIEL BOYERIZO",
                    "status": false,
                    "fechaaccion": "2020-04-06T11:25:50.436Z"
                },
                "flag": 1,
                "msj": "Proceso exitoso"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                  stategeo.longitude,
                  stategeo.latitude
                ]
            },
        }
        fetchDataF('https://openfaroapi.azurewebsites.net/api/pizarragetnodosfuncionales?idorganizacion=&codigocne=00000000000&idrol=')
  
        postData("https://faronosql.azurewebsites.net/api/LogPost",logcosmosdb)
   
      //  console.log(logcosmosdb)
           setOpen(false)
           setFLAGLOGIN(true)
           setLOGIN(loginauth)

    
  }
  useEffect(() => {
   // alert(JSON.stringify(dataF))
    if (isLoadingF) {
    //  setFlagCircular(true)
    }
    if ((dataF!=undefined)&&(!isLoadingF)&&(dataF.length>0))      
    {
      //console.log(JSON.stringify(dataF))
      setFUNCIONALES(dataF)

      //alert(JSON.stringify(dataF))
      /////////////////PRENDE LOS INDICADORES  00000000000
        fetchDataR('https://openfaroapi.azurewebsites.net/api/pizarragetroles?idorganizacion=&codigocne=&idnodofuncional=1039')//+idfuncional)
            
            /////////////////PRENDE LOS INDICADORES
    }
  },[dataF,isLoadingF]);
  useEffect(() => {
    // alert(JSON.stringify(dataF))
     if (isLoadingR) {
     //  setFlagCircular(true)
     }
     if ((dataR!=undefined)&&(!isLoadingR)&&(dataR.length>0))      
     {
   //   alert(JSON.stringify(dataR))  
    var roles=[]
     dataR.map(function (r, index, array) {
      // if (index<100){
      
       roles.push({idrol:r.idrol,nombrerol:r.nombrerol,selected:false}); 
      // }
     });
 // alert(JSON.stringify(roles))
     setROLES(roles) 
     props.loginclick(1)     
             /////////////////PRENDE LOS INDICADORES
     }
   },[dataR,isLoadingR]);
function handleCloseSnackBar() {
    // onClick("V3664204")
    //setLoginAuth(login)
    if (FLAGLOGIN==true){
     // props.loginclick() 
      setOpenSnackBar(false)
    }else{
      setMensajeSnackBar("Debe presionar el Boton de Google para autenticarse...")

    }
   }
   const handleClose = () => {
   setFlagDialog(false);
  };
  //////////////////////////////////////
//////////////LOGIN////////////////////
 /////////////////////////////
 ////////////////////////////////////
 const uiConfig = {
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  //signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
  //  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
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
      SignIn(user)
    }
  }
};
  return (
   
          <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="relative"> */}
     

      <AppBar position="static">
      <Toolbar >
        <Avatar alt="Remy Sharp" src={'images/logo.png'}   />

        
          <Typography variant="h6"  className={classes.title}>
            Faro San Roman
          </Typography>
          <div >
         
         <IconButton
           aria-label="account of current user"
           aria-controls="menu-appbar"
           aria-haspopup="true"
           onClick={handleLogin2}
           color="inherit"
         >
           <AccountCircle />
         </IconButton>
         <Menu
           id="menu-appbar"
           anchorEl={anchorEl}
           anchorOrigin={{
             vertical: 'top',
             horizontal: 'right',
           }}
           keepMounted
           transformOrigin={{
             vertical: 'top',
             horizontal: 'right',
           }}
           open={openLogin}
           onClose={handleCloseLogin}
         >
            <MenuItem onClick={() =>{ props.loginclick(2) }    }>SignIn</MenuItem>
            <MenuItem onClick={() =>{ alert()}    }>SignIn</MenuItem>
            <MenuItem onClick={() =>{ alert()}    }>SignIn</MenuItem>
            {/* <MenuItem onClick={() =>{ setOpenLogin(false);setLoginPage(1) }    }>SignIn</MenuItem>
           <MenuItem onClick={() =>{ setOpenLogin(false);setLoginPage(2) }}>SignUp</MenuItem>
           <MenuItem onClick={() =>{ setOpenLogin(false) }}>Configuracion</MenuItem> */}
         </Menu>
       
   
     </div>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
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

     
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          {/* onClose={handleClose} */}
          <Dialog open={open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Seleccion del Rol</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Seleccione el Funcional, Rol y su Codigo CNE para poder ingresar.
          </DialogContentText>
        <List className={classes.root}>
     
     
      {data.map((item, index) => (
        <div>
      <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
        <ListItemAvatar onClick={() =>flogin(index)}>
        <Avatar>
                      <MouseIcon />
                    </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.nombreorganizacion}
          secondary={
            <React.Fragment>
          <Grid container >
          <Grid item key={12} xs={12} sm={12} md={12}>
          
              <Typography variant="h6" component="h6"
               
              >
               {item.nombrenodofuncional}
              </Typography>
              </Grid>
          <Grid item key={11} xs={12} sm={12} md={12}>
              
              <Typography variant="h3" component="h1"
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               {item.nombrerol}
              </Typography>
              </Grid></Grid>
              {item.codigocanonicocne+" "+item.nombrenodoorganizacional}
            </React.Fragment>
            
          }
        />
        
      </ListItem>
      </div>
      ))}
    </List>
    </DialogContent>
      </Dialog>
      <Dialog  aria-labelledby="simple-dialog-title" open={flagDialog}
             PaperProps={{
              style: {
                  backgroundColor: "red",
                  color:"white"
              },
           }}
            >
                     <DialogTitle id="simple-dialog-title">{loginauth.email+' No ha sido registrado en FV2. Por favor comuniquese con el Coordinador Electoral'} </DialogTitle>
                     <DialogActions>
          <Button onClick={handleClose} color="white">
            Cerrar
          </Button>
          
        </DialogActions>
      </Dialog>
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Activismo Ciudadano
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Somos un equipo de expertos trabajando en colaboracion para construir herramientas  en la nube de apoyo a elecciones y la organizacion ciudadana.
            
               </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                  {/* <Button  variant="contained" color="primary"  onClick={() => props.loginclick()}>
                  Login
                  </Button> */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          <Grid item key={12} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="images/persona.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Carnet VinoTinto
                    </Typography>
                    <Typography>
                    Testigos y Observadores dispondran de una interfase que les permitira tener relacion con otros Testigos en el Centro o Parroquia y disponer de comunicaciones jerarquicas de lineamientos y estrategias
                   
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          <Grid item key={11} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="images/geo1.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutAntenasterBottom variant="h5" component="h2">
                    Faro GeoEspacial
                    </Typography>
                    <Typography>
                                        Faro esta evolucionando a un entorno geoespacial basado en tecnologias de UBER y AirBnB para el reconocimiento rapido de Centros de Votacion y Testigos en sus entornos naturales.
 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item key={13} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="images/geo2.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     PoliData
                    </Typography>
                    <Typography>
                    Carnet VinoTinto permitira realizar encuestas y observaciones del entorno electoral y resultados a traves de tecnicas de conteo rapido.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Detalles de Pizarra Electronica
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
      </div>

  );
}

//Digitalisation and new technologies are everywhere - cloud computing, artificial intelligence, big data, and the Internet of things are transforming the world we live in.


//        Digital Banking is the application of technology to every programme and activity undertaken by financial institutions and their customers.
//        Big data refers to extremely large data sets that may be analysed computationally to reveal patterns, trends, and associations, especially relating to human behaviour and interactions.
            