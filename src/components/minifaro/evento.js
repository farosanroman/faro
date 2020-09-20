import React, { useState,Fragment } from 'react';

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

import Circle from 'react-circle';
import Avatar from '@material-ui/core/Avatar';
//import Icon from '../helpers/icon';
// import psuv from 'images/logo.png';
// import mud from 'images/mud.png';
// import otro from 'images/otro.png';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker,  KeyboardDatePicker,} from '@material-ui/pickers';


import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    card: {
      maxWidth: 350,
    },
    paper1: {
      //width: 100,
      height:40,
      maxWidth:350
    },
   // toolbarMargin: theme.mixins.toolbar
  });
  const style={   Paper:{padding:1,marginTop:1,marginBottom:1}
}
const style2={   Paper:{padding:1,marginTop:1,marginBottom:10,height:20}
}


export default function Evento() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  
    function handleDateChange(date) {
      setSelectedDate(date);
    }
  
  
    const classes = useStyles();
  

  const [juntas, setJuntas] = useState([
    { rol: 'Presidente', nombre:'Jonni Perez (0412)9798978' },
    { rol: 'Secretario', nombre:'Ricardo Gomez (0412)9289828' },

  ]);
  const [testigos, setTestigos] = useState([
    { rol: 'Principal', nombre:'Jonni Perez (0412)9798978' },
    { rol: 'Primer Suplente', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'Segundo Suplente', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'Monitor', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'Logistica', nombre:'Ricardo Gomez (0412)9289828' },
    { rol: 'SOS', nombre:'Ricardo Gomez (0412)9289828' },

  ]);

  return (
    <Fragment>
    <Grid container>
      <Grid item sm={6} xs={12}>
        
<Card className={classes.card}>
              <CardActionArea>
                <CardContent >
                <Paper className={classes.paper1}>

                
                  <Typography gutterBottom variant="h6" component="h2">
                    {'Colegio Bolivariano San Martin'}
                  </Typography>
                </Paper>
              
                  
                  <Paper style={style.Paper}>
                 <Table width="100%">
                   <TableRow><TableCell>
                      <Typography  variant="subtitle2">Apertura:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'9:30am' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">Cierre:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'6:30pm' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">Part:</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'P1:100 P2:200 P3:300' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">Unidad :</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'230' }</Typography>
                  </TableCell></TableRow>
                  <TableRow><TableCell>
                      <Typography  variant="subtitle2">PSUV :</Typography>
                  </TableCell><TableCell align="right">
                      <Typography  variant="subtitle2"> {'229' }</Typography>
                  </TableCell></TableRow>
                  
                  </Table>
                  </Paper> 
                  <Table><TableRow><TableCell>
                  <Typography  variant="subtitle2" component="h3" >
                  P%
                  </Typography>
                  </TableCell><TableCell>
                  <Circle progress={35} size={50}   bgColor="lightgray"  roundedStroke={true}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>
                  </TableCell><TableCell>
                  <Typography gutterBottom variant="subtitle2"  >
                      R%
                    </Typography>
                    </TableCell><TableCell>
                    <Circle progress={55} size={50} bgColor="red"   roundedStroke={true}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>

                  </TableCell></TableRow></Table>    
                                  
                
                </CardContent>
              </CardActionArea>
              <CardActions>
            

               
              </CardActions>
            </Card>
        
           
        
        </Grid>
        <Grid item sm={6} xs={12}>
          
        
          <ExpansionPanel
            key={1}
            disabled={false}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{'Apertuta/Cierre'}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
               
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
     
        <KeyboardTimePicker
          margin="normal"
          id="mui-pickers-time"
          label="Apertura"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
     
        <KeyboardTimePicker
          margin="normal"
          id="mui-pickers-time"
          label="Cierre"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
         </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>




          <ExpansionPanel
            key={1}
            disabled={false}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{'Participacion'}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>

              <TextField
        id="standard-name"
        label="Participacion 10am"
        className={classes.textField}
        value={100}
        //onChange={handleChange('name')}
        margin="normal"
      />
       <TextField
        id="standard-name"
        label="Participacion 12am"
        className={classes.textField}
        value={200}
        //onChange={handleChange('name')}
        margin="normal"
      />
       <TextField
        id="standard-name"
        label="Participacion 4pm"
        className={classes.textField}
        value={300}
        //onChange={handleChange('name')}
        margin="normal"
      />
         </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            key={0}
            disabled={false}
          >
            <ExpansionPanelSummary  width={300} expandIcon={<ExpandMoreIcon />}>
              <Typography>{'Resultados'}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Paper style={style.Paper}>
                 <Table width="50%">
                 <TableHead>
          <TableRow>
            <TableCell>Partido</TableCell>
            <TableCell align="right">Votos</TableCell>
          </TableRow>
        </TableHead>  
        <TableBody>  
           <TableRow>
    
    
                   <TableCell>
                   <Avatar alt="Remy Sharp" src={'images/mud.png'}   className={{ margin: 1 }} />
       
                      <Typography  variant="subtitle2">Cedula:</Typography>
                  </TableCell><TableCell align="right">
                  
                      <Typography  variant="subtitle2"> 
                      <TextField
        id="standard-name"
        label="PSUV"
        className={classes.textField}
        value={100}
        //onChange={handleChange('name')}
        margin="normal"
      />
                      </Typography>
                  </TableCell>
                  </TableRow>
                 <TableRow>
    
    
                   <TableCell>
                   <Avatar alt="Remy Sharp" src={'images/psuv.jpg'}   className={{ margin: 1 }} />
                  </TableCell><TableCell align="right">
       
                      <Typography  variant="subtitle2">   <TextField
        id="standard-name"
        label="PSUV"
        className={classes.textField}
        value={100}
        //onChange={handleChange('name')}
        margin="normal"
      /></Typography>
                  </TableCell>
                  </TableRow>


                  <TableRow>
    
    
    <TableCell>
    <Avatar alt="Remy Sharp" src={'images/otro.jpg'}   className={{ margin: 1 }} />

     
   </TableCell><TableCell align="right">

       <Typography  variant="subtitle2">   <TextField
id="standard-name"
label="Otro"
className={classes.textField}
value={100}
//onChange={handleChange('name')}
margin="normal"
/></Typography>
   </TableCell>
   </TableRow>

                  </TableBody>
                  </Table>
                  </Paper> 
            </ExpansionPanelDetails>
          </ExpansionPanel>
         
        



        
          <ExpansionPanel
            key={3}
            disabled={false}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{'Imagen del Acta'}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Paper style={style.Paper}>

            <img src={'https://pbs.twimg.com/media/BGo5SLxCEAEes1J.jpg'} width='600px' align="center"></img>
            
                  </Paper> 

              <Typography>

         </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          
        </Grid>
      </Grid>

    </Fragment>

  );
}

