import {inside, points,polygon,pointsWithinPolygon} from '@turf/turf';
import { greatCircle, point,circle } from '@turf/turf';
export  const analisiscentros=(centros,callback)=>{
//    alert(JSON.stringify(centros))
    var resultado = {electores:0,centros:0,mesas:0,votos:0,unidad:0,oficialismo:0,otros:0,nulos:0,porcunidad:0,porcoficialismo:0,participacion:0};
    // var numbers = [65, 44, 12, 4];
    var poin = point([-66,10]); 
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
    resultado.porcunidad=resultado.unidad/(resultado.unidad+resultado.oficialismo)*100.0
    resultado.porcoficialismo=resultado.oficialismo/(resultado.unidad+resultado.oficialismo)*100.0
    resultado.participacion=0.0
    if ((resultado.votos>0)&&(resultado.electores>0)){
    resultado.participacion=resultado.votos/resultado.electores*100.0
    }
    callback(resultado)
  
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