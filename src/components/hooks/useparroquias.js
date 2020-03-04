import { useState ,useEffect} from "react";
 export const useParroquias = initialParroquiasGeoJson => {
  const [geojson, setGeoJson] = useState(initialParroquiasGeoJson);
 // const [personas, setPersonas] = useState([]);
  const [parroquiasgeojson, setParroquiasGeoJson] = useState(initialParroquiasGeoJson);
  const [parroquias0a25porc, setParroquias0a25porc] = useState({"type":"FeatureCollection","features":[]   });
  const [parroquias25a50porc, setParroquias25a50porc] = useState({"type":"FeatureCollection","features":[]   });
  const [parroquias50a75porc, setParroquias50a75porc] = useState({"type":"FeatureCollection","features":[]   });
  const [parroquias75a100porc, setParroquias75a100porc] = useState({"type":"FeatureCollection","features":[]   });
  
  useEffect(() => {
  var f0=[]
  var f1=[]
  var f2=[]
  var f3=[]
  var i=0
   parroquiasgeojson.features.map((f,j)=>{  
       if (i==0){             
           f0.push(f)
       }
       if (i==1){             
          f1.push(f)
       }
       if (i==2){             
        f2.push(f)
       }
       if (i==3){             
        f3.push(f)
       }
         i=i+1;
         if (i>=4)i=0
   } 
   )  
    //alert("use feture"+JSON.stringify(f0))    
    console.log(f0)
    setParroquias0a25porc({"type":"FeatureCollection","features":f0   })
    setParroquias25a50porc({"type":"FeatureCollection","features":f1   })
    setParroquias50a75porc({"type":"FeatureCollection","features":f2   })
    setParroquias75a100porc({"type":"FeatureCollection","features":f3   })
  },[parroquiasgeojson]);
  //alert(JSON.stringify(initialRoles))//
//  const handleKpiDay = async (kpi) => {
//   setKpi(kpi)
//}
const handleParroquiasGeoJson = async (parroquias) => {
    setParroquiasGeoJson(parroquias)
  // alert("useeeeee Handle"+JSON.stringify(parroquias))
   //setGeoJson({aaa:1}) 
   //setPersonas(personas)
 }
  

  return [
    parroquias0a25porc,parroquias25a50porc,parroquias50a75porc,parroquias75a100porc,handleParroquiasGeoJson
    
  ];
};
