import React, { useState,useEffect } from "react";
//import {useFetch}  from '../monedero/usefetch'
import { makeStyles } from '@material-ui/core/styles';

//import ReactFlagsSelect from 'react-flags-select';
//import 'react-flags-select/css/react-flags-select.css';
import clsx from 'clsx';
import PropTypes from 'prop-types'; 

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Chart from 'react-apexcharts';
import CameraAlt from '@material-ui/icons/CameraAlt';
import InsertComment from '@material-ui/icons/InsertComment';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import LocationOn from '@material-ui/icons/LocationOn';
import { grey } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import IconButton from '@material-ui/core/IconButton';
//import {useInterval} from '../hooks/useinterval'
//import { Sparklines, SparklinesBars } from 'react-sparklines';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 'xs',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[500],
  },
  avatarlarge: {
    backgroundColor: grey[500],margin: 5,
    width: 200,
    height: 200,
    alignSelf:"center"
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Ficha() {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);
  const [photo, setPhoto] = React.useState('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bill_Gates_June_2015.png/247px-Bill_Gates_June_2015.png');
  const [expanded, setExpanded] = React.useState(false);

const handleChange = (event, newValue) => {
//tabs
  setValue(newValue);
};
function handleEditPicture  () {
  //alert('handle')
  const fileInput = document.getElementById('imageInput');
  //alert(fileInput.outerHTML)
 //ref={fileInput=>this.fileInput=fileInput}
 fileInput.click();
};
function handleEditPicture  () {
  //alert('handle')
  const fileInput = document.getElementById('imageInput');
  //alert(fileInput.outerHTML)
 //ref={fileInput=>this.fileInput=fileInput}
 fileInput.click();
}; 
function handleImageChange  (e)  {
  let reader = new FileReader();
  let file = e.target.files[0];
  reader.onloadend = () => {
    setPhoto(reader.result)
   // alert(photo)
  }  
 
  reader.readAsDataURL(file)
};
return (
    <>
  

  <Grid container spacing={1} justify="center">
            <Grid item key={0}>
            <input
                 type="file"
                 accept="image/*"
                 id="imageInput"
                 hidden="hidden"
                 onChange={(e)=>handleImageChange(e)}
               />
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bill_Gates_June_2015.png/247px-Bill_Gates_June_2015.png'}    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={"Nombre Apelido"}
        subheader="Registro: 12/03/2018 "
      />

       
      <CardContent>
      <Grid container 
       spacing={0}
       direction="column"
       alignItems="center"
       justify='center'
        
         >
           <Grid item >
         <Avatar aria-label="recipe"  src={photo} className={classes.avatarlarge} >
            
            </Avatar>
            </Grid>
         </Grid>
        <Typography variant="body2" color="textSecondary" component="p">
        Estimamos que estuvieron unas 1.400 personas de edad promedio de 35 anos y universitarios y ninguna violencia
        </Typography>
      </CardContent>
    
      <CardActions disableSpacing>
      <IconButton
                onClick={handleEditPicture}
      >
          <CameraAlt />
      </IconButton>
      <IconButton
       //onClick={handleClickFormulario}
      >
          <InsertComment />
      </IconButton>
    
      <IconButton
         //       onClick={handleSos}

>
          <LocationOn />
      </IconButton>
      <IconButton
           //     onClick={handleOpenVote}
      >
        <HowToVoteIcon />
      </IconButton>
      
               <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          //onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
          
          <Typography paragraph>Comentario:</Typography>
          <Typography paragraph>
            Tengo un gran compromiso con todos los topicos electorales del dia D y una experiencia de mas de 15 años.
          </Typography>
       
        
        </CardContent>
      </Collapse>
    </Card>
    
  
   </Grid>
   </Grid>





   <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Datos Personales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Registro Electoral Nacional y/o Extranjero</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Direcciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Roles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Experiencia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Autenticacion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>








      <Card className={classes.root} >
     
    

    
        <CardContent style={{justifyContent: 'center'}}>
          <Typography gutterBottom variant="h5" component="h2">
            Guillermo Compuertas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cliente Residenciado en Bogota.
          </Typography>
        
          <Paper>

<table width="100%">
  <tbody>
  <tr><td align="left">
     <Typography  variant="subtitle2">Fecha Nacimiento:</Typography>
 </td><td align="right">
     <Typography  variant="subtitle2"> 12/01/1976</Typography>
 </td></tr>
 <tr><td align="left">
     <Typography  variant="subtitle2">Lugar Naciemiento:</Typography>
 </td><td align="right">
     <Typography  variant="subtitle2"> Caracas</Typography>
 </td></tr>
 <tr><td align="left">
     <Typography  variant="subtitle2">Nacionalidad:</Typography>
 </td><td align="right">
     <Typography  variant="subtitle2"> Venezolana</Typography>
 </td></tr>
 <tr><td align="left">
     <Typography  variant="subtitle2">Nacionalidad:</Typography>
 </td><td align="right">
     <Typography  variant="subtitle2">Colombiana</Typography>
 </td></tr>
 <tr><td align="left">
     <Typography  variant="subtitle2">Residencia:</Typography>
 </td><td align="right">
     <Typography  variant="subtitle2">Bogota</Typography>
 </td></tr>
 <tr><td colspan="2" align="left">
     <Typography  variant="subtitle2">Calle Simon Bolivar, Urb. Las PAlmas, Residencia Amerca America, Piso 6 Apto 2A</Typography>
 </td></tr>
 </tbody></table>
 </Paper>
 <br/>
 <Paper>

<table width="100%">
  <tbody>
  <tr><td align="left">
     <Typography  variant="subtitle2">Correo:</Typography>
 </td><td align="right">
     <Typography  variant="subtitle2">gcompoerta@hotmail.com</Typography>
 </td></tr>
 <tr><td align="left">
     <Typography  variant="subtitle2">Celular:</Typography>
 </td><td align="right">
     <Typography  variant="subtitle2">(412)891 89 89)</Typography>
 </td></tr>
 <tr><td align="left">
     <Typography  variant="subtitle2">Instagram:</Typography>
 </td><td align="right">
     <Typography  variant="subtitle2">@guillermoelgrande</Typography>
 </td></tr>
 </tbody></table>
 </Paper>
 <br/>
 <Paper>


 </Paper>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Activar
        </Button>
        <Button size="small" color="primary">
          Bloquear
        </Button>
      </CardActions>
    </Card>
  
</>
  );
}

