//import {inside, points,polygon,pointsWithinPolygon} from '@turf/turf';

import {pointInPolygon} from '../../helpers/helperpolygons'
import {CIUDADESGEO} from '../../../data/ciudadesgeo.json';

export  const analisiscentros=(centros,callback)=>{
//    alert(JSON.stringify(centros))
   
    var urbanosfiltro=[]
    var ruralesfiltro=[]
    var retorno=[]
    // var numbers = [65, 44, 12, 4];
    //var poin = point([-66,10]); 
   // alert(JSON.stringify(poin))

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

    var resultadototal=calculos(centros) 
    var resultadourbanos=calculos(urbanosfiltro) 
    var resultadorurales=calculos(ruralesfiltro) 
  resultadototal.porcurbanos=((urbanosfiltro.length/(ruralesfiltro.length+urbanosfiltro.length))*100.0).toFixed(2)
  resultadourbanos.porcurbanos=100
  resultadorurales.porcurbanos=0
//    alert(JSON.stringify(resultado))
    //urbanosfiltro.forEach(myFunction);
  //  alert(JSON.stringify(resultado))
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

   retorno.push(resultadototal)
   retorno.push(resultadourbanos)
   retorno.push(resultadorurales)
   
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

const calculos=(centros)=>{
  var resultado = {electores:0,centros:0,mesas:0,porcurbanos:0,centrosurbanos:0, centrosrurales:0,porcrurales:0,votos:0,unidad:0,oficialismo:0,otros:0,nulos:0,porcunidad:0,porcoficialismo:0,participacion:0};
    
  for (var i = 0; i < centros.length; i++) {
    var item=centros[i]
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


  
  return resultado
}

var pp= {
  "id": 369432,
  "FechaAsignado": "2018-11-23T14:24:11.813Z",
  "idnodoorganizacional": 5298,
  "codcne": "050502010",
  "muestra": 1,
  "E": 5,
  "RE": "050702001",
  "nombre": "(***) ESCUELA BASICA ESTADAL CONCENTRADA EL ROBLECITO",
  "estado": "BARINAS",
  "municipio": "OBISPOS",
  "parroquia": "LA LUZ",
  "idrol": 247,
  "rol": "Testigo Electoral",
  "identificacion": "V8139366",
  "nombre1": "YLDEGAR",
  "nombre2": "JOSE",
  "apellido1": "CECILIO",
  "evaluacion": "",
  "idpartido": 0,
  "descripcion": null,
  "facilitador": "",
  "celular": "04245299871",
  "correo": "constructorapuntabrava@gmail.com",
  "sexo": "0",
  "fechanac": "1960-11-09",
  "edad": 58,
  "cvcodcne": "050702001",
  "cvestado": "BARINAS",
  "cvmunicipio": "ROJAS",
  "cvparroquia": "LIBERTAD",
  "cvcentro": "ESCUELA BASICA LUIS UGUETO",
  "lng": -69.63098,
  "lat": 8.327147,
  "cuenta": ""
}