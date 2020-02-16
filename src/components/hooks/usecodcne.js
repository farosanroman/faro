import { useState ,useEffect} from "react";

 export const useCODCNE = initialCodes => {
  const [codcne, setCodcne] = useState(initialCodes);
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [parroquias, setParroquias] = useState([]);
  
  useEffect(() => {
     
    var ee=codcne.map((e, index) => {
       
       return {idestado:e.cneestado,estado:e.name}
        //<MenuItem value={item.cneestado}>{item.name}</MenuItem>
  } );
  setEstados(ee)
  //alert(JSON.stringify(ee))
    
  },[]);
  //alert(JSON.stringify(initialRoles))
  const handleCODCNE = async (cod) => {
     // alert("handle "+cod)
  var indexE = estados.findIndex(obj => obj.idestado==cod.substr(0,2)+"0000");
  //alert(indexE)
   var mm=codcne[indexE].items.map((e, index) => {
       return {idmunicipio:e.cnemunicipio,municipio:e.name}
    } );
   // alert(JSON.stringify(mm))
    setMunicipios(mm)
    var indexM = mm.findIndex(obj => obj.idmunicipio==cod.substr(0,4)+"00");
    var pp=[]
    if (indexM>-1){
        pp=codcne[indexE].items[indexM].items.map((p, index) => {
            return {idparroquia:p.cneparroquia,parroquia:p.name}
        })
    }      
   // alert(JSON.stringify(pp))
    setParroquias(pp)      
   }
  return [
    estados,municipios,parroquias,
    handleCODCNE
 
  ];
};
