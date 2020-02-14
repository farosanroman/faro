import { useState ,useEffect} from "react";

 export const useRoles = initialRoles => {
  
  const [funcionales, setFuncionales] = useState([]);
  const [funcionalesfiltrados, setFuncionalesFiltrados] = useState([]);
  const [roles, setRoles] = useState(initialRoles);
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
  // alert(idfuncional)
   
  
  var ff=roles.filter(r => r.idfuncional == idfuncional )

  
   setRolesFiltrados(roles.filter(r => r.idfuncional == idfuncional ))
  //alert(JSON.stringify(initialRoles))
  
  }
  return [
    rolesfiltrados,funcionales,
    handleFiltro
 
  ];
};
var initialfuncionales=
[
  {"idfuncional":9,"funcional":"Formacion"},
  {"idfuncional":10,"funcional":"Activismo"},
  {"idfuncional":11,"funcional":"Observacion"},
  {"idfuncional":12,"funcional":"Conteo Rapido"},
]
var initialRoles=[
  {
    "idrol": "48",
    "rol": "Soporte Tecnología de Información",
    "descripcion": "Soporte Tecnología de Información",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "150",
    "rol": "Coordinador Electoral",
    "descripcion": "Coordinador Electoral",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "151",
    "rol": "Coordinador de Activismo",
    "descripcion": "Coordinador de Activismo",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "152",
    "rol": "Coordinador De Comunicaciones Y Medios",
    "descripcion": "Coordinador De Comunicaciones Y Medios",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "153",
    "rol": "Responsable de Formación",
    "descripcion": "Responsable de Formación",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "154",
    "rol": "Responsable de Miembros de Mesa",
    "descripcion": "Responsable de Miembros de Mesa",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "156",
    "rol": "Testigo ante Junta Electoral",
    "descripcion": "Testigo ante Junta Electoral",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "157",
    "rol": "Jefe De Comando",
    "descripcion": "Jefe De Comando",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "158",
    "rol": "Enlace GTAE",
    "descripcion": "Enlace GTAE",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "168",
    "rol": "Lider de Conteo Rápido",
    "descripcion": "Lider de Conteo Rápido",
    "nidedesderol": "1",
    "nivelhastarol": "1",
    "idfuncional": "1031",
    "funcional": "Conteo Rapido",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "1"
  },
  {
    "idrol": "170",
    "rol": "Operador de Conteo Rápido",
    "descripcion": "Operador de Conteo Rápido",
    "nidedesderol": "1",
    "nivelhastarol": "1",
    "idfuncional": "1031",
    "funcional": "Conteo Rapido",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "1"
  },
  {
    "idrol": "222",
    "rol": "Soporte de Conteo Rápido",
    "descripcion": "Soporte de Conteo Rápido",
    "nidedesderol": "1",
    "nivelhastarol": "1",
    "idfuncional": "1031",
    "funcional": "Conteo Rapido",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "1"
  },
  {
    "idrol": "223",
    "rol": "Coordinador de Movilizacion",
    "descripcion": "Coordinador de Movilizacion",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "224",
    "rol": "Responsable del Padrón Electoral",
    "descripcion": "Responsable del Padrón Electoral",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "225",
    "rol": "Enlace ante ORE - CNE",
    "descripcion": "Enlace ante ORE - CNE",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "226",
    "rol": "Enlace Plan Republica",
    "descripcion": "Enlace Plan Republica",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "227",
    "rol": "Transcriptor",
    "descripcion": "Transcriptor",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "9",
    "funcional": "Comando",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "7"
  },
  {
    "idrol": "229",
    "rol": "Formador Nacional",
    "descripcion": "Formador Nacional",
    "nidedesderol": "1",
    "nivelhastarol": "1",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  },
  {
    "idrol": "230",
    "rol": "Activista",
    "descripcion": "Activista",
    "nidedesderol": "11",
    "nivelhastarol": "11",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  },
  {
    "idrol": "231",
    "rol": "Testigo Formado",
    "descripcion": "Testigo Formado",
    "nidedesderol": "11",
    "nivelhastarol": "11",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  },
  {
    "idrol": "232",
    "rol": "Coordinador Formación",
    "descripcion": "Coordinador Formación",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  },
  {
    "idrol": "242",
    "rol": "Soporte Electoral",
    "descripcion": "Soporte Electoral",
    "nidedesderol": "1",
    "nivelhastarol": "3",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  },
  {
    "idrol": "243",
    "rol": "Transcriptor",
    "descripcion": "Transcriptor",
    "nidedesderol": "1",
    "nivelhastarol": "3",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  },
  {
    "idrol": "244",
    "rol": "Facilitador",
    "descripcion": "Facilitador",
    "nidedesderol": "3",
    "nivelhastarol": "7",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  },
  {
    "idrol": "245",
    "rol": "Coordinador de Centro de Votacion",
    "descripcion": "Coordinador de Centro de Votacion",
    "nidedesderol": "11",
    "nivelhastarol": "11",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  },
  {
    "idrol": "247",
    "rol": "Coordinador Electoral",
    "descripcion": "Coordinador Electoral",
    "nidedesderol": "1",
    "nivelhastarol": "7",
    "idfuncional": "1038",
    "funcional": "Formación",
    "niveldesdefuncional": "1",
    "nivelhastafuncional": "12"
  }
]
var initialRoles2=
[
  {
    "id": 48,
    "nombre": "Soporte Tecnología de Información",
    "descripcion": "Soporte Tecnología de Información",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 150,
    "nombre": "Coordinador Electoral",
    "descripcion": "Coordinador Electoral",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 151,
    "nombre": "Coordinador de Activismo",
    "descripcion": "Coordinador de Activismo",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 152,
    "nombre": "Coordinador De Comunicaciones Y Medios",
    "descripcion": "Coordinador De Comunicaciones Y Medios",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 153,
    "nombre": "Responsable de Formación",
    "descripcion": "Responsable de Formación",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 154,
    "nombre": "Responsable de Miembros de Mesa",
    "descripcion": "Responsable de Miembros de Mesa",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 156,
    "nombre": "Testigo ante Junta Electoral",
    "descripcion": "Testigo ante Junta Electoral",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 157,
    "nombre": "Jefe De Comando",
    "descripcion": "Jefe De Comando",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 158,
    "nombre": "Enlace GTAE",
    "descripcion": "Enlace GTAE",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 168,
    "nombre": "Lider de Conteo Rápido",
    "descripcion": "Lider de Conteo Rápido",
    "niveldesde": 1,
    "nivelhasta": 1,
    "idnodofuncional": 1031,
    "selected": true
  },
  {
    "id": 170,
    "nombre": "Operador de Conteo Rápido",
    "descripcion": "Operador de Conteo Rápido",
    "niveldesde": 1,
    "nivelhasta": 1,
    "idnodofuncional": 1031,
    "selected": true
  },
  {
    "id": 222,
    "nombre": "Soporte de Conteo Rápido",
    "descripcion": "Soporte de Conteo Rápido",
    "niveldesde": 1,
    "nivelhasta": 1,
    "idnodofuncional": 1031,
    "selected": true
  },
  {
    "id": 223,
    "nombre": "Coordinador de Movilizacion",
    "descripcion": "Coordinador de Movilizacion",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 224,
    "nombre": "Responsable del Padrón Electoral",
    "descripcion": "Responsable del Padrón Electoral",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 225,
    "nombre": "Enlace ante ORE - CNE",
    "descripcion": "Enlace ante ORE - CNE",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 226,
    "nombre": "Enlace Plan Republica",
    "descripcion": "Enlace Plan Republica",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 227,
    "nombre": "Transcriptor",
    "descripcion": "Transcriptor",
    "niveldesde": 1,
    "nivelhasta": 7,
    "idnodofuncional": 9,
    "selected": true
  },
  {
    "id": 229,
    "nombre": "Formadores Nacionales",
    "descripcion": "Formadores Nacionales",
    "niveldesde": 1,
    "nivelhasta": 1,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 230,
    "nombre": "Enlaces Formacion UCAB",
    "descripcion": "Enlaces Formacion UCAB",
    "niveldesde": 3,
    "nivelhasta": 3,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 231,
    "nombre": "Facilitadores",
    "descripcion": "Facilitadores",
    "niveldesde": 3,
    "nivelhasta": 7,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 232,
    "nombre": "Observador",
    "descripcion": "Observador",
    "niveldesde": 1,
    "nivelhasta": 11,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 242,
    "nombre": "Soporte Formacion",
    "descripcion": "Soporte Formacion",
    "niveldesde": 1,
    "nivelhasta": 12,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 243,
    "nombre": "Transcriptor Formacion",
    "descripcion": "Transcriptor Formacion",
    "niveldesde": 1,
    "nivelhasta": 11,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 244,
    "nombre": "Facilitador Inactivo",
    "descripcion": "Facilitador Inactivo",
    "niveldesde": 3,
    "nivelhasta": 3,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 245,
    "nombre": "Observador Inactivo",
    "descripcion": "Observador Inactivo",
    "niveldesde": 3,
    "nivelhasta": 3,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 246,
    "nombre": " Coordinador de Partido",
    "descripcion": "Coordinador de Partido",
    "niveldesde": 3,
    "nivelhasta": 3,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 247,
    "nombre": "Observador 9D",
    "descripcion": "Observador 9D",
    "niveldesde": 11,
    "nivelhasta": 11,
    "idnodofuncional": 1038,
    "selected": true
  },
  {
    "id": 253,
    "nombre": "Elector",
    "descripcion": "Elector",
    "niveldesde": 11,
    "nivelhasta": 11,
    "idnodofuncional": 1038,
    "selected": true
  }
 ]
