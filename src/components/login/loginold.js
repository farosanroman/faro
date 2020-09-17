import React,{useEffect,useState} from 'react';
import clsx from 'clsx';
import { useRecoilState,useSetRecoilState} from "recoil";
//import { jsondocument} from '../store/atom';
import { mail,cliente } from '../store/atom';
import {usePosition} from '../hooks/useposition';

import {getGeolocation,getLocation22} from '../hooks/getlocation'
import {useFetchPost}  from '../hooks/usefetchpost'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MouseIcon from '@material-ui/icons/Mouse';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Link from '@material-ui/core/Link';
//import Footer from '../layout/footer'
import Avatar from '@material-ui/core/Avatar';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'
import {useFirebase} from '../hooks/usefirebase';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
//import SignInSide from './signinside'
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

const drawerWidth2 =300;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
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

export default function Login(prop) {
  //tintanegra2020@outlook.com  BLACK69$
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const open = Boolean(anchorEl);
  //const [openPerfil, setOpenPerfil] = React.useState(false);
  //const openEl = Boolean(anchorEl);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [ isLoading, isError , user,  signin,signup,signout,sendPasswordResetEmail,confirmPasswordReset] =useFirebase("");
  const [loginauth, setLoginAuth] = useState({uid:"0",name:"",photoURL:"",email:"",phone:"",cedula:"",lat:0,lng:0})

  const [ dataPost, isLoadingPost, isErrorPost , postData] = useFetchPost('');
  const { latitude, longitude, timestamp, accuracy, error } = usePosition();
  const [opendialog, setOpendialog] = useState(false);
  const [flagAsignacion, setFlagAsignacion] = useState(false);
  const [openSnackBar,setOpenSnackBar]= useState(true);
  const [mensajeSnackBar,setMensajeSnackBar]= useState("");
  const [snackbarcolor, setSnackbarcolor]=useState('#1DA1F2')
  const [MAIL, setMAIL] = useRecoilState(mail);
  const [CLIENTE, setCLIENTE] = useRecoilState(cliente);
  //const [JSONDOC, setJSONDOC] = useRecoilState(jsondocument);
  const [controlmenues, setControlmenues] = useState(false);
useEffect(() => {   
 // signup("ppazpurua@gmail.com","123123")
 //signup("octotestingv2@gmail.com","Octo123.")   
 sendPasswordResetEmail("ppazpurua@gmail.com")  
},[]); 
  
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © BlackHole '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    );

  }

  const handleLogin = (event) => {
    //alert(JSON.stringify(event.currentTarget))
    setOpenLogin(true)
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLogin = () => {
    setAnchorEl(null);
    
   setOpenLogin(false)
  };

  

  // const handleLogin = (event) => {
  //   //alert(event.currentTarget)
  //   console.log(event.currentTarget)
  //   setAnchorEl(event.currentTarget);
  // };

  useEffect(() => {   
  //  alert(latitude)
   // latutude=
   
   getGeolocation({latitude,longitude},geolocation => {
   
  // getLocation22({"a":1},geolocation => {
     // alert('geolocation'+JSON.stringify(geolocation))
     // const { latitude, longitude, timestamp, accuracy, error } = usePosition();
      // const position={latitude:latitude, longitude:longitude, timestamp:timestamp, accuracy:accuracy, error:error}
       //const position={latitude:10, longitude:-66, timestamp:123, accuracy:1, error:null}
     
   })
},[latitude]); 
// useEffect(() => {   
//     //alert(user)
//     setOpenSnackBar(true)
//     setMensajeSnackBar("Autenticando en Twitter...(useEffect)")
//    //A U T O M A T I C O
//     firebase.auth().onAuthStateChanged(
//       user=>{
//        // alert(JSON.stringify(user))
//         //console.log(JSON.stringify(user))
//        //setLoginAuth(login)
//         SignIn(user)
//       }
    
//     )
     
// },[]); 

//   // Now you either return just unregisterAuthObserver
//   // which will be called when the component is unmounted
//   alert(JSON.stringify(unregisterAuthObserver))
//   return unregisterAuthObserver;

//   // or you create a function if you want more login when the component is unmounted
//   // return () => {
//   //   unregisterAuthObserver();
//   //   console.log("Sdd");
//   // }

// }, []); // Important, pass an empty array so to execute useEffect hook only once

function SignIn(user) {
  // alert("firebase user "+JSON.stringify(user))
   var login={id:user.providerData[0].uid,name:user.displayName,photoURL:user.photoURL,email:user.email,phone:user.metadata.phoneNumber,cedula:"",photo:"",lat:0,lng:0}
   //login.email=""
   setLoginAuth(login)
  // setControlmenues((loginauth.email=="ppazpurua@gmail.com")||(loginauth.email=="rpicoh@gmail.com")||(loginauth.email=="oazpurua@gmail.com"))

   // alert(JSON.stringify(login))
   //setMensajeSnackBar(user.displayName)
   
 }
useEffect(() => {  
  if (loginauth.name!=""){
    ///
    ///  AUDITORIA de la EXISTENCIA
    ///
    ///
  setOpenSnackBar(true)
  //alert(longitude)
  setMensajeSnackBar("Autenticando el correo:"+loginauth.email+" de "+loginauth.name)
  let redpoint={
    "type":"FeatureCollection",
    "features":[{
      "type":"Feature",
      "properties":{"nombre":loginauth.name,"correo":loginauth.email},                             
      "geometry":{"type":"Point","coordinates":[longitude,latitude]
      }
    }]
  }
  postData("https://monederoapi.azurewebsites.net/api/PostLogin?code=4s4c6asgT45gDLabyqhrPd9Jp2oWBv28sSm0OnDthGS4e49oL2gkOw==",redpoint)
  // setJSONDOC(redpoint)
//console.log(redpoint)


  if ( ['feas1997@gmail.com','ppazpurua@gmail.com','lospinos16.2017@gmail.com', 'rpiconh@gmail.com','isosab@gmail.com','guillermoacedo@gmail.com','antonio.azpurua@gmail.com','aveunalliv@gmail.com','oazpurua@gmail.com,gboyerizo@gmail.com','torres.andres87@gmail.com'].indexOf(loginauth.email)>-1){
       setOpendialog(true) 
       //alert(loginauth.email)
       setMAIL(loginauth.email)
       setCLIENTE(loginauth)
       setControlmenues((loginauth.email=="ppazpurua@gmail.com")||(loginauth.email=="feas1997@gmail.com")||(loginauth.email=="oazpurua@gmail.com"))

       // console.log(CLIENTE)
  }else
  { 
    prop.loginclick(1)  
    // setOpenSnackBar(true)
    //setSnackbarcolor('red')
    //setMensajeSnackBar(loginauth.email+" de "+loginauth.name+" No esta autorizado")
  }
}
      // dispatch({
      //   type: 'LOGIN',
      //   stateprop: loginauth
      // });
},[loginauth]);

    function handleCloseSnackBar() {
      // onClick("V3664204")
       setOpenSnackBar(false)
       // prop.loginclick()
     }
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
          SignIn(user)
        }
      }
    }
    
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar style={{ background: '#2E3B55' }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Avatar alt="Remy Sharp" src={'images/logo.png'} className={classes.bigAvatar} />    
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           BlackHole
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogin}
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
                 <MenuItem onClick={handleCloseLogin}>Login</MenuItem>
                <MenuItem onClick={handleCloseLogin}>Profile</MenuItem>
                <MenuItem onClick={handleCloseLogin}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
     
      <main>
        {/* Hero unit */}
        <Snackbar
          open={openSnackBar}
          autoHideDuration={5000}
          onClose={handleCloseSnackBar}
          anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
       >
               <SnackbarContent style={{backgroundColor:snackbarcolor,}}
                     message={<span id="client-snackbar">{mensajeSnackBar}</span>}
                />
        </Snackbar>
        {/* <SignInSide /> */}
        <Dialog open={opendialog}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Area de Trabajo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Seleccione el Area de Trabajo.
          </DialogContentText>
        <List className={classes.root}>
     
     
      {/* {data.map((item, index) => ( */}
        <div>
      <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
        <ListItemAvatar onClick={() =>prop.loginclick(1) }>
        <Avatar>
             <MouseIcon />
         </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'Exchange'}
          secondary={
            <React.Fragment>
          <Grid container >
          <Grid item key={12} xs={12} sm={12} md={12}>
          
              <Typography variant="h6" component="h6"
               
              >
               {'FIAT Exchanges'}
              </Typography>
              </Grid>
         </Grid>
            
            </React.Fragment>
            
          }
        />
        
      </ListItem>
      
      <Divider variant="inset" component="li" />
      {(controlmenues)&&
      <ListItem alignItems="flex-start">
        <ListItemAvatar onClick={() =>prop.loginclick(2) }>
        <Avatar>
                      <MouseIcon />
                    </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'Monedero'}
          secondary={
            <React.Fragment>
          <Grid container >
          <Grid item key={12} xs={12} sm={12} md={12}>
          
              <Typography variant="h6" component="h6"
               
              >
               {'Prueba de Concepto'}
              </Typography>
              </Grid>
         </Grid>
            </React.Fragment>
            
          }
        />
        
      </ListItem>
      }
      <Divider variant="inset" component="li" />
      {(controlmenues)&&
      <ListItem alignItems="flex-start">
        <ListItemAvatar onClick={() =>prop.loginclick(3) }>
        <Avatar>
                      <MouseIcon />
                    </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'Tesoreria'}
          secondary={
            <React.Fragment>
          <Grid container >
          <Grid item key={12} xs={12} sm={12} md={12}>
          
              <Typography variant="h6" component="h6"
               
              >
               {'BizAccount'}
              </Typography>
              </Grid>
         </Grid>
            </React.Fragment>
            
          }
        />
        
      </ListItem>
     }
      <Divider variant="inset" component="li" />
      {(controlmenues)&&
      <ListItem alignItems="flex-start">
        <ListItemAvatar onClick={() =>prop.loginclick(4) }>
                <Avatar>
                      <MouseIcon />
                    </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'BlackZone'}
          secondary={
            <React.Fragment>
          <Grid container >
          <Grid item key={12} xs={12} sm={12} md={12}>
          
              <Typography variant="h6" component="h6"
               
              >
               {'Area del BlackZone'}
              </Typography>
              </Grid>
         </Grid>
            </React.Fragment>
            
          }
        />
        
      </ListItem>
}
      </div>
      {/* ))} */}
    </List>
    </DialogContent>
      </Dialog>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            BlackHole
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Is a global design and engineering consultancy specializing in React.js, React Native, Google Material , Node.js, and the extended JavaScript ecosystem. We support our Apps on Azure NoSQl CosmosDB and SqlServer.
               </Typography>

               

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item >
                <Button  variant="contained" color="secondary"  onClick={() => prop.loginclick(5)}>
                  +58(212)5P
                  </Button>
                  </Grid>
                <Grid item>
                  <Button  variant="outlined" color="primary"  onClick={() => prop.loginclick(1)}>
                  Exchange
                  </Button>
               
                </Grid>
              </Grid>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                
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
                    image="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/09/1504707649create-react-app-1024x350.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutAntenasterBottom variant="h5" component="h2">
                    React
                    </Typography>
                    <Typography>
                    React is the most disruptive front-end framework to-date and has influenced the other JavaScript-based front-end frameworks heavily.

                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={12} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-dVoxtJnHedVwYigIvMXPCvd4Vpd7X9deJoBkbtbN4scyF5KH&usqp=CAU"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Azure Databases
                    </Typography>
                    <Typography>
                    Run your most critical workloads in any Azure region in the world with SLA-backed speed, availability, throughput, and consistency. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={13} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqrBRyTZiOQTGcE07RHrvRFKVWoyGrPrkZOcWAU441qF8CIXXT&usqp=CAU"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Azure Architecture
                    </Typography>
                    <Typography>
                    Ensure business continuity with turnkey multi-master replication and enterprise-grade security and compliance including end-to-end encryption and access control.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Footer /> */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        
        <Copyright />
      </footer>
      {/* End footer */}
    {/* </React.Fragment> */}
     </div>
  );
}

