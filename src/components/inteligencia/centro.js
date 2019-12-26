import React, { useState,Fragment } from 'react';
import { Application } from '../../App';
import { makeStyles } from '@material-ui/core/styles';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import IconButton from '@material-ui/core/IconButton';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
//import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import { Grid, Paper, Typography } from "@material-ui/core";
import Icon from '../helpers/icon';
import Circle from 'react-circle';
import Eventos from './eventos'
import {totalCentros} from '../helpers/helpers'
//https://itnext.io/understanding-the-react-context-api-through-building-a-shared-snackbar-for-in-app-notifications-6c199446b80c
//const useStyles = makeStyles({
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 400,
      minWidth: 350,
    },
    Paper:{ padding: theme.spacing(2,2)},
    Paper2:{padding:1,marginTop:1,marginBottom:10,height:80}

   // toolbarMargin: theme.mixins.toolbar
  }));
  const style2={   Paper:{padding:1,marginTop:1,marginBottom:10,height:80}
}
export default function Centro() {
  const { state, dispatch } = React.useContext(Application);
 // alert(centro)
 //resultado0=state.resultados
 // alert("centro "+JSON.stringify(resultado0))
  //const progress=resultado0.porcunidad.toFixed(2)
  //const participacion=resultado0.participacion.toFixed(2)
  const progress=50
  const participacion=60
    const classes = useStyles();
  
    const [panels] = useState([
        {
          title: 'Miembros de Mesa CNE',
          content: 'First panel content...'
        },
        {
          title: 'Miembros de Juntas CNE',
          content: 'Second panel content...'
        },
        {
          title: 'Padron de Mesa',
          content: 'Third panel content...'
        }
        ]);
  const [personas,setPersonas]=useState(
    [
    {idrol:1,rol:"Rol 1111",personas:[
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
    
    ]}
    ,
    
    {idrol:1,rol:"Rol 1111",personas:[
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
    
    ]}
    ,
    {idrol:1,rol:"Rol 1111",personas:[
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
      {cedula:"",nombreapellido:"pedro aaaa",apellido:"azpurua"},
    
    
    ]}
    
    ]
  )    
  const [items, setItems] = useState([
    { rol: 'First Item', timestamp: new Date() },
    { name: 'Second Item', timestamp: new Date() },
    { name: 'Third Item', timestamp: new Date() }
  ]);
  const [miembrosmesa, setMiembros] = useState([
    { rol: 'Presidente', nombre:'Luis Perez (0412)9798978' },
    { rol: 'Secretario', nombre:'Jose Cuervo (0412)9289828' },
    { rol: 'Miembro', nombre:'Ramona Lewis (0412)9827282' },
    { rol: 'Reserva', nombre:'Jose William (0412)9287722' },

  ]);
  const [juntas, setJuntas] = useState([
    { rol: 'Presidente', nombre:'Jonni Perez (0412)9798978' },
    { rol: 'Secretario', nombre:'Ricardo Gomez (0412)9289828' },

  ]);
  const [testigos, setTestigos] = useState([
    { rol: 'Testigo Principal', nombre:'Jonni Perez (0412)9798978' },
    { rol: 'Testigo Suplente', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'Testigo Suplente', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'Logistica', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'SOS', nombre:'Ricardo Gomez (0412)9289828' },

  ]);
  const [observadores, setObservadores] = useState([
    { rol: 'Coordinador Observacion', nombre:'Jonni Perez (0412)9798978' },
    { rol: 'Comunicaciones', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'Monitor Conteo Rapido', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'Logistica', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'SOS', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'Punto VinoTinto', nombre:'Ricardo Gomez (0412)9289828' },

  ]);
console.log(state.rolespersonas)
  return (
    <Fragment>


  
      <Grid container spacing={5} justify="center">
            <Grid item key={0}>
            <Card className={classes.card}>

            <CardActionArea>
        
        <CardContent>
        <Paper style={style2.Paper}>

                
<Typography gutterBottom variant="h6" component="h2">
{state.centro}
</Typography>
</Paper>
          <Table><TableRow><TableCell>
          <Circle animate={true} animationDuration="1s"   progress={state.resultados.participacion.toFixed(2)} size={60} percentSpacing={10}  bgColor="lightgray"  
                    textColor="black" progressColor="black"    roundedStroke={false}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>
                  </TableCell><TableCell>
                    <Circle animate={true} animationDuration="1s"   progress={state.resultados.porcunidad.toFixed(2)} size={60} percentSpacing={10}  bgColor="red"  
                    textColor="dodgerblue" progressColor="dodgerblue"    roundedStroke={false}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>
                  </TableCell></TableRow></Table>  
                  <Paper>

                 <table width="100%">
                   <tbody>
                   <tr><td>
                      <Typography  variant="subtitle2">Electores:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {state.resultados.electores.toLocaleString('de-DE') }</Typography>
                  </td></tr></tbody></table>
                  </Paper>
                  <Paper>
                  <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Centros:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {state.resultados.centros.toLocaleString('de-DE') }</Typography>
                  </td></tr></table>
                  </Paper>
                  <Paper>
                 <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Mesas:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {state.resultados.mesas.toLocaleString('de-DE')}</Typography>
                  </td></tr></table>
                  </Paper>
                  <br/>
                  <Paper>
                  <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Participacion:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {state.resultados.votos.toLocaleString('de-DE') }</Typography>
                  </td></tr></table>
                  </Paper>
                  <Paper>
                  <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">UNIDAD:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {state.resultados.unidad.toLocaleString('de-DE')  }</Typography>
                  </td></tr></table>
                  </Paper>
                  <Paper>
                  <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">OFICIALISMO:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {state.resultados.oficialismo.toLocaleString('de-DE')}</Typography>
                  </td></tr></table>
                  </Paper>
                  
                  <Paper>
                  <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Nulos:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {state.resultados.nulos.toLocaleString('de-DE')   }</Typography>
                  </td></tr></table>
                  </Paper>
        </CardContent>
        <Eventos />
              </CardActionArea>

              

            <CardActions>
           
            <IconButton
                  color="primary"
                 // className={classes.button}
                  aria-label="Upload picture"
                 component="span"
                 //onClick={()=>goDown()}
                >
                  <Icon icon={'down'} />
                </IconButton>
                <IconButton
                  color="primary"
                 // className={classes.button}
                  aria-label="Upload picture"
                 component="span"
                 //onClick={()=>goUp()}
                >
                 <Icon icon={'up'} />
                </IconButton>
              </CardActions>
            </Card>
            </Grid>
            </Grid>

{
state.rolespersonas.map((roles,index)=>(

          <ExpansionPanel
            key={1}
            disabled={false}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{roles.rol}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
 <List>
      {roles.personas.map((item, index) => (
        <ListItem key={index} button dense>
          <ListItemText
            primary={item.nombreapellido}
            secondary={item.nombreapellido}
          />
                  </ListItem>
      ))}
    </List>
         </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>



))


}

        

  

    </Fragment>

  );
}
//export default Centro;
