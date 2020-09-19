import React,{useEffect,useState} from 'react';
import clsx from 'clsx';
import { useRecoilState,useSetRecoilState} from "recoil";
//import { jsondocument} from '../store/atom';
//import {cliente } from '../store/atom';
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

//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import firebase from 'firebase'
//import {useFirebase} from '../hooks/usefirebase';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import SignInForm from '../login/signinform'
import SignUpForm from '../login/signupform'
import ChangePwdForm from '../login/changepwdform'
import Ficha from './ficha'
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

export default function HomeLogin(prop) {
  //tintanegra2020@outlook.com  BLACK69$
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const open = Boolean(anchorEl);
  //const [openPerfil, setOpenPerfil] = React.useState(false);
  //const openEl = Boolean(anchorEl);
  const [openLogin, setOpenLogin] = React.useState(true);
  const [openMenuLogin, setOpenMenuLogin] = React.useState(false);
  const [openDialogMenu, setOpenDialogMenu] = React.useState(false);
  
  
  const [loginPage, setLoginPage] = React.useState(0);
  
  const [loginauth, setLoginAuth] = useState({uid:"0",name:"",photoURL:"",email:"",phone:"",cedula:"",lat:0,lng:0})

  const [ dataPost, isLoadingPost, isErrorPost , postData] = useFetchPost('');
  const { latitude, longitude, timestamp, accuracy, error } = usePosition();
  const [opendialog, setOpendialog] = useState(false);
  //const [flagAsignacion, setFlagAsignacion] = useState(false);
  const [openSnackBar,setOpenSnackBar]= useState(true);
  const [mensajeSnackBar,setMensajeSnackBar]= useState("");
  const [snackbarcolor, setSnackbarcolor]=useState('#1DA1F2')
  //const [MAIL, setMAIL] = useRecoilState(mail);
  //const [CLIENTE, setCLIENTE] = useRecoilState(cliente);
  //const [JSONDOC, setJSONDOC] = useRecoilState(jsondocument);
  const [controlmenues, setControlmenues] = useState(false);

  
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © BlackHole '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    );

  }

  const handleMenuClick = (event) => {
   // alert("handleMenuClick")
    setOpenMenuLogin(true)
    setAnchorEl(event.currentTarget);
   
  };
  const handleMenuItemClick = (page) => {
   // alert("pages "+page)

    setOpenMenuLogin(false)
    setAnchorEl(null);
    setOpenDialogMenu(true)
    setLoginPage(page)
  };
  const handleChangePage =(page)=>{
    setLoginPage(page)
    setOpenDialogMenu(false)
  }
  const handleCloseDialog = () => {
    //setLoginPage(0)
    setOpenDialogMenu(false)
  };
  

  const handleCloseLogin = () => {
    alert("close")
    setAnchorEl(null);
    setOpenMenuLogin(false);
   setOpenLogin(false)
  };

  useEffect(() => {   
  //  alert(latitude)
   // latutude=
   
   getGeolocation({latitude,longitude},geolocation => {
   
     })
},[latitude]); 


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
      // setMAIL(loginauth.email)
      // setCLIENTE(loginauth)
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
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Avatar alt="Remy Sharp" src={'images/logo.png'} className={classes.bigAvatar} />    
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           MiFaro
          </Typography>
          {auth && (
            <div>
              <IconButton
              
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuClick}
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
                open={openMenuLogin}
                onClose={handleCloseLogin}
                PaperProps={{
                  style: {
                    maxHeight: 100 * 4.5,
                    width: '20ch',
                  },
                }}
              >
                 <MenuItem onClick={() =>{handleMenuItemClick(1) }    } >SignIn</MenuItem>
                {/* <MenuItem onClick={() =>{ setLoginPage(2) }}>Perfil</MenuItem>
                <MenuItem onClick={() =>{ setOpenLogin(false) }}>Direcciones</MenuItem>
                <MenuItem onClick={() =>{ setOpenLogin(false) }}>Roles</MenuItem> */}
              </Menu>
            </div>
          )}

        </Toolbar>
      </AppBar>
     
      <main>
     
      <Dialog open={openDialogMenu} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Registro</DialogTitle> */}
        <DialogContent>
           <DialogContentText>
            Autenticate en la Red Ciudadana.
          </DialogContentText> 
          {(loginPage==1)&&<SignInForm changePage={handleChangePage}/>}
          {/* {(loginPage==2)&&<SignUpForm changePage={handleLoginPage}/>}
          {(loginPage==3)&&<ChangePwdForm changePage={handleLoginPage}/>}  */}
        </DialogContent>

      </Dialog>  
      
      {(loginPage==0)&&
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              MiFaro Personal
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Incorporate con la experiencia de la auutogestion de Faro
               </Typography>
               

        
          </Container>

        </div>
       }
       {(loginPage==10)&&<Ficha />}
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
