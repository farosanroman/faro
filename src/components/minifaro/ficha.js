import React, { useState,useEffect } from "react";
import { useRecoilState,useRecoilValue} from "recoil";
import {persona} from '../store/atomfaro';
//import {useFetch}  from '../monedero/usefetch'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
import GeoChart from './geochart'

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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Avatar from '@material-ui/core/Avatar';
import Chart from 'react-apexcharts';
import CameraAlt from '@material-ui/icons/CameraAlt';
import InsertComment from '@material-ui/icons/InsertComment';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import LocationOn from '@material-ui/icons/LocationOn';
import { grey } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import { Delete, Edit,Email } from '@material-ui/icons';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'; 
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import Caracteristicas from './caracteristicas'
import DialogoDireccionesNew from './dialogodireccionesnew'

import DialogoRolNew from './dialogorolnew'
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
  },  
  expand: {
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
  paper: {
    width: 100,
    maxWidth:100
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
  const [photo, setPhoto] = React.useState('https://www.elnacional.com/wp-content/uploads/2019/08/ECwU4_MXoAMfTDV.jpg');
  const [expanded, setExpanded] = React.useState(false);
  const [PERSONA, setPERSONA] = useRecoilState(persona);
  const [flagOpenDireccion, setflagOpenDireccion] = React.useState(false);
   const [flagOpenNewDireccion, setflagOpenNewDireccion] = React.useState(false);
   const [flagOpenNewRol, setflagOpenNewRol] = React.useState(false);
   const [flagOpenDialogoEliminar, setflagOpenDialogoEliminar] = React.useState(false);
   const [direccion, setDireccion] = React.useState('');
   
   const [input, setInput] = React.useState({})
   const [inputs, setInputs] = React.useState([
    {
      id: 'phone',
      label: 'Phone',
      placeholder: '999-999-9999',
      value: direccion,
      error: false,
      helperText: 'Formato d e Telefono',
      getHelperText: error =>
        error
          ? 'Woops. No es un formato de celular'
          : 'Formato de Celular',
      isValid: value =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
          value
        )
    },
    {
      id: 'email',
      label: 'Email',
      placeholder: 'john@acme.com',
      value: direccion,
      error: false,
      helperText: 'Formato de Correo',
      getHelperText: error =>
        error
          ? 'Ooops. No tiene el formato de correo'
          : 'Formato de mail correcto',
      isValid: value => /\S+@\S+\.\S+/.test(value)
    },
    {
      id: 'twitter',
      label: 'Twitter',
      placeholder: '@abcdef',
      value: direccion,
      error: false,
      helperText: 'Un formato de nombre de Twitter',
      getHelperText: error =>
        error
          ? 'Ooops. No tiene el formato de twitter'
          : 'Formato twitter correcto',
      isValid: value => /^@?(\w){1,15}$/.test(value)
    }
  ]);
  useEffect(() => {   
    // alert(JSON.stringify(PERSONA))
  },[]);  
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
function onAccionDireccion(item,accion,index){
  alert(JSON.stringify(item+" "+accion+" "+index))
  //if (item=="direcciones"){
    const dir=PERSONA.direcciones[index]
    
    alert(JSON.stringify(dir))
     setDireccion(dir)
if ((item=="direcciones")&&(accion=="new")){ 
      setflagOpenNewDireccion(true);
}      
      
if (accion=="edit"){ 
      setflagOpenDireccion(true);
     
  var inp
  //celular
 // alert(dir.idrespuesta)
  if (dir.idrespuesta=="TC"){
    
  var inp=inputs[0]
  inp.value=dir.texto
  //alert(JSON.stringify(inp))
  }
  //correo
  if (dir.idrespuesta=="EM"){
    var inp=inputs[1]
    inp.value=dir.texto
    }
      setInput(inp)

  }
  if (accion=="delete"){ 
    setflagOpenDialogoEliminar(true);
 }
}
const handlePostDireccion = (accion) => {   //de Faro
  //alert("accion")
  var url="https://faronosql.azurewebsites.net/api/VinotintoPostOauth?code=qnaytKAJlMzrAPNmn4SLxavP6JKqWqA2fpxNzvxbra8k4yJCTmQeIQ=="
  url="https://openfaroapi.azurewebsites.net/api/personaspost"
  //var message={id:"63",fecha:Date(),celular:"0412999999",telefono:"0212777777777"}
  var message={"identificacion":"V3664204",
               "idcaracteristicaopcion":0,
               "direcciones":[
                        {"idrespuesta":"TC","texto":"04124444444","tipo":"Familiar"}
                 ]
 }
  //postData(url,message)

   
   setflagOpenDireccion(false);
 }
function onDeleteDireccion(item,e){
  //nueva nuev
  //alert(JSON.stringify(item+" "+e))
  //setflagOpenDialogoEliminar(true);
}
function onAccionCaracteristica(item,accion,index){
  //nueva nuev
  
  if (accion=="delete"){ 
  setflagOpenDialogoEliminar(true);
  }
    if ((item=="roles")&&(accion=="new")){ 
      setflagOpenNewRol(true);
      }
}
function handlePostEliminar(e){
  //const handlePostEliminar = index => () => {
    //nueva nuev
   // alert(JSON.stringify(e))
    setflagOpenDialogoEliminar(false);
  }
function closeDialog(id){
  // alert("closeDialog")
   //setflagOpenDireccion(false);

 }
 const onChange = ({ target: { id, value } }) => {
  alert(value)
   const isValid = input.isValid(value);
    //console.log(isValid)
   
   
  //  input.value=value
  //  input.error=!isValid
   // input.helperText=input.getHelperText(!isValid)
    setInput(input)
    var newInput = {
      ...input,
      value: value,
      error: !isValid,
      helperText: input.getHelperText(!isValid)
    };
  }
return (
    <>
 
  <Container component="main" maxWidth="xs">
  <br/>
  <Grid container spacing={3} justify="center" >
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
          <Avatar alt="Remy Sharp" src={'https://www.elnacional.com/wp-content/uploads/2019/08/ECwU4_MXoAMfTDV.jpg'}    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={PERSONA.nombre1+" "+PERSONA.apellido1}
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
        <Paper >
                 <Table width="60%">
                 <TableHead>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell align="right">Descripcion</TableCell>
          </TableRow>
        </TableHead>  
        <TableBody>  
                 <TableRow>
                   <TableCell>
                      <Typography  variant="subtitle2">Cedula:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'9999999'}</Typography>
                  </TableCell>
                  </TableRow>
                 <TableRow><TableCell>
                      <Typography  variant="subtitle2">Fecha Nacimiento:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'9999'}</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">Sexo:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'9999'}</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">Edad:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'9999'}</Typography>
                  </TableCell></TableRow>

                   <TableRow><TableCell>
                      <Typography  variant="subtitle2">Estado:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'9999'}</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">Municipio:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'9999' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">Parroquia:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'9999' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">Centro Votacion:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'999' }</Typography>
                  </TableCell></TableRow>
                  </TableBody>
                  </Table>
                  </Paper> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Direcciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
       
              <List >
                
              {[1,2,3].map((item, index) => (
                
              
                <ListItem key={index}  >
                <ListItemAvatar onClick={() =>onDeleteDireccion(index)}>
                    <Avatar>
                    {(true)&&<PhoneAndroidRoundedIcon />}

                    {/* {(item.texto.substr(0, 2)=='04')&&<PhoneAndroidRoundedIcon />}
                    {(item.texto.substr(0, 2)=='02')&&<LocalPhoneIcon />}
                    {(item.texto.indexOf('@') !== -1)&&<Email />} */}

                    </Avatar>
                  </ListItemAvatar>
                <ListItemText
                 primary={'telefono'}
                 secondary={'0414 389 89 39'}
                />                  
                  <IconButton onClick={() =>{onAccionDireccion('direcciones','delete',index)}}>
                       <Delete />
                     </IconButton>
                    <IconButton onClick={() =>onAccionDireccion('direcciones','edit',index)}>
                           <Edit /><div></div>
                     </IconButton>
                    
                </ListItem>
 
          
                 ))}
             <ListItem button onClick={() => onAccionDireccion('direcciones','new',0)}>
                <ListItemAvatar>
                 <Avatar>
                  <AddIcon />
                 </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Añadir direccion." />
                </ListItem>
                </List>
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
        <List >
              {[1,2,3].map((item, index) => (
                
              
                <ListItem key={index}  >
                <ListItemAvatar onClick={() =>onDeleteDireccion(index)}>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                <ListItemText
                 primary={'item.respuesta'}
                 secondary={'item.codcne'}
                /> 
                
                  
                <IconButton onClick={() =>onAccionCaracteristica('roles','delete',index)}>
                       <Delete />
                     </IconButton>
                  
                </ListItem>
 
          
                 ))}
                    <ListItem button onClick={() => onAccionCaracteristica('roles','new',0)}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Añadir rol." />
        </ListItem>
           </List>
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
          <Caracteristicas />
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
        <Paper className={classes.paper}>

        
            <Table width="200px">
                 <TableHead>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell align="right">Descripcion</TableCell>
          </TableRow>
        </TableHead>      
        
        <TableBody>  
                 
                 <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'uid'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'11111111' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'name'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'Guaido' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'mail'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'ppa@gmail.com' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'phone'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'0412 6340692' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'estado'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'Miranda' }</Typography>
                  </TableCell></TableRow>

                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'municipio'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'Barura' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'ciudad'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'Caracas' }</Typography>
                  </TableCell></TableRow> <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'urbanizacion'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'Sta Fe' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'ruta'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'Calle D' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'codigopostal'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'1080' }</Typography>
                  </TableCell></TableRow>

                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'lat'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> { '10.0' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'lng'}</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'-60.0'  }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">{'accuracy (mts)'}</Typography>
                  </TableCell>
                  <TableCell align="right">
                      <Typography  variant="subtitle2"> {'200 mts' }</Typography>
                  </TableCell></TableRow>
                 
         
                  </TableBody>  
                         
                  </Table>
                  <GeoChart country={"VE"} location={{lat:10,lng:-67}}/>
                  </Paper>
                 
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


    {flagOpenNewDireccion&&
      <DialogoDireccionesNew />
        }
        {flagOpenNewRol&&
      <DialogoRolNew />
        }
      <Dialog
          onClose={ closeDialog}
          aria-labelledby="customized-dialog-title"
          open={flagOpenDireccion}
        >
          <DialogTitle id="customized-dialog-title" >
           Modificaciones
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
            Cambios de Correos/Telefonos/Twitter
            </Typography>
            <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Numero/Correo"
            value={input.value}
            onChange={onChange}
            error={input.error}
            helperText={input.helperText}
            defaultValue={input.value}
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePostDireccion} color="primary">
              Salir
            </Button>
            <Button onClick={handlePostDireccion} color="primary">
              Borrar
            </Button>
            <Button onClick={handlePostDireccion} color="primary">
              Grabar
            </Button>
          </DialogActions>
        </Dialog>
<Dialog
          onClose={ closeDialog}
          aria-labelledby="customized-dialog-title"
          open={flagOpenDialogoEliminar}
        >
          <DialogTitle id="customized-dialog-title" >
           Esta seguro de Eliminar?
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
            01412 6340692
            </Typography>
            
          </DialogContent>
          <DialogActions>
          
            <Button onClick={() => handlePostEliminar('NO')} color="primary">
              NO
            </Button>
            <Button onClick={() => handlePostEliminar('SI')} color="primary">
              SI
            </Button>
            
          </DialogActions>
        </Dialog>



     
  </Container>
</>
  );
}

