import React, { useState, useEffect }  from 'react';

import { useRecoilState,useRecoilValue, useSetRecoilState} from "recoil";
import { flagFiltros,organizacion} from './store/atom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from    '@material-ui/icons/Dashboard';
import PublicIcon from '@material-ui/icons/Public';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
//import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BallotIcon from '@material-ui/icons/Ballot';
import MailIcon from '@material-ui/icons/Mail';
import PlaceIcon from '@material-ui/icons/Place';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
// import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ShowChartIcon from '@material-ui/icons/ShowChart';
// import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';
// import LayersIcon from '@material-ui/icons/Layers';
import SendIcon from '@material-ui/icons/Send';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import PeopleIcon from '@material-ui/icons/People';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TuneIcon from '@material-ui/icons/Tune';
import { mainListItems, secondaryListItems } from './listItems';

//import { Summary } from './summary'
//import Chart from './chartpyramid';
import Total from './dashboardindicadores/total';
import PrimeraPagina from './layout/primerapagina';
import About from './layout/about';
//import FaroPieChart from './indicadores/faropiechartborrar';
//import Log from './dashboardlog/log';
///////////////Equipo//////////////////
import Indicadores from './dashboardindicadores/indicadores';
//import Avance from './indicadores/avance';

import Radar2 from './dashboardindicadores/radar2';
//import ChartPyramid from './dashboardindicadores/chartpyramidBORRAR';
//import ChartPieChart from './dashboardindicadores/chartpiechartBORRAR';
import GeoIndicadores from './dashboardindicadores/geoindicadores';
import PorcPartidos from './dashboardindicadores/porcpartidos';
///////////////Equipo//////////////////
import Historia from './dashboardgeo/historia';
import Polylines from './dashboardgeo/polylines';
import GeoFaro from './dashboardgeo/geofaro';
import AsignacionPasos from './personas/asignacionpasos'

//import AsignacionDatos from './personas/asignaciondatosborrar';
//import SimpleTable from './dashboardmensajeria/simpletable';
//import Chat from './dashboardmensajeria/chat';
import  RichText from './mensajeria/richtext';
import Mensajes from './mensajeria/mensajes';
import Intervalos from './mensajeria/intervalos';
import Resultados from './mensajeria/resultados';
import DialogoGetPersona from './personas/dialogogetpersona'
//import DialogoLogin from './dashboard/dialogologin'
import DialogoFiltros from './layout/dialogofiltros'
import Fotos from './layout/fotos';
import Cursos     from      './formacion/cursos'
import VinoTinto     from      './formacion/vinotinto'
import {useFetch}  from './helpers/hooks'
//import SignInForm from './login/signinform'
//import SignUpForm from '../login/signupform'
//import ChangePwdForm from '../login/changepwdform'
//import Deposits from './Deposits';
//import Orders from './Orders';

function Copyright() {
  return (

    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ??'} {new Date().getFullYear()}{' '}
      <Link color="inherit" href="http://openfaro.azurewebsites.net/about">
     Faro del Cabo de San Rom??n
    </Link>{' '}
    
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
    paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  fixedHeight: {
    height: 140,
  },
  
   fixedHeight2: {
    height: 400,
  },
}));
// function getStepContent(step) {
//   switch (step) {
//     case 100:
//         return (
//           <Grid container spacing={3}>
//           <Grid item xs={12}>
         
//                  <Paper >
//                    {/* <Log /> */}
//                  <PrimeraPagina />
//                  </Paper>
//                </Grid>
//            </Grid>
//         )
               
//      // return <AddressForm />;
//     case 1:
//             return  <AsignacionPasos />
//       //return <PaymentForm />;
//     case 2:
//             return  <AsignacionPasos />
           
