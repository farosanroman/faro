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
import {militancia} from  '../../data/militancia.json';
import {formacion} from  '../../data/formacion.json';
import {experiencia} from  '../../data/experiencia.json';

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
export default function AsignacionOrganizacion() {
    const classes = useStyles();
  //  const { state, dispatch } = React.useContext(Application);
    const [cedula, setCedula] = React.useState("");
    const [cedulaError, setCedulaError] = React.useState({flag:false,helper:"ok"});
    const [nombre1, setNombre1] = React.useState("");
    const [nombre2, setNombre2] = React.useState("");
    const [apellido1, setApellido1] = React.useState("");
    const [apellido2, setApellido2] = React.useState("");
    const { statep, dispatchp  } = React.useContext(ApplicationPersona);
    
    const [idorganizacion, setIdOrganizacion] = React.useState("");
    const [nombreorganizacion, setNombreOrganizacion] = React.useState("");
    const [idmilitancia, setIdMilitancia] = React.useState("");
    const [nombremilitancia, setNombreMilitancia] = React.useState("");
    const [idformacion, setIdFormacion] = React.useState("");
    const [nombreformacion, setNombreFormacion] = React.useState("");
    const [idexperiencia, setIdExperiencia] = React.useState("");
    const [nombreexperiencia, setNombreExperiencia] = React.useState("");
    const [caracteristicas,setCaracteristicas]= React.useState({});
    useEffect(() => {
      console.log(JSON.stringify(statep))
     // alert("DIRECCIONES "+JSON.stringify(statep))
    // alert(JSON.stringify(statep.persona.roles)) 
        setNombre1(statep.persona.nombre1)
        setNombre2(statep.persona.nombre2)
        setApellido1(statep.persona.apellido1)
        setApellido2(statep.persona.apellido2)
        //setIdOrganizacion(statep.persona.caracteristicas[0].idrespuesta)
        //setCorreo("123")
    },[]);
    useEffect(() => {
      //statep.persona.caracteristicas=caracteristicas
     // alert("idrespuesta"+idorganizacion)
      let car=[]
      var d0={idrespuesta:idorganizacion,respuesta:nombreorganizacion,descripcion:nombreorganizacion,codcne:"",idestado:"",estadonombre:"",idmunicipio:"",municipionombre:"",idparroquia:"",parroquianombre:""}
      var d1={idrespuesta:idmilitancia,respuesta:nombremilitancia,descripcion:nombremilitancia,codcne:"",idestado:"",estadonombre:"",idmunicipio:"",municipionombre:"",idparroquia:"",parroquianombre:""}
      var d2={idrespuesta:idformacion,respuesta:nombreformacion,descripcion:nombreformacion,codcne:"",idestado:"",estadonombre:"",idmunicipio:"",municipionombre:"",idparroquia:"",parroquianombre:""}
      var d3={idrespuesta:idexperiencia,respuesta:nombreexperiencia,descripcion:nombreexperiencia,codcne:"",idestado:"",estadonombre:"",idmunicipio:"",municipionombre:"",idparroquia:"",parroquianombre:""}
      car.push(d0,d1,d2,d3)
      statep.persona.caracteristicas=car
      //setCaracteristicas(car)
      //alert("useEffect "+JSON.stringify(car))

      //if (caracteristicas.length>0){
     // toggleComplete(statep.persona)
     // }
      dispatchp({
        type: 'CARACTERISTICAS',
        stateprop: car
      });
      //dispatchp({
      //  type: 'LOGIN',
      //  stateprop: true
      //});
      
    },[idorganizacion,idformacion,idmilitancia,idexperiencia]);
    function toggleComplete(persona) {
      dispatchp({ type: 'PERSONA',stateprop: persona });
    }
    const handleChangeCambios=input=>e=>{
 
        if (input=="organizacion"){
         setIdOrganizacion(e.target.value)
         var index =organizacion.findIndex(obj => obj.id==e.target.value);

         setNombreOrganizacion(organizacion[index].nombre)
          //setMensajeAsignacion({ ...mensajeasignacion, cedula: e.target.value })
        
         
        }
        if (input=="militancia"){
          setIdMilitancia(e.target.value)
          var index =militancia.findIndex(obj => obj.id==e.target.value);
          setNombreMilitancia(militancia[index].nombre)
           //setMensajeAsignacion({ ...mensajeasignacion, cedula: e.target.value })
         }
         if (input=="formacion"){
          setIdFormacion(e.target.value)
          var index =formacion.findIndex(obj => obj.id==e.target.value);
          setNombreFormacion(formacion[index].nombre)
           //setMensajeAsignacion({ ...mensajeasignacion, cedula: e.target.value })
         }
         if (input=="experiencia"){
          setIdExperiencia(e.target.value)
         // alert(e.target.value)
          var index =experiencia.findIndex(obj => obj.id==e.target.value);
          setNombreExperiencia(experiencia[index].nombre)
           //setMensajeAsignacion({ ...mensajeasignacion, cedula: e.target.value })
         }
    
       }

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
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>

        <Typography variant="h6" gutterBottom>
        Organizacion
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
      <List>
        
  
       <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Organizacion</InputLabel>
        <Select
      value={idorganizacion}
      onChange={handleChangeCambios('organizacion')}
    
        input={<Input name="Rol" id="age-helper" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {organizacion.map((item, index) => (
                 <MenuItem value={item.id}>{item.nombre}</MenuItem>
         ))}
       </Select>
      </FormControl>
      </List>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>

<Typography variant="h6" gutterBottom>
Militancia
</Typography>
<FormControl component="fieldset" className={classes.formControl}>
<List>

<FormControl className={classes.formControl}>
<InputLabel id="demo-simple-select-label">Militancia</InputLabel>
<Select
value={idmilitancia}
onChange={handleChangeCambios('militancia')}

input={<Input name="Rol" id="age-helper" />}
>
<MenuItem value="">
<em>None</em>
</MenuItem>
{militancia.map((item, index) => (
 <MenuItem value={item.id}>{item.nombre}</MenuItem>
))}
</Select>
</FormControl>
</List>
</FormControl>
</Grid>
      <Grid item xs={12} sm={6}>

<Typography variant="h6" gutterBottom>
Formacion
</Typography>
<FormControl component="fieldset" className={classes.formControl}>
<List>

<ListItem role={undefined}>
 
</ListItem>
<FormControl className={classes.formControl}>
<InputLabel id="demo-simple-select-label">Formacion</InputLabel>
<Select
value={idformacion}
onChange={handleChangeCambios('formacion')}

input={<Input name="Rol" id="age-helper" />}
>
<MenuItem value="">
  <em>None</em>
</MenuItem>
{formacion.map((item, index) => (
         <MenuItem value={item.id}>{item.nombre}</MenuItem>
 ))}
</Select>
</FormControl>
</List>
</FormControl>
</Grid>
<Grid item xs={12} sm={6}>

<Typography variant="h6" gutterBottom>
Experiencia
</Typography>
<FormControl component="fieldset" className={classes.formControl}>
<List>

<ListItem role={undefined}>
 
</ListItem>
<FormControl className={classes.formControl}>
<InputLabel id="demo-simple-select-label">Experiencia</InputLabel>
<Select
value={idexperiencia}
onChange={handleChangeCambios('experiencia')}

input={<Input name="Rol" id="age-helper" />}
>
<MenuItem value="">
  <em>None</em>
</MenuItem>
{experiencia.map((item, index) => (
         <MenuItem value={item.id}>{item.nombre}</MenuItem>
 ))}
</Select>
</FormControl>
</List>
</FormControl>
</Grid>
        </Grid>
        <pre>{JSON.stringify(statep.persona.caracteristicas, null, 2)}</pre>
    </React.Fragment>
  );
}
