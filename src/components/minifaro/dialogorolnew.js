import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Application } from '../App';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Grid, Paper, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import { Delete, Edit } from '@material-ui/icons';
import {EEMMPP} from  '../../data/EEMMPP.json';
//import { red, blue } from 'material-ui/colors'
//const redTheme = createMuiTheme({ palette: { primary: red } })
//const blueTheme = createMuiTheme({ palette: { primary: blue } })
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export default function DialogoRolNew(props) {
    const classes = useStyles();
  console.log(JSON.stringify(props)+" "+Date())
   // var flag=props.flagopen
  // const { state, dispatch } = React.useContext(Application);
   //alert(JSON.stringify(props))
  // const [direcciones, setDireccion] = React.useState(state.persona.direcciones);
  // const [index, setIndex] = React.useState(props.index);
  const [open, setOpen] = React.useState(true);
 // const [flagOpen, setflagOpen] = React.useState(false);
 const [codestado, setCodigoEstado] = React.useState("");
 const [posestado, setPosEstado] = React.useState(0);
 const [codmunicipio, setCodigoMunicipio] = React.useState("");
 const [posmunicipio, setPosMunicipio] = React.useState(0);

 const [codparroquia, setCodigoParroquia] = React.useState("");
 const [posparroquia, setPosParroquia] = React.useState("");

// const [idrol, setRol] = React.useState("0");
 const [rol, setRol] = React.useState({
    idrol: '',
    rol: '',
  });

  function handleClickOpen(e) {
       alert(JSON.stringify(e))
    //alert(index)
    //alert("direccionForm"+JSON.stringify(direcciones))

    setOpen(true);
  }
  const handleChangeCambios=input=>e=>{
    if (input=="formularios"){
     //alert("cedula")
      //setMensajeAsignacion({ ...mensajeasignacion, cedula: e.target.value })
    }
    if (input=="estado"){
      //alert(JSON.stringify(e.target.value)) 
      var index = EEMMPP.findIndex(obj => obj.cneestado==e.target.value);
    // alert(index)
      setCodigoEstado(e.target.value)
      setPosEstado(index)
     }
     if (input=="municipio"){
      var index = EEMMPP[posestado].items.findIndex(obj => obj.cnemunicipio==e.target.value);
      //alert(index)
        setPosMunicipio(index)
      setCodigoMunicipio(e.target.value)
     }
     if (input=="parroquia"){
      setCodigoParroquia(e.target.value)
      var index = EEMMPP[posestado].items[posmunicipio].items.findIndex(obj => obj.cneparroquia==e.target.value);
      //alert(index)
        setPosParroquia(index)
     }
     if (input=="rol"){
      //setIdRol(e.target.value)
     }
    
   }
   const handleChange = event => {
    setRol(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  function handleClose() {
   // onClick("V3664204")
   //alert('close')
   //props.closeDialog()
  
   props.handleOpen(false)
  }
 
  return (
    <div>
                 {false&&
                    <IconButton onClick={() => handleClickOpen(props.index)}>
                      <Edit />
                    </IconButton>
                 }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={'xs'}>
        <DialogTitle id="form-dialog-title">Nuevo Rol</DialogTitle>
        <DialogContent>
          <DialogContentText maxWidth={50}>
            Creacion de Rol.
          </DialogContentText>
        <br/>
        <FormControl className={classes.formControl}>
       
            <InputLabel htmlFor="age-helper">Estado</InputLabel>
        <Select
          value={codestado}
          onChange={handleChangeCambios('estado')}
           input={<Input name="Estado" id="age-helper" />}
         >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {EEMMPP.map((item, index) => (
                   <MenuItem value={item.cneestado}>{item.name}</MenuItem>
                
                 ))}
         
        
        </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-helper">Municipio</InputLabel>
       
        <Select
          value={codmunicipio}
          onChange={handleChangeCambios('municipio')}
           input={<Input name="Municipio" id="age-helper" />}
         >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {EEMMPP[posestado].items.map((item, index) => (
                  
                  <MenuItem value={item.cnemunicipio}>{item.name}</MenuItem>
                
                 ))}
         
        
        </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
       
            <InputLabel htmlFor="age-helper">Parroquia</InputLabel>
        <Select
        value={codparroquia}
        onChange={handleChangeCambios('parroquia')}
      
          input={<Input name="Parroquia" id="age-helper" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {EEMMPP[posestado].items[posmunicipio].items.map((item, index) => (
                   <MenuItem value={item.cneparroquia}>{item.name}</MenuItem>
                
                 ))}
         
        
        </Select>
         </FormControl>
        <FormControl className={classes.formControl}>
       
        <InputLabel htmlFor="age-helper">Rol</InputLabel>
        <Select
          value={rol.rol}
          onChange={handleChange}
          inputProps={{
            name: 'rol',
            id: 'idrol',
          }}
        >
          <MenuItem value={10}>Formador</MenuItem>
          <MenuItem value={20}>Facilitador</MenuItem>
          <MenuItem value={30}>Testigos</MenuItem>
          <MenuItem value={40}>Monitor</MenuItem>
          <MenuItem value={50}>Activista</MenuItem>
      
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Grabar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}