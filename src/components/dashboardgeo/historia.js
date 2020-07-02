import React, { Component } from 'react';
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer} from 'react-mapbox-gl';
//import {observadores}  from '../data/observadores.json'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import SelectBox from 'devextreme-react/select-box';
import {  Chart,  Series,  ArgumentAxis,  CommonSeriesSettings,  Export,  Legend,  Margin,  Title,  Subtitle,  Tooltip,  Grid} from 'devextreme-react/chart';
//import service from './data.js';
import {ESTADOS} from  '../../data/ESTADOS.json';
import {HISTORIAPAIS} from  '../../data/HISTORIAPAIS.json';
import {HISTORIAESTADO} from  '../../data/HISTORIAESTADO.json';
import {ESTADOSGEO} from '../../data/ESTADOSGEO.json';
//import {PARR as PA} from  '../../data/PARR.json';
import {PAPROPERTIES} from  '../../data/PAPROPERTIES.json';

//const countriesInfo = service.getCountriesInfo();
//const energySources = service.getEnergySources();
const types = ['line', 'stackedline', 'fullstackedline'];
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
const Map = MapGL({
  accessToken: TOKEN
});
const mapStyle = {
  flex: 1,
  height: "75vh",width: "95vw"
};
const symbolPaint= MapGL.SymbolPaint = {'text-color': 'black'};
const layoutLayer = { 'icon-image': 'londonCycle' };
let image = new Image();
//image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svg2);
image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAEJklEQVQ4T22UbUxbVRjH/6eU2zJa2gIbSMtaxtohMCgwMsEpRZRJlvFinBlkJMM4FJlkIhhnooMPxkwRSTTyIgQWX8KASBGdSogrEJBNCGwF/SAKCzImhVIKtPT29l7TC3uJ83w75zzn97yc5/8Q/M869fnvBhZsGgFn4DhOTzMcGBaTAkJMlAAD7SUHTf99Rh48ON06K6fdjlZCkMtxAM2wcNAeHNIEIFYlAe1mMfyHFXMrLqNILi8yFkXY7r6/BypomtYD6CYEGi/EvsUgSS1FVXYEb2u1rsJf7AvRLglmlzZw9oupOXlAQN7XxTGT3nse5I3ERTsmOHAaluPgoFlkxwfjzJNhaPtuGLWXByH0D4TAV4wwhRjd7+RhfYtBXt31OU24JqGtKMLGgwqapo0O2pMjFfsgNIDiU6rL16G87jJ+nl6GLv4wRLukfGS0m8Ga1YIfzxtQ2/ULhhZFbcaypCLiLayDdl99OjoQJQYl4KEBHwr9o1M419iPmMNPgSVCUD474QNY3/KgJC0EscEcCuvHodq7L50UNJqr7C72Qu9rcXjufAumbzvw6vFEdHZ1QRp3DHFR+xEXJkbnuAX+lACEELgYFskaCd58Vo2YM01ITEmrJic+M5sUEmFaY2EU9C/WIiY1C06nE26HDRJFCBoKtJBJfPDe93/jxvw6KKGAB6Xsk6I8U43m3lF8MyMcILmf3rB1l8bJhsfNKK3pQExGPu+VZQGZnxD1p0LgmZhDy+Zu9JlXIPYV8LVa3XAhXelCxYnHcLKmz0Y6xiy2rANiWWzhRSQ+ngF/RSg4joWH9TYhQecre8FOzqLWIsfojB1i3/utt7C8jh/eSEbP4M018tui0zQyei3tyzEbwiOjwXrcvMdNlwcl6SokKByQBAXDjxIh/d0rUKojAG+j7RT9ray9ELlXB0jvhKUqOQwXjn0whEhdFAjHwmvGckBSuB+yVVbcsaxi7M9lXPmLQKmN50Ecx+GOnca3ZXr0j0xUk9xPJgzdZ/VX5y12NAwuYtXJQeFPYWphE88nh+KIwsJ/v42hUP6VGSqNFrZNF4QCoDQjHJnRgThe2ZDOJ5z74aCx8qgqJ/XgthwAFocqelDz8jMI2ZrhZSEP2oMn3u7BT+/nQyUT3pNoxcftlz4qzz+9DWqdlW8tLUyu/TOvZpxr8DAMpKFqNJcdhXXmVyiCgqHV6pBU2oIjqSkI8dzG0ooVgzfnbsnkOr2pLm9bIjsy0UNAjISD2ru3ORi0Fz+KievDCAl9BDqdDpmVrZBHJoN2OQGGuUX5+eV2libcF+1dGD9GGEcbgBz7lgc9xfsxNHINYUoltFotXrrYgTXpAYhEoku+PuJzXrE+NEYenEsn680GihIaml/YbRgeM+uVPChisrq5zzS5scdkfD35ocH2L/6luCRndMPRAAAAAElFTkSuQmCC"
//console.log(image)

