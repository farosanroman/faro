import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import biz1 from '../../images/biz1.png'
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
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
  }
}));
export default function About() {
    //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
   // const { state, dispatch } = React.useContext(Application);

   const eventos=  [
    {
      "id": 0,
      "title":"Auditoría de la Máquina de Votacion",
      "subtitle":"2005 Ojo Electoral",
      "image": "images/biz1.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"Colaboramos con la ONG Ojo Electoral en las auditorias de uina de Votacion: Apertura de la Mesa, manejo de contingencias, Cierre de la Mesa, Transmision y Auditorias"                        
    },
    {
        "id": 1,
        "title":"Primera Version de un Sistema Electoral",
        "subtitle":"2012 Iniciativa Personal",
        "image": "images/biz2.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Se comenza una primera version de un sistema electoral en c# .Net"                        
      }
,        
{
"id": 2,
"title":"Conteo Rapido de Primarias",
"subtitle":"2012 Primarias de Oposicion",
"image": "images/cr2012.png",
"category": "mains",
"label":"Hot",
"price":"4.99",
"description":"Desarrollo en Silverlight de Microsoft y servicios xml para Windows 8."                        
}
,
      {
        "id": 3,
        "title":"Padron Electoral en Faro",
        "subtitle":"2012 Unidad y controlar los Padrones Electorales",
        "image": "images/biz3.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Desarrollo en web basado en aspx.net de Microsoft, Sql Server y servicios xml"                        
      }
      ,        
      {
        "id": 4,
        "title":"Conteo Rapido Presidencial",
        "subtitle":"2012 Unidad",
        "image": "images/biz4.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Desarrollo en Silverlight de Microsoft y servicios xml para Windows 8."                        
      },
              
      {
        "id": 5,
        "title":"Denuncia de Irregularidades",
        "subtitle":"2013 Prueba de Concepto",
        "image": "images/sos1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Se extendian los servicios de faro al manejo de mapas geoespaciales conteniendo fotos y denuncias de irregularidades"                        
      }
      ,         
      {
        "id": 6,
        "title":"Faro Clasico",
        "subtitle":"2013 MUD",
        "image": "images/biz6.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Evolucion de Faro a una platadorma en la nube de API json, Sql Server, jquery y bootstrap con una arquitectura SPA (Single Page Application)"                        
      }
      ,
              
      {
        "id": 7,
        "title":"Conteo Rapido Presidencial",
        "subtitle":"2013 MUD",
        "image": "images/biz5.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Graficos por Estratos de Curvas de Apertura y Cierres, Ecrutinios e irregularidades con un API de json y SPA con Ajax y jquery"                        
      }
      ,
          
      {
        "id":8,
        "title":"Recuperacion de Conteo Rapido",
        "subtitle":"2018 Unidad",
        "image": "images/corocoro1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Faro dispone de interfases para la recuperacion de la informacion del conteo rapido: Aperturas, Medio Dia, Tarde Cierre, Totalizacion y Auditoria"                        
      },        
      {
        "id": 9,
        "title":"Conteo Rapido Asamblea",
        "subtitle":"2015 MUD",
        "image": "images/biz5.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Graficos por Estratos de Curvas de Apertura y Cierres, Ecrutinios e irregularidades con un API de json y SPA con Ajax y jquery"                        
      }
      ,
              
      {
        "id": 10,
        "title":"Consulta Ciudadana",
        "subtitle":"2017 MUD",
        "image": "images/bizconsulta.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Registro y prediccion de los ritmos de la participacion con algoritmos que se ajustaban para poder predecir los resultados."                        
      }
      ,
              
      {
        "id": 11,
        "title":"BOTS de Consultas",
        "subtitle":"2017 Prueba de Concepto",
        "image": "images/bizbot.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Incorporacion de webhooks a la plataforma de Twitter y Telegram para utilizar los API de json de las plataformas electorales."                        
      }
      ,
      
              
      {
        "id": 12,
        "title":"BOTS de Observacion Electoral",
        "subtitle":"2017",
        "image": "images/bizbot2.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Utilizacion de las plataformas de Twiter y Telegram para enviar participacion e imagenes de irregularidades y actas de escrutinio."                        
      }
      ,       
      {
        "id": 13,
        "title":"Call Center",
        "subtitle":"2017 Unidad",
        "image": "images/bizcc1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"La plataforma incorpora formularios de investigacion del ambiente politico para ser utilizados por Call Center o enviados por correos."                        
      }
      ,     
      {
        "id": 14,
        "title":"Primarias de Gobernaciones Plataforma",
        "subtitle":"2017",
        "image": "images/bizpri1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Se evoluciono a uso de plataformas 'serverless' mediante el uso de Azure Functions y bases de datos NoSql a traves de formularios y Telegram."                        
      }
      ,       
      {
        "id": 15,
        "title":"Primarias de Gobernaciones Resultados",
        "subtitle":"2017 Unidad",
        "image": "images/bizpri2.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Integracion de datos NoSql con Blobs de imagenes para un centro de totalizacion y conciliacion con los partidos."                        
      }
      ,    
      {
        "id": 16,
        "title":"Conteo Rapido de Gobernaciones",
        "subtitle":"2018 Unidad",
        "image": "images/bizgob.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Plataforma en tiempo record pudo realizar un exitoso conteo rapido de los resultados de las Gobernaciones. COn un 20% de los cierres de las mesas ya se tenian las proyecciones que coincidieron con los resultados del CNE"                        
      }
      
      ,    
      {
        "id": 17,
        "title":"Observacion Cualitativa del Evento Presidencial",
        "subtitle":"2018 Iniciativa Ciudadana",
        "image": "images/o9d1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"A traves del Call Center dinamico los partidos con sus testigos formados para eventos electorales  pudieron hacer la observacion cualitativa. Recogiendose mas de 1.000 formularios por evento durante el dia."                        
      }
      ,    
      {
        "id": 18,
        "title":"Conteo Rapido del Evento Presidencial",
        "subtitle":"2018 Iniciativa Ciudadana",
        "image": "images/bizcr1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Faro pudo para esta ocasion, en tiempo record, montar un proeso de conteo rapido para cuantificar la participacion y los resultados. De nuevo con el 22% de los centros de la muestra se arrojaron resultados que coincidieron con los resultados del CNE."                        
      }
      ,    
      {
        "id": 19,
        "title":"GeoFaro",
        "subtitle":"2019 Iniciativa Ciudadana",
        "image": "images/geo1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.9",
        "description":"Salto Cuantico a nuevas Plataformas de OpenSource utilizadas por UBER, AirBnB, Netflix."}
        ,
       
      {
        "id": 21,
        "title":"Plataforma de Mensajeria SMS, MAIL, DM",
        "subtitle":"2019 Iniciativa Ciudadana",
        "image": "images/faromail.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"GeoFaro esta incorporando la utilizacion de SMS, correos y tweets en su plataforma geoespacial."          }
        ,
   
        
        
       
          {
            "id": 222,
            "title":"Consultas a Ciudadanos en GeoFaro",
            "subtitle":"2019 Iniciativa Ciudadana",
            "image": "images/geo2.png",
            "category": "mains",
            "label":"Hot",
            "price":"4.99",
            "description":"Adicionalmente podra enviar consultas o encuestas a los testigos y activistas y obtener sus resutados en tiempo real."          }
            ,
      
            {
              "id": 20,
              "title":"GeoElectoral",
              "subtitle":"2019 Iniciativa Ciudadana",
              "image": "images/geo3.png",
              "category": "mains",
              "label":"Hot",
              "price":"4.9",
              "description":"Analisis Geoespacial y temporal de resultados electorales con el uso de las nuevas plataformas OpenSource"}
              ,      {
        "id": 23,
        "title":"InteliFaro de BigData",
        "subtitle":"2020 Iniciativa Ciudadana",
        "image": "images/geobig1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Se esta construyendo la arquitectura de inteligencia de data electoral..."                        
      },
      {
        "id": 24,
        "title":"GeoFaro en Servicios Publicos",
        "subtitle":"La Ruta del Agua",
        "image": "images/go1.png",
        "category": "mains",
        "label":"Hot",
        "price":"4.99",
        "description":"Geo Faro comienza a moverse la reconstruccion de Venezuela apoyando en levantar la informacion de las Infraestructuras de los Servicios Publicos"                        
      }
   ]   
  
   // alert(JSON.stringify(state.organizacion))
    
   return (
  
<div className={classes.root}>     
<Container maxWidth="lg" className={classes.container}>   

<Grid container spacing={2}>

{eventos.map((item, index) => (
  <Grid item xs={12} sm={6} md={3}>
 <ImgMediaCard  testigo={item}  />
</Grid>     
         
               ))}  

   <Grid item xs={12} sm={6} md={3}>

   </Grid>     
  
   </Grid>
   </Container>
</div>
)}

   
function ImgMediaCard(props) {
  const classes = useStyles();
  //const {testigo}  props
  //alert(JSON.stringify(props.testigo))
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.testigo.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
                {props.testigo.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="h3">
                {props.testigo.subtitle}
          </Typography>
  
          <Typography variant="body2" color="textSecondary" component="p">
          {props.testigo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}




/*
import biz2 from '../../assets/images/biz2.png'
import biz3 from '../../assets/images/biz3.png'
import biz4 from '../../assets/images/biz4.png'
import biz5 from '../../assets/images/biz5.png'
import biz6 from '../../assets/images/biz6.png'
import bizconsulta from '../../assets/images/bizconsulta.png'
import bizbot from '../../assets/images/bizbot.png'
import bizbot2 from '../../assets/images/bizbot2.png'
import bizcc1 from '../../assets/images/bizcc1.png'
import bizpri1 from '../../assets/images/bizpri1.png'
import bizpri2 from '../../assets/images/bizpri2.png'
import faromail from '../../assets/images/faromail.png'
import cr2012 from '../../assets/images/cr2012.png'
import geo1 from '../../assets/images/geo1.png'
import geo2 from '../../assets/images/geo2.png'
import geo3 from '../../assets/images/geo3.png'
import bizcr1 from '../../assets/images/bizcr1.png'
import geobig1 from '../../assets/images/geobig1.png'
import bizgob from '../../assets/images/bizgob.png'
import o9d1 from '../../assets/images/o9d1.png'
import go1 from '../../assets/images/go1.png'
import sos1 from '../../assets/images/sos1.png'
import corocoro1 from '../../assets/images/corocoro1.png'

import biz7 from '../../assets/images/biz7.png'
import biz8 from '../../assets/images/biz8.png'
*/
//let imgs = {
//  biz1,biz2,biz3,biz4,biz5,biz6,biz7,biz8
  
//};
//function getImage(key) {
//  return imgs[key];
//}
