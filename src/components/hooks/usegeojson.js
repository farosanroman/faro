import { useState ,useEffect} from "react";
 export const useGeoJson = initialGeoJson => {
  const [geojson, setGeoJson] = useState(initialGeoJson);
  const [personas, setPersonas] = useState([]);
  const [parroquias, setParroquias] = useState(initialGeoJson);
  
//   //const [kpifiltro, setKpiFiltro] = useState(initialKPI);
//   const [kpicant,setKpiCant]=useState(0)
//   const [kpi2G, setKpi2G] = useState({"type":"FeatureCollection","features":[] });
//   const [kpi3G, setKpi3G] = useState({"type":"FeatureCollection","features":[] });
//   const [kpi4G, setKpi4G] = useState({"type":"FeatureCollection","features":[] });
//   const [kpiRuta, setKpiRuta] = useState({"type":"FeatureCollection","features":[] });

//   const[criterio,setCriterio]=useState({"G2G":true,"G3G":true,"G4G":true})
  useEffect(() => {

const personasjson=personas.map(p=>{               
      return(
        {
          "type":"Feature",
          "properties":{"nombre":p.nombre1+" "+p.apellido1,"codcne":"","correo":"p.correo"},                             
          "geometry":{"type":"Point","coordinates":[p.re[0].lng,p.re[0].lat]
          }
        }
    )  } )  
    //alert("use useEffect nnnnnnnnnnn"+JSON.stringify(personasjson))    
    setGeoJson({"type":"FeatureCollection","features":personasjson   })
    //     var f2=[]
//     var f3=[]
//     var f4=[]
//     var ru=[]
//     //alert("pki "+JSON.stringify(kpi.features))
//      if (kpi.features!=undefined){
//       var f = kpi.features.map((feature, i) => {
//        // alert("pki "+JSON.stringify(feature))
//       //  if (index.indexOf(r.idfuncional) ==-1) {  
//      //     alert(feature.properties.mobilegeneration)
//      //console.log(i+" "+JSON.stringify(criterio))
//         if ((feature.properties.mobilegeneration=="2G")&&(criterio.G2G)){ 
//            f2.push(feature)
//         }
//         if ((feature.properties.mobilegeneration=="3G")&&(criterio.G3G)){ 
//             f3.push(feature)
//          }
//          if ((feature.properties.mobilegeneration=="4G")&&(criterio.G4G)){ 
//             f4.push(feature)
//          }
//           ru.push(feature.geometry.coordinates)
//        });
//         setKpiRuta({"type":"FeatureCollection","features":[
//          {
//             "type": "Feature",
//             "properties": {
              
//               "marker-symbol": "telephone"
//             },
//             "geometry": {
//               "type": "LineString",
//               "coordinates": ru
//             }
//          }
//         ]
//         }
        
//         )
//         console.log(JSON.stringify(kpiRuta))
//        setKpi2G({"type":"FeatureCollection","features":f2 });
//        setKpi3G({"type":"FeatureCollection","features":f3});;
//        setKpi4G({"type":"FeatureCollection","features":f4});
//        setKpiCant(kpi.length)
//    }
  },[personas]);
  //alert(JSON.stringify(initialRoles))//
//  const handleKpiDay = async (kpi) => {
//   setKpi(kpi)
//}
const handleGeoJson = async (personas) => {
   //alert("use Handle"+JSON.stringify(personas))
   setGeoJson({aaa:1}) 
   setPersonas(personas)
 }
  

  return [
   geojson,handleGeoJson
    
  ];
};
