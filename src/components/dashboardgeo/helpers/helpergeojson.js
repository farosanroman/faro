//import {inside, points,polygon,pointsWithinPolygon} from '@turf/turf';
//import { greatCircle, point,circle } from '@turf/turf';
import {pointInPolygon} from '../../helpers/helperpolygons'
export  const creaciongeojson=(centros,CIUDADESGEO,callback)=>{
   alert(JSON.stringify(centros))
var callbak={urbanos:[],rurales:[]}
var centrosfiltro=[]
var ruralesfiltro=[]
for (var i = 0; i < centros.length; i++) {
  var flag=false
  

  for (var j = 0; j < CIUDADESGEO.features.length; j++) {

          //  var p={"type":"Point","coordinates":[centros[i].lng,centros[i].lat]}
         //   var poin = point([centros[i].lng,centros[i].lat]);   
       //  console.log(JSON.stringify(CIUDADESGEO.features[j].geometry.coordinates))
           //var poly=polygon(CIUDADESGEO.features[j].geometry.coordinates);
         //  alert(j)
          //  if (CIUDADESGEO.features[j].geometry.coordinates[0].length<4){
          //   console.log(JSON.stringify(CIUDADESGEO.features[j].geometry.coordinates[0].length))
          //   console.log(JSON.stringify(CIUDADESGEO.features[j].geometry.coordinates[0][0].length))
          //   var poly=polygon(CIUDADESGEO.features[j].geometry.coordinates[0][0]);
           
          //   console.log(JSON.stringify(CIUDADESGEO.features[j].geometry.coordinates))
          //  }
            //var isInside= inside(poin, poly);
            //console.log(poin)
            //console.log(isInside)
            var poly=CIUDADESGEO.features[j].geometry
            var p={"type":"Point","coordinates":[centros[i].lng,centros[i].lat]}
           // console.log(pointInPolygon(p,poly))
            if (pointInPolygon(p,poly)){
             // console.log(CIUDADESGEO.features[j].properties.nombre)
             centrosfiltro.push(centros[i])
              flag=true
              j=100000
            }
            
  
  if (flag==false) {ruralesfiltro.push(centros[i])}         
}}
    
    callback({urbanos:centrosfiltro,rurales:ruralesfiltro})
  
  }
var ppa={
  codcne: "130101001",
direccioncentro: "SECTOR LAS CLAVELLINAS DERECHA CALLE MERCAL. IZQUIERDA CALLE FERRETERIA. FRENTE CARRETERA LAS CLAVELLINAS AL FRENTE DEL POLIDEPORTIVO LAS TOMUZAS EDIFICIO"
,electores: 4655
,id: 10038
,lat: 10.28514
,lng: -66.37777
,mesas: 5
,nombrecentro: "(***) UNIDAD EDUCATIVA ROSCIO"
,nulos: "214"
,oficialismo: "1144"
,otros: "73"
,unidad: "1549"
,votos: "2980"
}
//http://politicaconsentido.blogspot.com/2020/07/matematicas-electorales.html
//https://www.laiguana.tv/articulos/762561-nuevo-sistema-electoral-voto-lista-asamblea-nacional/
//https://oevenezolano.org/2020/07/boletin-45-7-claves-sobre-la-norma-especial-de-las-elecciones-parlamentarias/