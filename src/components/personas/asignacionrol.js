import React,{useEffect} from 'react';
import { ApplicationPersona } from './asignacionpasos';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
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
import {getPersona} from '../helpers/helperpersonas'
import {EEMMPP} from  '../../data/EEMMPP.json';
import {roles} from  '../../data/roles.json';
import {organizacion} from  '../../data/organizacion.json';
//import { Application } from '../../App';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
export default function AsignacionRol() {
    const classes = useStyles();
    const { statep, dispatchp  } = React.useContext(ApplicationPersona);
   // const { state, dispatch } = React.useContext(Application);
    const [cedula, setCedula] = React.useState("");
    const [cedulaError, setCedulaError] = React.useState({flag:false,helper:"ok"});
    const [nombre1, setNombre1] = React.useState("");
    const [nombre2, setNombre2] = React.useState("");
    const [apellido1, setApellido1] = React.useState("");
    const [apellido2, setApellido2] = React.useState("");
    
    const [codestado, setCodigoEstado] = React.useState("");
    const [posestado, setPosEstado] = React.useState(0);
    const [nombreestado, setNombreEstado] = React.useState(0);
    const [codmunicipio, setCodigoMunicipio] = React.useState("");
    const [posmunicipio, setPosMunicipio] = React.useState(0);
    const [nombremunicipio, setNombreMunicipio] = React.useState(0);
    
    const [codparroquia, setCodigoParroquia] = React.useState("");
    const [posparroquia, setPosParroquia] = React.useState(0);
    const [nombreparroquia, setNombreParroquia] = React.useState(0);
    
    const [idrol, setIdRol] = React.useState(0);
    const [rol, setRol] = React.useState("rol");
    useEffect(() => {
      // alert(JSON.stringify(statep.persona.direcciones))  
      // console.log(JSON.stringify(statep))
     // alert("DIRECCIONES "+JSON.stringify(statep))
        setNombre1(statep.persona.nombre1)
        setNombre2(statep.persona.nombre2)
        setApellido1(statep.persona.apellido1)
        setApellido2(statep.persona.apellido2)
        //setCorreo("123")
    },[]);
    useEffect(() => {
      statep.persona.roles[0].idrespuesta=idrol;
      statep.persona.roles[0].respuesta=rol;
      statep.persona.roles[0].descripcion=rol;
      statep.persona.roles[0].codcne="00000000000";
      statep.persona.roles[0].idestado=codestado;
      statep.persona.roles[0].idmunicipio=codmunicipio;
      statep.persona.roles[0].idparroquia=codparroquia;
      statep.persona.roles[0].estadonombre=nombreestado;
      statep.persona.roles[0].municipionombre=nombremunicipio;
      statep.persona.roles[0].parroquianombre=nombreparroquia;
      //alert(nombreestado)
      //alert(roles[pos].id)
      
      dispatchp({
        type: 'PERSONA',
        stateprop: statep.persona
      });
      
    },[codestado,codmunicipio,codparroquia,idrol]);
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
          setNombreEstado(EEMMPP[index].name)
         }
         if (input=="municipio"){
          var index = EEMMPP[posestado].items.findIndex(obj => obj.cnemunicipio==e.target.value);
          //alert(index)
            setPosMunicipio(index)
          setCodigoMunicipio(e.target.value)
          setNombreMunicipio(EEMMPP[posestado].items[index].name)
         }
         if (input=="parroquia"){
          setCodigoParroquia(e.target.value)
          var index = EEMMPP[posestado].items[posmunicipio].items.findIndex(obj => obj.cneparroquia==e.target.value);
          //alert(index)
            setPosParroquia(index)
            setNombreParroquia(EEMMPP[posestado].items[posmunicipio].items[index].name)
         }
         if (input=="rol"){
         var  pos = roles.map(function(e) { return e.id; }).indexOf(e.target.value);
         setIdRol(roles[pos].id)
         setRol(roles[pos].descripcion);
         // alert(EEMMPP.map(function(e) { return e.cneestado; }).indexOf("020000"));
          //alert(EEMMPP.findIndex(obj => obj.cneestado=="020000"))
          //alert(EEMMPP[2].items.findIndex(obj => obj.cnemunicipio=="020300"))
          //alert(EEMMPP[2].items[2].items.findIndex(obj => obj.cneparroquia=="020304"))
         // alert( e.target.value)
          
         // alert(JSON.stringify(statep.persona.roles)) 
      //    setCodigoParroquia(e.target.value)
       //   var index = EEMMPP[posestado].items[posmunicipio].items.findIndex(obj => obj.cneparroquia==e.target.value);
          //alert(index)
        //    setPosParroquia(index)
         }
       }
       const handleCheckboxChangeRol = id => {
        // alert(id)
      //   dispatch({
      //     type: 'FILTRO_ROLES',
      //     stateprop: id
      //   });
       
         //if (state.currentWeight) recalculate();
       };
       
       const error='ABC'
    return (
    <React.Fragment>
    
        <Typography variant="h6" gutterBottom>
        Registro Electoral
      </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            disabled={true}
            id="firstName"
            name="firstName"
            label="Primer Nombre"
            fullWidth
            autoComplete="fname"
            defaultValue={nombre1}
            value={nombre1}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            disabled={true}
            id="lastName"
            name="lastName"
            label="Segundo Nombre"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={nombre2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            disabled={true}
            id="firstName"
            name="firstName"
            label="Primer Apellido"
            fullWidth
            autoComplete="fname"
            defaultValue={nombre1}
            value={apellido1}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            disabled={true}
            id="lastName"
            name="lastName"
            label="Segundo Apellido"
            fullWidth
            autoComplete="lname"
            defaultValue={nombre2}
            value={apellido2}
          />
        </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
        Rol
      </Typography>
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
           Roles
         </FormLabel>
       </ListItem>
       <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Rol</InputLabel>
        <Select
      value={idrol}
      onChange={handleChangeCambios('rol')}
    
        input={<Input name="Rol" id="age-helper" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {roles.map((item, index) => (
                 <MenuItem value={item.id}>{item.nombre}</MenuItem>
              
               ))}
       
      
      </Select>
      </FormControl>

     
      <Divider />
       
        <FormHelperText>Be careful</FormHelperText>

        </List>
        
      </FormControl>
     
    </React.Fragment>
  );
}