//primarias de gobernaciones
/*
{
    "id": "030101001*1",
    "orden": 1,
    "index": "03010100101",
    "codigocanonicomesa": "03010100101",
    "codestado": "03",
    "codcne": "030101001",
    "type": "mesa",
    "electores": 5719,
    "fecha": "2017-09-09T23:44:41.027Z",
    "estado": "APURE",
    "municipio": "ACHAGUAS",
    "parroquia": "ACHAGUAS",
    "centro": "CANCHA RAUL LEONI",
    "direccioncentro": "CALLE PRINCIPAL DE ACHUAGUAS",
    "mesa": 1,
    "mesas": 4,
    "cc": "1",
    "grupocc": "1",
    "location": {
        "type": "Point",
        "coordinates": [
            -66.92965698,
            10.52173328
        ]
    },
    "participacion": {
        "participacion": 0,
        "fecha": ""
    },
    "totales": {
        "cuaderno": 317,
        "boletas": 317,
        "cuaderno2": 317,
        "boletas2": 317
    },
    "postulaciones": {
        "candidatos": [
            {
                "candidato": "0301",
                "nombre": "JOSE MONTILLA",
                "votos": 152
            },
            {
                "candidato": "0302",
                "nombre": "JULIO CESAR PINO",
                "votos": 1
            },
            {
                "candidato": "0303",
                "nombre": "LUMAY BARRETO",
                "votos": 50
            },
            {
                "candidato": "0304",
                "nombre": "RONALD TORRES",
                "votos": 8
            },
            {
                "candidato": "0305",
                "nombre": "WILSON GALLARDO",
                "votos": 106
            },
            {
                "candidato": "0000",
                "nombre": "NULO",
                "votos": 0
            }
        ],
        "candidatos2": [
            {
                "candidato": "0301",
                "nombre": "JOSE MONTILLA",
                "votos": 152
            },
            {
                "candidato": "0302",
                "nombre": "JULIO CESAR PINO",
                "votos": 1
            },
            {
                "candidato": "0303",
                "nombre": "LUMAY BARRETO",
                "votos": 50
            },
            {
                "candidato": "0304",
                "nombre": "RONALD TORRES",
                "votos": 8
            },
            {
                "candidato": "0305",
                "nombre": "WILSON GALLARDO",
                "votos": 106
            },
            {
                "candidato": "0000",
                "nombre": "NULO",
                "votos": 0
            }
        ]
    },
    "status": {
        "serial": "",
        "telegramid": "",
        "foto": "",
        "fechafoto": "",
        "catalogacion": "",
        "fechacatalogacion": "",
        "totalizacion": true,
        "fechatotalizacion": "2017-09-11T14:45:55.871Z",
        "cuadre": true,
        "error": "",
        "usuario": "CAROLINA REYES",
        "totalizacion2": true,
        "fechatotalizacion2": "2017-09-11T14:45:55.871Z",
        "cuadre2": true,
        "error2": "",
        "usuario2": "ANA ESCOBAR",
        "sinconflicto": true,
        "comentario": ""
    },
    "monitor": {
        "fecha": "",
        "cedula": "",
        "nombre": "",
        "celular": "",
        "telegramid": ""
    },
    "_rid": "PfFsAIus8gcBAAAAAAAAAA==",
    "_self": "dbs/PfFsAA==/colls/PfFsAIus8gc=/docs/PfFsAIus8gcBAAAAAAAAAA==/",
    "_etag": "\"5d005c70-0000-0000-0000-59b6d9e40000\"",
    "_attachments": "attachments/",
    "_ts": 1505155556
}
*/