const images=['londonCycle', image];

//import Persona from '../components/persona';

//console.log({facilitadores})
class Historia extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type: 'line',
          center:[-66.45286,9.0],
          zoom:[6],
          error:null,
          isLoading:false,
          PA:{
            "type":"FeatureCollection",
            "features":[]
          }
        };
        this.handleChange = this.handleChange.bind(this);
      }
      customizeTooltip(arg) {
        return { text: arg.valueText };
      }
    
      handleChange(e) {
        this.setState({ type: e.value });
      }    
      componentDidMount() {
			 var url="http://nodefaro.azurewebsites.net/parroquias"
       fetch(url)        
       .then(response => {
         response.json().then(data => {  
          var pa=data;
         // alert(pa)
           for (var i = 0; i < pa.features.length; i++) {
             
             pa.features[i].properties.CODCNE="000000";
             pa.features[i].properties.NOMBRE="XXXXXX";   
             pa.features[i].properties.UNIDADPORC=0.0;
             pa.features[i].properties.OFICIALISMOPORC="0.0";
             pa.features[i].properties=PAPROPERTIES.features[i].properties;
					 }
					 this.setState({ jsontext:pa });
				//	 notify("GEOJson Parroquias success", "success", 600);
         
           //alert(PA2.features.length+" "+PA.features.length)
           this.setState({PA:pa,isLoading:false })
           
         });
         
       })
      //.then(results => this.setState({geojson:results ,isLoading:false}))
      .catch(error => {
           alert(error)
          this.setState({ error, isLoading: false })
      });
     
     
    }

    render() {
     //   alert(JSON.stringify(ESTADOS))
     //alert(JSON.stringify(ESTADOS)) 
     //const estado='01'
     
    let {zoom,center,PA, flagVoluntarios,flagResultados,isLoading} = this.state;
   
//alert(JSON.stringify(PA.features[0].properties))
    var features00=[];var features50_60=[];var features60_70=[];var features70_100=[];
    var features50_40=[];var features40_30=[];var features30_00=[];
    for (var i = 0; i < PA.features.length; i++) {
      if (PA.features[i].properties.UNIDADPORC*1.0>=PA.features[i].properties.OFICIALISMOPORC*1.0){
        if (PA.features[i].properties.UNIDADPORC*1.0==0.0){
          features00.push(PA.features[i])
       }
        if ((PA.features[i].properties.UNIDADPORC*1.0<60)&&(PA.features[i].properties.UNIDADPORC*1.0>0.0)){
         features50_60.push(PA.features[i])
      }
      if ((PA.features[i].properties.UNIDADPORC*1.0>60)&&(PA.features[i].properties.UNIDADPORC*1.0<70.0)){
     
        features60_70.push(PA.features[i])
     }if ((PA.features[i].properties.UNIDADPORC*1.0>70)){
      features70_100.push(PA.features[i])
     }
    
    }else{
      if ((PA.features[i].properties.OFICIALISMOPORC*1.0<=60)){
        features50_40.push(PA.features[i])
        }
        if ((PA.features[i].properties.OFICIALISMOPORC*1.0>60)&&(PA.features[i].properties.OFICIALISMOPORC*1.0<=70.0)){
          features40_30.push(PA.features[i])
          }
          if ((PA.features[i].properties.OFICIALISMOPORC*1.0>70)){
            features30_00.push(PA.features[i])
            }
    }
    
   }
   var GEO00={"type":"FeatureCollection", "features":features00 }
   var GEO50_60={"type":"FeatureCollection", "features":features50_60 }
   var GEO60_70={"type":"FeatureCollection", "features":features60_70 }
   var GEO70_100={"type":"FeatureCollection", "features":features70_100 }
   var GEO50_40={"type":"FeatureCollection", "features":features50_40 }
   var GEO40_30={"type":"FeatureCollection", "features":features40_30 }
   var GEO30_00={"type":"FeatureCollection", "features":features30_00 }
 

    if (isLoading) {
      return <p>Loading ...</p>;
    }
      var HISTORIAnombre=""
      var HISTORIASestados=[]
      for (var j = 2; j < ESTADOS.length; j++) {
      var ID=ESTADOS[j].id 
      
      var HISTORIAESTADOID=[]
      for (var i = 0; i < HISTORIAESTADO.features.length; i++) {
         if (HISTORIAESTADO.features[i].estado==ID){
          HISTORIAESTADOID.push(HISTORIAESTADO.features[i])
          
         }
      }
      console.log(HISTORIAESTADOID)
      HISTORIASestados.push(HISTORIAESTADOID)
    }
    
      console.log(HISTORIASestados[0])
        return (
       
  <div>
   
    
  <Map        
       style="mapbox://styles/mapbox/light-v9"
    center={center} 
    zoom={zoom}
    containerStyle={mapStyle}        
  > 
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'londonCycle' }} images={images}>
    <Feature              
        key={'1'} 
        coordinates={[-69.999910,12.40]}
      />
  </Layer>
       <GeoJSONLayer
   data={GEO00}
   fillPaint={{'fill-color': '#DCDCDC','fill-outline-color': 'purple','fill-opacity': 1}}
   linePaint={{'line-color': 'purple','line-width': 1}}

 /> 
 <GeoJSONLayer
 data={GEO50_60}
 fillPaint={{'fill-color': 'dodgerblue','fill-outline-color': 'purple','fill-opacity': 1}}
 linePaint={{'line-color': 'purple','line-width': 1}}