//     default:
//       throw new Error('Unknown step');
//   }
// }
export default function Dashboard() {
  const classes = useStyles();
//  const [GETINDICADORES, setGETINDICADORES]= useRecoilState(getindicadores) 
  const [ORGANIZACION, setGETORGANIZACION]= useRecoilState(organizacion) 
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [openLogin, setOpenLogin] = React.useState(false);
  const [flagDrawer, setFlagDrawer] = React.useState(true);
  const [flagLogin, setFlagLogin] = React.useState(false);
  const [flagFiltros, setFlagFiltros] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openFiltro, setOpenFiltro] = React.useState(false);
  const [state, setState] = React.useState({
    top: true,
    left: true,
    bottom: false,
    right: false,
  });
  const [component, setComponente] = React.useState(1);      //////<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 1 
  //const [{ data, isLoading, isError }, fetchData] = useFetch("");
  //if ((data!=undefined)){
  //{
   // alert("ok")
  // alert("fetchDATA dashborad"+JSON.stringify(data)+" isLoading"+isLoading+" isError"+isError) 
  
    //}
  //fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V3664204');
  const handleLoginOpen = () => {
   
    setFlagLogin(true)
  }
  
  const handleCloseLogin = () => {
    setAnchorEl(null);
    
   setOpenLogin(false)
  };
  const handleLogin2 = (event) => {
    //alert()
    setOpenLogin(true)
    setAnchorEl(event.currentTarget);
   
  };
  const handleLogin = () => {
   // alert()
   setFlagDrawer(true)
    setFlagLogin(false)
   // setComponente(101)
    //setOpen(false);
  };
  const toggleDrawer = (side, open) => event => {
    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //setGETINDICADORES(true)
    setState({ ...state, [side]: open });
  };
  const handleFiltro=()=>{
   // alert("handleFiltros")
    setState({ ...state, ['right']: false });
  
    //setFlagDrawer(false)
  //  //setFlagFiltros(false)
  }
  const handleComponent = value => () => {
    setComponente(value)
    //if (value==1){
    //   fetchData('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V3664204');
    //}
    if (value==8){
     setFlagFiltros(true);
     setComponente(1)
    }
    if (value==5){
setFlagDrawer(false)
     }
  };
  const handleDrawerOpen = () => {
  
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);

  return (
    <div className={classes.root}>
      <CssBaseline />
     
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            MiniFaro
          </Typography>
          
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {/* <IconButton onClick={handleComponent(69)} color="inherit">
            <Badge  color="secondary">
              <VisibilityIcon />
            </Badge>
          </IconButton> */}
         <div align="right">
         
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
                 <MenuItem onClick={() =>{ alert()}    }>SignIn</MenuItem>
                 <MenuItem onClick={() =>{ alert()}    }>SignIn</MenuItem>
                 <MenuItem onClick={() =>{ alert()}    }>SignIn</MenuItem>
                 {/* <MenuItem onClick={() =>{ setOpenLogin(false);setLoginPage(1) }    }>SignIn</MenuItem>
                <MenuItem onClick={() =>{ setOpenLogin(false);setLoginPage(2) }}>SignUp</MenuItem>
                <MenuItem onClick={() =>{ setOpenLogin(false) }}>Configuracion</MenuItem> */}
              </Menu>
            
          <IconButton
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('right', true)}
            // className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <TuneIcon />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
     
      {flagDrawer&&
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
     
      <List>
       <ListItem button onClick={handleComponent(1)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={handleComponent(12)}>
      <ListItemIcon>
        <EmojiObjectsIcon />
      </ListItemIcon>
      <ListItemText primary="PolyLines" />
    </ListItem>
        <ListItem button  onClick={handleComponent(0)} >
      <ListItemIcon>
        <PersonPinCircleIcon />
      </ListItemIcon>
      <ListItemText primary="GeoBitacora" />
    </ListItem>
    </List>
   
   
        <Divider />  
          

        <Divider />
        
        <List>

       
   
    <ListItem button  onClick={handleComponent(11)} >
      <ListItemIcon>
        <HowToVoteIcon />
      </ListItemIcon>
      <ListItemText primary="Historia" />
    </ListItem>
  

    <ListItem button  onClick={handleComponent(10)} >
      <ListItemIcon>
        <PlaceIcon />
      </ListItemIcon>
      <ListItemText primary="GeoCentros" />
    </ListItem>
    </List>
              
              <Divider />
              
        <List>
      

      <ListItem button onClick={handleComponent(5)}>
    <ListItemIcon>
      <EditIcon />
    </ListItemIcon>
    <ListItemText primary="Asignacion" />
  </ListItem>

      </List>
      <Divider />
      
      <List>
     
  <ListItem button onClick={handleComponent(2)}>
    <ListItemIcon>
      <MailIcon />
    </ListItemIcon>
    <ListItemText primary="Mensajeria" />
  </ListItem>
 
  <ListItem button onClick={handleComponent(3)}>
    <ListItemIcon>
      <SendIcon />
    </ListItemIcon>
    <ListItemText primary="Envio" />
  </ListItem>


  <ListItem button onClick={handleComponent(4)}>
    <ListItemIcon>
      <PieChartIcon />
    </ListItemIcon>
    <ListItemText primary="Resultados" />
  </ListItem>
  


      </List> 
      <Divider />
       
        <List>
        <ListSubheader inset>Futuro</ListSubheader>

        <ListItem button  onClick={handleComponent(9)} >
      <ListItemIcon>
        <PhotoCameraIcon />
      </ListItemIcon>
      <ListItemText primary="Irregularidades" />
    </ListItem>

    <ListItem button  onClick={handleComponent(6)}>
      <ListItemIcon>
        <CastForEducationIcon />
      </ListItemIcon>
      <ListItemText primary="Contenidos" />
    </ListItem>

    <ListItem button onClick={handleComponent(69)}>
      <ListItemIcon>
        <SportsSoccerIcon />
      </ListItemIcon>
      <ListItemText primary="VinoTinto" />
    </ListItem>
    

    
        </List>
      </Drawer>
      
      }
      
       <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}
           classes={{paper: classes.drawerPaper2,}}
       >
    
         <DialogoFiltros onClick={handleFiltro}/>
       
        {/* {sideList('right')} */}
      </Drawer>


      <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      {/* {(component==100)&&
         <Paper className={classes.paper}>
               {getStepContent(component)}
           </Paper>
      } */}

     {false&&<div>!!!!!!!!!!!!Indicadores ARRANCA AQIO ARRANCA AQUI ARRANCA QUI!!!!!!!!!!</div>  }    
     {(component==1)&&
     <Container maxWidth="lg" className={classes.container}>   
           <Indicadores />
        
        {/* <Paper className={fixedHeightPaper}>
          <Avance />
        </Paper> */}
      </Container>
    }
  {(component==0)&&
       <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
  
             {false&&<div>!!!!!!!!!!!!Padron!!!!!!!!!!</div>}
             <Grid item xs={12}>
              <Paper className={classes.paper}>
                <GeoIndicadores />
              </Paper>
            </Grid>
      {/* <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper}>
           <PorcPartidos />
        </Paper>
      </Grid>
         
   
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={fixedHeightPaper2}>
           <Radar2 />
        </Paper>
      </Grid> */}
         </Grid>

     </Container>
}

