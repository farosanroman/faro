import React,{useEffect,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Footer from './footer'
import Avatar from '@material-ui/core/Avatar';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © Octopus '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}

const useStyles = makeStyles(theme => ({
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
    apiKey: 'AIzaSyDZ08hKl01qFilc3nJ4oRmO8wq49pcsw8s',
    authDomain: 'vinotinto-7f56f.firebaseapp.com',
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    //signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
         // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
         // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
  };
  firebase.initializeApp(config);
export default function Login(props) {
  const classes = useStyles();
  const [loginauth, setLoginAuth] = useState({uid:"0",name:"",photoURL:"",email:"",phone:"",cedula:"",lat:0,lng:0})

  const [flag, setFlag] = useState(false);
  const [flagAsignacion, setFlagAsignacion] = useState(false);
  const [openSnackBar,setOpenSnackBar]= useState(true);
  const [mensajeSnackBar,setMensajeSnackBar]= useState("");
  useEffect(() => {   
    //alert(user)
    //setOpenSnackBar(true)
    //setMensajeSnackBar("Autenticando en Twitter...(useEffect)")
   //A U T O M A T I C O
    firebase.auth().onAuthStateChanged(
      user=>{
        alert(JSON.stringify(user))
        //console.log(JSON.stringify(user))
       //setLoginAuth(login)
        SignIn(user)
      }
  
    )
     
},[]);
function SignIn(user) {
    //  alert("firebase user "+JSON.stringify(user))
      var login={id:user.providerData[0].uid,name:user.displayName,photoURL:user.photoURL,email:user.email,phone:user.metadata.phoneNumber,cedula:"",photo:"",lat:0,lng:0}
      alert(JSON.stringify(login))
      setMensajeSnackBar(JSON.stringify(login))
      setLoginAuth(login)
      setOpenSnackBar(true)
      setMensajeSnackBar("Buscando Persona...")
     // fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337');
      //AQUI LA LA AUTENTICACION
      props.loginclick()
    }
function handleCloseSnackBar() {
    // onClick("V3664204")
     setOpenSnackBar(false)
   }
//   const uiConfig = {
//     signInFlow: 'popup',
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     //signInSuccessUrl: '/signedIn',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//      // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
//        //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
//          // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//          // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//     ],
//     callbacks:{
//       signInSuccess:(user)=>{
//        alert(JSON.stringify(user))
//         //SignIn(user)
//       }
//     }
//   };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <Avatar alt="Remy Sharp" src={'images/logo.png'} className={classes.bigAvatar} />

        
          <Typography variant="h6" color="inherit" noWrap>
            Formacion Tecnologica
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
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
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Pizarra Electronica
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Proyecto de "SoftWare Abierto" en JavaScript  utilizando React.js, Material, Node.js, CosmosDB y MapBox para su construccion. Cada componente esta especialmente diseñado basado en funciones y hooks de React.
            
               </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button  variant="contained" color="primary"  onClick={() => props.loginclick()}>
                  Login
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          <Grid item key={11} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://hdboost.com.ng/loads/2018/11/internet-of-things-hdboost.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutAntenasterBottom variant="h5" component="h2">
                      Interconexión
                    </Typography>
                    <Typography>
                      Con la aparición de la tecnologia 5G nuevas fronteras de interrelaciones estan por ocurrir. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={12} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://socialengineindia.com/images/home/expert1.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Conocimiento
                    </Typography>
                    <Typography>
                      Una nueva sociedad se estaran construyendo a traves la creacion de conocimiento colaborativo.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={13} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://archivosamarillos.blob.core.windows.net/manualesfaro/mapas.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      GeoMapas
                    </Typography>
                    <Typography>
                      Dashboard de representacion GeoEspacial de interacciones del conocimiento.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Detalles de Pizarra Electronica
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}