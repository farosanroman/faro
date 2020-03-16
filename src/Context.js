//https://itnext.io/how-to-create-react-custom-hooks-for-data-fetching-with-useeffect-74c5dc47000a
//https://react-tracked.js.org/docs/introduction   WAO LO MEJOR QUE HE VISTO useReducer y useContext
export const defaultState = {
   
    flagLogin:false,

    
    login:{id:"id",type:"login",name:"mister",photoURL:"https://image.shutterstock.com/image-vector/photo-camera-icon-260nw-197166461.jpg",email:"",phone:"",cedula:"",lat:0,lng:0,idorg:0,org:"",idfuncional:0,funcional:"",idrol:0,rol:"",codcne:"000000000"}, //FIREBASE AUTH
    geolocation:{country:"VE",countrylong:"VE",estado:"ES",municipio:"MU",municipiolong:"MUNICIPIO",ciudad:"VE",ciudadlong:"VE",urbanizacion:"URB",urbanizacionlong:"URB",ruta:"RUTA",rutalong:"RUTALONG",premisa:"PREMISA",premisalong:"PREMISALONG",postalcode:"postalcode"},
    position:{ latitude:9, longitude:-66, timestamp:0, accuracy:0, error:null },  //hook
    ///// GeoJSON

    funcionales:[
      {idfuncional:1,funcional:"Comando 2020","selected": true},
      {idfuncional:2,funcional:"Formacion","selected": false},
      {idfuncional:3,funcional:"Conteo Rapido","selected": false}
   ],
    organizacion:
    [
      {
        "id": 0,"nombre": "AD","descripcion": "Accion Democratica",
        "selected": true,
        value: 800
      },
      {
        "id": 1,"nombre": "PJ","descripcion": "Primero Justicia",
        "selected": true,
        value: 800
      },
      {
        "id": 2,"nombre": "VP","descripcion": "Voluntad Popular",
        "selected": true,
        value: 800
      }
      ,
      
      {
        "id": 3,"nombre": "UNT","descripcion": "Un Nuevo Tiempo",
        "selected": true,
        value: 800
      }
 
    ],
  
    roles:
    [
      {
        "id": 0,
        "nombre": "Testigo",
        "descripcion": "Accion Democratica",
        "selected": true,
        value: 800
      },
      {
        "id": 1,
        "nombre": "Facilitador",
        "descripcion": "Voluntad Popular",
        "selected": true,
        value: 400
      }
    ]
  ,


    lnglat:[-66.9188,10.508],
    zoom:[12],
    radio:3,
    /////
    asignacion:{},
    persona:{"identificacion":"","nombre1":"","nombre2":"","apellido1":"","apellido2":"","sexo":"","edad":"","fechanac":"","correo":"","telefono":"","estado":"","municipio":"","parroquia":"","codcne":"","nombre":"","accion":"","rol": "","direcciones":[],"roles":[] },
   
    rolespersonas:[],
    centro:"Centro de Votacion",
    centros:[],
    resultados:{electores:0,centros:0,mesas:0,votos:0,unidad:0,oficialismo:0,otros:0,nulos:0,porcunidad:0,porcoficialismo:0,participacion:0},
    ruta:{
      "type":"FeatureCollection",
      "features":[ {
        "type":"Feature",
        "properties":{"nombre":'ppa',"latitude":10.55555,"timestamp":0},                             
        "geometry":{"type":"LineString","coordinates":[[-66.8721358,10.4783499 ]] }
      }]
    }
    
    };
  
  export const reducer = (state = defaultState, action) => {
      const { type, stateprop } = action;
      switch (type) {
        case 'ASIGNACION':
          // alert(JSON.stringify(stateprop))
        return { ...state, asignacion: stateprop };
   
       
       case 'GEOLOCATION':
         // alert(JSON.stringify(stateprop))
       return { ...state, geolocation: stateprop };
       case 'FLAGLOGIN':
        // alert("FLAGLOGIN en reducer "+JSON.stringify(stateprop))
       return { ...state, flagLogin: stateprop };
      case 'LOGIN':
          //FIREBASE
        //  alert("LOGIN en reducer"+JSON.stringify(stateprop)   )
        return { ...state, login: stateprop };
      
      case 'LNGLAT':
          return { ...state, lnglat: stateprop };
      case 'POSITION':
               // alert("POSITION")
      return { ...state, position: stateprop };
      case 'ZOOM':
          let radio=3;
          if ( stateprop>12) radio=10
         return { ...state,radio:radio, zoom: stateprop };
      //////////////////////////////////////
      ////////////////////////////////////
      case 'FILTRO_FUNCIONALES':
       // alert("stateprop"+stateprop)
        let funcionales=state.funcionales.map((funcional) => {
          
          if (funcional.idfuncional==stateprop){ 
                 funcional.selected=true}
                 else
                 {funcional.selected=false}
           
          return funcional;
         });
        return {
          ...state, funcionales:funcionales
        };
      case 'FILTRO_ORGANIZACION':
       // alert(stateprop)
        //alert(JSON.stringify(state.organizacion))
        let organizacion = state.organizacion.map((org) => {
         if (org.id==stateprop){  
         if (org.selected==true){ 
                org.selected=false}
                else
                {org.selected=true}
          }
         return org;
        });
      
       // alert(JSON.stringify(organizacion))
          return {
            ...state, organizacion:organizacion
          };
          case 'FILTRO_ROLES':
              // alert(stateprop)
               //alert(JSON.stringify(state.organizacion))
               let roles = state.roles.map((rol) => {
                if (rol.id==stateprop){  
                     if (rol.selected==true){ 
                        rol.selected=false}
                        else
                        {rol.selected=true}
                 }
                return rol;
               });
             
             // alert(JSON.stringify(roles))
                 return {
                   ...state, roles:roles
                 };
             
          case 'TOGGLE_PLATE_AVAILABILITY':
              let updatedPlates = state.plates[state.currentUnits].map(plate => {
                if (plate.weight === stateprop) plate.available = !plate.available;
                return plate;
              });
              return {
                ...state,
                plates: { ...state.plates, [state.currentUnits]: updatedPlates }
              };

      case 'CENTRO':
          return { ...state, centro: stateprop };
      case 'CENTROS':
          return { ...state, centros: stateprop };
      case 'RESULTADOS':
         return { ...state, resultados: stateprop };
      case 'PERSONA':
         return { ...state, persona: stateprop };
         case 'SELECCION':
          return { ...state, seleccion: stateprop };
       case 'CARACTERISTICA':
          return { ...state, caracteristica: stateprop };  
         case 'ROLESPERSONAS':
        return { ...state, rolespersonas: stateprop };
       case 'RUTA':
                            // alert(JSON.stringify(stateprop))
        return { ...state, ruta: stateprop };
      
      
      
      
      
    
        
        case 'CALCULATE':
          let availablePlates = state.plates[state.currentUnits].reduce(
            (acc, plate) => {
              if (plate.available) acc.push(plate.weight);
              return acc;
            },
            []
          );
          const currentWeight = calcPlates(
            stateprop,
            availablePlates,
            state.currentBar[state.currentUnits]
          );
          return { ...state, currentWeight };
    
        case 'RESET':
          window.localStorage.removeItem('vinotinto');
          return { ...state, currentWeight: null };
    
        default:
          return state;
      }
    };
  
    function calcPlates(targetWeight, weights, bar = 45) {
      weights.sort((a, b) => b - a); // plates examined heaviest to lightest
    
      let perSideTarget = (targetWeight - bar) / 2; // weight for each side of bar
    
      let plates = weights.reduce((acc, weight) => {
        let qty = perSideTarget / weight;
        if (qty >= 1) {
          qty = Math.floor(qty); // remove remainder
          acc.push({ weight, qty }); // add to plates array
          perSideTarget -= weight * qty; // reduce target weight
        }
        return acc;
      }, []);
    
      if (perSideTarget) console.log(`${perSideTarget} short on each side`);
    
      const remainder = perSideTarget * 2;
    
      return {
        plates,
        bar,
        totalWeight: targetWeight - remainder,
        targetWeight,
        remainder
      };
      // [ {weight: 45, qty: 2}, {{weight: 10, qty: 2}} ]
    }
    //https://www.youtube.com/watch?v=dPY8y4CB3mI
    //https://www.youtube.com/watch?v=zWsZcBiwgVE&feature=youtu.be&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf