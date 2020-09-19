import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {formulario2} from '../../data/formulario.json';
//import {LIBERTADOR} from '../../data/libertador.json';

//EMO PARA FORMULARIOS


function DialogFormularios(props) {
 // alert(props.idformulario)

  const { onClose, value: valueProp, open, ...other } = props;
  const [formulario,setFormulario]=React.useState(formulario2)
  const [idformulario, setIdFormulario] = React.useState(2);
  const [value, setValue] = React.useState(2);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    //alert("useEffect "+JSON.stringify(formulario))
    for (var i = 0; i < formulario.preguntas.length; i++) {
      if (formulario.preguntas[i].pregunta==props.idformulario){
            setIdFormulario(i)
      }
      
    }
//    if (!open) {
//      setValue(valueProp);
//    }
 }, [props]);

  function handleEntering() {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  }

  function handleCancel() {
    onClose();
  }

  function handleOk() {
    //aqui graba
    onClose(value);
  }

  function handleChange(event) {
    //alert("change "+JSON.stringify(event.target.value))
    setValue(event.target.value*1);
    //setValue(2);
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Experiencia Electoral D</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {formulario.preguntas[idformulario].respuestas.map(respuesta => (
            <FormControlLabel value={respuesta.idrespuesta} key={respuesta.idrespuesta} control={<Radio />} label={respuesta.respuesta} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Grabar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DialogFormularios.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
}));

export default function Caracteristicas() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [idformulario,setIdFormulario]=React.useState("")
  const [formulario,setFormulario]=React.useState(formulario2)
  const [value, setValue] = React.useState('Testigo Mesa');
  const [partido,setPartido]=React.useState("AD")
  const handleClickListItem=id=>e=>{
    //alert(input)
  //function handleClickListItem() {
    setIdFormulario(id)
    setOpen(true);
  }

  function handleClose(newValue) {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  }
  //alert(JSON.stringify(formulario))
  return (
    <div className={classes.root}>
      <List component="div" role="list">
         {formulario.preguntas.map((item, index) => (
  
      <ListItem  button
           divider
           aria-haspopup="true"
           aria-controls="ringtone-menu"
           aria-label="phone ringtone"
           onClick={handleClickListItem(item.pregunta)}
           role="listitem"
           >
           <ListItemText primary={item.pregunta} secondary={item.respuesta} />
         </ListItem>
          ))} 
  
      
  

        <DialogFormularios
          classes={{
            paper: classes.paper,
          }}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
          idformulario={idformulario}
        />
      </List>
    </div>
  );
}