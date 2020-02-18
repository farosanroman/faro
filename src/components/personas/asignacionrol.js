import React,{useEffect} from 'react';
import { ApplicationPersona } from './asignacionpasos';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
//import MaterialTable from 'material-table';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
//import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';

import Avatar from '@material-ui/core/Avatar';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { Delete, Edit,Email } from '@material-ui/icons';


import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PersonIcon from '@material-ui/icons/Person';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import MenuItem from '@material-ui/core/MenuItem';
//import {getPersona} from '../helpers/helperpersonas'
import {EEMMPP} from  '../../data/EEMMPP.json';
import {rols} from  '../../data/rols.json';
import {datarolesfuncionales} from  '../../data/rolesfuncionales.json';
import {RolesFiltros} from  '../helpers/rolesfiltros';
import {organizacion} from  '../../data/organizacion.json';
import {useRoles}  from '../hooks/useroles'
import {useCODCNE}  from '../hooks/usecodcne'
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
    const [idfuncional, setIdFuncional] = React.useState(0);
    const [funcional, setFuncional] = React.useState("rol");
    const [roles, setRoles] = React.useState(rols);
    const [fecha,setFecha]= React.useState(new Date());

    const [rolesfuncionales,funcionales, handleFiltros] = useRoles(datarolesfuncionales);
  

    const [rolesfuncionales2,funcionales2, handleFiltros2] = useRoles(datarolesfuncionales);
    const [estados,municipios, parroquias,handleCODCNE] = useCODCNE(EEMMPP);

    useEffect(() => {
     //alert("useEFFECT rol "+JSON.stringify(statep.persona.roles))
      // alert(EEMMPP[2].items[1].items.findIndex(obj => obj.cneparroquia=="020201"))
     // setRoles(rols)
     
     handleFiltros(9)
     //handleFiltros2(1031)
     //var r = rols.map(function (item, index, array) { 
     // if (item.idnodofuncional==9){
     //     return item;
     // }
     // });
      // setRoles(r)

        setNombre1(statep.persona.nombre1)
        setNombre2(statep.persona.nombre2)
        setApellido1(statep.persona.apellido1)
        setApellido2(statep.persona.apellido2)
        var indexe = EEMMPP.findIndex(obj => obj.cneestado==statep.persona.roles[0].idestado);
        if (indexe==-1){
          setCodigoEstado("");        
          setPosEstado(0)
          setCodigoMunicipio("")
          setPosMunicipio(0)
          setCodigoParroquia("")
          setIdRol(0)
       
        }else{
          setPosEstado(indexe)
          setCodigoEstado(statep.persona.roles[0].idestado);          
          var indexm = EEMMPP[indexe].items.findIndex(obj => obj.cnemunicipio==statep.persona.roles[0].idmunicipio);
          if (indexm==-1){
            setCodigoMunicipio("")
            setPosMunicipio(0)
            setCodigoParroquia("")
            setIdRol(0)
         
          }else{
            setCodigoMunicipio(statep.persona.roles[0].idmunicipio)
            setPosMunicipio(indexm)
            var indexp = EEMMPP[indexe].items[indexm].items.findIndex(obj => obj.cneparroquia==statep.persona.roles[0].idparroquia);
            if (indexp==-1){
              setCodigoParroquia("")
              setIdRol(0)
          
            }else{
              setCodigoParroquia(statep.persona.roles[0].idparroquia)
              setIdRol(indexp)
              var indexr=statep.persona.roles[0].idrespuesta;
              if (indexr==-1){ 
                setIdRol("")
              }else{
                setIdRol(statep.persona.roles[0].idrespuesta)    
              }
            }
          
       //     setCodigoParroquia(statep.persona.roles[0].idparroquia)
       //   setIdRol(statep.persona.roles[0].idrespuesta)
       
          }
        }
     
       
        
      
    },[]);
    useEffect(() => {
      //alert(JSON.stringify(rolesfuncionales))
     
    },[idrol]);
    const handleChangeCambios=input=>e=>{
        if (input=="formularios"){
         //alert("cedula")
          //setMensajeAsignacion({ ...mensajeasignacion, cedula: e.target.value })
        }
        if (input=="estado"){
          //alert(JSON.stringify(estados))
          //alert(JSON.stringify(e.target.value)) 
          var index = estados.findIndex(obj => obj.idestado==e.target.value);
        // alert(index)
          setCodigoEstado(e.target.value)
          setPosEstado(index)
          setNombreEstado(estados[index].estado)
         // alert(e.target.value)
          handleCODCNE(e.target.value)
        
        }
         if (input=="municipio"){
          var index = municipios.findIndex(obj => obj.idmunicipio==e.target.value);
          //alert(index)
            setPosMunicipio(index)
          setCodigoMunicipio(e.target.value)
          setNombreMunicipio(municipios[index].municipio)
          handleCODCNE(e.target.value)
         }
         if (input=="parroquia"){
          setCodigoParroquia(e.target.value)
          var index = parroquias.findIndex(obj => obj.idparroquia==e.target.value);
          //alert(index)
            setPosParroquia(index)
            setNombreParroquia(parroquias[index].parroquia)
         }
         if (input=="funcional"){
          // alert(e.target.value)
       //   alert("rol "+JSON.stringify(roles))
         var pos=funcionales.findIndex(obj => obj.idfuncional==e.target.value);
          //var  pos = roles.map(function(e) { return e.id; }).indexOf(e.target.value);
        //  alert("1031 "+JSON.stringify(rolesfuncionales2))
         handleFiltros(e.target.value)
         setIdFuncional(funcionales[pos].idfuncional)
         setFuncional(funcionales[pos].funcional);
      
         }
         if (input=="rol"){
          // alert(e.target.value)
       //   alert("rol "+JSON.stringify(roles))
         var pos=rolesfuncionales.findIndex(obj => obj.idrol==e.target.value);
          //var  pos = roles.map(function(e) { return e.id; }).indexOf(e.target.value);
         setIdRol(rolesfuncionales[pos].idrol)
         setRol(rolesfuncionales[pos].rol);
      
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
       const handleAdd=input=>{
        if (idrol>0){
          //alert("useEffect2 "+JSON.stringify(statep.persona.caracteristicas))
         var r=
         {
           "idformulario":"ROL",
           "formulario":"ROL",
          "idpregunta":"ROL",
          "pregunta":"Asignacion",
    
          "idrespuesta": idrol,
          "respuesta": rol,
          "codcne":codestado+codmunicipio+codparroquia,
          "descripcion": rol,
          "codcnenombre": "",
          "idfuncional": idfuncional,
          "funcionalnombre": funcional,
          "lat": 0,
          "lng": 0,
          "idestado": codestado,
          "idmunicipio": codmunicipio,
          "idparroquia": codparroquia,
          "idcircunscripcion": "0",
          "estadonombre":nombreestado,
          "municipionombre": nombremunicipio,
          "parroquianombre":nombreparroquia,
          "circunscripcionnombre": "",
          "centronombre": "VENEZUELA"
          
        }
        var roles=statep.persona.roles
        roles.push(r)
          dispatchp({
            type: 'ROLES',
            stateprop: roles
          });
        }
       }
       function onDeleteRol(index,e){
        //alert(item)
       // delete(id){
       //   this.setState(prevState => ({
       //       data: prevState.data.filter(el => el != id )
       //   }));
       //}
        var array=statep.persona.roles;

        array.splice(index, 1);
        dispatchp({
          type: 'ROLES',
          stateprop: array
        });
       // handleFiltros(1031)
      }
       const error='ABC'
      // alert(JSON.stringify(roles))
      var sel = rols.map((r, i) => {
       if (r.idnodofuncional==9) {
          return <MenuItem value={r.id}>{r.nombre}</MenuItem>
        }
      });
      var selroles =rolesfuncionales.map((r, i) => {
           return <MenuItem value={r.id}>{r.nombre}</MenuItem>
        
       });
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
       

<ExpansionPanel
            key={33}
            disabled={false}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{'Roles'}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              <List >
              {statep.persona.roles.map((item, index) => (
                
              
                <ListItem key={index}  >
                <ListItemAvatar onClick={() =>onDeleteRol(index)}>
                    <Avatar>
                      <SportsSoccerIcon />
                    </Avatar>
                  </ListItemAvatar>
                <ListItemText
                 primary={item.codcne+' '+item.respuesta}
                 secondary={item.estadonombre+'/'+item.municipionombre+'/'+item.parroquianombre}
                /> 
             
                <IconButton onClick={() =>onDeleteRol(index)}>
                       <Delete />
                     </IconButton>
                  
                </ListItem>
 
          
                 ))}
                    {/* <ListItem button onClick={() => onAccionCaracteristica('roles','new',0)}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Añadir rol." />
        </ListItem> */}
           </List>
            </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>


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
        {estados.map((item, index) => (
                 <MenuItem value={item.idestado}>{item.estado}</MenuItem>
              
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
        {municipios.map((item, index) => (
                
                <MenuItem value={item.idmunicipio}>{item.municipio}</MenuItem>
              
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
        {parroquias.map((item, index) => (
                 <MenuItem value={item.idparroquia}>{item.parroquia}</MenuItem>
              
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
        <InputLabel id="demo-simple-select-label">Funcional</InputLabel>
        <Select
      value={idfuncional}
      onChange={handleChangeCambios('funcional')}
    
        input={<Input name="Rol" id="age-helper" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
       
        {funcionales.map((r, i) => (
           <MenuItem value={r.idfuncional}>{r.funcional}</MenuItem>
        ))
      }
      
      </Select>
      </FormControl>

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
       
        {rolesfuncionales.map((r, i) => (
           <MenuItem value={r.idrol}>{r.rol}</MenuItem>
        ))
      }
      
      </Select>
      </FormControl>
      <IconButton
                onClick={handleAdd}

>
          <AddCircleOutlineIcon />
      </IconButton>
     
      <Divider />
       
        <FormHelperText>Be careful</FormHelperText>

        </List>
        
      </FormControl>
     
    </React.Fragment>
  );
}
