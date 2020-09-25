import React,{useEffect,useState} from 'react';
import clsx from 'clsx';
//import { Application } from '../App';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Grid, Paper, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import { Delete, Edit } from '@material-ui/icons';
import CameraAlt from '@material-ui/icons/CameraAlt';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


//import { red, blue } from 'material-ui/colors'
//const redTheme = createMuiTheme({ palette: { primary: red } })
//const blueTheme = createMuiTheme({ palette: { primary: blue } })

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },

    root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
  }));
  function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  const tileData = [
   
    {
      img: "http://www.villacaribehotel.com/images/jkit/items/289-screen.jpg"    ,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwoISWp_pxf0etkrx3_x19NhN2XPgpk7VAEgju3E2jpXmvCTz",
           title: 'Image',
           author: 'author',
           cols: 1,
         },
         {
          img: "https://media2.picsearch.com/is?VdSKCps5Xsiv6cwxpboLS5gIMDk3MFq7biuyVkOQtD4&height=227",
          title: 'Image',
          author: 'author',
          cols: 2,
        },{
          img: "https://www.acn.com.ve/wp-content/uploads/2019/09/rumichaca.jpg",
          title: 'Image',
          author: 'author',
          cols: 1,
        },{
          img: "https://miro.medium.com/max/4000/1*HHSS2MAwp_Z0zvuR9iKg6Q.jpeg",
          title: 'Image',
          author: 'author',
          cols: 2,
        }
       ];
