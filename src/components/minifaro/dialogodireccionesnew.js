import React,{useEffect} from 'react';
//import { Application } from '../App';
import { useRecoilState} from "recoil";
import {persona} from '../store/atomfaro';
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
//import { useAuth } from '../hooks/useauth';
//import { useFetchPost } from '../hooks/usefetchpost';

import { makeStyles } from '@material-ui/core/styles';
//import { red, blue } from 'material-ui/colors'
//const redTheme = createMuiTheme({ palette: { primary: red } })
//const blueTheme = createMuiTheme({ palette: { primary: blue } })

export default function DialogoDireccionesNew(props) {
  //console.log(JSON.stringify(props)+" "+Date())
   // var flag=props.flagopen
 //  const { state, dispatch } = React.useContext(Application);
   //alert(JSON.stringify(props))
   const [PERSONA,setPERSONA] = useRecoilState(persona);
   const [direccion, setDireccion] = React.useState(0);
   const [index, setIndex] = React.useState(props.index);
   const [key, setKey] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const [flagOpen, setflagOpen] = React.useState(false);
  //const [{ dataPost, isLoadingPost, isErrorPost }, postData] = useFetchPost('');
  const [inputs, setInputs] = React.useState([
    {
      id: 'email',
      label: 'Email',
      placeholder: 'john@acme.com',
      value: '',
      error: false,
      helperText: 'Formato de Correo...',
      getHelperText: error =>
        error
          ? 'Ooops. No tiene el formato de correo'
          : 'Formato correcto',
      isValid: value => /\S+@\S+\.\S+/.test(value)
    }
    ,
    {

      id: 'phone',
      label: 'Phone',
      placeholder: '999-999-9999',
      value: '',
      error: false,
      helperText: 'Any valid phone number will do',
      getHelperText: error =>
        error
          ? 'Woops. Not a valid phone number'
          : 'Any valid phone number will do',
      isValid: value =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
          value
        )
    },
    {
      id: 'twitter',
      label: 'Twitter',
      placeholder: '@abcdef',
      value: direccion,
      error: false,
      helperText: 'Un formato de nombre de Twitter',
      getHelperText: error =>
        error
          ? 'Ooops. No tiene el formato de twitter'
          : 'Formato twitter correcto',
      isValid: value => /^@?(\w){1,15}$/.test(value)
    }
  
  ]);
  const [input, setInput] = React.useState([])
  // useEffect(() => {   
  //   setState(inputs[0])
  // },[]);  
  function handleClickOpen(e) {
     //  alert(JSON.stringify(e))
    //alert(index)
    //alert("direccionForm"+JSON.stringify(direcciones))

    setOpen(true);
  }
  const handleChange = (event) => {
    //alert(event.target.value)
    //const name = event.target.value;
    setKey(event.target.value);
  };
  function handlePost() {
    //alert(inputs[key].value)
    var newP = Object.assign({}, PERSONA, {})
    
    //var dirr = newP.direcciones[CRUD.pos];
    var dirr = newP.direcciones[0];
    var newDir=[...newP.direcciones,dirr]
    newP.direcciones=newDir
    setPERSONA(newP)
    props.handleOpen(false)
   }
  function handleClose() {
   // onClick("V3664204")
   //alert('close')
   //props.closeDialog()
  // postData("https://faronosql.azurewebsites.net/api/VinotintoPostOauth?code=qnaytKAJlMzrAPNmn4SLxavP6JKqWqA2fpxNzvxbra8k4yJCTmQeIQ==",{id:"60",fecha:Date(),ppa:"ssss 3333",ppp:"xxxx  yyy xxxx"})
   props.handleOpen(false)
   //setOpen(false);
  }
  //const onChange = ({ target: { id, value } }) => {
  const onChange = (event) => {
  // alert(JSON.stringify(id+" "+value))
  //console.log()
      const newInputs = [...inputs];

      const input = inputs[key];
      const isValid = input.isValid(event.target.value);
      console.log(isValid)
      newInputs[key] = {
        ...input,
        value: event.target.value,
        error: !isValid,
        helperText: input.getHelperText(!isValid)
      };
      setInputs(newInputs);
    };
  return (
    <div>
                 {true&&
                    <IconButton onClick={() => handleClickOpen(props.index)}>
                      <Edit />
                    </IconButton>
                 }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={50}>
        <DialogTitle id="form-dialog-title">Direcciones</DialogTitle>
        <DialogContent>
          <DialogContentText maxWidth={50}>
            Actualizacion de Direcciones.
          </DialogContentText>
          <Select
          value={direccion}
          onChange={handleChange}
          inputProps={{
            name: 'Direccion',
            id: 'age-simple',
          }}
        >
          <MenuItem value={0}>Correo</MenuItem>
          <MenuItem value={1}>Celular</MenuItem>
          <MenuItem value={2}>Twitter</MenuItem>
        </Select>
        <br/>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Numero/Correo"
            value={inputs[key].value}
            onChange={onChange}
            error={inputs[key].error}
            helperText={inputs[key].helperText}
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handlePost} color="primary">
            Grabar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}