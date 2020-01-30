import React, { PureComponent } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Title from '../dashboard/title';
import FaroPieChart from '../indicadores/faropiechart';
//import FaroPieChart from './faropiechartborrar';
import PieChartDE from '../indicadores/piechartde';
import Total from '../indicadores/total';
import { Application } from '../../App';
import {DASHBOARD} from '../../data/DASHBOARD.json';
import {DASHBOARD2} from '../../data/DASHBOARD2.json';
//import { StateStoring } from 'devextreme-react/data-grid';
//alert(JSON.stringify(DASHBOARD))

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
    height: 300,
  },
  
   fixedHeight2: {
    height: 400,
  },
}));
export default function Indicadores() {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
  const { state, dispatch } = React.useContext(Application);

// alert("indicadores "+JSON.stringify(DASHBOARD2.dashboard[3].resultados))
    return (
        <div className={classes.root}>     
        <Container maxWidth="lg" className={classes.container}>   
      
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
           <Paper className={fixedHeightPaper}>
           <Total indicador={'Total'}/>
             </Paper>
           </Grid>      <Grid item xs={12} sm={6} md={3}>
           <Paper className={fixedHeightPaper}>
           <Total indicador={'Semanal'}/>
             </Paper>
           </Grid>     
           <Grid item xs={12} sm={6} md={3}>
           <Paper className={fixedHeightPaper}>
           <Total indicador={'Trimestral'}/>
             </Paper>
           </Grid>      <Grid item xs={12} sm={6} md={3}>
           <Paper className={fixedHeightPaper}>
           <Total indicador={'Retirados'}/>
             </Paper>
           </Grid>     
           {DASHBOARD2.dashboard.map((item, index) => (
              <Grid item xs={12} sm={6} md={3}>
              <Paper className={fixedHeightPaper}>
             
              <FaroPieChart indicador={'Organizacion'} indicador={item}/>
      
                </Paper>
              </Grid>    
         
               ))}  


        </Grid>       
   </Container>
</div>
    );
  }