/>
<GeoJSONLayer
 data={GEO60_70}
 fillPaint={{'fill-color': 'mediumblue','fill-outline-color': 'purple','fill-opacity': 1}}
 linePaint={{'line-color': 'purple','line-width': 1}}

/>
<GeoJSONLayer
 data={GEO70_100}
 fillPaint={{'fill-color': 'darkblue','fill-outline-color': 'purple','fill-opacity': 1}}
 linePaint={{'line-color': 'purple','line-width': 1}}

/>
<GeoJSONLayer
    data={GEO50_40}
    fillPaint={{'fill-color': '#FF3C3C','fill-outline-color': 'purple','fill-opacity': 1}}
    linePaint={{'line-color': 'purple','line-width': 1}}
   
  />
   <GeoJSONLayer
    data={GEO40_30}
    fillPaint={{'fill-color': 'red','fill-outline-color': 'purple','fill-opacity': 1}}
    linePaint={{'line-color': 'purple','line-width': 1}}
   
  />
    
    <GeoJSONLayer
     data={GEO30_00}
     fillPaint={{'fill-color': 'red','fill-outline-color': 'purple','fill-opacity': 1}}
     linePaint={{'line-color': 'purple','line-width': 1}}
    
  />
<GeoJSONLayer
              data={ESTADOSGEO}
              fillPaint={{'fill-color': 'purple','fill-outline-color': 'purple','fill-opacity': 0.002}}
              linePaint={{'line-color': 'darkblue','line-width': 1.5}}
             
            />
  
    <ZoomControl position={"bottomRight"} />
    </Map>
  
          <div id={'chart-demo'}>

            <Chart
              palette={'Violet'}
              dataSource={HISTORIAPAIS.features}
            >
              <CommonSeriesSettings
                argumentField={'eleccion'}
                type={this.state.type}
              />
              {
                partidos.map(function(item) {
                  return <Series key={item.value} valueField={item.value} name={item.name} color={item.color} type={item.type}/>;
                })
              }
              <Margin bottom={20} />
              <ArgumentAxis
              argumentType={'string'}
              
                valueMarginsEnabled={false}
                discreteAxisDivisionMode={'crossLabels'}
              >
                <Grid visible={true} />
              </ArgumentAxis>
              <Legend
                verticalAlignment={'bottom'}
                horizontalAlignment={'center'}
                itemTextPosition={'bottom'}
              />
              <Export enabled={true} />
              <Title text={'Resultados Historicos'}>
                <Subtitle text={'(Electores)'} />
              </Title>
              <Tooltip
                enabled={true}
                customizeTooltip={this.customizeTooltip}
              />
            </Chart>
            {
               HISTORIASestados.map(function(item) {
                  return  <ChartFaro LISTA={item} ESTADOS={ESTADOS}/>;
                })
              }
           
          
          </div>
          </div>
        );
      }
      
    }
    class ChartFaro extends React.Component {
      constructor(props) {
        super(props);
        this.state = { 
          idestado:props.idestado,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(event) {
        //alert(JSON.stringify(this.state.testigo))
        //this.setState({cedula:"cedula",celular:"celular8888",email:"email888"})
        // this.props.onsetdatospersonales('98989898')
         //this.props.setCurrentClick(this.state.testigo.properties.celular,this.state.testigo.properties.correo)
      // this.setState({celular: '0414222'});
      
       //alert('A name was submitted: ' + this.state.value);
      // this.onSetDatosPersonales("aa")
      event.preventDefault();
      }
      //setCurrentPic(id) {
      //  alert("currencyPic");
      //}ios
      render() {
           //alert(JSON.stringify(this.props.LISTA))
          var eventos=this.props.LISTA
          if (eventos.length>0){
          var id=eventos[0].estado
          }
          var NOMBREESTADO="";
        //  alert()
          for (let i = 0; i < ESTADOS.length; ++i) {
             if (ESTADOS[i].id==this.props.LISTA[0].estado){
               NOMBREESTADO=ESTADOS[i].name
             }
          }
         // console.log(eventos)
          return (
             <div id={'chart-demo'}>
               <Chart
                 palette={'Violet'}
                 dataSource={eventos}
               >
                 <CommonSeriesSettings
                   argumentField={'eleccion'}
                   type={this.state.type}
                 />
                 {
                   partidos.map(function(item) {
                     return <Series key={item.value} valueField={item.value} name={item.name} color={item.color} type={item.type}/>;
                   })
                 }
                 <Margin bottom={20} />
                 <ArgumentAxis
                 argumentType={'string'}
                 
                   valueMarginsEnabled={false}
                   discreteAxisDivisionMode={'crossLabels'}
                 >
                   <Grid visible={true} />
                 </ArgumentAxis>
                 <Legend
                   verticalAlignment={'bottom'}
                   horizontalAlignment={'center'}
                   itemTextPosition={'bottom'}
                 />
                 <Export enabled={true} />
                 <Title text={'Estado: '+id+' '+NOMBREESTADO}>
                   <Subtitle text={'(Electores)'} />
                 </Title>
                 <Tooltip
                   enabled={true}
                   customizeTooltip={this.customizeTooltip}
                 />
               </Chart>
               </div>
           );
         }
    
    }
    export default Historia;

    const partidos = [
      { value: 'registro', name: 'RE' ,color:'gainsboro',  type: "area"},
      { value: 'votos', name: 'Participacion' ,color:'lightgray',  type: "area"},
      { value: 'unidad', name: 'Unidad' ,color:'dodgerblue',type: "line"}, 
      { value: 'oficialismo', name: 'Oficialismo' ,color:'crimson',type: "line"},
      { value: 'ppt', name: 'PPT' ,color:'indianred',type: "line"},
      { value: 'otros', name: 'Otro' ,color:'darkred',type: "line"},
    ];
