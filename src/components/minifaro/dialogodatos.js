import React, {useEffect, useState,Fragment,useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { MuiPickersUtilsProvider, KeyboardTimePicker,  KeyboardDatePicker,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from "@material-ui/pickers";
//import {fromAtomToJson} from '../dashboard/helpers'
// import { useRecoilState,useRecoilValue} from "recoil";
import {usePosition} from '../hooks/useposition';
import {getGeolocation,getLocation22} from '../hooks/getlocation'
//import Button from '@material-ui/core/Button';
//import Divider from '@material-ui/core/Divider';
//import DatePicker from './datepicker';

//import Title from './title'
//import Total from './total'

//import GeoDispositivos from './geodispositivos';
//import {voronoigeojson} from '../../data/voronoigeojson.json';
//import 'date-fns';
import clsx from 'clsx';
//import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';


//import { Application } from '../../App';
import CircularProgress from '@material-ui/core/CircularProgress';
//import FormControlLabel from '@material-ui/core/FormControlLabel';

//import Switch from '@material-ui/core/Switch';
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer,ScaleControl} from 'react-mapbox-gl';
//import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import RefreshIcon from '@material-ui/icons/Refresh';
//import Chart from 'react-google-charts';
//import GaugeChart from 'react-gauge-chart'
//import { greatCircle, point,circle } from '@turf/turf';

import {useFetch} from '../hooks/usefetch';
import {useFetchPost} from '../hooks/usefetchpost'
//import IntervalMonedero from './intervalmonedero'
//https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
//https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
//https://www.npmjs.com/package/react-mapbox-gl-draw     DRAW in MAPBOX!!!!!!!!!!!<<<<<<<<<
//import {PKI} from '../../data/PKI.json';
//import {WORLD} from '../data/WORLD.json';
import {CIUDADESGEO} from '../../data/ciudadesgeo.json';
//import {MUNICIPIOSGEO} from '../data/MUNICIPIOSGEO.json';
import {LIBERTADOR} from '../../data/libertador.json';
//import {ISOCHRONE} from '../../ISOCHRONE.json';
//https://onlineimagetools.com/resize-image
//https://onlinepngtools.com/change-png-color
//https://onlinepngtools.com/convert-png-to-base64
   const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1,
      width: 500,
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      alignItems:"center",
  justify:"center"
      //color: theme.palette.text.secondary,
      //background: '#081C25',
    },
    fixedHeight: {
      height: 200,
    }
    ,
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
  //     alignSelf: 'center',
  //     textAlign: 'center',
  //     alignItems:"center",
  // justify:"center"
      
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
   fixedHeight2: {
    height: 120,
  },
  panelDetails: {
   
    background:'#0A232F'  
  }
   
  }));

  export default function DialogoDatos(props) {
  //https://github.com/giorgi-m/online-shop
  //https://docs.mapbox.com/help/tutorials/get-started-isochrone-api/ ISOCHRONE
  //https://api.mapbox.com/isochrone/v1/mapbox/driving/-117.17282,32.71204?contours_minutes=15&polygons=true&access_token=pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw
  //https://blog.mapbox.com/curbside-pickup-for-everyone-with-mapbox-a3995b90d190
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
    const [nombre1, setNombre1] = React.useState("");
    const [nombre2, setNombre2] = React.useState("");
    const [apellido1, setApellido1] = React.useState("");
    const [apellido2, setApellido2] = React.useState("");

    // const [  isLoadingCustomer, isErrorCustomer , postCustomer] = useCustomer('');
    const [direccion,setDireccion]=useState("")
    const [flagCircular, setFlagCircular] = React.useState(false);     
    const[fecha, setFecha]=useState(new Date())
    const [value, setValue] = React.useState('female');

     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    // const[kpiday, setKpiday]=useState({"type":"FeatureCollection","features":[] })
    
    const [data, isLoading, isError , fetchData] = useFetch(""); 
    const [ dataPost, isLoadingPost, isErrorPost , postData] = useFetchPost('');
//console.log("GEO")
    const handleDateChange = date => {
      setSelectedDate(date);
    };
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    function handleSubmit(event) {
      // alert('A name was submitted: ' + correo);
     //  setFlagCircular(true)
     //  //alert(JSON.stringify(customer))
     //  postData("https://monederoapi.azurewebsites.net/api/PostCutomer?code=AlQBaa9sWYAUNeRpUS6S0O5ZBJodGJxY89bZcwTRbsQ1YoaOReNBMQ==",customer)

       event.preventDefault();
     }
   

    function handleClose() {
      // onClick("V3664204")
      //alert('close')
      //props.closeDialog()
     // props.flagformulario=false
     props.closeDatos()
      //setOpenSos(false);
     }


return (
<Fragment>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={true}  
    fullWidth={true} maxWidth = {'md'}>
        
        <DialogContent dividers>
          <div  className={classes.paper}>
          <center>
        <Avatar className={classes.avatar} >
          <AccountCircleIcon />
        </Avatar>
        </center>
        <Typography component="h1" variant="h5">
          Datos Generales
        </Typography>
        
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Primer Nombre"
                autoFocus
                value={nombre1}
                //onChange={handleChangeCambios('N1')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                value={apellido1}
                //onChange={handleChangeCambios('A1')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
        disableFuture
        openTo="year"
        format="dd/MM/yyyy"
        label="Fecha de Nacimiento"
        views={["year", "month", "date"]}
        value={selectedDate}
        onChange={handleDateChange}
      />
      </MuiPickersUtilsProvider>
          </Grid>
        
          <Grid item xs={12} sm={6}>
       
          <FormControl component="fieldset">
      <FormLabel component="legend">Sexo</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Fememino" />
        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
        <FormControlLabel value="other" control={<Radio />} label="Otro" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
    </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={correo}
                onChange={handleChangeCambios('EM')}
                error={correoError.flag}     
                helperText={correoError.helper}
                defaultValue={correo}
        
              />


            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={pwd}
                onChange={handleChangeCambios('PW')}
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quieres ser contactado por correo."
              />
            </Grid> */}
            {/* <Grid item xs={12}>
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() =>clickRegistro("firebase")}
          >
            Sign Up
          </Button>
          </Grid>
          <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<FaGoogle />}
            onClick={() =>clickRegistro("google")}
          >
            Google
          </Button>
          </Grid> */}
          </Grid> 
          {flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={10}   thickness={4} className={classes.progress} />}
         
        </form>
      </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
   


    {flagCircular&&<CircularProgress variant="indeterminate"   disableShrink  size={17} color="secondary"  thickness={4} className={classes.progress} />}
     
 

{/* //https://res.cloudinary.com/dzc4dgpyi/image/upload/v1560300064/Torrecitas-02.png */}
</Container>
      


</Fragment>
)
function Card (props){
  return (
    <div>div</div>
  )
}

  }

  var tres=
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            "id": "81150cc3-25fa-4f98-b36d-4103e9de00e7",
            "timestamp": "2020-02-29T14:21:28.311Z",
            "mobilegeneration": "3G",
            "cellid": 100301,
            "cidreported": 2567681,
            "downlink": 1.4,
            "rtt": 350,
            "mcc": 734,
            "mnc": 2,
            "lac": 700,
            "loc": 1,
            "lon": -66.85489415,
            "lat": 10.46507604,
            "signaltype": "LTE",
            "signalstrength": 27,
            "rsrq": -11,
            "rsrp": -89,
            "bhealth": "GOOD",
            "blevel": 1,
            "bsource": "AC",
            "bstatus": "FULL",
            "btemp": 242,
            "bvolts": 4346,
            "bslon": "NULL",
            "bslat": "NULL",
            "status": "NULL"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -66.871643,
                10.453198250000001
            ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "id": "81150cc3-25fa-4f98-b36d-4103e9de00e7",
            "timestamp": "2020-02-29T14:21:28.311Z",
            "mobilegeneration": "3G",
            "cellid": 100301,
            "cidreported": 2567681,
            "downlink": 1.4,
            "rtt": 350,
            "mcc": 734,
            "mnc": 2,
            "lac": 700,
            "loc": 1,
            "lon": -66.85489415,
            "lat": 10.46507604,
            "signaltype": "LTE",
            "signalstrength": 27,
            "rsrq": -11,
            "rsrp": -89,
            "bhealth": "GOOD",
            "blevel": 1,
            "bsource": "AC",
            "bstatus": "FULL",
            "btemp": 242,
            "bvolts": 4346,
            "bslon": "NULL",
            "bslat": "NULL",
            "status": "NULL"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -66.873643,
                10.453198250000001
            ]
        }
      }
    ]
  }
 var antena=
 {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      -66.894276,
      10.504417
    ]
  },
  "properties": {
    "clientid": "9c1fc612-b92c-4701-ab78-edc89b3e4108",
    "geoboundaryid": "459ff828-0b6d-4149-80d5-9e0392dd8559",
    "cellid": "160021",
    "mobilegeneration": "4G",
    "technology": "LTE",
    "lon": "-66.894276",
    "lat": "10.504417",
    "aperture": "65",
    "band": "",
    "bcc": "",
    "bcch": "",
    "bsc": "",
    "bts": "",
    "btssector": "",
    "direction": "",
    "enodeb": "L_AV_ANDRES_BELLO",
    "enodebid": "16002",
    "lac": "",
    "ncc": "",
    "mme": "MMEVAL01",
    "orientation": "55",
    "pci": "229",
    "rac": "",
    "region": "GRAN CARACAS",
    "rnc": "",
    "scramblecode": "",
    "sectorname": "L_AV_ANDRES_BELLO1",
    "siteid": "16002",
    "tac": "15011",
    "wbts": "",
    "wcel": "",
    "cidreported": "",
    "id": "ab1bf710-b15c-11e8-85b2-000d3a974c26"
  }
}
var device=
{
  "deviceId": "07F1A8206765346D6110F9A5C13E5A3A340DA011DDD986F97302A999D6A3CB52",
  "serverPublicKey": "AAAAAAAAAAAAAAAAAAAAAMBGLKA2fVWLoP90ZeKpPAOeEH_ZSfrq78qG3hfA0HzOVgced8QEmz-dglxEjNYgD4MXMxsHGCbC1T3jqQ",
  "serverPrivateKey": "AAAAAAAAAAAAAAAAAAAAABv3uHa2jWCZI8abVEzmOJrmk1BbYFtiamJNCTUq-7wLv930WZ5VvwQY0x6EtpRLEcGahBm4bHkT65BmgA",
  "publicKey": "AAAAAAAAAAAAAAAAAAAAAEmfkY8kglquaWTnuAwp2_Vv0thAKtO-xZB_tM16DZnDBLzCwiQGxTK40UvrirvQSrkxq7JnI3vOoeNY",
  "deviceTwinData": {
    "board": "ysl",
    "brand": "xiaomi",
    "carrierId": "9c1fc612-b92c-4701-ab78-edc89b3e4108",
    "country": "Estados Unidos",
    "cpuSupportedAbis": "armeabi-v7a,armeabi",
    "device": "ysl",
    "deviceId": "07F1A8206765346D6110F9A5C13E5A3A340DA011DDD986F97302A999D6A3CB52",
    "deviceType": "Xiaomi-Redmi S2",
    "hardware": "qcom",
    "manufacturer": "Xiaomi",
    "mcc": "734",
    "mnc": "4",
    "mobileEquipmentId": "868714032146034",
    "model": "Redmi S2",
    "product": "ysl",
    "createdTimestamp": 1563810378,
    "isDebugMode": false,
    "schemaVersion": 12
  },
  "id": "168bc09c-8efc-4697-b411-3d647d586b99"
}