{(component==2)&&
      <Container maxWidth="lg" className={classes.container}>
        <Mensajes />
           <RichText />
      </Container>
          }
  {(component==3)&&
          <Container maxWidth="lg" className={classes.container}>
                          <Intervalos />
          </Container>
          }
    {(component==4)&&
        <Container maxWidth="lg" className={classes.container}>
            <Resultados />
      </Container>
     }
      {false&&<div>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111!!!!!!!FARO V2!!!!!!!!!!</div>}
    {(component==10)&&
        <Container maxWidth="lg" className={classes.container}>
            <GeoFaro />
      </Container>
     }
  {false&&<div>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Persona Asignacion!!!!!!!!!!</div>}

{(component==5)&&<AsignacionPasos/>}
 
     
  {false&&<div>!!!!!!!!!!!!POLYLINES EL CORAZON!!!!!!!!!!</div>}
   {(component==12)&&
     <Container maxWidth="lg" className={classes.container}>
                <Polylines />
    </Container>}
   
    {(component==11)&&
        <Container maxWidth="lg" className={classes.container}>
            <Historia />
      </Container>
     }
{false&&<div>!!!!!!!!!!!!Otros!!!!!!!!!!</div>}
{(component==69)&&<About />}
  
      {(component==9)&&
     <Container maxWidth="lg" className={classes.container}>
                <Fotos />
    </Container>}
    {(component==69)&&
     <Container maxWidth="lg" className={classes.container}>
                <VinoTinto />
    </Container>}
   

                {(component==6)&&
          <Container maxWidth="lg" className={classes.container}>
                          <Cursos />
          </Container>
          }
     
             

                        
  
     

         
 
        <Copyright />
       {/* {flagFiltros&& <DialogoFiltros onClick={handleFiltro}/>} */}
       {/* {flagLogin&& <DialogoLogin login={handleLogin} />} */}
      </main>
    </div>
  );
}

//ejemplos
//https://flatlogic.com/templates/react-material-admin/demo