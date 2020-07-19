//import {inside, points,polygon,pointsWithinPolygon} from '@turf/turf';

import {pointInPolygon} from '../../helpers/helperpolygons'
import {CIUDADESGEO} from '../../../data/ciudadesgeo.json';

export  const analisiscentros=(centros,callback)=>{
//    alert(JSON.stringify(centros))
    var resultado = {electores:0,centros:0,mesas:0,porcurbanos:0,centrosurbanos:0, centrosrurales:0,porcrurales:0,votos:0,unidad:0,oficialismo:0,otros:0,nulos:0,porcunidad:0,porcoficialismo:0,participacion:0};
    var urbanosfiltro=[]
    var ruralesfiltro=[]
    var retorno=[]
    // var numbers = [65, 44, 12, 4];
    //var poin = point([-66,10]); 
   // alert(JSON.stringify(poin))
    centros.forEach(myFunction);
    
    function myFunction(item) {
      resultado.electores+=item.electores*1;
      resultado.centros+=1;
      resultado.mesas+=item.mesas*1
      resultado.votos+=item.votos*1
      resultado.unidad+=item.unidad*1;
      resultado.oficialismo+=item.oficialismo*1;
      resultado.otros+=item.otros*1
      resultado.nulos+=item.nulos*1
      //document.getElementById("demo").innerHTML = sum;
    }
    resultado.porcunidad=(resultado.unidad/(resultado.unidad+resultado.oficialismo)*100.0).toFixed(2)
    resultado.porcoficialismo=resultado.oficialismo/(resultado.unidad+resultado.oficialismo)*100.0
    resultado.participacion=0.0
    if ((resultado.votos>0)&&(resultado.electores>0)){
       resultado.participacion=(resultado.votos/resultado.electores*100.0).toFixed(2)
    }

    for (var i = 0; i < centros.length; i++) {
      var flag=false
      
    
      for (var j = 0; j < CIUDADESGEO.features.length; j++) {
    
         
                var poly=CIUDADESGEO.features[j].geometry
                var p={"type":"Point","coordinates":[centros[i].lng,centros[i].lat]}
               // console.log(pointInPolygon(p,poly))
                if (pointInPolygon(p,poly)){
                 // console.log(CIUDADESGEO.features[j].properties.nombre)
                 urbanosfiltro.push(centros[i])
                  flag=true
                  //j=100000
                }
                
              }  
      if (flag==false) {ruralesfiltro.push(centros[i])}  
      

    }
    const  featurescentrosjson=urbanosfiltro.map(o=>{               
              return(
                {
                  "type":"Feature",
                  "properties":{"nombre":o.nombrecentro,"codcne":o.codcne,"correo":o.correo,},                             
                  "geometry":{"type":"Point","coordinates":[o.lng,o.lat]
                  }
                }
                )     
               }) 
               let urbanosjson={"type":"FeatureCollection","features":featurescentrosjson }
               const  featuresruralesjson=ruralesfiltro.map(o=>{               
                return(
                  {
                    "type":"Feature",
                    "properties":{"nombre":o.nombrecentro,"codcne":o.codcne,"correo":o.correo,},                             
                    "geometry":{"type":"Point","coordinates":[o.lng,o.lat]
                    }
                  }
                  )     
                 }) 
                 let ruralesjson={"type":"FeatureCollection","features":featuresruralesjson }
   // console.log(urbanosfiltro.length)
   // console.log(ruralesfiltro.length)
  
   // console.log(JSON.stringify(featurescentrosjson))
    resultado.centrosurbanos=urbanosfiltro.length
    resultado.centrosrurales=ruralesfiltro.length
   resultado.porcrurales=((ruralesfiltro.length/(ruralesfiltro.length+urbanosfiltro.length))*100.0).toFixed(2)
   resultado.porcurbanos=((urbanosfiltro.length/(ruralesfiltro.length+urbanosfiltro.length))*100.0).toFixed(2)
  
   retorno.push(resultado)
    retorno.push(urbanosjson)
    retorno.push(ruralesjson)
    callback(retorno)
  
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
//https://www.laiguana.tv/articulos/762561-nuevo-sistema-electoral-voto-lista-asamblea-nacional/
//https://oevenezolano.org/2020/07/boletin-45-7-claves-sobre-la-norma-especial-de-las-elecciones-parlamentarias/