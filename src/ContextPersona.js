//https://itnext.io/how-to-create-react-custom-hooks-for-data-fetching-with-useeffect-74c5dc47000a
//https://react-tracked.js.org/docs/introduction   WAO LO MEJOR QUE HE VISTO useReducer y useContext
export const defaultState = {
   
    flagLogin:false,
   
    persona:
    {
        "flag": 1,
        "msj": "",
        "flagasignacion": 1,
        "nombre1": "PEDRO",
        "nombre2": "PABLO",
        "apellido1": "AZPURUA",
        "apellido2": "CALCAÑO",
        "identificacion": "V3664204",
        "codcnecentrovotacion": "13160100700",
        "nombrecentrovotacion": "COLEGIO SANTO TOMAS DE VILLANUEVA",
        "idestadocentrovotacion": "13",
        "nombreestadocentrovotacion": "MIRANDA",
        "idmunicipiocentrovotacion": "16",
        "nombremunicipiocentrovotacion": "BARUTA",
        "idparroquiacentrovotacion": "01",
        "nombreparroquiacentrovotacion": "BARUTA",
        "direccioncentrovotacion": "URBANIZACION LAS MERCEDES DERECHA CALLE LA CINTA. IZQUIERDA CALLE CERRO QUINTERO. FRENTE CALLE LA CINTA 50 METROS DE CAVIM EDIFICIO",
        "idnacionalidad": 243,
        "nacionalidad": "Uzbekistán",
        "idpaisnacimiento": 236,
        "paisnacimiento": "Uzbekistán",
        "idestadocivil": 0,
        "estadocivil": "",
        "idsexo": 0,
        "sexo": "",
        "idestatus": 1,
        "fechacreacionpersona": "2014/05/09",
        "fechacreacionpersonavar": "09/05/2014",
        "fechanacimiento": "1953/01/12",
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
            "codcne": "131601007",
            "descripcion": "",
            "codcnenombre": "",
            "lat": -66.86699,
            "lng": 10.48358,
            "idestado": "",
            "idmunicipio": "",
            "idparroquia": "",
            "idcircunscripcion": "",
            "estadonombre": "MIRANDA",
            "municipionombre": "BARUTA",
            "parroquianombre": "BARUTA",
            "circunscripcionnombre": "",
            "centronombre": ""
          }
        ],
        "direcciones": [
          {
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
        ]
      }    
    };
  
  export const reducer = (statep = defaultState, action) => {
   // alert(JSON.stringify(statep))
      const { type, stateprop } = action;
      switch (type) {
        case 'PERSONA':
        //  alert("qqqq")
        //  alert("stateprop "+JSON.stringify(stateprop))
         // let persona0=statep.persona
         // persona0.identificacion=stateprop
        //  alert("PPA"+JSON.stringify(statep))
         return { ...statep, persona: stateprop };
        case 'CEDULA':
       // alert("CEDULA")
        // alert(JSON.stringify(stateprop))
        
         let persona1=statep.persona
         persona1.identificacion=stateprop
        // alert("PPA"+JSON.stringify(statep))
        return { ...statep, persona: persona1 };
   
     
       
        case 'RESET':
          window.localStorage.removeItem('vinotinto');
          return { ...statep, currentWeight: null };
    
        default:
          return statep;
      }
    };
  