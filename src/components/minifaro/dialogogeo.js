import React, {useEffect, useState,Fragment,useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
//import {fromAtomToJson} from '../dashboard/helpers'
import { greatCircle,destination, point,hexGrid,circle,voronoi,randomPoint ,featureCollection,nearestPoint} from '@turf/turf';
// import { useRecoilState,useRecoilValue} from "recoil";
// import { points } from '../store/atomgeo';
// import {customers,wallets,transactions} from '../store/atomwallet';
// import {jsondocument} from '../store/atombizaccount';

//import {useCustomer}  from '../hooks/usecustomer'
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
let image = new Image();
//image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAf0lEQVQ4T7WU2w6AMAhD1///aAwmmIpc1LC9DcZJaWBYQwdDnLUXJCJSKQXwEHALdAAPZ+AJ+gqIgKggvoXyrVdkxVlRlNfY5ZEW6v1tm/bWGLNms3msqPLI58KBtDbZP/amnaNMGccjiObLFfHGZ5AWFLWWrc7epf3ztYwpOgA+z1APPYYsnQAAAABJRU5ErkJggg=="
image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAr0lEQVQ4T92VQRKAMAgD9ef8XIeOOBBD6FmPLSyBAp7H8JnZlU3M7FQu9LKD7MA/wHDKSnbPXHkBZkdUg2l6QBboBTJYVy9lW4AYtVPJ7CI4BXbpeNqoLmwLcDIi9bsyKPsvhX6g0lDAx389kDO2gPiaSkABotqoiwJmm1chA3WtMdVbtk3UbpqUKEGZFBZ5ArL2akcPNszaODg5cvTUSmKOnb3cbSrlnwOn30S+vwH7HygkEWrDEQAAAABJRU5ErkJggg=="
image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAA50lEQVRIS+1WQRKEMAhbf87Pd6fO4tA2CfHkRU9OBRICFI+P+UTEdzWNiMNxl0YoMAuqAClIBVABHDsIko41eCcX8smsN5DV2JEsyTCgCYQBOHIpoA2EGSu5ELlK7AKphuh96MtqNM6Z//CbQGoWnc5/0HN2mF+ebyCKEZoRpcAE0knlFp7FOTNx2FQ7VB9Vl1tyoel2CD4DkrKoTnM6amQIuyud2fWgLkNrTlQG2bodCMp+GkY0XGBJXYuLtTVSAd7CXYC1hSuZWgt61at16iwo5G/taKcmitwLMu2W7rfollxdMPb9B4dUcCmj6fDXAAAAAElFTkSuQmCC"
const images= ['londonCycle', image];
var linearoja={"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[-66,9],[-80.31606674194336,25.77392392167507]]}}]}
const style={   Paper:{padding:1,marginTop:1,marginBottom:1}}
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
  const Map = MapGL({accessToken: TOKEN });
  const mapStyle = {  flex: 1,  height: "60vh",width: "100%"};
  
  
  const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1,
      width: 500,
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      background: '#081C25',
    },
    fixedHeight: {
      height: 200,
    }
    ,
  
   fixedHeight2: {
    height: 120,
  },
  panelDetails: {
   
    background:'#0A232F'  
  }
   
  }));

  export default function DialogoGeo(props) {
  //https://github.com/giorgi-m/online-shop
  //https://docs.mapbox.com/help/tutorials/get-started-isochrone-api/ ISOCHRONE
  //https://api.mapbox.com/isochrone/v1/mapbox/driving/-117.17282,32.71204?contours_minutes=15&polygons=true&access_token=pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw
  //https://blog.mapbox.com/curbside-pickup-for-everyone-with-mapbox-a3995b90d190
//   alert(JSON.stringify(antfl))
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
   // const [  isLoadingCustomer, isErrorCustomer , postCustomer] = useCustomer('');
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();
   const [zoom, setZoom] = useState(10);
    const [center, setCenter] = useState([-66.8515,10.4981]);
    const [direccion,setDireccion]=useState("")
    const [flagCircular, setFlagCircular] = React.useState(false);     
    const[fecha, setFecha]=useState(new Date())
  
     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    // const[kpiday, setKpiday]=useState({"type":"FeatureCollection","features":[] })
    const[clicklocation, setClickLocation]=useState([0,0])
    const[pointlocation, setPointLocation]=useState({"type":"FeatureCollection","features":[] })
    const[iso, setIso]=useState({"type":"FeatureCollection","features":[] })
    // const[pointFeatureCollection0,setPointFeatureCollection0]=useState({"type":"FeatureCollection","features":[] })
    // const[pointFeatureCollection1,setPointFeatureCollection1]=useState({"type":"FeatureCollection","features":[] })
    // const[pointFeatureCollection2,setPointFeatureCollection2]=useState({"type":"FeatureCollection","features":[] })
   
    // const[randompoints, setRandomPoints]=useState({"type":"FeatureCollection","features":[] })
    const[circle1, setCircle1]=useState({"type":"FeatureCollection","features":[] })
    
    const [data, isLoading, isError , fetchData] = useFetch(""); 
    const [ dataPost, isLoadingPost, isErrorPost , postData] = useFetchPost('');
//console.log("GEO")
    const handleDateChange = date => {
      setSelectedDate(date);
    };

    // useEffect(() => {
    //   if (clicklocation[1]==0){
    //  // alert(longitude+" "+latitude) 
    //   setCenter([longitude,latitude])  
    //     setPointLocation(
    //       {
    //         "type": "FeatureCollection",
    //         "features": [
    //           {
    //             "type": "Feature",
    //             "properties": {},
    //             "geometry": {
    //               "type": "Point",
    //               "coordinates":[longitude,latitude]
    //             }
    //           }
    //         ]

    //       })
    //       //if (latitude>0){
    //       var latlon={latitude:latitude,longitude:longitude}
          
    //       getGeolocation(latlon,geolocation => {
    //         props.comentario(geolocation.estado+", "+geolocation.municipio+", "+geolocation.urbanizacion+", "+geolocation.formatted_address)
    //         // getLocation22({"a":1},geolocation => {
    //             //alert('geolocation'+JSON.stringify(geolocation))
    //            // const { latitude, longitude, timestamp, accuracy, error } = usePosition();
    //             // const position={latitude:latitude, longitude:longitude, timestamp:timestamp, accuracy:accuracy, error:error}
    //              //const position={latitude:10, longitude:-66, timestamp:123, accuracy:1, error:null}
    //          })
    //         //}
    //   }
    // },[latitude]);

    function handleClose() {
      // onClick("V3664204")
      //alert('close')
      //props.closeDialog()
     // props.flagformulario=false
     props.closeGeo()
      //setOpenSos(false);
     }
  useEffect(() => {
    //alert(JSON.stringify(clicklocation))
    if (JSON.stringify(clicklocation)!="[0,0]"){
    setPointLocation(
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates":clicklocation
            }
          }
        ]
      }
      )
    
     
     var centro=clicklocation
    var options = {steps: 100, units: 'kilometers', properties: {foo: 'bar'}};
    var circle1 = circle(centro, .05, options);
  setCircle1(circle1)
  //alert(JSON.stringify(clicklocation))
  var latlon={latitude:clicklocation[1],longitude:clicklocation[0]}
  getGeolocation(latlon,geolocation => {
    //props.comentario(geolocation.estado+", "+geolocation.municipio+", "+geolocation.urbanizacion+", "+geolocation.formatted_address)
    //alert((geolocation.estado+", "+geolocation.municipio+", "+geolocation.urbanizacion+", "+geolocation.formatted_address))
    setDireccion(geolocation.estado+", "+geolocation.municipio+", "+geolocation.urbanizacion+", "+geolocation.formatted_address)
    // getLocation22({"a":1},geolocation => {
        //alert('geolocation'+JSON.stringify(geolocation))
       // const { latitude, longitude, timestamp, accuracy, error } = usePosition();
        // const position={latitude:latitude, longitude:longitude, timestamp:timestamp, accuracy:accuracy, error:error}
         //const position={latitude:10, longitude:-66, timestamp:123, accuracy:1, error:null}
         var latlng=clicklocation[0]+","+clicklocation[1]
         //alert(latlng)
         //https://api.mapbox.com/isochrone/v1/mapbox/driving/-66.8515,10.4981?contours_minutes=5&polygons=true&access_token=pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw
         fetchData("https://api.mapbox.com/isochrone/v1/mapbox/driving/"+latlng+"?contours_minutes=5&polygons=true&access_token=pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw")
         //driving cycling walking
     })
 // alert(JSON.stringify(createRandomPoints("circulo")))
  //createRandomPoints("circulo")  
 //alert(JSON.stringify(circle1))
    }
  },[clicklocation]);
  useEffect(() => {
    //alert("in "+option)
    
    //alert(data[0].type)
    if ((data!=undefined)&&(!isLoading))      
    {
   //alert(JSON.stringify(data))
   if (JSON.stringify(data)!="[]"){
   
   
    setIso(data)
  }
    }
  },[data,isLoading]);

 function onControlClick(map,event){
    alert("onControlClick")
    //console.log(event)
   
  }
  function onClickMap(map,event){
   // alert("click")
    //console.log(event.lngLat.lng+" "+event.lngLat.lat)
    setClickLocation([event.lngLat.lng,event.lngLat.lat])
  }
  function onResize (map, event)  {
    //cuando  cambia el tamanno del explorador//
    //alert("onRezise "+map.getZoom()+" " +JSON.stringify(event))
  }
  function onZoomEnd (map, event)  {
    var zoomint=Math.round(map.getZoom());
 
  setZoom(zoomint)
  }
   function onZoom (map, event)  {
    
     var zoomint=Math.round(map.getZoom());
    }
      function onControlClick(map,event){
        var zoomint=Math.round(map.getZoom());
             
          setZoom(zoomint+(event)*1.1)

      }
    // console.log(props.positions.length+" possssssssssss ")
   // setCenter([stategeo.longitude,stategeo.latitude])
 //  var antenasFeatureCollection={"type":"FeatureCollection","features":[] }
   //var antenasFeatureCollection={"type":"FeatureCollection","features":[] }
    

