import React,{useEffect} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Application } from '../../App';

import {useFetch}  from '../helpers/hooks'
import {EEMMPP} from  '../../data/EEMMPP.json';
import {roles} from  '../../data/roles.json';
import {organizacion} from  '../../data/organizacion.json';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function DialogoFiltros(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const { state, dispatch } = React.useContext(Application);

    
    const [codestado, setCodigoEstado] = React.useState("");
    const [posestado, setPosEstado] = React.useState(0);
    const [codmunicipio, setCodigoMunicipio] = React.useState("");
    const [posmunicipio, setPosMunicipio] = React.useState(0);
   
    const [codparroquia, setCodigoParroquia] = React.useState("");
    const [posparroquia, setPosParroquia] = React.useState(0);
    const handleChange = name => event => {
      //setState({ ...state, [name]: event.target.checked });
    };
  //alert(JSON.stringify(state.organizacion))
    //const { AD, PJ, VP } = state;
    //const error = [ AD, PJ, VP].filter(v => v).length !== 2;
const error='ABC'

const handleCheckboxChange = id => {
 // alert(id)
  dispatch({
    type: 'FILTRO_ORGANIZACION',
    stateprop: id
  });

  //if (state.currentWeight) recalculate();
};
const handleCheckboxChangeRol = id => {
  // alert(id)
   dispatch({
     type: 'FILTRO_ROLES',
     stateprop: id
   });
 
   //if (state.currentWeight) recalculate();
 };
 
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
     
      
     }

    function handleFiltro()  {   //de Faro
        props.onClick()
        }
          
        
          function handleClose() {
           props.onClick()
          }
    

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Filtros</DialogTitle>
        <DialogContent>
          <DialogContentText >
            Criterios de Filtros.
          </DialogContentText>
         
      <FormControl component="fieldset" className={classes.formControl}>
      <List>
      <FormLabel component="legend" required error={error}>
            Nodos Geograficos
          </FormLabel>
          <FormControl className={classes.formControl}>
        
        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
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
        <InputLabel id="demo-simple-select-label">Municipio</InputLabel>
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
        <InputLabel id="demo-simple-select-label">Parroquia</InputLabel>
        <Select
      value={codparroquia}
      onChange={handleChangeCambios('parroquia')}
    
        input={<Input name="parroquia" id="age-helper" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {EEMMPP[posestado].items[posmunicipio].items.map((item, index) => (
                 <MenuItem value={item.cneparroquia}>{item.name}</MenuItem>
              
               ))}
       
      
      </Select>
      </FormControl>
      <Divider />
     
      <ListItem role={undefined}>
          <FormLabel component="legend" required error={error}>
            Partidos
          </FormLabel>
        </ListItem>
      <FormGroup>
          {state.organizacion.map(({ id,nombre, selected }) => {
            const labelId ='lista';
            return (
              <ListItem
                key={id}
                role={undefined}
                dense
                button
                onClick={() => handleCheckboxChange(id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={selected}
                    value={id}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={nombre} />
              </ListItem>
            );
          })}
          <ListItem role={undefined}>
            <FormHelperText>One or more plates must be checked</FormHelperText>
          </ListItem>
        </FormGroup>
        <Divider />
     
     <ListItem role={undefined}>
         <FormLabel component="legend" required error={error}>
           Roles
         </FormLabel>
       </ListItem>
     <FormGroup>
         {state.roles.map(({ id,nombre, selected }) => {
           const labelId ='lista';
           return (
             <ListItem
               key={id}
               role={undefined}
               dense
               button
               onClick={() => handleCheckboxChangeRol(id)}
             >
               <ListItemIcon>
                 <Checkbox
                   edge="start"
                   checked={selected}
                   value={id}
                   tabIndex={-1}
                   disableRipple
                   inputProps={{ 'aria-labelledby': labelId }}
                 />
               </ListItemIcon>
               <ListItemText id={labelId} primary={nombre} />
             </ListItem>
           );
         })}
         <ListItem role={undefined}>
           <FormHelperText>One or more plates must be checked</FormHelperText>
         </ListItem>
       </FormGroup>
     
      <Divider />
       
        <FormHelperText>Be careful</FormHelperText>

        </List>
        
      </FormControl>
     
      <Divider />
      

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleFiltro} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
