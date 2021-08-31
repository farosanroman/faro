import React, { PureComponent,useEffect,useState } from 'react';
import { useRecoilState,useRecoilValue, useSetRecoilState} from "recoil";
import { flagLogin,login,codcne,organizacion,roles,indicadoresorganizacion} from '../store/atom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import FaroPieChart from '../indicadores/faropiechart';
//import FaroPieChart from './faropiechartborrar';
//import PieChartDE from '../indicadores/piechartde';
import Total from './total';
//import CircleTotal from '../indicadores/circletotal';
//import { Application } from '../../App';
//import {DASHBOARD} from '../../data/DASHBOARD.json';
//import {DASHBOARD2} from '../../data/DASHBOARD2.json';

import TotalCircle from './totalcircle';
import TotalCurve from './totalcurve';
import TotalDonut from './totaldonut';
import TotalPie from '../indicadores/totalpie';

import TotalDemografy from './totaldemografy';
import HeatMap from './heatmap';

import { Pivote } from './pivote'
import {useFetch}  from '../hooks/usefetch'
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

  title: {
    flexGrow: 1,
  },

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
  
  fixedHeightPie: {
    height: 450,
  },
  
}));
export default function Indicadores() {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
  const fixedHeightPaperPie = clsx(classes.paper, classes.fixedHeightPie);
  const [FLAGLOGIN, setFLAGLOGIN] = useRecoilState(flagLogin);
  const [LOGIN, setLOGIN] = useRecoilState(login); 
  const [INDICADORESORGANIZACION, setINDICADORESORGANIZACION] = useRecoilState(indicadoresorganizacion); 
  const CODCNE=useRecoilValue(codcne) 
  
  const ORGANIZACION=useRecoilValue(organizacion) 
  const ROLES=useRecoilValue(roles)
  //const GETINDICADORES=useRecoilValue(getindicadores) 

  const [ data, isLoading, isError , fetchData] = useFetch("");
  const [flag,setFlag]= useState(false);
  const [flagCircular, setFlagCircular] = React.useState(false); 
  const [indicadores,SetIndicadores]=React.useState({}) 
   
 // alert(JSON.stringify(state.login))
// alert("indicadores "+JSON.stringify(DASHBOARD2.dashboard[3].resultados))
useEffect(() => {   

 // alert(JSON.stringify(ORGANIZACION))
  //alert(JSON.stringify(state.login.idfuncional))
  // http://openfaroapi.azurewebsites.net/api/indicadoresget?codigocne=&idpartido=&idnodofuncional=1039&roles=
  //if (GETINDICADORES==true){
    //console.log(CODCNE+" "+JSON.stringify(ORGANIZACION)+" "+JSON.stringify(ROLES))
    setFlagCircular(true)
    var partidos=""
   // alert(JSON.stringify(ORGANIZACION))
    ORGANIZACION.map(function (partido) {
      if (partido.selected)partidos+=partido.id+","; 
      
    });
    partidos=partidos.substring(0, partidos.length - 1);
    if (partidos=="")partidos="NADA"
    // alert(JSON.stringify(ROLES))
    var roles=""
    ROLES.map(function (rol) {
      if (rol.selected)roles+=rol.idrol+","; 
      
    });
    roles=roles.substring(0, roles.length - 1);
    if (roles=="")roles="NADA"
   // alert(JSON.stringify(roles))
    //partidos="2";
    console.log('http://openfaroapi.azurewebsites.net/api/indicadoresget?codigocne='+CODCNE+'&idpartido='+partidos+'&idnodofuncional='+LOGIN.idfuncional+'&roles='+roles)
    fetchData('http://openfaroapi.azurewebsites.net/api/indicadoresget?codigocne='+CODCNE+'&idpartido='+partidos+'&idnodofuncional='+LOGIN.idfuncional+'&roles='+roles)
  //}
  //fetchData('http://openfaroapi.azurewebsites.net/api/indicadoresget?codigocne=&idpartido=&idnodofuncional=1039&roles=')
  // console.log('http://openfaroapi.azurewebsites.net/api/indicadoresget?codigocne=&idpartido=&idnodofuncional='+state.login.idfuncional+'&roles=')    
},[CODCNE,ORGANIZACION,ROLES]);
useEffect(() => {   
//alert()
},[ORGANIZACION]);
useEffect(() => {
  if (isLoading) {
  //  setFlagCircular(true)
  }
  //alert(JSON.stringify(data))
  if ((data!=undefined)&&(!isLoading)&&(JSON.stringify(data)!="[]"))      
  {
   // alert(JSON.stringify(data))
   setFlag(true)
   setFlagCircular(false)
   //console.log(JSON.stringify(data.indicadores[0]))
   SetIndicadores(
   data
   )
   setINDICADORESORGANIZACION(data)
 // alert("INDICADORES "+JSON.stringify(data.partidos))
  }
},[data,isLoading]);
    return (
        <div className={classes.root}>    
 {flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={20}   thickness={4} className={classes.progress} />}

{flag&&         
        <Container maxWidth="lg" className={classes.container}>  
       
        <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
      <TotalCircle titulo={'Totales'} indicador={'Totalhh'} color={'#1bc943'} bcolor={"rgba(27, 201, 67, 0.15)"} porc={25} total={23000} leyenda={'Total Acumulado'}/>
           {/* <TotalCircle titulo={'Totales'} indicador={'Totalhh'} color={'#1bc943'} bcolor={"rgba(27, 201, 67, 0.15)"} porc={indicadores.indicadores[0].porc} total={indicadores.indicadores[0].cant} leyenda={'Total Acumulado'}/> */}
      </Grid>

     <Grid item xs={12} sm={6} md={3}>
     <TotalCircle titulo={'Trimestral'} indicador={'Totalhh'} color={"dodgerblue"} bcolor={'rgb(230, 240, 255)'} porc={12} total={5000} leyenda={'Total Acumulado'}/>
     
           {/* <TotalCircle titulo={'Trimestral'} indicador={'Totalhh'} color={"dodgerblue"} bcolor={'rgb(230, 240, 255)'} porc={indicadores.indicadores[1].porc} total={indicadores.indicadores[1].cant} leyenda={'Total Acumulado'}/>
      */}
      </Grid>
        <Grid item xs={12} sm={6} md={3}>
           <TotalCircle titulo={'Semanal'} indicador={'Totalhh'} color={"#11c5db"} bcolor={'rgb(230, 247, 255)'} porc={10} total={123} leyenda={'Total Acumulado'}/>
           {/* <TotalCircle titulo={'Semanal'} indicador={'Totalhh'} color={"#11c5db"} bcolor={'rgb(230, 247, 255)'} porc={indicadores.indicadores[2].porc} total={indicadores.indicadores[2].cant} leyenda={'Total Acumulado'}/>
      */}
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
           <TotalCircle titulo={'Retiros'} indicador={'Totalhh'} color={'#f83245'} bcolor={'rgb(255, 235, 230)'} porc={2} total={1500} leyenda={'Total Acumulado'}/>
           {/* <TotalCircle titulo={'Retiros'} indicador={'Totalhh'} color={'#f83245'} bcolor={'rgb(255, 235, 230)'} porc={0} total={0} leyenda={'Total Acumulado'}/>
     */}
      </Grid>
      </Grid>
{/* 
      <Grid container spacing={3}>
   
  <Grid item xs={12} md={12} sm={12}>
      <TotalCurve titulo={'Totales'} color={'#1bc943'} data={[
             {
                 name: 'Orders',
                 data: [0, 10, 22, 43, 46, 56, 84, 145]
             }
         ]}/>
   </Grid> 

   </Grid>
 */}

      <Grid container spacing={3}>
      
      <Grid item xs={12} md={6} sm={12}>
      <Paper className={fixedHeightPaper2}>
         <TotalDonut resultados={indicadores.partidos} titulo={'Partidos'} />
      </Paper>
     </Grid>
     <Grid item xs={12} md={6} sm={12}>
      <Paper className={fixedHeightPaper2}>
         <TotalDonut resultados={indicadores.roles} titulo={'Roles'} />
      </Paper>
     </Grid> 
    
     </Grid>
    
     <Grid container spacing={3}>
     <Grid item xs={12} sm={12} md={6}>
                  <Paper className={fixedHeightPaper2}>
                           <HeatMap />
                  </Paper>
            </Grid>
              <Grid item xs={12} sm={12} md={6}>
                  <Paper className={fixedHeightPaper2}>             
                         <TotalDemografy resultados={indicadores.sexo} total={indicadores.indicadores[0].cant}/>
                 </Paper>
              </Grid>
         
          </Grid>     

     
      <Grid container spacing={3}>
      {indicadores.caracteristicas.map((item, index) => (
      <Grid item xs={12} sm={6} md={3}>
      <Paper className={fixedHeightPaperPie}>
     
      <TotalPie indicador={'Organizacion'} titulo={'Experiencia'} resultados={item}/>

        </Paper>
      </Grid>    

      ))}
             
         
             
        </Grid>   
      {/* <Grid container spacing={3}>
           {DASHBOARD2.dashboard.map((item, index) => (
              <Grid item xs={12} sm={6} md={3}>
              <Paper className={fixedHeightPaper}>
             
              <FaroPieChart indicador={'Organizacion'} indicador={item}/>
      
                </Paper>
              </Grid>    
         
               ))}  


        </Grid>    */}
         
      {/* <Pivote />
          */}
   </Container>
}
</div>
    );
  }
