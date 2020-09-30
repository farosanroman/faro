import React,{useEffect,useState} from 'react';
//import { Application } from '../App';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Grid, Paper, Typography } from "@material-ui/core";

import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { Delete, Edit } from '@material-ui/icons';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
//import { red, blue } from 'material-ui/colors'
//const redTheme = createMuiTheme({ palette: { primary: red } })
//const blueTheme = createMuiTheme({ palette: { primary: blue } })

  const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
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

export default function DialogoVoto(props) {
 // alert("props "+props.flagformulario)
 // console.log(JSON.stringify(props)+" "+Date())
  //let [emoticones, setValue] = useState(emoticonesbase);
  const classes = useStyles();
  const className="borderBlackEmoji";
  const className2="borderEmoji";

   // var flag=props.flagopen
  // const { state, dispatch } = React.useContext(Application);
   //alert(JSON.stringify(props))
   //const [direcciones, setDireccion] = React.useState(state.persona.direcciones);
  // const [index, setIndex] = React.useState(props.index);
  const [openVote, setOpenVote] = React.useState(true);
  //const [flagOpen, setflagOpen] = React.useState(false);
  //alert("dialogoformulario "+openformulario)
  const eventos=  [
    {
      "id": 0,
      "title":"Partido XXX",
      "subtitle":"Bulbasaur",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol."                        
    },
    {
      "id": 1,
      "title":"Partido YYY",
      "subtitle":"Charmander",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado."                        
    },
    {
      "id": 2,
      "title":"Partido ZZZ",
      "subtitle":"Charizard",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque."                        
    },
    {
      "id": 3,
      "title":"Partido WWW",
      "subtitle":"Squirtle",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad."                        
    },

    {
      "id": 4,
      "title":"Partido 001",
      "subtitle":"Butterfree",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"Butterfree tiene una habilidad especial para encontrar delicioso polen en las flores. Puede localizar, extraer y transportar polen de flores que estén floreciendo a 10 km de distancia de su nido."                        
    },
    {
      "id": 5,
      "title":"Partido 002",
      "subtitle":"Pikachu",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."                        
    },
    {
      "id": 6,
      "title":"Partido 003",
      "subtitle":"Rattata",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"Rattata es cauto como él solo. Hasta cuando duerme mueve las orejas para oír todos los ruidos. No es nada delicado a la hora de elegir su hábitat. Cualquier sitio es bueno para cavar su madriguera."                        
    },
    {
      "id": 3,
      "title":"Partido 004",
      "subtitle":"Poliwhirl",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png",
      "category": "mains",
      "label":"Hot",
      "price":"4.99",
      "description":"La piel de Poliwhirl está siempre húmeda y lubricada con un fluido viscoso. Gracias a esta película resbaladiza, puede escapar de las garras del enemigo, resbalándosele de las zarpas en pleno combate."                        
    },
  ]
//   useEffect(() => {   
    
//     //setOpenVote(props.flagOpen);
// },[props.flagOpen]);
  function handleClickOpen(e) {
    //   alert(JSON.stringify(e))
    //alert(index)
    //alert("direccionForm"+JSON.stringify(direcciones))

    setOpenVote(true);
  }

  function handleClose() {
   // onClick("V3664204")
  // alert('close')
   props.closeVoto()
  // props.flagformulario=false
   setOpenVote(false);
  }
  
    
  return (
    <div>
      
      <Dialog open={openVote} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={50}>
        <DialogTitle id="form-dialog-title">Proceso de Votacion</DialogTitle>
        <DialogContent>
          {/* <DialogContentText maxWidth={50}>
            Primarias de Gobernacion XXX.
          </DialogContentText> */}
          
        {

<div className={classes.root}>     
<Container maxWidth="lg" className={classes.container}>   

<Grid container spacing={2}>

{eventos.map((item, index) => (
  <Grid item xs={12} sm={6} md={3}>
 <ImgMediaCard  testigo={item}  />
</Grid>     
         
               ))}  

   </Grid>
   </Container>
</div>
     }

        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}
        style={{backgroundColor: 'red', color: 'white'}}
        className={classes.button}
        startIcon={<HowToVoteIcon />}
      >
        Voto Nulo
      </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}


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
          height="240"
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
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<HowToVoteIcon />}
      >
        Votar
      </Button>
      </CardActionArea>
     
    </Card>
  );
}



