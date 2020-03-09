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
import { Application } from '../../App';
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
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
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
  const { state, dispatch } = React.useContext(Application);
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
       // alert(JSON.stringify(user))
        //console.log(JSON.stringify(user))
       //setLoginAuth(login)
        SignIn(user)
      }
  
    )
     
},[]);
function SignIn(user) {
      //alert("firebase user "+JSON.stringify(user))
      var login={id:user.providerData[0].uid,name:user.displayName,photoURL:user.photoURL,email:user.email,phone:user.metadata.phoneNumber,cedula:"",photo:"",lat:0,lng:0}
      setLoginAuth(login)
      // alert(JSON.stringify(login))
      //setMensajeSnackBar(user.displayName)
      setOpenSnackBar(true)
      setMensajeSnackBar("Autenticando la asignacion del correo:"+user.email+" de "+user.displayName)
      dispatch({
        type: 'FLAGLOGIN',
        stateprop:true
      });
      dispatch({
        type: 'LOGIN',
        stateprop:login
      });
      // fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337');
      //AQUI LA LA AUTENTICACION
     
    }
function handleCloseSnackBar() {
    // onClick("V3664204")
    //setLoginAuth(login)
    props.loginclick() 
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
            Digital World
          </Typography>
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
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Digital World
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            The rapid growth of the digital world brings with it lots of challenges and opportunities for science, the economy, and society. Digitalisation and new technologies are everywhere - cloud computing, artificial intelligence, big data, and the Internet of things are transforming the world we live in. The increasing ubiquity of devices and the availability of data has global implications that need useful, innovative and reusable solutions.
               </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <StyledFirebaseAuth uiConfig={config} firebaseAuth={firebase.auth()} />
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
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNSS0fPAp5FoonWe8iRjyjAYTFpisvBmQTSLyfXPwg6nUOep8f"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutAntenasterBottom variant="h5" component="h2">
                    Information systems
                    </Typography>
                    <Typography>
                    Information systems focus on integrating information technology solutions and business processes to meet the information needs of businesses and other enterprises.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={12} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4yO0mK4EqtUFj0SMbzgvmJUTgLAGgbTzbhxY5VoRvi9vvPjSx"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Digital banking
                    </Typography>
                    <Typography>
                    Digital Banking is the application of technology to every programme and activity undertaken by financial institutions and their customers. Financial technology (or FinTech) is part of the broad definition of digital banking.
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
                      Big Data
                    </Typography>
                    <Typography>
                    Big data refers to extremely large data sets that may be analysed computationally to reveal patterns, trends, and associations, especially relating to human behaviour and interactions.
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