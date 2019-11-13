import React,{useEffect} from 'react';
// PARA BUSCAR PERSONA EN VINOTINTO
//import { Application } from '../App';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Typography from '@material-ui/core/Typography';
//import { red, blue } from 'material-ui/colors'
//const redTheme = createMuiTheme({ palette: { primary: red } })
//const blueTheme = createMuiTheme({ palette: { primary: blue } })
//import logo from '../../farocirculo.png';
//import {useFetch,useFetchPost} from '../tools/helperspersona'
//import {getPersonaFaro} from '../tools/helperspersona'
//import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
//LO LLAMAN DESDE EL HEADER
export default function DialogoGetPersona(props) {
  //const { state, dispatch } = React.useContext(Application);
  const [open, setOpen] = React.useState(true);
  const [cedula, setCedula] = React.useState("");
  const [cedulaError, setCedulaError] = React.useState({flag:false,helper:"ok"});
  
  //  fetch("http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337")
  //    .then(response => response.json())
  //    .then(data =>{alert("HOOK"+JSON.stringify(data))}) //setData(data));
  //}, []); // << super important array

 
  function handleClickOpen(props) {
    setOpen(true);
  }
 
  const handleChangeCambios=input=>e=>{
 
if (input=="correo"){
  //var flag=/\S+@\S+\.\S+/.test(e.target.value)
  
 // var flag=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(e.target.value)
  var flag=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e.target.value)

  if (flag){       
   // setCorreoError({flag:false,helper:"Sintaxis Correcta"})
       //this.setState({errorCelular:false,helperTextCelular:"Sintaxis Correcta"})
   }else{
   // setCorreoError({flag:true,helper:"Sintaxis Inorrecta"})
       //this.setState({errorCelular:true,helperTextCelular:"Sintaxis Erronea"})
   }
}
if (input=="cedula"){
//  console.log(e.target.value)
  var ced=e.target.value
  if (((ced.substring(0, 1)=='v')||(ced.substring(0, 1)=='V'))){       
    setCedulaError({flag:false,helper:"Sintaxis Correcta"})
      if (isNaN(ced.substring(1,ced.length)*1)){
        setCedulaError({flag:true,helper:"Solo numeros despues de la V"})
    
      }else{
        setCedulaError({flag:false,helper:"Vamos bien"})

      }

    }else{
    setCedulaError({flag:true,helper:"Falta la V al comienzo"})
       //this.setState({errorCelular:true,helperTextCelular:"Sintaxis Erronea"})
   }
  setCedula(e.target.value)
}
}
 const handleGetPersona = () => {   //de Faro
  
 props.login()       
  

}
  

  function handleClose() {
   // onClick("V3664204")
    setOpen(false);
  }
  return (
    <div>
      <Button   color="inherit" onClick={handleClickOpen}>
    
      <Typography >
     
      
      </Typography>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Control de Acceso</DialogTitle>
        <DialogContent>
          <DialogContentText >
            Escriba la cedula.
          </DialogContentText>
          <TextField

            autoFocus
            margin="dense"
            id="cedula"
            label="Cedula"
            onChange={handleChangeCambios('cedula')}
            error={cedulaError.flag}     
            helperText={cedulaError.helper}
            defaultValue={cedula}

        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleGetPersona} color="primary">
            LOGIN
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//v