var initialRoles2=
[
    {
      "id": 48,
      "nombre": "Soporte Tecnología de Información",
      "descripcion": "Soporte Tecnología de Información",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 150,
      "nombre": "Coordinador Electoral",
      "descripcion": "Coordinador Electoral",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 151,
      "nombre": "Coordinador de Activismo",
      "descripcion": "Coordinador de Activismo",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 152,
      "nombre": "Coordinador De Comunicaciones Y Medios",
      "descripcion": "Coordinador De Comunicaciones Y Medios",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 153,
      "nombre": "Responsable de Formación",
      "descripcion": "Responsable de Formación",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 154,
      "nombre": "Responsable de Miembros de Mesa",
      "descripcion": "Responsable de Miembros de Mesa",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 156,
      "nombre": "Testigo ante Junta Electoral",
      "descripcion": "Testigo ante Junta Electoral",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 157,
      "nombre": "Jefe De Comando",
      "descripcion": "Jefe De Comando",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 158,
      "nombre": "Enlace GTAE",
      "descripcion": "Enlace GTAE",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 168,
      "nombre": "Lider de Conteo Rápido",
      "descripcion": "Lider de Conteo Rápido",
      "niveldesde": 1,
      "nivelhasta": 1,
      "idnodofuncional": 1031,
      "selected": true
    },
    {
      "id": 170,
      "nombre": "Operador de Conteo Rápido",
      "descripcion": "Operador de Conteo Rápido",
      "niveldesde": 1,
      "nivelhasta": 1,
      "idnodofuncional": 1031,
      "selected": true
    },
    {
      "id": 222,
      "nombre": "Soporte de Conteo Rápido",
      "descripcion": "Soporte de Conteo Rápido",
      "niveldesde": 1,
      "nivelhasta": 1,
      "idnodofuncional": 1031,
      "selected": true
    },
    {
      "id": 223,
      "nombre": "Coordinador de Movilizacion",
      "descripcion": "Coordinador de Movilizacion",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 224,
      "nombre": "Responsable del Padrón Electoral",
      "descripcion": "Responsable del Padrón Electoral",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 225,
      "nombre": "Enlace ante ORE - CNE",
      "descripcion": "Enlace ante ORE - CNE",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 226,
      "nombre": "Enlace Plan Republica",
      "descripcion": "Enlace Plan Republica",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 227,
      "nombre": "Transcriptor",
      "descripcion": "Transcriptor",
      "niveldesde": 1,
      "nivelhasta": 7,
      "idnodofuncional": 9,
      "selected": true
    },
    {
      "id": 229,
      "nombre": "Formadores Nacionales",
      "descripcion": "Formadores Nacionales",
      "niveldesde": 1,
      "nivelhasta": 1,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 230,
      "nombre": "Enlaces Formacion UCAB",
      "descripcion": "Enlaces Formacion UCAB",
      "niveldesde": 3,
      "nivelhasta": 3,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 231,
      "nombre": "Facilitadores",
      "descripcion": "Facilitadores",
      "niveldesde": 3,
      "nivelhasta": 7,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 232,
      "nombre": "Observador",
      "descripcion": "Observador",
      "niveldesde": 1,
      "nivelhasta": 11,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 242,
      "nombre": "Soporte Formacion",
      "descripcion": "Soporte Formacion",
      "niveldesde": 1,
      "nivelhasta": 12,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 243,
      "nombre": "Transcriptor Formacion",
      "descripcion": "Transcriptor Formacion",
      "niveldesde": 1,
      "nivelhasta": 11,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 244,
      "nombre": "Facilitador Inactivo",
      "descripcion": "Facilitador Inactivo",
      "niveldesde": 3,
      "nivelhasta": 3,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 245,
      "nombre": "Observador Inactivo",
      "descripcion": "Observador Inactivo",
      "niveldesde": 3,
      "nivelhasta": 3,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 246,
      "nombre": " Coordinador de Partido",
      "descripcion": "Coordinador de Partido",
      "niveldesde": 3,
      "nivelhasta": 3,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 247,
      "nombre": "Observador 9D",
      "descripcion": "Observador 9D",
      "niveldesde": 11,
      "nivelhasta": 11,
      "idnodofuncional": 1038,
      "selected": true
    },
    {
      "id": 253,
      "nombre": "Elector",
      "descripcion": "Elector",
      "niveldesde": 11,
      "nivelhasta": 11,
      "idnodofuncional": 1038,
      "selected": true
    }
   ]
//  const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });