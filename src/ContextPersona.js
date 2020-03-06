//https://itnext.io/how-to-create-react-custom-hooks-for-data-fetching-with-useeffect-74c5dc47000a
//https://react-tracked.js.org/docs/introduction   WAO LO MEJOR QUE HE VISTO useReducer y useContext
export const defaultState = {
   
    flagLogin:false,
   loginauth:{uid:"0",name:"",photoURL:"",email:"",phone:"",cedula:"",lat:0,lng:0},
    persona:
    {
      "id":"jsonlite",
        "flag": 1,
        "msj": "",
        "flagasignacion": 1,
        "nombre1": "",
        "nombre2": "",
        "apellido1": "",
        "apellido2": "",
        "identificacion": "",
      
        "idnacionalidad": 0,
        "nacionalidad": "",
        "idpaisnacimiento": 0,
        "paisnacimiento": "",
        "idestadocivil": 0,
        "estadocivil": "",
        "idsexo": 0,
        "sexo": "",
    
        "fechanacimientovar": "12/01/1953",
        "fechanacimientojson": "1953-01-12T00:00:00.000Z",
        "idtipopersona": 25,
        "tipopersona": "",
        "idprofesion": 40,
        "profesion": "SIN ASIGNAR",
        "idocupacion": 0,
        "ocupacion": "",
        "idcaracteristicaopcion": 7,
        "re": [
          {
            "idrespuesta": "RE",
            "respuesta": "RE",
            "codcne": "",
            "descripcion": "",
            "codcnenombre": "",
            "lat": -66.86699,
            "lng": 10.48358,
            "idestado": "",
            "idmunicipio": "",
            "idparroquia": "",
            "idcircunscripcion": "",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "",
            "direccioncentrovotacion":"",
      
          }
        ],
        "direcciones": [
          {
            "idpregunta":"xxx",
            "pregunta":"pregunta",
            "idrespuesta": "TC",
            "respuesta": "TELEFONO CELULAR",
            "codcne": "",
            "descripcion": "",
            "codcnenombre": "",
            "idfuncional": "",
            "funcionalnombre": "",
            "lat": 0,
            "lng": 0,
            "idestado": "",
            "idmunicipio": "",
            "idparroquia": "",
            "idcircunscripcion": "",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "",
            "texto": "04124444444"
          },
          {
            "idpregunta":"xxx",
            "pregunta":"pregunta",

            "idrespuesta": "EM",
            "respuesta": "EMAIL",
            "codcne": "",
            "descripcion": "",
            "codcnenombre": "",
            "idfuncional": "",
            "funcionalnombre": "",
            "lat": 0,
            "lng": 0,
            "idestado": "",
            "idmunicipio": "",
            "idparroquia": "",
            "idcircunscripcion": "",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "",
            "texto": "ppazpurua@gmail.com"
          },
          {
            "idpregunta":"xxx",
            "pregunta":"pregunta",

            "idrespuesta": "TW",
            "respuesta": "Twitter",
            "codcne": "",
            "descripcion": "",
            "codcnenombre": "",
            "idfuncional": "",
            "funcionalnombre": "",
            "lat": 0,
            "lng": 0,
            "idestado": "",
            "idmunicipio": "",
            "idparroquia": "",
            "idcircunscripcion": "",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "",
            "texto": "@mitwitter"
          }
        ],
        "roles": [
          {
            "idpregunta":"xxx",
            "pregunta":"pregunta",

            "idrespuesta": "242",
            "respuesta": "Soporte Electoral",
            "codcne": "00000000000",
            "descripcion": "Soporte Electoral",
            "codcnenombre": "",
            "idfuncional": "1038",
            "funcionalnombre": "Formación",
            "lat": -66.47,
            "lng": 9.09,
            "idestado": "00",
            "idmunicipio": "00",
            "idparroquia": "00",
            "idcircunscripcion": "0",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "VENEZUELA"
            
          }
        ],
        "caracteristicas": [
          {
            "idpregunta":"xxx",
            "pregunta":"pregunta",

            "idrespuesta": "000",
            "respuesta": "ADDD",
            "codcne": "00000000000",
            "descripcion": "Soporte Electoral",
            "codcnenombre": "",
            "idfuncional": "1038",
            "funcionalnombre": "Formación",
            "lat": -66.47,
            "lng": 9.09,
            "idestado": "00",
            "idmunicipio": "00",
            "idparroquia": "00",
            "idcircunscripcion": "0",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "VENEZUELA"
            
          },
          {
            "idpregunta":"xxx",
            "pregunta":"pregunta",

            "idrespuesta": "000",
            "respuesta": "ADDD",
            "codcne": "00000000000",
            "descripcion": "Soporte Electoral",
            "codcnenombre": "",
            "idfuncional": "1038",
            "funcionalnombre": "Formación",
            "lat": -66.47,
            "lng": 9.09,
            "idestado": "00",
            "idmunicipio": "00",
            "idparroquia": "00",
            "idcircunscripcion": "0",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "VENEZUELA"
            
          },
          {
            "idpregunta":"xxx",
            "pregunta":"pregunta",

            "idrespuesta": "000",
            "respuesta": "ADDD",
            "codcne": "00000000000",
            "descripcion": "Soporte Electoral",
            "codcnenombre": "",
            "idfuncional": "1038",
            "funcionalnombre": "Formación",
            "lat": -66.47,
            "lng": 9.09,
            "idestado": "00",
            "idmunicipio": "00",
            "idparroquia": "00",
            "idcircunscripcion": "0",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "VENEZUELA"
            
          },
          {
            "idpregunta":"xxx",
            "pregunta":"pregunta",

            "idrespuesta": "000",
            "respuesta": "ADDD",
            "codcne": "00000000000",
            "descripcion": "Soporte Electoral",
            "codcnenombre": "",
            "idfuncional": "1038",
            "funcionalnombre": "Formación",
            "lat": -66.47,
            "lng": 9.09,
            "idestado": "00",
            "idmunicipio": "00",
            "idparroquia": "00",
            "idcircunscripcion": "0",
            "estadonombre": "",
            "municipionombre": "",
            "parroquianombre": "",
            "circunscripcionnombre": "",
            "centronombre": "VENEZUELA"
            
          }
        ]
      }    
    };
  
  export const reducer = (statep = defaultState, action) => {
   // alert(JSON.stringify(statep))
      const { type, stateprop } = action;
      switch (type) {
        case 'PERSONA':
     
         // let persona0=statep.persona
         // persona0.identificacion=stateprop
       //  alert("REDUCER "+JSON.stringify(stateprop.caracteristicas))
         return { ...statep, persona: stateprop };
         case 'ROLES':
          //  alert("qqqq")
         // alert("REDUCE stateprop "+JSON.stringify(stateprop))
           // let persona0=statep.persona
           // persona0.identificacion=stateprop
            let persona2=statep.persona
             persona2.roles=stateprop
          return { ...statep, persona: persona2 };
         case 'CARACTERISTICAS':
         // alert("cccc")
        // alert("stateprop "+JSON.stringify(stateprop))
         // let persona0=statep.persona
         // persona0.identificacion=stateprop
          let persona0=statep.persona
           persona0.caracteristicas=stateprop
        return { ...statep, persona: persona0 };
         
         case 'FLAGLOGIN':
         // alert("REDUCER2 "+JSON.stringify(statep.persona.caracteristicas))

         return { ...statep, flagLogin: stateprop };
         case 'LOGINAUTH':
         //alert("REDUCER2 "+JSON.stringify(statep.persona.caracteristicas))

         return { ...statep, loginauth: stateprop };

         case 'CEDULA':
       // alert("CEDULA")
        // alert(JSON.stringify(stateprop))
        
         let persona1=statep.persona
         persona1.identificacion=stateprop
        // alert("PPA"+JSON.stringify(statep))
        return { ...statep, persona: persona1 };
   
     
       
        case 'RESET':
          window.localStorage.removeItem('contextpersona');
          return { ...statep, currentWeight: null };
    
        default:
          return statep;
      }
    };
  