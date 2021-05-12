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

// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// //import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
      maxWidth: 350,
      minWidth: 300,
    },
    Paper:{ padding: theme.spacing(2,2),height:100},
    Paper2:{padding:1,marginTop:1,marginBottom:10,height:100}

   // toolbarMargin: theme.mixins.toolbar
  }));
  const style2={   Paper:{padding:1,marginTop:1,marginBottom:10,height:50}
}
export default function GeoFaroResumen() {
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
  
console.log(state.rolespersonas)
  return (
    <Fragment>


  
      <Grid container spacing={2} justify="center">
            <Grid item key={0}>
            <Card className={classes.card}>

      <CardActionArea>
        
        <CardContent>
        <Paper style={style2.Paper}>
             <Typography gutterBottom variant="h6" component="h2">
                      {'Avance del Padron'}
             </Typography>
           </Paper>
          <Table><TableRow><TableCell align='center' vertical-align='top'>
                   <Circle animate={true} animationDuration="1s"   progress={30} size={60} percentSpacing={10}  bgColor="lightgray"  
                    textColor="black" progressColor="green"    roundedStroke={false}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>
                  </TableCell>
              </TableRow>
            </Table>  

                  <Paper>
                     <table width="100%">
                      <tbody>
                        <tr><td>
                          <Typography  variant="subtitle2">Padron:</Typography>
                        </td><td align="right">
                          <Typography  variant="subtitle2">250 (30%)</Typography>
                        </td></tr>
                        
                        </tbody>
                      </table>
                  </Paper>
                  <br/>
                  <Paper>
                     <table width="100%">
                      <tbody>
                        <tr><td>
                          <Typography  variant="subtitle2">Coordinadores:</Typography>
                        </td><td align="right">
                          <Typography  variant="subtitle2">2 (50%)</Typography>
                        </td></tr>
                        
                        </tbody>
                      </table>
                  </Paper>
                  <Paper>
                     <table width="100%">
                      <tbody>
                        <tr><td>
                          <Typography  variant="subtitle2">Facilitadores:</Typography>
                        </td><td align="right">
                          <Typography  variant="subtitle2">10 (30%)</Typography>
                        </td></tr>
                        
                        </tbody>
                      </table>
                  </Paper>
                  <Paper>
                     <table width="100%">
                      <tbody>
                        <tr><td>
                          <Typography  variant="subtitle2">Testigos:</Typography>
                        </td><td align="right">
                          <Typography  variant="subtitle2">200 (33%)</Typography>
                        </td></tr>
                        
                        </tbody>
                      </table>
                  </Paper>
                  <Paper>
                     <table width="100%">
                      <tbody>
                        <tr><td>
                          <Typography  variant="subtitle2">Mobilizadores:</Typography>
                        </td><td align="right">
                          <Typography  variant="subtitle2">230 (10%)</Typography>
                        </td></tr>
                        
                        </tbody>
                      </table>
                      
                  </Paper>
                 
        </CardContent>
               </CardActionArea>

              

           
            </Card>
            </Grid>
            </Grid>



        

  

    </Fragment>

  );
}
//export default Centro;
