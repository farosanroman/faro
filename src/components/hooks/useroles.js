import { useState ,useEffect} from "react";

 export const useRoles = initialRoles => {
  const [roles, setRoles] = useState(initialRoles);

  const [funcionales, setFuncionales] = useState([]);
  const [funcionalesfiltrados, setFuncionalesFiltrados] = useState([]);
  const [rolesfiltrados, setRolesFiltrados] = useState([]);
  
  useEffect(() => {

    var index=[]
    var func=[]
      var f = roles.map((r, i) => {
        if (index.indexOf(r.idfuncional) ==-1) {  
      //      alert(r.idfuncional)
             index.push(r.idfuncional)
             func.push({"idfuncional":r.idfuncional,"funcional":r.funcional})
         //    return {"idfuncional":r.idfuncional,"funcional":r.funcional}
        }
       });
       ///        var pos=roles.findIndex(obj => obj.id==e.target.value);
     setFuncionales(func) 
  },[]);
  //alert(JSON.stringify(initialRoles))
  const handleFiltro = async (idfuncional) => {
  var ff=roles.filter(r => r.idfuncional == idfuncional )
  setRolesFiltrados(roles.filter(r => r.idfuncional == idfuncional ))
  }
  return [
    rolesfiltrados,funcionales,
    handleFiltro
 
  ];
};