return (
<Fragment>
    <div className={classes.root}>
    <Container component="main" maxWidth="xs">
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={true}  fullWidth={true}
maxWidth = {'md'}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Area de Influencia 10 min
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
             {direccion} 
          </Typography>
          <Map       
   style="mapbox://styles/mapbox/streets-v8"
  // style="mapbox://styles/mapbox/dark-v9"
   containerStyle={{
    height: '80%',
    width: '100vw'
  }}
  //  style="mapbox://styles/mapbox/light-v9"
   center={center} 
   //center={[longitude,latitude]} 
   zoom={[zoom]}
   //center={[state.position.longitude,state.position.latitude]} 
   //center={[state.position.latitude,state.position.longitude]} 
   // zoom={[zoom]}
   onZoom={onZoom}
   onZoomEnd={onZoomEnd}
   onResize={onResize}
   containerStyle={mapStyle}        
   onControlClick={onControlClick}
   onClick={onClickMap}  
  //onControlClick={onControlClick}
//onClick={this._onClickMap}  
//<ZoomControl onControlClick={onControlClick}/>

> 

<ZoomControl  position={"bottomRight"}/>
<ScaleControl />
      
        
        {/* <Layer type="line" 
         paint={ {'line-color': '#4790E5',  'line-width': 12}}>
          <Feature coordinates={lineas} />
        </Layer> */}
        <GeoJSONLayer
          data={CIUDADESGEO}
          fillPaint={{'fill-color': '#D1D0CE','fill-outline-color': 'gray','fill-opacity': .032}}
          linePaint={{            'line-color': 'gray',            'line-width': 1.5          }}
          
        /> 
        {/* <GeoJSONLayer
          data={WORLD}
          fillPaint={{'fill-color': 'yellow','fill-outline-color': 'yellow','fill-opacity': .02}}
          linePaint={{            'line-color': 'white',            'line-width': .5          }}
          
        />  */}

      <GeoJSONLayer
          data={LIBERTADOR}
          fillPaint={{'fill-color': 'yellow','fill-outline-color': 'yellow','fill-opacity': .02}}
          linePaint={{            'line-color': 'dodgerblue',            'line-width': .5          }}
          
        /> 
         <GeoJSONLayer
          data={circle1}
          fillPaint={{'fill-color': 'yellow','fill-outline-color': 'yellow','fill-opacity': .00152}}
          linePaint={{            'line-color': 'gray',            'line-width': 2          }}
          
        /> 


        <GeoJSONLayer
            data={pointlocation}
             circleLayout={{ visibility: 'visible' }}
            circlePaint={{'circle-color': 'purple','circle-radius': 6,'circle-opacity': 1,'circle-stroke-color': 'red' , 'circle-stroke-width': 4,'circle-blur': 0.9,}}         
         
          />
  <GeoJSONLayer
          data={iso}
          fillPaint={{'fill-color': 'purple','fill-outline-color': 'gray','fill-opacity': .00032}}
          linePaint={{            'line-color': 'purple',            'line-width': 2.5          }}
          
        /> 
         
</Map>
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
        </div>


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