export default function DialogoSos(props) {
 // alert("props "+props.flagformulario)
 // console.log(JSON.stringify(props)+" "+Date())
  let [emoticones, setValue] = useState(emoticonesbase);
  const classes = useStyles();
  const className="borderBlackEmoji";
  const className2="borderEmoji";

   // var flag=props.flagopen
 //  const { state, dispatch } = React.useContext(Application);
   //alert(JSON.stringify(props))
   //const [direcciones, setDireccion] = React.useState(state.persona.direcciones);
   const [index, setIndex] = React.useState(props.index);
  const [openSos, setOpenSos] = React.useState(false);
  //const [flagOpen, setflagOpen] = React.useState(false);
  //alert("dialogoformulario "+openformulario)
  useEffect(() => {   
   // alert(props.flagOpenFormulario)
    setOpenSos(props.flagOpenSos);
},[props.flagOpenSos]);
//  function handleClickOpen(e) {
    //   alert(JSON.stringify(e))
    //alert(index)
    //alert("direccionForm"+JSON.stringify(direcciones))

 //   setOpenFormulario(true);
 // }

  function handleClose() {
   // onClick("V3664204")
   //alert('close')
   //props.closeDialog()
  // props.flagformulario=false
  props.closeSos()
   setOpenSos(false);
  }
  
    function Click(index0,index) {
        //<a onClick={() =>{console.log(emoticones); var emo=emoticones; emo[index0].respuesta=index;setValue(emo);console.log(emo)}}>{r.descripcion}</a>
         //alert(index0+" "+index)
         //setValue(newValue);
         var emo=emoticones;
        // alert(JSON.stringify(e))
         emo[index0].respuesta=index
         //emoticonesbase[0].respuesta=index
         //var a=emoticonesbase
         //console.log(a)
         //setValue(a);
    
         setValue(emoticones => ([...[], ...emo]));
         //onSelect(newValue)
        // alert(JSON.stringify(emoticones))
        //console.log(emoticones)
       }
  return (
    <div>
                
      <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={50}>
        <DialogTitle id="form-dialog-title"> Observacion Cualitativa</DialogTitle>
        <DialogContent>
          <DialogContentText maxWidth={50}>
            Irregularidades.
          </DialogContentText>

<FormControl component="fieldset">
  <FormLabel component="legend">Apertura</FormLabel>
  <RadioGroup defaultValue="Sin" aria-label="gender" name="customized-radios">
    <FormControlLabel value="Sin" control={<StyledRadio />} label="Puntual" />
    <FormControlLabel value="Retrasado" control={<StyledRadio />} label="No abrio a la Hora" />
    <FormControlLabel value="Disputas" control={<StyledRadio />} label="Disputas en la Constitucion" />
    <FormControlLabel
      value="disabled"
      disabled
      control={<StyledRadio />}
      label="(Disabled option)"
    />
  </RadioGroup>
</FormControl>

<FormControl component="fieldset">
  <FormLabel component="legend">Violencia</FormLabel>
  <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
    <FormControlLabel value="Ninguna" control={<StyledRadio />} label="Ninguna" />
    <FormControlLabel value="Mucha" control={<StyledRadio />} label="Mucha" />
    <FormControlLabel value="Eventual" control={<StyledRadio />} label="Eventual" />
    <FormControlLabel
      value="disabled"
      disabled
      control={<StyledRadio />}
      label="(Disabled option)"
    />
  </RadioGroup>
</FormControl>

<FormControl component="fieldset">
  <FormLabel component="legend">Cierre</FormLabel>
  <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
    <FormControlLabel value="female" control={<StyledRadio />} label="Puntual" />
    <FormControlLabel value="male" control={<StyledRadio />} label="Tarde" />
    <FormControlLabel value="other" control={<StyledRadio />} label="Demorado" />
    <FormControlLabel
      value="disabled"
      disabled
      control={<StyledRadio />}
      label="(Disabled option)"
    />
  </RadioGroup>
</FormControl>

<br/>
<IconButton
              
      >
          <CameraAlt />
      </IconButton>
<div className={classes.root}>
           <Grid container spacing={3}>
       <Grid item xs={12}>
           </Grid>
           <Grid item xs={12}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      </Grid>
      </Grid>
    </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
          <Button onClick={handleClose} color="primary">
            Grabar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


var emoticonesbase=[
    {pregunta:"Quiere participar en las ELecciones Parlamentarias?",
  respuesta:0,
  respuestas:[
    {"emoji":"💯","descripcion":"seguro"},
    {"emoji":"🤔","descripcion":"quizas"},
    {"emoji":"⛔","descripcion":"olvidalo"}
  ]
  },
  {pregunta:"Que emocion le produce Juan Guaido?",
  respuesta:2,
  respuestas:[
    {"emoji":"😍","descripcion":"amor"},
    {"emoji":"😊","descripcion":"alegria"},
    {"emoji":"😒","descripcion":"simpatia"},
    {"emoji":"😣","descripcion":"desagrado"},
    {"emoji":"🤮","descripcion":"vomito"}
  ]
  },
  {pregunta:"Estas dispuesto a Protestar?",
  respuesta:3,
  respuestas:[
    {"emoji":"👍","descripcion":"si"},
    {"emoji":"👎","descripcion":"no"},

  ]
  },
  {pregunta:"Que le parecio la concentracion👩‍👦 del Centro de Votacion?",
  respuesta:1,
  respuestas:[
    {"emoji":"👍","descripcion":"excelente"},
    {"emoji":"👌","descripcion":"buena"},
    {"emoji":"👎","descripcion":"mala"},
   
  ]
  }
  ,
  {pregunta:"Quiere ser Testigo👀 de la Mesa?",
  respuesta:null,
  respuestas:[
    {"emoji":"✔️","descripcion":"si"},
    
    {"emoji":"🤔","descripcion":"pensandolo"},
    {"emoji":"❌","descripcion":"no"},
  ]
  }
  ]
  var emoticonesbase2=[
    {pregunta:"Quiere participar en Proyecto Colaborativo?",
  respuesta:3,
  respuestas:[
    {"emoji":"💯","descripcion":"amor"},
    {"emoji":"🤔","descripcion":"alegria"},
    {"emoji":"⛔","descripcion":"simpatia"},
    {"emoji":"💣","descripcion":"desagrado"},
  ]
  }
  
  ]
  