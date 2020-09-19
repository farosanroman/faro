import React from 'react';
//import { Application } from '../App';
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
   const [direcciones, setDireccion] = React.useState([]);
   const [index, setIndex] = React.useState(props.index);
  const [open, setOpen] = React.useState(true);
  const [flagOpen, setflagOpen] = React.useState(false);
  //const [{ dataPost, isLoadingPost, isErrorPost }, postData] = useFetchPost('');
  const [inputs, setInputs] = React.useState([
    {
      id: 'phone',
      label: 'Phone',
      placeholder: '999-999-9999',
      value: 'aaaa',
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
      id: 'email',
      label: 'Email',
      placeholder: 'john@acme.com',
      value: '',
      error: false,
      helperText: 'Any valid email address will do',
      getHelperText: error =>
        error
          ? 'Ooops. No tiene el formato de correo'
          : 'Formato correcto',
      isValid: value => /\S+@\S+\.\S+/.test(value)
    }
  ]);

  function handleClickOpen(e) {
       alert(JSON.stringify(e))
    //alert(index)
    //alert("direccionForm"+JSON.stringify(direcciones))

    setOpen(true);
  }

  function handleClose() {
   // onClick("V3664204")
   //alert('close')
   //props.closeDialog()
  // postData("https://faronosql.azurewebsites.net/api/VinotintoPostOauth?code=qnaytKAJlMzrAPNmn4SLxavP6JKqWqA2fpxNzvxbra8k4yJCTmQeIQ==",{id:"60",fecha:Date(),ppa:"ssss 3333",ppp:"xxxx  yyy xxxx"})

   setOpen(false);
  }
  const onChange = ({ target: { id, value } }) => {
   
      const newInputs = [...inputs];
      const index = inputs.findIndex(input => input.id === id);
      //alert(index)
      const input = inputs[index];
      const isValid = input.isValid(value);
      console.log(isValid)
      newInputs[index] = {
        ...input,
        value: value,
        error: !isValid,
        helperText: input.getHelperText(!isValid)
      };
  
      //setInputs(newInputs);
    };
  return (
    <div>
                 {false&&
                    <IconButton onClick={() => handleClickOpen(props.index)}>
                      <Edit />
                    </IconButton>
                 }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={50}>
        <DialogTitle id="form-dialog-title">Direccionesss</DialogTitle>
        <DialogContent>
          <DialogContentText maxWidth={50}>
            Actualizacion de Direcciones.
          </DialogContentText>
          <Select
          value={'correo'}
          //onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value={'correo'}>Correo</MenuItem>
          <MenuItem value={'celular'}>Celular</MenuItem>
          <MenuItem value={'twitter'}>Twitter</MenuItem>
        </Select>
        <br/>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Numero/Correo"
            value={inputs[1].value}
            onChange={onChange}
            error={inputs[1].error}
            helperText={inputs[1].helperText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Borrar
          </Button>
          <Button onClick={handleClose} color="primary">
            Grabar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}