//AIzaSyDZ08hKl01qFilc3nJ4oRmO8wq49pcsw8s
/////GOOGLE FIBASE SAMPLE EL DESIDERATUM
//https://github.com/firebase/firebaseui-web#demo
//https://fir-ui-demo-84a6c.firebaseapp.com/
//REACT FIREBASE DOCUMEBTACION
//https://medium.com/wesionary-team/react-firebase-authentication-with-context-api-a770975f33cf BUEN ARTICULO
//https://react-firebase-js.com/docs/react-firebase-auth/getting-started <BEST
//https://blog.logrocket.com/user-authentication-firebase-react-apps/     <BEST
//https://blog.logrocket.com/user-authentication-firebase-react-apps/
//EJEMPLO DE ALGUIEN QUE LE FUNCIONO
//https://github.com/firebase/firebaseui-web/tree/master/demo

///https://stackoverflow.com/questions/49838273/react-setting-up-firebase-auth-with-firebase-ui
//ROBIN
//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#provide-firebase-in-react
//
//FETCH CONTEXT IMAGENES
//https://medium.com/better-programming/lets-learn-react-hooks-and-context-api-by-building-a-recipe-search-app-63be9d9e1801
//https://medium.com/better-programming/lets-learn-react-hooks-and-context-api-by-building-a-recipe-search-app-2eb0b2d2cb85
//F U T U R O
//https://medium.com/noders/manejo-de-estado-con-context-y-hooks-en-react-7adfc7a740a3
//https://www.youtube.com/watch?v=J-g9ZJha8FE&app=desktop useCOntext
//https://www.youtube.com/watch?v=K_wZCW6wXIo&app=desktop
//https://github.com/mehulmpt/firebase-react-hooks 

//F U T U  R O
// const config = {
//   apiKey: 'AIzaSyCJLwAKauTswOdrZjDyVPx9DCRLw2Wv1I8',
//   authDomain: 'vinotinto-7f56f.firebaseapp.com',
//   signInFlow: 'popup',
//   //https://console.firebase.google.com/u/0/project/vinotinto-7f56f/authentication/providers
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   //signInSuccessUrl: '/signedIn',
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.OAuthProvider('microsoft.com'),
//      // firebase.auth.MicrosoftAuthProvider.PROVIDER_ID,
//        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//   ],
//   callbacks: {
//     // Avoid redirects after sign-in.
   
//     signInSuccessWithAuthResult: () => {alert("signInSuccessWithAuthResult")}
//   }
// };
//firebaseopensource.com/projects/firebase/firebaseui-web-react/

//firebase.initializeApp(config);
//andres@alcancia.biz
//Juanfer123.
//octotestingv2@gmail.com
//Octo123.