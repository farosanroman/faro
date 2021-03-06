import { atom } from 'recoil';

export const flagLogin = atom({
  key: 'flagLogin',
  default: false
});
export const login = atom({
  key: 'login',
  default: {id:"id",type:"login",name:"mister",photoURL:"https://image.shutterstock.com/image-vector/photo-camera-icon-260nw-197166461.jpg",email:"",phone:"",cedula:"",lat:0,lng:0,idorg:0,org:"",idfuncional:0,funcional:"",idrol:0,rol:"",codcne:"000000000"}
});

export const persona = atom({
  key: 'persona',
  default: {
    "id":"jsonlite",
      "flag": 1,
      "msj": "",
      "flagasignacion": 1,
      "nombre1": "Juan",
      "nombre2": "Pablo",
      "apellido1": "Guaido",
      "apellido2": "",
      "identificacion": "V3664204",
    
      "idnacionalidad": 0,
      "nacionalidad": "Venezolano",
      "idpaisnacimiento": 0,
      "paisnacimiento": "Venezuela",
      "idestadocivil": 0,
      "estadocivil": "Soltero",
      "idsexo": 0,
      "sexo": "Masculino",
  
      "fechanacimientovar": "12/01/1953",
      "fechanacimientojson": "1953-01-12T00:00:00.000Z",
      "idtipopersona": 25,
      "tipopersona": "VeintiCinco",
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
          "respuesta": "CELULAR",
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
          "codcne": "130201",
          "descripcion": "Soporte Electoral",
          "codcnenombre": "",
          "idfuncional": "1038",
          "funcionalnombre": "Formaci??n",
          "lat": -66.47,
          "lng": 9.09,
          "idestado": "00",
          "idmunicipio": "00",
          "idparroquia": "00",
          "idcircunscripcion": "0",
          "estadonombre": "Miranda",
          "municipionombre": "Baruta",
          "parroquianombre": "Las Minas",
          "circunscripcionnombre": "Las Minas",
          "centronombre": "VENEZUELA"
          
        },
        {
          "idpregunta":"xxx",
          "pregunta":"pregunta",
  
          "idrespuesta": "242",
          "respuesta": "Formacion",
          "codcne": "130000",
          "descripcion": "Soporte Electoral",
          "codcnenombre": "",
          "idfuncional": "1038",
          "funcionalnombre": "Formaci??n",
          "lat": -66.47,
          "lng": 9.09,
          "idestado": "00",
          "idmunicipio": "00",
          "idparroquia": "00",
          "idcircunscripcion": "0",
          "estadonombre": "Miranda",
          "municipionombre": "",
          "parroquianombre": "",
          "circunscripcionnombre": "Las Minas",
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
          "funcionalnombre": "Formaci??n",
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
          "funcionalnombre": "Formaci??n",
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
          "funcionalnombre": "Formaci??n",
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
          "funcionalnombre": "Formaci??n",
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
  
});


export const organizacion=atom(
  {
     key:'organizacion',
     default: [
      {"id": 1,"nombre": "AD","descripcion": "Accion Democratica","color":"white", "selected": false,value: 800 },
      {"id": 3,"nombre": "PJ","descripcion": "Primero Justicia","color":"yellow","selected": false,value: 800 },
      { "id": 2,"nombre": "VP","descripcion": "Voluntad Popular","color":"orange", "selected": false,value: 800},
      { "id": 4,"nombre": "UNT","descripcion": "Un Nuevo Tiempo", "color":"darkblue", "selected": false, value: 800},
      {"id": 7,"nombre": "CAUSA R","descripcion": "Un Nuevo Tiempo","color":"purple",  "selected": false, value: 800}
    
    ]
    
    // var color="pink"
    // if (r.idrol=="AD"){color="white"}
    // if (r.idrol=="MPJ"){color="yellow"}
    // if (r.idrol=="MVP"){color="orange"}
    // if (r.idrol=="UNT"){color="darkblue"}
    // if (r.idrol=="VPA"){color="darkblue"}

  })
export const funcionales=atom(
{
   key:'funcionales',
   default: []
})

// [{"idorganizacion":"","idnodofuncional":"1039","codigonodofuncional":"COMAN","nombrenodofuncional":"Comando 2020","pordefecto":1},
// {"idorganizacion":"","idnodofuncional":"1038","codigonodofuncional":"FORMA","nombrenodofuncional":"Formaci??n","pordefecto":2}]

export const roles=atom(
  {
     key:'roles',
     default:[]
})
export const indicadoresorganizacion=atom(
  {
     key:'indicadoresorganizacion',
     default:{}
})
//{ROLES.map(({ idrol,nombrerol }) => {
//  [{"idorganizacion":"","idnodofuncional":"1039","codigonodofuncional":"COMAN","nombrenodofuncional":"Comando 2020","idrol":"248","nombrerol":"Responsables Nacionales","posrol":1},
//     {"idorganizacion":"","idnodofuncional":"1039","codigonodofuncional":"COMAN","nombrenodofuncional":"Comando 2020","idrol":"249","nombrerol":"Coordinador Electoral","posrol":2},
//     {"idorganizacion":"","idnodofuncional":"1039","codigonodofuncional":"COMAN","nombrenodofuncional":"Comando 2020","idrol":"251","nombrerol":"Call Center","posrol":4}]
    
// {idfuncional:1,funcional:"Comando 2020www","selected": true},
// {idfuncional:2,funcional:"Formacion","selected": false},
// {idfuncional:3,funcional:"Conteo Rapido","selected": false}

    // [{"idpregunta":"4","idrespuesta":"1","respuesta":"AD","cantporcadarespuesta":3,"totalpregunta":3,"porcentaje":100},
    // {"idpregunta":"4","idrespuesta":"7","respuesta":"CAUSA R","cantporcadarespuesta":0,"totalpregunta":3,"porcentaje":0},
    // {"idpregunta":"4","idrespuesta":"3","respuesta":"MPJ","cantporcadarespuesta":0,"totalpregunta":3,"porcentaje":0},
    // {"idpregunta":"4","idrespuesta":"4","respuesta":"UNTC","cantporcadarespuesta":0,"totalpregunta":3,"porcentaje":0},
    // {"idpregunta":"4","idrespuesta":"2","respuesta":"VPA","cantporcadarespuesta":0,"totalpregunta":3,"porcentaje":0}]
    // [{"idorganizacion":"","idnodofuncional":"1039","codigonodofuncional":"COMAN","nombrenodofuncional":"Comando 2020","idrol":"248","nombrerol":"Responsables Nacionales","posrol":1},
    // {"idorganizacion":"","idnodofuncional":"1039","codigonodofuncional":"COMAN","nombrenodofuncional":"Comando 2020","idrol":"249","nombrerol":"Coordinador Electoral","posrol":2},
    // {"idorganizacion":"","idnodofuncional":"1039","codigonodofuncional":"COMAN","nombrenodofuncional":"Comando 2020","idrol":"251","nombrerol":"Call Center","posrol":4}]

    // export const getindicadores=atom(
    //   {
    //      key:'getindicadores',
    //      default: false
        
    //   })
  export const url = atom({
    key: 'url',
    default: "https://monederoapi.azurewebsites.net/api/GetLogins?code=nMU6jy8N428ZZRJSWynpSKaZikH1DTBXV/9v9pSBi/c3B7KLr9YS8w=="
  });
  export const codcne = atom({
    key: 'codcne',
    default: ""
  });
export const eemmpp =atom ({
  key:'eemmpp',
  default:[{"cneestado":"000000","name":"VENEZUELA","items":[{"cnemunicipio":"000000","name":"","items":[{"cneparroquia":"000000","name":""}]}]},{"cneestado":"010000","name":"DTTO. CAPITAL","items":[{"cnemunicipio":"010100","name":"LIBERTADOR","items":[{"cneparroquia":"010101","name":"ALTAGRACIA"},{"cneparroquia":"010102","name":"CANDELARIA"},{"cneparroquia":"010103","name":"CATEDRAL"},{"cneparroquia":"010104","name":"LA PASTORA"},{"cneparroquia":"010105","name":"SAN AGUSTIN"},{"cneparroquia":"010106","name":"SAN JOSE"},{"cneparroquia":"010107","name":"SAN JUAN"},{"cneparroquia":"010108","name":"SANTA ROSALIA"},{"cneparroquia":"010109","name":"SANTA TERESA"},{"cneparroquia":"010110","name":"SUCRE"},{"cneparroquia":"010111","name":"23 DE ENERO"},{"cneparroquia":"010112","name":"ANTIMANO"},{"cneparroquia":"010113","name":"EL RECREO"},{"cneparroquia":"010114","name":"EL VALLE"},{"cneparroquia":"010115","name":"LA VEGA"},{"cneparroquia":"010116","name":"MACARAO"},{"cneparroquia":"010117","name":"CARICUAO"},{"cneparroquia":"010118","name":"EL JUNQUITO"},{"cneparroquia":"010119","name":"COCHE"},{"cneparroquia":"010120","name":"SAN PEDRO"},{"cneparroquia":"010121","name":"SAN BERNARDINO"},{"cneparroquia":"010122","name":"EL PARAISO"}]}]},{"cneestado":"020000","name":"ANZOATEGUI","items":[{"cnemunicipio":"020100","name":"ANACO","items":[{"cneparroquia":"020101","name":"ANACO"},{"cneparroquia":"020102","name":"SAN JOAQUIN"}]},{"cnemunicipio":"020200","name":"ARAGUA","items":[{"cneparroquia":"020201","name":"ARAGUA DE BARCELONA"},{"cneparroquia":"020202","name":"CACHIPO"}]},{"cnemunicipio":"020300","name":"BOLIVAR","items":[{"cneparroquia":"020301","name":"EL CARMEN"},{"cneparroquia":"020302","name":"SAN CRISTOBAL"},{"cneparroquia":"020303","name":"BERGANTIN"},{"cneparroquia":"020304","name":"CAIGUA"},{"cneparroquia":"020305","name":"EL PILAR"},{"cneparroquia":"020306","name":"NARICUAL"}]},{"cnemunicipio":"020400","name":"BRUZUAL","items":[{"cneparroquia":"020401","name":"CLARINES"},{"cneparroquia":"020402","name":"GUANAPE"},{"cneparroquia":"020403","name":"SABANA DE UCHIRE"}]},{"cnemunicipio":"020500","name":"CAJIGAL","items":[{"cneparroquia":"020501","name":"ONOTO"},{"cneparroquia":"020502","name":"SAN PABLO"}]},{"cnemunicipio":"020600","name":"FREITES","items":[{"cneparroquia":"020601","name":"CANTAURA"},{"cneparroquia":"020602","name":"LIBERTADOR"},{"cneparroquia":"020603","name":"SANTA ROSA"},{"cneparroquia":"020604","name":"URICA"}]},{"cnemunicipio":"020700","name":"INDEPENDENCIA","items":[{"cneparroquia":"020701","name":"SOLEDAD"},{"cneparroquia":"020702","name":"MAMO"}]},{"cnemunicipio":"020800","name":"LIBERTAD","items":[{"cneparroquia":"020801","name":"SAN MATEO"},{"cneparroquia":"020802","name":"EL CARITO"},{"cneparroquia":"020803","name":"SANTA INES"}]},{"cnemunicipio":"020900","name":"MIRANDA","items":[{"cneparroquia":"020901","name":"PARIAGUAN"},{"cneparroquia":"020902","name":"ATAPIRIRE"},{"cneparroquia":"020903","name":"BOCA DEL PAO"},{"cneparroquia":"020904","name":"EL PAO"}]},{"cnemunicipio":"021000","name":"MONAGAS","items":[{"cneparroquia":"021001","name":"MAPIRE"},{"cneparroquia":"021002","name":"PIAR"},{"cneparroquia":"021003","name":"SN DIEGO DE CABRUTICA"},{"cneparroquia":"021004","name":"SANTA CLARA"},{"cneparroquia":"021005","name":"UVERITO"},{"cneparroquia":"021006","name":"ZUATA"}]},{"cnemunicipio":"021100","name":"PE??ALVER","items":[{"cneparroquia":"021101","name":"PUERTO PIRITU"},{"cneparroquia":"021102","name":"SAN MIGUEL"},{"cneparroquia":"021103","name":"SUCRE"}]},{"cnemunicipio":"021200","name":"SIMON RODRIGUEZ","items":[{"cneparroquia":"021201","name":"EL TIGRE"}]},{"cnemunicipio":"021300","name":"SOTILLO","items":[{"cneparroquia":"021301","name":"POZUELOS"},{"cneparroquia":"021302","name":"PUERTO LA CRUZ"}]},{"cnemunicipio":"021400","name":"GUANIPA","items":[{"cneparroquia":"021401","name":"SAN JOSE DE GUANIPA"}]},{"cnemunicipio":"021500","name":"GUANTA","items":[{"cneparroquia":"021501","name":"GUANTA"},{"cneparroquia":"021502","name":"CHORRERON"}]},{"cnemunicipio":"021600","name":"PIRITU","items":[{"cneparroquia":"021601","name":"PIRITU"},{"cneparroquia":"021602","name":"SAN FRANCISCO"}]},{"cnemunicipio":"021700","name":"DIEGO BAUTISTA URBANEJA","items":[{"cneparroquia":"021701","name":"LECHERIAS"},{"cneparroquia":"021702","name":"EL MORRO"}]},{"cnemunicipio":"021800","name":"CARVAJAL","items":[{"cneparroquia":"021801","name":"VALLE GUANAPE"},{"cneparroquia":"021802","name":"SANTA BARBARA"}]},{"cnemunicipio":"021900","name":"SANTA ANA","items":[{"cneparroquia":"021901","name":"SANTA ANA"},{"cneparroquia":"021902","name":"PUEBLO NUEVO"}]},{"cnemunicipio":"022000","name":"MC GREGOR","items":[{"cneparroquia":"022001","name":"EL CHAPARRO"},{"cneparroquia":"022002","name":"TOMAS ALFARO CALATRAVA"}]},{"cnemunicipio":"022100","name":"SAN JUAN DE CAPISTRANO","items":[{"cneparroquia":"022101","name":"BOCA UCHIRE"},{"cneparroquia":"022102","name":"BOCA DE CHAVEZ"}]}]},{"cneestado":"030000","name":"APURE","items":[{"cnemunicipio":"030100","name":"ACHAGUAS","items":[{"cneparroquia":"030101","name":"ACHAGUAS"},{"cneparroquia":"030102","name":"APURITO"},{"cneparroquia":"030103","name":"EL YAGUAL"},{"cneparroquia":"030104","name":"GUACHARA"},{"cneparroquia":"030105","name":"MUCURITAS"},{"cneparroquia":"030106","name":"QUESERAS DEL MEDIO"}]},{"cnemunicipio":"030200","name":"MU??OZ","items":[{"cneparroquia":"030201","name":"BRUZUAL"},{"cneparroquia":"030202","name":"MANTECAL"},{"cneparroquia":"030203","name":"QUINTERO"},{"cneparroquia":"030204","name":"SAN VICENTE"},{"cneparroquia":"030205","name":"RINCON HONDO"}]},{"cnemunicipio":"030300","name":"PAEZ","items":[{"cneparroquia":"030301","name":"GUASDUALITO"},{"cneparroquia":"030302","name":"ARAMENDI"},{"cneparroquia":"030303","name":"EL AMPARO"},{"cneparroquia":"030304","name":"SAN CAMILO"},{"cneparroquia":"030305","name":"URDANETA"}]},{"cnemunicipio":"030400","name":"PEDRO CAMEJO","items":[{"cneparroquia":"030401","name":"SAN JUAN DE PAYARA"},{"cneparroquia":"030402","name":"CODAZZI"},{"cneparroquia":"030403","name":"CUNAVICHE"}]},{"cnemunicipio":"030500","name":"ROMULO GALLEGOS","items":[{"cneparroquia":"030501","name":"ELORZA"},{"cneparroquia":"030502","name":"LA TRINIDAD"}]},{"cnemunicipio":"030600","name":"SAN FERNANDO","items":[{"cneparroquia":"030601","name":"SAN FERNANDO"},{"cneparroquia":"030602","name":"PE??ALVER"},{"cneparroquia":"030603","name":"EL RECREO"},{"cneparroquia":"030604","name":"SN RAFAEL DE ATAMAICA"}]},{"cnemunicipio":"030700","name":"BIRUACA","items":[{"cneparroquia":"030701","name":"BIRUACA"}]}]},{"cneestado":"040000","name":"ARAGUA","items":[{"cnemunicipio":"040100","name":"GIRARDOT","items":[{"cneparroquia":"040101","name":"LAS DELICIAS"},{"cneparroquia":"040102","name":"CHORONI"},{"cneparroquia":"040103","name":"MADRE MA DE SAN JOSE"},{"cneparroquia":"040104","name":"JOAQUIN CRESPO"},{"cneparroquia":"040105","name":"PEDRO JOSE OVALLES"},{"cneparroquia":"040106","name":"JOSE CASANOVA GODOY"},{"cneparroquia":"040107","name":"ANDRES ELOY BLANCO"},{"cneparroquia":"040108","name":"LOS TACARIGUAS"}]},{"cnemunicipio":"040200","name":"SANTIAGO MARI??O","items":[{"cneparroquia":"040201","name":"TURMERO"},{"cneparroquia":"040202","name":"SAMAN DE GUERE"},{"cneparroquia":"040203","name":"ALFREDO PACHECO M"},{"cneparroquia":"040204","name":"CHUAO"},{"cneparroquia":"040205","name":"AREVALO APONTE"}]},{"cnemunicipio":"040300","name":"JOSE FELIX RIBAS","items":[{"cneparroquia":"040301","name":"LA VICTORIA"},{"cneparroquia":"040302","name":"ZUATA"},{"cneparroquia":"040303","name":"PAO DE ZARATE"},{"cneparroquia":"040304","name":"CASTOR NIEVES RIOS"},{"cneparroquia":"040305","name":"LAS GUACAMAYAS"}]},{"cnemunicipio":"040400","name":"SAN CASIMIRO","items":[{"cneparroquia":"040401","name":"SAN CASIMIRO"},{"cneparroquia":"040402","name":"VALLE MORIN"},{"cneparroquia":"040403","name":"GUIRIPA"},{"cneparroquia":"040404","name":"OLLAS DE CARAMACATE"}]},{"cnemunicipio":"040500","name":"SAN SEBASTIAN","items":[{"cneparroquia":"040501","name":"SAN SEBASTIAN"}]},{"cnemunicipio":"040600","name":"SUCRE","items":[{"cneparroquia":"040601","name":"CAGUA"},{"cneparroquia":"040602","name":"BELLA VISTA"}]},{"cnemunicipio":"040700","name":"URDANETA","items":[{"cneparroquia":"040701","name":"BARBACOAS"},{"cneparroquia":"040702","name":"SAN FRANCISCO DE CARA"},{"cneparroquia":"040703","name":"TAGUAY"},{"cneparroquia":"040704","name":"LAS PE??ITAS"}]},{"cnemunicipio":"040800","name":"ZAMORA","items":[{"cneparroquia":"040801","name":"VILLA DE CURA"},{"cneparroquia":"040802","name":"MAGDALENO"},{"cneparroquia":"040803","name":"SAN FRANCISCO DE ASIS"},{"cneparroquia":"040804","name":"VALLES DE TUCUTUNEMO"},{"cneparroquia":"040805","name":"AUGUSTO MIJARES"}]},{"cnemunicipio":"040900","name":"LIBERTADOR","items":[{"cneparroquia":"040901","name":"PALO NEGRO"},{"cneparroquia":"040902","name":"SAN MARTIN DE PORRES"}]},{"cnemunicipio":"041000","name":"JOSE ANGEL LAMAS","items":[{"cneparroquia":"041001","name":"SANTA CRUZ"}]},{"cnemunicipio":"041100","name":"BOLIVAR","items":[{"cneparroquia":"041101","name":"SAN MATEO"}]},{"cnemunicipio":"041200","name":"SANTOS MICHELENA","items":[{"cneparroquia":"041201","name":"LAS TEJERIAS"},{"cneparroquia":"041202","name":"TIARA"}]},{"cnemunicipio":"041300","name":"MARIO BRICE??O IRAGORRY","items":[{"cneparroquia":"041301","name":"EL LIMON"},{"cneparroquia":"041302","name":"CA A DE AZUCAR"}]},{"cnemunicipio":"041400","name":"TOVAR","items":[{"cneparroquia":"041401","name":"COLONIA TOVAR"}]},{"cnemunicipio":"041500","name":"CAMATAGUA","items":[{"cneparroquia":"041501","name":"CAMATAGUA"},{"cneparroquia":"041502","name":"CARMEN DE CURA"}]},{"cnemunicipio":"041600","name":"JOSE RAFAEL REVENGA","items":[{"cneparroquia":"041601","name":"EL CONSEJO"}]},{"cnemunicipio":"041700","name":"FRANCISCO LINARES ALCANTARA","items":[{"cneparroquia":"041701","name":"SANTA RITA"},{"cneparroquia":"041702","name":"FRANCISCO DE MIRANDA"},{"cneparroquia":"041703","name":"MONS FELICIANO G"}]},{"cnemunicipio":"041800","name":"OCUMARE DE LA COSTA DE ORO","items":[{"cneparroquia":"041801","name":"OCUMARE DE LA COSTA"}]}]},{"cneestado":"050000","name":"BARINAS","items":[{"cnemunicipio":"050100","name":"ARISMENDI","items":[{"cneparroquia":"050101","name":"ARISMENDI"},{"cneparroquia":"050102","name":"GUADARRAMA"},{"cneparroquia":"050103","name":"LA UNION"},{"cneparroquia":"050104","name":"SAN ANTONIO"}]},{"cnemunicipio":"050200","name":"BARINAS","items":[{"cneparroquia":"050201","name":"ALFREDO A LARRIVA"},{"cneparroquia":"050202","name":"BARINAS"},{"cneparroquia":"050203","name":"SAN SILVESTRE"},{"cneparroquia":"050204","name":"SANTA INES"},{"cneparroquia":"050205","name":"SANTA LUCIA"},{"cneparroquia":"050206","name":"TORUNOS"},{"cneparroquia":"050207","name":"EL CARMEN"},{"cneparroquia":"050208","name":"ROMULO BETANCOURT"},{"cneparroquia":"050209","name":"CORAZON DE JESUS"},{"cneparroquia":"050210","name":"RAMON I MENDEZ"},{"cneparroquia":"050211","name":"ALTO BARINAS"},{"cneparroquia":"050212","name":"MANUEL P FAJARDO"},{"cneparroquia":"050213","name":"JUAN A RODRIGUEZ D"},{"cneparroquia":"050214","name":"DOMINGA ORTIZ P"}]},{"cnemunicipio":"050300","name":"BOLIVAR","items":[{"cneparroquia":"050301","name":"ALTAMIRA"},{"cneparroquia":"050302","name":"BARINITAS"},{"cneparroquia":"050303","name":"CALDERAS"}]},{"cnemunicipio":"050400","name":"EZEQUIEL ZAMORA","items":[{"cneparroquia":"050401","name":"SANTA BARBARA"},{"cneparroquia":"050402","name":"JOSE IGNACIO DEL PUMAR"},{"cneparroquia":"050403","name":"RAMON IGNACIO MENDEZ"},{"cneparroquia":"050404","name":"PEDRO BRICE??O MENDEZ"}]},{"cnemunicipio":"050500","name":"OBISPOS","items":[{"cneparroquia":"050501","name":"EL REAL"},{"cneparroquia":"050502","name":"LA LUZ"},{"cneparroquia":"050503","name":"OBISPOS"},{"cneparroquia":"050504","name":"LOS GUASIMITOS"}]},{"cnemunicipio":"050600","name":"PEDRAZA","items":[{"cneparroquia":"050601","name":"CIUDAD BOLIVIA"},{"cneparroquia":"050602","name":"IGNACIO BRICE??O"},{"cneparroquia":"050603","name":"PAEZ"},{"cneparroquia":"050604","name":"JOSE FELIX RIBAS"}]},{"cnemunicipio":"050700","name":"ROJAS","items":[{"cneparroquia":"050701","name":"DOLORES"},{"cneparroquia":"050702","name":"LIBERTAD"},{"cneparroquia":"050703","name":"PALACIO FAJARDO"},{"cneparroquia":"050704","name":"SANTA ROSA"},{"cneparroquia":"050705","name":"SIMON RODRIGUEZ"}]},{"cnemunicipio":"050800","name":"SOSA","items":[{"cneparroquia":"050801","name":"CIUDAD DE NUTRIAS"},{"cneparroquia":"050802","name":"EL REGALO"},{"cneparroquia":"050803","name":"PUERTO DE NUTRIAS"},{"cneparroquia":"050804","name":"SANTA CATALINA"},{"cneparroquia":"050805","name":"SIMON BOLIVAR"}]},{"cnemunicipio":"050900","name":"ALBERTO ARVELO TORREALBA","items":[{"cneparroquia":"050901","name":"RODRIGUEZ DOMINGUEZ"},{"cneparroquia":"050902","name":"SABANETA"}]},{"cnemunicipio":"051000","name":"ANTONIO JOSE DE SUCRE","items":[{"cneparroquia":"051001","name":"TICOPORO"},{"cneparroquia":"051002","name":"NICOLAS PULIDO"},{"cneparroquia":"051003","name":"ANDRES BELLO"}]},{"cnemunicipio":"051100","name":"CRUZ PAREDES","items":[{"cneparroquia":"051101","name":"BARRANCAS"},{"cneparroquia":"051102","name":"EL SOCORRO"},{"cneparroquia":"051103","name":"MASPARRITO"}]},{"cnemunicipio":"051200","name":"ANDRES ELOY BLANCO","items":[{"cneparroquia":"051201","name":"EL CANTON"},{"cneparroquia":"051202","name":"SANTA CRUZ DE GUACAS"},{"cneparroquia":"051203","name":"PUERTO VIVAS"}]}]},{"cneestado":"060000","name":"BOLIVAR","items":[{"cnemunicipio":"060100","name":"CARONI","items":[{"cneparroquia":"060101","name":"SIMON BOLIVAR"},{"cneparroquia":"060102","name":"ONCE DE ABRIL"},{"cneparroquia":"060103","name":"VISTA AL SOL"},{"cneparroquia":"060104","name":"CHIRICA"},{"cneparroquia":"060105","name":"DALLA COSTA"},{"cneparroquia":"060106","name":"CACHAMAY"},{"cneparroquia":"060107","name":"UNIVERSIDAD"},{"cneparroquia":"060108","name":"UNARE"},{"cneparroquia":"060109","name":"YOCOIMA"},{"cneparroquia":"060110","name":"POZO VERDE"}]},{"cnemunicipio":"060200","name":"CEDE??O","items":[{"cneparroquia":"060201","name":"CAICARA DEL ORINOCO"},{"cneparroquia":"060202","name":"ASCENSION FARRERAS"},{"cneparroquia":"060203","name":"ALTAGRACIA"},{"cneparroquia":"060204","name":"LA URBANA"},{"cneparroquia":"060205","name":"GUANIAMO"},{"cneparroquia":"060206","name":"PIJIGUAOS"}]},{"cnemunicipio":"060300","name":"HERES","items":[{"cneparroquia":"060301","name":"CATEDRAL"},{"cneparroquia":"060302","name":"AGUA SALADA"},{"cneparroquia":"060303","name":"LA SABANITA"},{"cneparroquia":"060304","name":"VISTA HERMOSA"},{"cneparroquia":"060305","name":"MARHUANTA"},{"cneparroquia":"060306","name":"JOSE ANTONIO PAEZ"},{"cneparroquia":"060307","name":"ORINOCO"},{"cneparroquia":"060308","name":"PANAPANA"},{"cneparroquia":"060309","name":"ZEA"}]},{"cnemunicipio":"060400","name":"PIAR","items":[{"cneparroquia":"060401","name":"UPATA"},{"cneparroquia":"060402","name":"ANDRES ELOY BLANCO"},{"cneparroquia":"060403","name":"PEDRO COVA"}]},{"cnemunicipio":"060500","name":"ROSCIO","items":[{"cneparroquia":"060501","name":"GUASIPATI"},{"cneparroquia":"060502","name":"SALOM"}]},{"cnemunicipio":"060600","name":"SUCRE","items":[{"cneparroquia":"060601","name":"MARIPA"},{"cneparroquia":"060602","name":"ARIPAO"},{"cneparroquia":"060603","name":"LAS MAJADAS"},{"cneparroquia":"060604","name":"MOITACO"},{"cneparroquia":"060605","name":"GUARATARO"}]},{"cnemunicipio":"060700","name":"SIFONTES","items":[{"cneparroquia":"060701","name":"TUMEREMO"},{"cneparroquia":"060702","name":"DALLA COSTA"},{"cneparroquia":"060703","name":"SAN ISIDRO"}]},{"cnemunicipio":"060800","name":"ANGOSTURA","items":[{"cneparroquia":"060801","name":"CIUDAD PIAR"},{"cneparroquia":"060802","name":"SAN FRANCISCO"},{"cneparroquia":"060803","name":"BARCELONETA"},{"cneparroquia":"060804","name":"SANTA BARBARA"}]},{"cnemunicipio":"060900","name":"GRAN SABANA","items":[{"cneparroquia":"060901","name":"SANTA ELENA DE UAIREN"},{"cneparroquia":"060902","name":"IKABARU"}]},{"cnemunicipio":"061000","name":"EL CALLAO","items":[{"cneparroquia":"061001","name":"EL CALLAO"}]},{"cnemunicipio":"061100","name":"PADRE PEDRO CHIEN","items":[{"cneparroquia":"061101","name":"EL PALMAR"}]}]},{"cneestado":"070000","name":"CARABOBO","items":[{"cnemunicipio":"070100","name":"BEJUMA","items":[{"cneparroquia":"070101","name":"BEJUMA"},{"cneparroquia":"070102","name":"CANOABO"},{"cneparroquia":"070103","name":"SIMON BOLIVAR"}]},{"cnemunicipio":"070200","name":"CARLOS ARVELO","items":[{"cneparroquia":"070201","name":"GUIGUE"},{"cneparroquia":"070202","name":"BELEN"},{"cneparroquia":"070203","name":"TACARIGUA"}]},{"cnemunicipio":"070300","name":"DIEGO IBARRA","items":[{"cneparroquia":"070301","name":"MARIARA"},{"cneparroquia":"070302","name":"AGUAS CALIENTES"}]},{"cnemunicipio":"070400","name":"GUACARA","items":[{"cneparroquia":"070401","name":"GUACARA"},{"cneparroquia":"070402","name":"CIUDAD ALIANZA"},{"cneparroquia":"070403","name":"YAGUA"}]},{"cnemunicipio":"070500","name":"MONTALBAN","items":[{"cneparroquia":"070501","name":"MONTALBAN"}]},{"cnemunicipio":"070600","name":"JUAN JOSE MORA","items":[{"cneparroquia":"070601","name":"MORON"},{"cneparroquia":"070602","name":"URAMA"}]},{"cnemunicipio":"070700","name":"PUERTO CABELLO","items":[{"cneparroquia":"070701","name":"DEMOCRACIA"},{"cneparroquia":"070702","name":"FRATERNIDAD"},{"cneparroquia":"070703","name":"GOAIGOAZA"},{"cneparroquia":"070704","name":"JUAN JOSE FLORES"},{"cneparroquia":"070705","name":"BARTOLOME SALOM"},{"cneparroquia":"070706","name":"UNION"},{"cneparroquia":"070707","name":"BORBURATA"},{"cneparroquia":"070708","name":"PATANEMO"}]},{"cnemunicipio":"070800","name":"SAN JOAQUIN","items":[{"cneparroquia":"070801","name":"SAN JOAQUIN"}]},{"cnemunicipio":"070900","name":"VALENCIA","items":[{"cneparroquia":"070901","name":"CANDELARIA"},{"cneparroquia":"070902","name":"CATEDRAL"},{"cneparroquia":"070903","name":"EL SOCORRO"},{"cneparroquia":"070904","name":"MIGUEL PE??A"},{"cneparroquia":"070905","name":"SAN BLAS"},{"cneparroquia":"070906","name":"SAN JOSE"},{"cneparroquia":"070907","name":"SANTA ROSA"},{"cneparroquia":"070908","name":"RAFAEL URDANETA"},{"cneparroquia":"070909","name":"NEGRO PRIMERO"}]},{"cnemunicipio":"071000","name":"MIRANDA","items":[{"cneparroquia":"071001","name":"MIRANDA"}]},{"cnemunicipio":"071100","name":"LOS GUAYOS","items":[{"cneparroquia":"071101","name":"U LOS GUAYOS"}]},{"cnemunicipio":"071200","name":"NAGUANAGUA","items":[{"cneparroquia":"071201","name":"NAGUANAGUA"}]},{"cnemunicipio":"071300","name":"SAN DIEGO","items":[{"cneparroquia":"071301","name":"URB SAN DIEGO"}]},{"cnemunicipio":"071400","name":"LIBERTADOR","items":[{"cneparroquia":"071401","name":"U TOCUYITO"},{"cneparroquia":"071402","name":"U INDEPENDENCIA"}]}]},{"cneestado":"080000","name":"COJEDES","items":[{"cnemunicipio":"080100","name":"ANZOATEGUI","items":[{"cneparroquia":"080101","name":"COJEDES"},{"cneparroquia":"080102","name":"JUAN DE MATA SUAREZ"}]},{"cnemunicipio":"080200","name":"FALCON","items":[{"cneparroquia":"080201","name":"TINAQUILLO"}]},{"cnemunicipio":"080300","name":"GIRARDOT","items":[{"cneparroquia":"080301","name":"EL BAUL"},{"cneparroquia":"080302","name":"SUCRE"}]},{"cnemunicipio":"080400","name":"PAO DE SAN JUAN BAUTISTA","items":[{"cneparroquia":"080401","name":"EL PAO"}]},{"cnemunicipio":"080500","name":"RICAURTE","items":[{"cneparroquia":"080501","name":"LIBERTAD DE COJEDES"},{"cneparroquia":"080502","name":"EL AMPARO"}]},{"cnemunicipio":"080600","name":"EZEQUIEL ZAMORA","items":[{"cneparroquia":"080601","name":"SAN CARLOS DE AUSTRIA"},{"cneparroquia":"080602","name":"JUAN ANGEL BRAVO"},{"cneparroquia":"080603","name":"MANUEL MANRIQUE"}]},{"cnemunicipio":"080700","name":"TINACO","items":[{"cneparroquia":"080701","name":"GRL/JEFE JOSE L SILVA"}]},{"cnemunicipio":"080800","name":"LIMA BLANCO","items":[{"cneparroquia":"080801","name":"MACAPO"},{"cneparroquia":"080802","name":"LA AGUADITA"}]},{"cnemunicipio":"080900","name":"ROMULO GALLEGOS","items":[{"cneparroquia":"080901","name":"ROMULO GALLEGOS"}]}]},{"cneestado":"090000","name":"FALCON","items":[{"cnemunicipio":"090100","name":"ACOSTA","items":[{"cneparroquia":"090101","name":"SAN JUAN DE LOS CAYOS"},{"cneparroquia":"090102","name":"CAPADARE"},{"cneparroquia":"090103","name":"LA PASTORA"},{"cneparroquia":"090104","name":"LIBERTADOR"}]},{"cnemunicipio":"090200","name":"BOLIVAR","items":[{"cneparroquia":"090201","name":"SAN LUIS"},{"cneparroquia":"090202","name":"ARACUA"},{"cneparroquia":"090203","name":"LA PE??A"}]},{"cnemunicipio":"090300","name":"BUCHIVACOA","items":[{"cneparroquia":"090301","name":"CAPATARIDA"},{"cneparroquia":"090302","name":"BOROJO"},{"cneparroquia":"090303","name":"SEQUE"},{"cneparroquia":"090304","name":"ZAZARIDA"},{"cneparroquia":"090305","name":"BARIRO"},{"cneparroquia":"090306","name":"GUAJIRO"}]},{"cnemunicipio":"090400","name":"CARIRUBANA","items":[{"cneparroquia":"090401","name":"NORTE"},{"cneparroquia":"090402","name":"CARIRUBANA"},{"cneparroquia":"090403","name":"PUNTA CARDON"},{"cneparroquia":"090404","name":"SANTA ANA"}]},{"cnemunicipio":"090500","name":"COLINA","items":[{"cneparroquia":"090501","name":"LA VELA DE CORO"},{"cneparroquia":"090502","name":"ACURIGUA"},{"cneparroquia":"090503","name":"GUAIBACOA"},{"cneparroquia":"090504","name":"MACORUCA"},{"cneparroquia":"090505","name":"LAS CALDERAS"}]},{"cnemunicipio":"090600","name":"DEMOCRACIA","items":[{"cneparroquia":"090601","name":"PEDREGAL"},{"cneparroquia":"090602","name":"AGUA CLARA"},{"cneparroquia":"090603","name":"AVARIA"},{"cneparroquia":"090604","name":"PIEDRA GRANDE"},{"cneparroquia":"090605","name":"PURURECHE"}]},{"cnemunicipio":"090700","name":"FALCON","items":[{"cneparroquia":"090701","name":"PUEBLO NUEVO"},{"cneparroquia":"090702","name":"ADICORA"},{"cneparroquia":"090703","name":"BARAIVED"},{"cneparroquia":"090704","name":"BUENA VISTA"},{"cneparroquia":"090705","name":"JADACAQUIVA"},{"cneparroquia":"090706","name":"MORUY"},{"cneparroquia":"090707","name":"EL VINCULO"},{"cneparroquia":"090708","name":"EL HATO"},{"cneparroquia":"090709","name":"ADAURE"}]},{"cnemunicipio":"090800","name":"FEDERACION","items":[{"cneparroquia":"090801","name":"CHURUGUARA"},{"cneparroquia":"090802","name":"AGUA LARGA"},{"cneparroquia":"090803","name":"INDEPENDENCIA"},{"cneparroquia":"090804","name":"MAPARARI"},{"cneparroquia":"090805","name":"EL PAUJI"}]},{"cnemunicipio":"090900","name":"MAUROA","items":[{"cneparroquia":"090901","name":"MENE DE MAUROA"},{"cneparroquia":"090902","name":"CASIGUA"},{"cneparroquia":"090903","name":"SAN FELIX"}]},{"cnemunicipio":"091000","name":"MIRANDA","items":[{"cneparroquia":"091001","name":"SAN ANTONIO"},{"cneparroquia":"091002","name":"SAN GABRIEL"},{"cneparroquia":"091003","name":"SANTA ANA"},{"cneparroquia":"091004","name":"GUZMAN GUILLERMO"},{"cneparroquia":"091005","name":"MITARE"},{"cneparroquia":"091006","name":"SABANETA"},{"cneparroquia":"091007","name":"RIO SECO"}]},{"cnemunicipio":"091100","name":"PETIT","items":[{"cneparroquia":"091101","name":"CABURE"},{"cneparroquia":"091102","name":"CURIMAGUA"},{"cneparroquia":"091103","name":"COLINA"}]},{"cnemunicipio":"091200","name":"SILVA","items":[{"cneparroquia":"091201","name":"TUCACAS"},{"cneparroquia":"091202","name":"BOCA DE AROA"}]},{"cnemunicipio":"091300","name":"ZAMORA","items":[{"cneparroquia":"091301","name":"PUERTO CUMAREBO"},{"cneparroquia":"091302","name":"LA CIENAGA"},{"cneparroquia":"091303","name":"LA SOLEDAD"},{"cneparroquia":"091304","name":"PUEBLO CUMAREBO"},{"cneparroquia":"091305","name":"ZAZARIDA"}]},{"cnemunicipio":"091400","name":"DABAJURO","items":[{"cneparroquia":"091401","name":"DABAJURO"}]},{"cnemunicipio":"091500","name":"MONSE??OR ITURRIZA","items":[{"cneparroquia":"091501","name":"CHICHIRIVICHE"},{"cneparroquia":"091502","name":"BOCA DE TOCUYO"},{"cneparroquia":"091503","name":"TOCUYO DE LA COSTA"}]},{"cnemunicipio":"091600","name":"LOS TAQUES","items":[{"cneparroquia":"091601","name":"LOS TAQUES"},{"cneparroquia":"091602","name":"JUDIBANA"}]},{"cnemunicipio":"091700","name":"PIRITU","items":[{"cneparroquia":"091701","name":"PIRITU"},{"cneparroquia":"091702","name":"SAN JOSE DE LA COSTA"}]},{"cnemunicipio":"091800","name":"UNION","items":[{"cneparroquia":"091801","name":"STA.CRUZ DE BUCARAL"},{"cneparroquia":"091802","name":"EL CHARAL"},{"cneparroquia":"091803","name":"LAS VEGAS DEL TUY"}]},{"cnemunicipio":"091900","name":"SAN FRANCISCO","items":[{"cneparroquia":"091901","name":"MIRIMIRE"}]},{"cnemunicipio":"092000","name":"JACURA","items":[{"cneparroquia":"092001","name":"JACURA"},{"cneparroquia":"092002","name":"AGUA LINDA"},{"cneparroquia":"092003","name":"ARAURIMA"}]},{"cnemunicipio":"092100","name":"CACIQUE MANAURE","items":[{"cneparroquia":"092101","name":"YARACAL"}]},{"cnemunicipio":"092200","name":"PALMASOLA","items":[{"cneparroquia":"092201","name":"PALMA SOLA"}]},{"cnemunicipio":"092300","name":"SUCRE","items":[{"cneparroquia":"092301","name":"SUCRE"},{"cneparroquia":"092302","name":"PECAYA"}]},{"cnemunicipio":"092400","name":"URUMACO","items":[{"cneparroquia":"092401","name":"URUMACO"},{"cneparroquia":"092402","name":"BRUZUAL"}]},{"cnemunicipio":"092500","name":"TOCOPERO","items":[{"cneparroquia":"092501","name":"TOCOPERO"}]}]},{"cneestado":"100000","name":"GUARICO","items":[{"cnemunicipio":"100100","name":"INFANTE","items":[{"cneparroquia":"100101","name":"VALLE DE LA PASCUA"},{"cneparroquia":"100102","name":"ESPINO"}]},{"cnemunicipio":"100200","name":"MELLADO","items":[{"cneparroquia":"100201","name":"EL SOMBRERO"},{"cneparroquia":"100202","name":"SOSA"}]},{"cnemunicipio":"100300","name":"MIRANDA","items":[{"cneparroquia":"100301","name":"CALABOZO"},{"cneparroquia":"100302","name":"EL CALVARIO"},{"cneparroquia":"100303","name":"EL RASTRO"},{"cneparroquia":"100304","name":"GUARDATINAJAS"}]},{"cnemunicipio":"100400","name":"MONAGAS","items":[{"cneparroquia":"100401","name":"ALTAGRACIA DE ORITUCO"},{"cneparroquia":"100402","name":"LEZAMA"},{"cneparroquia":"100403","name":"LIBERTAD DE ORITUCO"},{"cneparroquia":"100404","name":"SAN FCO DE MACAIRA"},{"cneparroquia":"100405","name":"SAN RAFAEL DE ORITUCO"},{"cneparroquia":"100406","name":"SOUBLETTE"},{"cneparroquia":"100407","name":"PASO REAL DE MACAIRA"}]},{"cnemunicipio":"100500","name":"RIBAS","items":[{"cneparroquia":"100501","name":"TUCUPIDO"},{"cneparroquia":"100502","name":"SAN RAFAEL DE LAYA"}]},{"cnemunicipio":"100600","name":"ROSCIO","items":[{"cneparroquia":"100601","name":"SAN JUAN DE LOS MORROS"},{"cneparroquia":"100602","name":"PARAPARA"},{"cneparroquia":"100603","name":"CANTAGALLO"}]},{"cnemunicipio":"100700","name":"ZARAZA","items":[{"cneparroquia":"100701","name":"ZARAZA"},{"cneparroquia":"100702","name":"SAN JOSE DE UNARE"}]},{"cnemunicipio":"100800","name":"CAMAGUAN","items":[{"cneparroquia":"100801","name":"CAMAGUAN"},{"cneparroquia":"100802","name":"PUERTO MIRANDA"},{"cneparroquia":"100803","name":"UVERITO"}]},{"cnemunicipio":"100900","name":"SAN JOSE DE GUARIBE","items":[{"cneparroquia":"100901","name":"SAN JOSE DE GUARIBE"}]},{"cnemunicipio":"101000","name":"LAS MERCEDES","items":[{"cneparroquia":"101001","name":"LAS MERCEDES"},{"cneparroquia":"101002","name":"STA RITA DE MANAPIRE"},{"cneparroquia":"101003","name":"CABRUTA"}]},{"cnemunicipio":"101100","name":"EL SOCORRO","items":[{"cneparroquia":"101101","name":"EL SOCORRO"}]},{"cnemunicipio":"101200","name":"ORTIZ","items":[{"cneparroquia":"101201","name":"ORTIZ"},{"cneparroquia":"101202","name":"SAN FCO. DE TIZNADOS"},{"cneparroquia":"101203","name":"SAN JOSE DE TIZNADOS"},{"cneparroquia":"101204","name":"S LORENZO DE TIZNADOS"}]},{"cnemunicipio":"101300","name":"SANTA MARIA DE IPIRE","items":[{"cneparroquia":"101301","name":"SANTA MARIA DE IPIRE"},{"cneparroquia":"101302","name":"ALTAMIRA"}]},{"cnemunicipio":"101400","name":"CHAGUARAMAS","items":[{"cneparroquia":"101401","name":"CHAGUARAMAS"}]},{"cnemunicipio":"101500","name":"SAN GERONIMO DE GUAYABAL","items":[{"cneparroquia":"101501","name":"GUAYABAL"},{"cneparroquia":"101502","name":"CAZORLA"}]}]},{"cneestado":"110000","name":"LARA","items":[{"cnemunicipio":"110100","name":"CRESPO","items":[{"cneparroquia":"110101","name":"FREITEZ"},{"cneparroquia":"110102","name":"JOSE MARIA BLANCO"}]},{"cnemunicipio":"110200","name":"IRIBARREN","items":[{"cneparroquia":"110201","name":"CATEDRAL"},{"cneparroquia":"110202","name":"LA CONCEPCION"},{"cneparroquia":"110203","name":"SANTA ROSA"},{"cneparroquia":"110204","name":"UNION"},{"cneparroquia":"110205","name":"EL CUJI"},{"cneparroquia":"110206","name":"TAMACA"},{"cneparroquia":"110207","name":"JUAN DE VILLEGAS"},{"cneparroquia":"110208","name":"AGUEDO F. ALVARADO"},{"cneparroquia":"110209","name":"BUENA VISTA"},{"cneparroquia":"110210","name":"JUAREZ"}]},{"cnemunicipio":"110300","name":"JIMENEZ","items":[{"cneparroquia":"110301","name":"JUAN B RODRIGUEZ"},{"cneparroquia":"110302","name":"DIEGO DE LOZADA"},{"cneparroquia":"110303","name":"SAN MIGUEL"},{"cneparroquia":"110304","name":"CUARA"},{"cneparroquia":"110305","name":"PARAISO DE SAN JOSE"},{"cneparroquia":"110306","name":"TINTORERO"},{"cneparroquia":"110307","name":"JOSE BERNARDO DORANTE"},{"cneparroquia":"110308","name":"CRNEL. MARIANO PERAZA"}]},{"cnemunicipio":"110400","name":"MORAN","items":[{"cneparroquia":"110401","name":"BOLIVAR"},{"cneparroquia":"110402","name":"ANZOATEGUI"},{"cneparroquia":"110403","name":"GUARICO"},{"cneparroquia":"110404","name":"HUMOCARO ALTO"},{"cneparroquia":"110405","name":"HUMOCARO BAJO"},{"cneparroquia":"110406","name":"MORAN"},{"cneparroquia":"110407","name":"HILARIO LUNA Y LUNA"},{"cneparroquia":"110408","name":"LA CANDELARIA"}]},{"cnemunicipio":"110500","name":"PALAVECINO","items":[{"cneparroquia":"110501","name":"CABUDARE"},{"cneparroquia":"110502","name":"JOSE G. BASTIDAS"},{"cneparroquia":"110503","name":"AGUA VIVA"}]},{"cnemunicipio":"110600","name":"TORRES","items":[{"cneparroquia":"110601","name":"TRINIDAD SAMUEL"},{"cneparroquia":"110602","name":"ANTONIO DIAZ"},{"cneparroquia":"110603","name":"CAMACARO"},{"cneparroquia":"110604","name":"CASTA??EDA"},{"cneparroquia":"110605","name":"CHIQUINQUIRA"},{"cneparroquia":"110606","name":"ESPINOZA LOS MONTEROS"},{"cneparroquia":"110607","name":"LARA"},{"cneparroquia":"110608","name":"MANUEL MORILLO"},{"cneparroquia":"110609","name":"MONTES DE OCA"},{"cneparroquia":"110610","name":"TORRES"},{"cneparroquia":"110611","name":"EL BLANCO"},{"cneparroquia":"110612","name":"MONTA??A VERDE"},{"cneparroquia":"110613","name":"HERIBERTO ARROYO"},{"cneparroquia":"110614","name":"LAS MERCEDES"},{"cneparroquia":"110615","name":"CECILIO ZUBILLAGA"},{"cneparroquia":"110616","name":"REYES VARGAS"},{"cneparroquia":"110617","name":"ALTAGRACIA"}]},{"cnemunicipio":"110700","name":"URDANETA","items":[{"cneparroquia":"110701","name":"SIQUISIQUE"},{"cneparroquia":"110702","name":"SAN MIGUEL"},{"cneparroquia":"110703","name":"XAGUAS"},{"cneparroquia":"110704","name":"MOROTURO"}]},{"cnemunicipio":"110800","name":"ANDRES ELOY BLANCO","items":[{"cneparroquia":"110801","name":"PIO TAMAYO"},{"cneparroquia":"110802","name":"YACAMBU"},{"cneparroquia":"110803","name":"QBDA. HONDA DE GUACHE"}]},{"cnemunicipio":"110900","name":"SIMON PLANAS","items":[{"cneparroquia":"110901","name":"SARARE"},{"cneparroquia":"110902","name":"GUSTAVO VEGAS LEON"},{"cneparroquia":"110903","name":"BURIA"}]}]},{"cneestado":"120000","name":"MERIDA","items":[{"cnemunicipio":"120100","name":"ALBERTO ADRIANI","items":[{"cneparroquia":"120101","name":"GABRIEL PICON G."},{"cneparroquia":"120102","name":"HECTOR AMABLE MORA"},{"cneparroquia":"120103","name":"JOSE NUCETE SARDI"},{"cneparroquia":"120104","name":"PULIDO MENDEZ"},{"cneparroquia":"120105","name":"PTE. ROMULO GALLEGOS"},{"cneparroquia":"120106","name":"PRESIDENTE BETANCOURT"},{"cneparroquia":"120107","name":"PRESIDENTE PAEZ"}]},{"cnemunicipio":"120200","name":"ANDRES BELLO","items":[{"cneparroquia":"120201","name":"LA AZULITA"}]},{"cnemunicipio":"120300","name":"ARZOBISPO CHACON","items":[{"cneparroquia":"120301","name":"CANAGUA"},{"cneparroquia":"120302","name":"CAPURI"},{"cneparroquia":"120303","name":"CHACANTA"},{"cneparroquia":"120304","name":"EL MOLINO"},{"cneparroquia":"120305","name":"GUAIMARAL"},{"cneparroquia":"120306","name":"MUCUTUY"},{"cneparroquia":"120307","name":"MUCUCHACHI"}]},{"cnemunicipio":"120400","name":"CAMPO ELIAS","items":[{"cneparroquia":"120401","name":"ACEQUIAS"},{"cneparroquia":"120402","name":"JAJI"},{"cneparroquia":"120403","name":"LA MESA"},{"cneparroquia":"120404","name":"SAN JOSE"},{"cneparroquia":"120405","name":"MONTALBAN"},{"cneparroquia":"120406","name":"MATRIZ"},{"cneparroquia":"120407","name":"FERNANDEZ PE??A"}]},{"cnemunicipio":"120500","name":"GUARAQUE","items":[{"cneparroquia":"120501","name":"GUARAQUE"},{"cneparroquia":"120502","name":"MESA DE QUINTERO"},{"cneparroquia":"120503","name":"RIO NEGRO"}]},{"cnemunicipio":"120600","name":"JULIO CESAR SALAS","items":[{"cneparroquia":"120601","name":"ARAPUEY"},{"cneparroquia":"120602","name":"PALMIRA"}]},{"cnemunicipio":"120700","name":"JUSTO BRICE??O","items":[{"cneparroquia":"120701","name":"TORONDOY"},{"cneparroquia":"120702","name":"SAN CRISTOBAL DE T"}]},{"cnemunicipio":"120800","name":"LIBERTADOR","items":[{"cneparroquia":"120801","name":"ARIAS"},{"cneparroquia":"120802","name":"SAGRARIO"},{"cneparroquia":"120803","name":"MILLA"},{"cneparroquia":"120804","name":"EL LLANO"},{"cneparroquia":"120805","name":"JUAN RODRIGUEZ SUAREZ"},{"cneparroquia":"120806","name":"JACINTO PLAZA"},{"cneparroquia":"120807","name":"DOMINGO PE??A"},{"cneparroquia":"120808","name":"GONZALO PICON FEBRES"},{"cneparroquia":"120809","name":"OSUNA RODRIGUEZ"},{"cneparroquia":"120810","name":"LASSO DE LA VEGA"},{"cneparroquia":"120811","name":"CARACCIOLO PARRA P"},{"cneparroquia":"120812","name":"MARIANO PICON SALAS"},{"cneparroquia":"120813","name":"ANTONIO SPINETTI DINI"},{"cneparroquia":"120814","name":"EL MORRO"},{"cneparroquia":"120815","name":"LOS NEVADOS"}]},{"cnemunicipio":"120900","name":"SANTOS MARQUINA","items":[{"cneparroquia":"120901","name":"TABAY"}]},{"cnemunicipio":"121000","name":"MIRANDA","items":[{"cneparroquia":"121001","name":"TIMOTES"},{"cneparroquia":"121002","name":"ANDRES ELOY BLANCO"},{"cneparroquia":"121003","name":"PI??ANGO"},{"cneparroquia":"121004","name":"LA VENTA"}]},{"cnemunicipio":"121100","name":"ANTONIO PINTO SALINAS","items":[{"cneparroquia":"121101","name":"STA CRUZ DE MORA"},{"cneparroquia":"121102","name":"MESA BOLIVAR"},{"cneparroquia":"121103","name":"MESA DE LAS PALMAS"}]},{"cnemunicipio":"121200","name":"OBISPO RAMOS DE LORA","items":[{"cneparroquia":"121201","name":"STA ELENA DE ARENALES"},{"cneparroquia":"121202","name":"ELOY PAREDES"},{"cneparroquia":"121203","name":"R DE ALCAZAR"}]},{"cnemunicipio":"121300","name":"CARACCIOLO PARRA OLMEDO","items":[{"cneparroquia":"121301","name":"TUCANI"},{"cneparroquia":"121302","name":"FLORENCIO RAMIREZ"}]},{"cnemunicipio":"121400","name":"CARDENAL QUINTERO","items":[{"cneparroquia":"121401","name":"SANTO DOMINGO"},{"cneparroquia":"121402","name":"LAS PIEDRAS"}]},{"cnemunicipio":"121500","name":"PUEBLO LLANO","items":[{"cneparroquia":"121501","name":"PUEBLO LLANO"}]},{"cnemunicipio":"121600","name":"RANGEL","items":[{"cneparroquia":"121601","name":"MUCUCHIES"},{"cneparroquia":"121602","name":"MUCURUBA"},{"cneparroquia":"121603","name":"SAN RAFAEL"},{"cneparroquia":"121604","name":"CACUTE"},{"cneparroquia":"121605","name":"LA TOMA"}]},{"cnemunicipio":"121700","name":"RIVAS DAVILA","items":[{"cneparroquia":"121701","name":"BAILADORES"},{"cneparroquia":"121702","name":"GERONIMO MALDONADO"}]},{"cnemunicipio":"121800","name":"SUCRE","items":[{"cneparroquia":"121801","name":"LAGUNILLAS"},{"cneparroquia":"121802","name":"CHIGUARA"},{"cneparroquia":"121803","name":"ESTANQUES"},{"cneparroquia":"121804","name":"SAN JUAN"},{"cneparroquia":"121805","name":"PUEBLO NUEVO DEL SUR"},{"cneparroquia":"121806","name":"LA TRAMPA"}]},{"cnemunicipio":"121900","name":"TOVAR","items":[{"cneparroquia":"121901","name":"EL LLANO"},{"cneparroquia":"121902","name":"TOVAR"},{"cneparroquia":"121903","name":"EL AMPARO"},{"cneparroquia":"121904","name":"SAN FRANCISCO"}]},{"cnemunicipio":"122000","name":"TULIO FEBRES CORDERO","items":[{"cneparroquia":"122001","name":"NUEVA BOLIVIA"},{"cneparroquia":"122002","name":"INDEPENDENCIA"},{"cneparroquia":"122003","name":"MARIA C PALACIOS"},{"cneparroquia":"122004","name":"SANTA APOLONIA"}]},{"cnemunicipio":"122100","name":"PADRE NOGUERA","items":[{"cneparroquia":"122101","name":"STA MARIA DE CAPARO"}]},{"cnemunicipio":"122200","name":"ARICAGUA","items":[{"cneparroquia":"122201","name":"ARICAGUA"},{"cneparroquia":"122202","name":"SAN ANTONIO"}]},{"cnemunicipio":"122300","name":"ZEA","items":[{"cneparroquia":"122301","name":"ZEA"},{"cneparroquia":"122302","name":"CA??O EL TIGRE"}]}]},{"cneestado":"130000","name":"MIRANDA","items":[{"cnemunicipio":"130100","name":"ACEVEDO","items":[{"cneparroquia":"130101","name":"CAUCAGUA"},{"cneparroquia":"130102","name":"ARAGUITA"},{"cneparroquia":"130103","name":"AREVALO GONZALEZ"},{"cneparroquia":"130104","name":"CAPAYA"},{"cneparroquia":"130105","name":"PANAQUIRE"},{"cneparroquia":"130106","name":"RIBAS"},{"cneparroquia":"130107","name":"EL CAFE"},{"cneparroquia":"130108","name":"MARIZAPA"}]},{"cnemunicipio":"130200","name":"BRION","items":[{"cneparroquia":"130201","name":"HIGUEROTE"},{"cneparroquia":"130202","name":"CURIEPE"},{"cneparroquia":"130203","name":"TACARIGUA"}]},{"cnemunicipio":"130300","name":"GUAICAIPURO","items":[{"cneparroquia":"130301","name":"LOS TEQUES"},{"cneparroquia":"130302","name":"CECILIO ACOSTA"},{"cneparroquia":"130303","name":"PARACOTOS"},{"cneparroquia":"130304","name":"SAN PEDRO"},{"cneparroquia":"130305","name":"TACATA"},{"cneparroquia":"130306","name":"EL JARILLO"},{"cneparroquia":"130307","name":"ALTAGRACIA DE LA M"}]},{"cnemunicipio":"130400","name":"INDEPENDENCIA","items":[{"cneparroquia":"130401","name":"STA TERESA DEL TUY"},{"cneparroquia":"130402","name":"EL CARTANAL"}]},{"cnemunicipio":"130500","name":"LANDER","items":[{"cneparroquia":"130501","name":"OCUMARE DEL TUY"},{"cneparroquia":"130502","name":"LA DEMOCRACIA"},{"cneparroquia":"130503","name":"SANTA BARBARA"}]},{"cnemunicipio":"130600","name":"PAEZ","items":[{"cneparroquia":"130601","name":"RIO CHICO"},{"cneparroquia":"130602","name":"EL GUAPO"},{"cneparroquia":"130603","name":"TACARIGUA DE LA LAGUNA"},{"cneparroquia":"130604","name":"PAPARO"},{"cneparroquia":"130605","name":"SN FERNANDO DEL GUAPO"}]},{"cnemunicipio":"130700","name":"PAZ CASTILLO","items":[{"cneparroquia":"130701","name":"SANTA LUCIA"}]},{"cnemunicipio":"130800","name":"PLAZA","items":[{"cneparroquia":"130801","name":"GUARENAS"}]},{"cnemunicipio":"130900","name":"SUCRE","items":[{"cneparroquia":"130901","name":"PETARE"},{"cneparroquia":"130902","name":"LEONCIO MARTINEZ"},{"cneparroquia":"130903","name":"CAUCAGUITA"},{"cneparroquia":"130904","name":"FILAS DE MARICHES"},{"cneparroquia":"130905","name":"LA DOLORITA"}]},{"cnemunicipio":"131000","name":"URDANETA","items":[{"cneparroquia":"131001","name":"CUA"},{"cneparroquia":"131002","name":"NUEVA CUA"}]},{"cnemunicipio":"131100","name":"ZAMORA","items":[{"cneparroquia":"131101","name":"GUATIRE"},{"cneparroquia":"131102","name":"BOLIVAR"}]},{"cnemunicipio":"131200","name":"CRISTOBAL ROJAS","items":[{"cneparroquia":"131201","name":"CHARALLAVE"},{"cneparroquia":"131202","name":"LAS BRISAS"}]},{"cnemunicipio":"131300","name":"LOS SALIAS","items":[{"cneparroquia":"131301","name":"SAN ANTONIO LOS ALTOS"}]},{"cnemunicipio":"131400","name":"ANDRES BELLO","items":[{"cneparroquia":"131401","name":"SAN JOSE DE BARLOVENTO"},{"cneparroquia":"131402","name":"CUMBO"}]},{"cnemunicipio":"131500","name":"SIMON BOLIVAR","items":[{"cneparroquia":"131501","name":"SAN FCO DE YARE"},{"cneparroquia":"131502","name":"S ANTONIO DE YARE"}]},{"cnemunicipio":"131600","name":"BARUTA","items":[{"cneparroquia":"131601","name":"BARUTA"},{"cneparroquia":"131602","name":"EL CAFETAL"},{"cneparroquia":"131603","name":"LAS MINAS DE BARUTA"}]},{"cnemunicipio":"131700","name":"CARRIZAL","items":[{"cneparroquia":"131701","name":"CARRIZAL"}]},{"cnemunicipio":"131800","name":"CHACAO","items":[{"cneparroquia":"131801","name":"CHACAO"}]},{"cnemunicipio":"131900","name":"EL HATILLO","items":[{"cneparroquia":"131901","name":"EL HATILLO"}]},{"cnemunicipio":"132000","name":"BUROZ","items":[{"cneparroquia":"132001","name":"MAMPORAL"}]},{"cnemunicipio":"132100","name":"PEDRO GUAL","items":[{"cneparroquia":"132101","name":"CUPIRA"},{"cneparroquia":"132102","name":"MACHURUCUTO"}]}]},{"cneestado":"140000","name":"MONAGAS","items":[{"cnemunicipio":"140100","name":"ACOSTA","items":[{"cneparroquia":"140101","name":"SAN ANTONIO"},{"cneparroquia":"140102","name":"SAN FRANCISCO"}]},{"cnemunicipio":"140200","name":"BOLIVAR","items":[{"cneparroquia":"140201","name":"CARIPITO"}]},{"cnemunicipio":"140300","name":"CARIPE","items":[{"cneparroquia":"140301","name":"CARIPE"},{"cneparroquia":"140302","name":"TERESEN"},{"cneparroquia":"140303","name":"EL GUACHARO"},{"cneparroquia":"140304","name":"SAN AGUSTIN"},{"cneparroquia":"140305","name":"LA GUANOTA"},{"cneparroquia":"140306","name":"SABANA DE PIEDRA"}]},{"cnemunicipio":"140400","name":"CEDE??O","items":[{"cneparroquia":"140401","name":"CAICARA"},{"cneparroquia":"140402","name":"AREO"},{"cneparroquia":"140403","name":"SAN FELIX"},{"cneparroquia":"140404","name":"VIENTO FRESCO"}]},{"cnemunicipio":"140500","name":"EZEQUIEL ZAMORA","items":[{"cneparroquia":"140501","name":"PUNTA DE MATA"},{"cneparroquia":"140502","name":"EL TEJERO"}]},{"cnemunicipio":"140600","name":"LIBERTADOR","items":[{"cneparroquia":"140601","name":"TEMBLADOR"},{"cneparroquia":"140602","name":"TABASCA"},{"cneparroquia":"140603","name":"LAS ALHUACAS"},{"cneparroquia":"140604","name":"CHAGUARAMAS"}]},{"cnemunicipio":"140700","name":"MATURIN","items":[{"cneparroquia":"140701","name":"EL FURRIAL"},{"cneparroquia":"140702","name":"JUSEPIN"},{"cneparroquia":"140703","name":"EL COROZO"},{"cneparroquia":"140704","name":"SAN VICENTE"},{"cneparroquia":"140705","name":"LA PICA"},{"cneparroquia":"140706","name":"ALTO DE LOS GODOS"},{"cneparroquia":"140707","name":"BOQUERON"},{"cneparroquia":"140708","name":"LAS COCUIZAS"},{"cneparroquia":"140709","name":"SANTA CRUZ"},{"cneparroquia":"140710","name":"SAN SIMON"},{"cneparroquia":"140711","name":"MATURIN"}]},{"cnemunicipio":"140800","name":"PIAR","items":[{"cneparroquia":"140801","name":"ARAGUA"},{"cneparroquia":"140802","name":"CHAGUARAMAL"},{"cneparroquia":"140803","name":"GUANAGUANA"},{"cneparroquia":"140804","name":"APARICIO"},{"cneparroquia":"140805","name":"TAGUAYA"},{"cneparroquia":"140806","name":"EL PINTO"},{"cneparroquia":"140807","name":"LA TOSCANA"}]},{"cnemunicipio":"140900","name":"PUNCERES","items":[{"cneparroquia":"140901","name":"QUIRIQUIRE"},{"cneparroquia":"140902","name":"CACHIPO"}]},{"cnemunicipio":"141000","name":"SOTILLO","items":[{"cneparroquia":"141001","name":"BARRANCAS"},{"cneparroquia":"141002","name":"LOS BARRANCOS DE FAJARDO"}]},{"cnemunicipio":"141100","name":"AGUASAY","items":[{"cneparroquia":"141101","name":"AGUASAY"}]},{"cnemunicipio":"141200","name":"SANTA BARBARA","items":[{"cneparroquia":"141201","name":"SANTA BARBARA"}]},{"cnemunicipio":"141300","name":"URACOA","items":[{"cneparroquia":"141301","name":"URACOA"}]}]},{"cneestado":"150000","name":"NUEVA ESPARTA","items":[{"cnemunicipio":"150100","name":"ARISMENDI","items":[{"cneparroquia":"150101","name":"LA ASUNCION"}]},{"cnemunicipio":"150200","name":"DIAZ","items":[{"cneparroquia":"150201","name":"SAN JUAN BAUTISTA"},{"cneparroquia":"150202","name":"ZABALA"}]},{"cnemunicipio":"150300","name":"GOMEZ","items":[{"cneparroquia":"150301","name":"SANTA ANA"},{"cneparroquia":"150302","name":"GUEVARA"},{"cneparroquia":"150303","name":"MATASIETE"},{"cneparroquia":"150304","name":"BOLIVAR"},{"cneparroquia":"150305","name":"SUCRE"}]},{"cnemunicipio":"150400","name":"MANEIRO","items":[{"cneparroquia":"150401","name":"PAMPATAR"},{"cneparroquia":"150402","name":"AGUIRRE"}]},{"cnemunicipio":"150500","name":"MARCANO","items":[{"cneparroquia":"150501","name":"JUAN GRIEGO"},{"cneparroquia":"150502","name":"ADRIAN"}]},{"cnemunicipio":"150600","name":"MARI??O","items":[{"cneparroquia":"150601","name":"PORLAMAR"}]},{"cnemunicipio":"150700","name":"PENINSULA DE MACANAO","items":[{"cneparroquia":"150701","name":"BOCA DEL RIO"},{"cneparroquia":"150702","name":"SAN FRANCISCO"}]},{"cnemunicipio":"150800","name":"VILLALBA","items":[{"cneparroquia":"150801","name":"SAN PEDRO DE COCHE"},{"cneparroquia":"150802","name":"VICENTE FUENTES"}]},{"cnemunicipio":"150900","name":"TUBORES","items":[{"cneparroquia":"150901","name":"PUNTA DE PIEDRAS"},{"cneparroquia":"150902","name":"LOS BARALES"}]},{"cnemunicipio":"151000","name":"ANTOLIN DEL CAMPO","items":[{"cneparroquia":"151001","name":"CM.LA PLAZA DE PARAGUACHI"}]},{"cnemunicipio":"151100","name":"GARCIA","items":[{"cneparroquia":"151101","name":"VALLE ESP SANTO"},{"cneparroquia":"151102","name":"FRANCISCO FAJARDO"}]}]},{"cneestado":"160000","name":"PORTUGUESA","items":[{"cnemunicipio":"160100","name":"ARAURE","items":[{"cneparroquia":"160101","name":"ARAURE"},{"cneparroquia":"160102","name":"RIO ACARIGUA"}]},{"cnemunicipio":"160200","name":"ESTELLER","items":[{"cneparroquia":"160201","name":"PIRITU"},{"cneparroquia":"160202","name":"UVERAL"}]},{"cnemunicipio":"160300","name":"GUANARE","items":[{"cneparroquia":"160301","name":"GUANARE"},{"cneparroquia":"160302","name":"CORDOBA"},{"cneparroquia":"160303","name":"SAN JUAN GUANAGUANARE"},{"cneparroquia":"160304","name":"VIRGEN DE LA COROMOTO"},{"cneparroquia":"160305","name":"SAN JOSE DE LA MONTA??A"}]},{"cnemunicipio":"160400","name":"GUANARITO","items":[{"cneparroquia":"160401","name":"GUANARITO"},{"cneparroquia":"160402","name":"TRINIDAD DE LA CAPILLA"},{"cneparroquia":"160403","name":"DIVINA PASTORA"}]},{"cnemunicipio":"160500","name":"OSPINO","items":[{"cneparroquia":"160501","name":"OSPINO"},{"cneparroquia":"160502","name":"APARICION"},{"cneparroquia":"160503","name":"LA ESTACION"}]},{"cnemunicipio":"160600","name":"PAEZ","items":[{"cneparroquia":"160601","name":"ACARIGUA"},{"cneparroquia":"160602","name":"PAYARA"},{"cneparroquia":"160603","name":"PIMPINELA"},{"cneparroquia":"160604","name":"RAMON PERAZA"}]},{"cnemunicipio":"160700","name":"SUCRE","items":[{"cneparroquia":"160701","name":"BISCUCUY"},{"cneparroquia":"160702","name":"CONCEPCION"},{"cneparroquia":"160703","name":"SAN RAFAEL PALO ALZADO"},{"cneparroquia":"160704","name":"UVENCIO A VELASQUEZ"},{"cneparroquia":"160705","name":"SAN JOSE DE SAGUAZ"},{"cneparroquia":"160706","name":"VILLA ROSA"}]},{"cnemunicipio":"160800","name":"TUREN","items":[{"cneparroquia":"160801","name":"VILLA BRUZUAL"},{"cneparroquia":"160802","name":"CANELONES"},{"cneparroquia":"160803","name":"SANTA CRUZ"},{"cneparroquia":"160804","name":"SAN ISIDRO LABRADOR"}]},{"cnemunicipio":"160900","name":"MONSE??OR JOSE VICENTE DE UNDA","items":[{"cneparroquia":"160901","name":"CHABASQUEN"},{"cneparroquia":"160902","name":"PE??A BLANCA"}]},{"cnemunicipio":"161000","name":"AGUA BLANCA","items":[{"cneparroquia":"161001","name":"AGUA BLANCA"}]},{"cnemunicipio":"161100","name":"PAPELON","items":[{"cneparroquia":"161101","name":"PAPELON"},{"cneparroquia":"161102","name":"CA??O DELGADITO"}]},{"cnemunicipio":"161200","name":"SAN GENARO DE BOCONOITO","items":[{"cneparroquia":"161201","name":"BOCONOITO"},{"cneparroquia":"161202","name":"ANTOLIN TOVAR AQUINO"}]},{"cnemunicipio":"161300","name":"SAN RAFAEL DE ONOTO","items":[{"cneparroquia":"161301","name":"SAN RAFAEL DE ONOTO"},{"cneparroquia":"161302","name":"SANTA FE"},{"cneparroquia":"161303","name":"THERMO MORLES"}]},{"cnemunicipio":"161400","name":"SANTA ROSALIA","items":[{"cneparroquia":"161401","name":"EL PLAYON"},{"cneparroquia":"161402","name":"FLORIDA"}]}]},{"cneestado":"170000","name":"SUCRE","items":[{"cnemunicipio":"170100","name":"ARISMENDI","items":[{"cneparroquia":"170101","name":"RIO CARIBE"},{"cneparroquia":"170102","name":"SAN JUAN GALDONAS"},{"cneparroquia":"170103","name":"PUERTO SANTO"},{"cneparroquia":"170104","name":"EL MORRO DE PTO SANTO"},{"cneparroquia":"170105","name":"ANTONIO JOSE DE SUCRE"}]},{"cnemunicipio":"170200","name":"BENITEZ","items":[{"cneparroquia":"170201","name":"EL PILAR"},{"cneparroquia":"170202","name":"EL RINCON"},{"cneparroquia":"170203","name":"GUARAUNOS"},{"cneparroquia":"170204","name":"TUNAPUICITO"},{"cneparroquia":"170205","name":"UNION"},{"cneparroquia":"170206","name":"GRAL FCO. A VASQUEZ"}]},{"cnemunicipio":"170300","name":"BERMUDEZ","items":[{"cneparroquia":"170301","name":"SANTA CATALINA"},{"cneparroquia":"170302","name":"SANTA ROSA"},{"cneparroquia":"170303","name":"SANTA TERESA"},{"cneparroquia":"170304","name":"BOLIVAR"},{"cneparroquia":"170305","name":"MACARAPANA"}]},{"cnemunicipio":"170400","name":"CAJIGAL","items":[{"cneparroquia":"170401","name":"YAGUARAPARO"},{"cneparroquia":"170402","name":"LIBERTAD"},{"cneparroquia":"170403","name":"PAUJIL"}]},{"cnemunicipio":"170500","name":"MARI??O","items":[{"cneparroquia":"170501","name":"IRAPA"},{"cneparroquia":"170502","name":"CAMPO CLARO"},{"cneparroquia":"170503","name":"SORO"},{"cneparroquia":"170504","name":"SAN ANTONIO DE IRAPA"},{"cneparroquia":"170505","name":"MARABAL"}]},{"cnemunicipio":"170600","name":"MEJIA","items":[{"cneparroquia":"170601","name":"SAN ANT DEL GOLFO"}]},{"cnemunicipio":"170700","name":"MONTES","items":[{"cneparroquia":"170701","name":"CUMANACOA"},{"cneparroquia":"170702","name":"ARENAS"},{"cneparroquia":"170703","name":"ARICAGUA"},{"cneparroquia":"170704","name":"COCOLLAR"},{"cneparroquia":"170705","name":"SAN FERNANDO"},{"cneparroquia":"170706","name":"SAN LORENZO"}]},{"cnemunicipio":"170800","name":"RIBERO","items":[{"cneparroquia":"170801","name":"CARIACO"},{"cneparroquia":"170802","name":"CATUARO"},{"cneparroquia":"170803","name":"RENDON"},{"cneparroquia":"170804","name":"SANTA CRUZ"},{"cneparroquia":"170805","name":"SANTA MARIA"}]},{"cnemunicipio":"170900","name":"SUCRE","items":[{"cneparroquia":"170901","name":"ALTAGRACIA"},{"cneparroquia":"170902","name":"AYACUCHO"},{"cneparroquia":"170903","name":"SANTA INES"},{"cneparroquia":"170904","name":"VALENTIN VALIENTE"},{"cneparroquia":"170905","name":"SAN JUAN"},{"cneparroquia":"170906","name":"GRAN MARISCAL"},{"cneparroquia":"170907","name":"RAUL LEONI"}]},{"cnemunicipio":"171000","name":"VALDEZ","items":[{"cneparroquia":"171001","name":"GUIRIA"},{"cneparroquia":"171002","name":"CRISTOBAL COLON"},{"cneparroquia":"171003","name":"PUNTA DE PIEDRA"},{"cneparroquia":"171004","name":"BIDEAU"}]},{"cnemunicipio":"171100","name":"ANDRES ELOY BLANCO","items":[{"cneparroquia":"171101","name":"MARI??O"},{"cneparroquia":"171102","name":"ROMULO GALLEGOS"}]},{"cnemunicipio":"171200","name":"LIBERTADOR","items":[{"cneparroquia":"171201","name":"TUNAPUY"},{"cneparroquia":"171202","name":"CAMPO ELIAS"}]},{"cnemunicipio":"171300","name":"ANDRES MATA","items":[{"cneparroquia":"171301","name":"SAN JOSE DE AREOCUAR"},{"cneparroquia":"171302","name":"TAVERA ACOSTA"}]},{"cnemunicipio":"171400","name":"BOLIVAR","items":[{"cneparroquia":"171401","name":"MARIGUITAR"}]},{"cnemunicipio":"171500","name":"CRUZ SALMERON ACOSTA","items":[{"cneparroquia":"171501","name":"ARAYA"},{"cneparroquia":"171502","name":"MANICUARE"},{"cneparroquia":"171503","name":"CHACOPATA"}]}]},{"cneestado":"180000","name":"TACHIRA","items":[{"cnemunicipio":"180100","name":"AYACUCHO","items":[{"cneparroquia":"180101","name":"COLON"},{"cneparroquia":"180102","name":"RIVAS BERTI"},{"cneparroquia":"180103","name":"SAN PEDRO DEL RIO"}]},{"cnemunicipio":"180200","name":"BOLIVAR","items":[{"cneparroquia":"180201","name":"SAN ANT DEL TACHIRA"},{"cneparroquia":"180202","name":"PALOTAL"},{"cneparroquia":"180203","name":"JUAN VICENTE GOMEZ"},{"cneparroquia":"180204","name":"ISAIAS MEDINA ANGARITA"}]},{"cnemunicipio":"180300","name":"INDEPENDENCIA","items":[{"cneparroquia":"180301","name":"CAPACHO NUEVO"},{"cneparroquia":"180302","name":"JUAN GERMAN ROSCIO"},{"cneparroquia":"180303","name":"ROMAN CARDENAS"}]},{"cnemunicipio":"180400","name":"CARDENAS","items":[{"cneparroquia":"180401","name":"TARIBA"},{"cneparroquia":"180402","name":"LA FLORIDA"},{"cneparroquia":"180403","name":"AMENODORO RANGEL LAMUS"}]},{"cnemunicipio":"180500","name":"JAUREGUI","items":[{"cneparroquia":"180501","name":"LA GRITA"},{"cneparroquia":"180502","name":"EMILIO C. GUERRERO"},{"cneparroquia":"180503","name":"MONS. MIGUEL A SALAS"}]},{"cnemunicipio":"180600","name":"JUNIN","items":[{"cneparroquia":"180601","name":"RUBIO"},{"cneparroquia":"180602","name":"BRAMON"},{"cneparroquia":"180603","name":"LA PETROLEA"},{"cneparroquia":"180604","name":"QUINIMARI"}]},{"cnemunicipio":"180700","name":"LOBATERA","items":[{"cneparroquia":"180701","name":"LOBATERA"},{"cneparroquia":"180702","name":"CONSTITUCION"}]},{"cnemunicipio":"180800","name":"SAN CRISTOBAL","items":[{"cneparroquia":"180801","name":"LA CONCORDIA"},{"cneparroquia":"180802","name":"PEDRO MARIA MORANTES"},{"cneparroquia":"180803","name":"SN JUAN BAUTISTA"},{"cneparroquia":"180804","name":"SAN SEBASTIAN"},{"cneparroquia":"180805","name":"DR. FCO. ROMERO LOBO"}]},{"cnemunicipio":"180900","name":"URIBANTE","items":[{"cneparroquia":"180901","name":"PREGONERO"},{"cneparroquia":"180902","name":"CARDENAS"},{"cneparroquia":"180903","name":"POTOSI"},{"cneparroquia":"180904","name":"JUAN PABLO PE??ALOZA"}]},{"cnemunicipio":"181000","name":"CORDOBA","items":[{"cneparroquia":"181001","name":"STA. ANA  DEL TACHIRA"}]},{"cnemunicipio":"181100","name":"GARCIA DE HEVIA","items":[{"cneparroquia":"181101","name":"LA FRIA"},{"cneparroquia":"181102","name":"BOCA DE GRITA"},{"cneparroquia":"181103","name":"JOSE ANTONIO PAEZ"}]},{"cnemunicipio":"181200","name":"GUASIMOS","items":[{"cneparroquia":"181201","name":"PALMIRA"}]},{"cnemunicipio":"181300","name":"MICHELENA","items":[{"cneparroquia":"181301","name":"MICHELENA"}]},{"cnemunicipio":"181400","name":"LIBERTADOR","items":[{"cneparroquia":"181401","name":"ABEJALES"},{"cneparroquia":"181402","name":"SAN JOAQUIN DE NAVAY"},{"cneparroquia":"181403","name":"DORADAS"},{"cneparroquia":"181404","name":"EMETERIO OCHOA"}]},{"cnemunicipio":"181500","name":"PANAMERICANO","items":[{"cneparroquia":"181501","name":"COLONCITO"},{"cneparroquia":"181502","name":"LA PALMITA"}]},{"cnemunicipio":"181600","name":"PEDRO MARIA URE??A","items":[{"cneparroquia":"181601","name":"URE??A"},{"cneparroquia":"181602","name":"NUEVA ARCADIA"}]},{"cnemunicipio":"181700","name":"SUCRE","items":[{"cneparroquia":"181701","name":"QUENIQUEA"},{"cneparroquia":"181702","name":"SAN PABLO"},{"cneparroquia":"181703","name":"ELEAZAR LOPEZ CONTRERAS"}]},{"cnemunicipio":"181800","name":"ANDRES BELLO","items":[{"cneparroquia":"181801","name":"CORDERO"}]},{"cnemunicipio":"181900","name":"FERNANDEZ FEO","items":[{"cneparroquia":"181901","name":"CM.SAN RAFAEL DEL PINAL"},{"cneparroquia":"181902","name":"SANTO DOMINGO"},{"cneparroquia":"181903","name":"ALBERTO ADRIANI"}]},{"cnemunicipio":"182000","name":"LIBERTAD","items":[{"cneparroquia":"182001","name":"CAPACHO VIEJO"},{"cneparroquia":"182002","name":"CIPRIANO CASTRO"},{"cneparroquia":"182003","name":"MANUEL FELIPE RUGELES"}]},{"cnemunicipio":"182100","name":"SAMUEL DARIO MALDONADO","items":[{"cneparroquia":"182101","name":"LA TENDIDA"},{"cneparroquia":"182102","name":"BOCONO"},{"cneparroquia":"182103","name":"HERNANDEZ"}]},{"cnemunicipio":"182200","name":"SEBORUCO","items":[{"cneparroquia":"182201","name":"SEBORUCO"}]},{"cnemunicipio":"182300","name":"ANTONIO ROMULO COSTA","items":[{"cneparroquia":"182301","name":"LAS MESAS"}]},{"cnemunicipio":"182400","name":"FRANCISCO DE MIRANDA","items":[{"cneparroquia":"182401","name":"SAN JOSE DE BOLIVAR"}]},{"cnemunicipio":"182500","name":"JOSE MARIA VARGAS","items":[{"cneparroquia":"182501","name":"EL COBRE"}]},{"cnemunicipio":"182600","name":"RAFAEL URDANETA","items":[{"cneparroquia":"182601","name":"DELICIAS"}]},{"cnemunicipio":"182700","name":"SIMON RODRIGUEZ","items":[{"cneparroquia":"182701","name":"SAN SIMON"}]},{"cnemunicipio":"182800","name":"TORBES","items":[{"cneparroquia":"182801","name":"SAN JOSECITO"}]},{"cnemunicipio":"182900","name":"SAN JUDAS TADEO","items":[{"cneparroquia":"182901","name":"UMUQUENA"}]}]},{"cneestado":"190000","name":"TRUJILLO","items":[{"cnemunicipio":"190100","name":"RAFAEL RANGEL","items":[{"cneparroquia":"190101","name":"BETIJOQUE"},{"cneparroquia":"190102","name":"JOSE G HERNANDEZ"},{"cneparroquia":"190103","name":"LA PUEBLITA"},{"cneparroquia":"190104","name":"EL CEDRO"}]},{"cnemunicipio":"190200","name":"BOCONO","items":[{"cneparroquia":"190201","name":"BOCONO"},{"cneparroquia":"190202","name":"EL CARMEN"},{"cneparroquia":"190203","name":"MOSQUEY"},{"cneparroquia":"190204","name":"AYACUCHO"},{"cneparroquia":"190205","name":"BURBUSAY"},{"cneparroquia":"190206","name":"GENERAL RIVAS"},{"cneparroquia":"190207","name":"MONSE??OR JAUREGUI"},{"cneparroquia":"190208","name":"RAFAEL RANGEL"},{"cneparroquia":"190209","name":"SAN JOSE"},{"cneparroquia":"190210","name":"SAN MIGUEL"},{"cneparroquia":"190211","name":"GUARAMACAL"},{"cneparroquia":"190212","name":"LA VEGA DE GUARAMACAL"}]},{"cnemunicipio":"190300","name":"CARACHE","items":[{"cneparroquia":"190301","name":"CARACHE"},{"cneparroquia":"190302","name":"LA CONCEPCION"},{"cneparroquia":"190303","name":"CUICAS"},{"cneparroquia":"190304","name":"PANAMERICANA"},{"cneparroquia":"190305","name":"SANTA CRUZ"}]},{"cnemunicipio":"190400","name":"ESCUQUE","items":[{"cneparroquia":"190401","name":"ESCUQUE"},{"cneparroquia":"190402","name":"SABANA LIBRE"},{"cneparroquia":"190403","name":"LA UNION"},{"cneparroquia":"190404","name":"SANTA RITA"}]},{"cnemunicipio":"190500","name":"TRUJILLO","items":[{"cneparroquia":"190501","name":"CRISTOBAL MENDOZA"},{"cneparroquia":"190502","name":"CHIQUINQUIRA"},{"cneparroquia":"190503","name":"MATRIZ"},{"cneparroquia":"190504","name":"MONSE??OR CARRILLO"},{"cneparroquia":"190505","name":"CRUZ CARRILLO"},{"cneparroquia":"190506","name":"ANDRES LINARES"},{"cneparroquia":"190507","name":"TRES ESQUINAS"}]},{"cnemunicipio":"190600","name":"URDANETA","items":[{"cneparroquia":"190601","name":"LA QUEBRADA"},{"cneparroquia":"190602","name":"JAJO"},{"cneparroquia":"190603","name":"LA MESA"},{"cneparroquia":"190604","name":"SANTIAGO"},{"cneparroquia":"190605","name":"CABIMBU"},{"cneparroquia":"190606","name":"TU??AME"}]},{"cnemunicipio":"190700","name":"VALERA","items":[{"cneparroquia":"190701","name":"MERCEDES DIAZ"},{"cneparroquia":"190702","name":"JUAN IGNACIO MONTILLA"},{"cneparroquia":"190703","name":"LA BEATRIZ"},{"cneparroquia":"190704","name":"MENDOZA"},{"cneparroquia":"190705","name":"LA PUERTA"},{"cneparroquia":"190706","name":"SAN LUIS"}]},{"cnemunicipio":"190800","name":"CANDELARIA","items":[{"cneparroquia":"190801","name":"CHEJENDE"},{"cneparroquia":"190802","name":"CARRILLO"},{"cneparroquia":"190803","name":"CEGARRA"},{"cneparroquia":"190804","name":"BOLIVIA"},{"cneparroquia":"190805","name":"MANUEL SALVADOR ULLOA"},{"cneparroquia":"190806","name":"SAN JOSE"},{"cneparroquia":"190807","name":"ARNOLDO GABALDON"}]},{"cnemunicipio":"190900","name":"MIRANDA","items":[{"cneparroquia":"190901","name":"EL DIVIDIVE"},{"cneparroquia":"190902","name":"AGUA CALIENTE"},{"cneparroquia":"190903","name":"EL CENIZO"},{"cneparroquia":"190904","name":"AGUA SANTA"},{"cneparroquia":"190905","name":"VALERITA"}]},{"cnemunicipio":"191000","name":"MONTE CARMELO","items":[{"cneparroquia":"191001","name":"MONTE CARMELO"},{"cneparroquia":"191002","name":"BUENA VISTA"},{"cneparroquia":"191003","name":"STA MARIA DEL HORCON"}]},{"cnemunicipio":"191100","name":"MOTATAN","items":[{"cneparroquia":"191101","name":"MOTATAN"},{"cneparroquia":"191102","name":"EL BA??O"},{"cneparroquia":"191103","name":"JALISCO"}]},{"cnemunicipio":"191200","name":"PAMPAN","items":[{"cneparroquia":"191201","name":"PAMPAN"},{"cneparroquia":"191202","name":"SANTA ANA"},{"cneparroquia":"191203","name":"LA PAZ"},{"cneparroquia":"191204","name":"FLOR DE PATRIA"}]},{"cnemunicipio":"191300","name":"SAN RAFAEL DE CARVAJAL","items":[{"cneparroquia":"191301","name":"CARVAJAL"},{"cneparroquia":"191302","name":"ANTONIO N BRICE??O"},{"cneparroquia":"191303","name":"CAMPO ALEGRE"},{"cneparroquia":"191304","name":"JOSE LEONARDO SUAREZ"}]},{"cnemunicipio":"191400","name":"SUCRE","items":[{"cneparroquia":"191401","name":"SABANA DE MENDOZA"},{"cneparroquia":"191402","name":"JUNIN"},{"cneparroquia":"191403","name":"VALMORE RODRIGUEZ"},{"cneparroquia":"191404","name":"EL PARAISO"}]},{"cnemunicipio":"191500","name":"ANDRES BELLO","items":[{"cneparroquia":"191501","name":"SANTA ISABEL"},{"cneparroquia":"191502","name":"ARAGUANEY"},{"cneparroquia":"191503","name":"EL JAGUITO"},{"cneparroquia":"191504","name":"LA ESPERANZA"}]},{"cnemunicipio":"191600","name":"BOLIVAR","items":[{"cneparroquia":"191601","name":"SABANA GRANDE"},{"cneparroquia":"191602","name":"CHEREGUE"},{"cneparroquia":"191603","name":"GRANADOS"}]},{"cnemunicipio":"191700","name":"JOSE FELIPE MARQUEZ CA??IZALES","items":[{"cneparroquia":"191701","name":"EL SOCORRO"},{"cneparroquia":"191702","name":"LOS CAPRICHOS"},{"cneparroquia":"191703","name":"ANTONIO JOSE DE SUCRE"}]},{"cnemunicipio":"191800","name":"JUAN VICENTE CAMPO ELIAS","items":[{"cneparroquia":"191801","name":"CAMPO ELIAS"},{"cneparroquia":"191802","name":"ARNOLDO GABALDON"}]},{"cnemunicipio":"191900","name":"LA CEIBA","items":[{"cneparroquia":"191901","name":"SANTA APOLONIA"},{"cneparroquia":"191902","name":"LA CEIBA"},{"cneparroquia":"191903","name":"EL PROGRESO"},{"cneparroquia":"191904","name":"TRES DE FEBRERO"}]},{"cnemunicipio":"192000","name":"PAMPANITO","items":[{"cneparroquia":"192001","name":"PAMPANITO"},{"cneparroquia":"192002","name":"PAMPANITO II"},{"cneparroquia":"192003","name":"LA CONCEPCION"}]}]},{"cneestado":"200000","name":"YARACUY","items":[{"cnemunicipio":"200100","name":"BOLIVAR","items":[{"cneparroquia":"200101","name":"AROA"}]},{"cnemunicipio":"200200","name":"BRUZUAL","items":[{"cneparroquia":"200201","name":"CHIVACOA"},{"cneparroquia":"200202","name":"CAMPO ELIAS"}]},{"cnemunicipio":"200300","name":"NIRGUA","items":[{"cneparroquia":"200301","name":"NIRGUA"},{"cneparroquia":"200302","name":"SALOM"},{"cneparroquia":"200303","name":"TEMERLA"}]},{"cnemunicipio":"200400","name":"SAN FELIPE","items":[{"cneparroquia":"200401","name":"SAN FELIPE"},{"cneparroquia":"200402","name":"ALBARICO"},{"cneparroquia":"200403","name":"SAN JAVIER"}]},{"cnemunicipio":"200500","name":"SUCRE","items":[{"cneparroquia":"200501","name":"GUAMA"}]},{"cnemunicipio":"200600","name":"URACHICHE","items":[{"cneparroquia":"200601","name":"URACHICHE"}]},{"cnemunicipio":"200700","name":"PE??A","items":[{"cneparroquia":"200701","name":"YARITAGUA"},{"cneparroquia":"200702","name":"SAN ANDRES"}]},{"cnemunicipio":"200800","name":"JOSE ANTONIO PAEZ","items":[{"cneparroquia":"200801","name":"SABANA DE PARRA"}]},{"cnemunicipio":"200900","name":"LA TRINIDAD","items":[{"cneparroquia":"200901","name":"BORAURE"}]},{"cnemunicipio":"201000","name":"COCOROTE","items":[{"cneparroquia":"201001","name":"COCOROTE"}]},{"cnemunicipio":"201100","name":"INDEPENDENCIA","items":[{"cneparroquia":"201101","name":"INDEPENDENCIA"}]},{"cnemunicipio":"201200","name":"ARISTIDES BASTIDAS","items":[{"cneparroquia":"201201","name":"SAN PABLO"}]},{"cnemunicipio":"201300","name":"MANUEL MONGE","items":[{"cneparroquia":"201301","name":"YUMARE"}]},{"cnemunicipio":"201400","name":"VEROES","items":[{"cneparroquia":"201401","name":"FARRIAR"},{"cneparroquia":"201402","name":"EL GUAYABO"}]}]},{"cneestado":"210000","name":"ZULIA","items":[{"cnemunicipio":"210100","name":"BARALT","items":[{"cneparroquia":"210101","name":"GENERAL URDANETA"},{"cneparroquia":"210102","name":"LIBERTADOR"},{"cneparroquia":"210103","name":"MANUEL GUANIPA MATOS"},{"cneparroquia":"210104","name":"MARCELINO BRICE??O"},{"cneparroquia":"210105","name":"SAN TIMOTEO"},{"cneparroquia":"210106","name":"PUEBLO NUEVO"}]},{"cnemunicipio":"210200","name":"SANTA RITA","items":[{"cneparroquia":"210201","name":"PEDRO LUCAS URRIBARRI"},{"cneparroquia":"210202","name":"SANTA RITA"},{"cneparroquia":"210203","name":"JOSE CENOVIO URRIBARRI"},{"cneparroquia":"210204","name":"EL MENE"}]},{"cnemunicipio":"210300","name":"COLON","items":[{"cneparroquia":"210301","name":"SANTA CRUZ DEL ZULIA"},{"cneparroquia":"210302","name":"URRIBARRI"},{"cneparroquia":"210303","name":"MORALITO"},{"cneparroquia":"210304","name":"SAN CARLOS DEL ZULIA"},{"cneparroquia":"210305","name":"SANTA BARBARA"}]},{"cnemunicipio":"210400","name":"MARA","items":[{"cneparroquia":"210401","name":"LUIS DE VICENTE"},{"cneparroquia":"210402","name":"RICAURTE"},{"cneparroquia":"210403","name":"MONS.MARCOS SERGIO G"},{"cneparroquia":"210404","name":"SAN RAFAEL"},{"cneparroquia":"210405","name":"LAS PARCELAS"},{"cneparroquia":"210406","name":"TAMARE"},{"cneparroquia":"210407","name":"LA SIERRITA"}]},{"cnemunicipio":"210500","name":"MARACAIBO","items":[{"cneparroquia":"210501","name":"BOLIVAR"},{"cneparroquia":"210502","name":"COQUIVACOA"},{"cneparroquia":"210503","name":"CRISTO DE ARANZA"},{"cneparroquia":"210504","name":"CHIQUINQUIRA"},{"cneparroquia":"210505","name":"SANTA LUCIA"},{"cneparroquia":"210506","name":"OLEGARIO VILLALOBOS"},{"cneparroquia":"210507","name":"JUANA DE AVILA"},{"cneparroquia":"210508","name":"CARACCIOLO PARRA PEREZ"},{"cneparroquia":"210509","name":"IDELFONZO VASQUEZ"},{"cneparroquia":"210510","name":"CACIQUE MARA"},{"cneparroquia":"210511","name":"CECILIO ACOSTA"},{"cneparroquia":"210512","name":"RAUL LEONI"},{"cneparroquia":"210513","name":"FRANCISCO EUGENIO B"},{"cneparroquia":"210514","name":"MANUEL DAGNINO"},{"cneparroquia":"210515","name":"LUIS HURTADO HIGUERA"},{"cneparroquia":"210516","name":"VENANCIO PULGAR"},{"cneparroquia":"210517","name":"ANTONIO BORJAS ROMERO"},{"cneparroquia":"210518","name":"SAN ISIDRO"}]},{"cnemunicipio":"210600","name":"MIRANDA","items":[{"cneparroquia":"210601","name":"FARIA"},{"cneparroquia":"210602","name":"SAN ANTONIO"},{"cneparroquia":"210603","name":"ANA MARIA CAMPOS"},{"cneparroquia":"210604","name":"SAN JOSE"},{"cneparroquia":"210605","name":"ALTAGRACIA"}]},{"cnemunicipio":"210700","name":"GUAJIRA","items":[{"cneparroquia":"210701","name":"GOAJIRA"},{"cneparroquia":"210702","name":"ELIAS SANCHEZ RUBIO"},{"cneparroquia":"210703","name":"SINAMAICA"},{"cneparroquia":"210704","name":"ALTA GUAJIRA"}]},{"cnemunicipio":"210800","name":"MACHIQUES DE PERIJA","items":[{"cneparroquia":"210801","name":"SAN JOSE DE PERIJA"},{"cneparroquia":"210802","name":"BARTOLOME DE LAS CASAS"},{"cneparroquia":"210803","name":"LIBERTAD"},{"cneparroquia":"210804","name":"RIO NEGRO"}]},{"cnemunicipio":"210900","name":"SUCRE","items":[{"cneparroquia":"210901","name":"GIBRALTAR"},{"cneparroquia":"210902","name":"HERAS"},{"cneparroquia":"210903","name":"M.ARTURO CELESTINO A"},{"cneparroquia":"210904","name":"ROMULO GALLEGOS"},{"cneparroquia":"210905","name":"BOBURES"},{"cneparroquia":"210906","name":"EL BATEY"}]},{"cnemunicipio":"211000","name":"LA CA??ADA DE URDANETA","items":[{"cneparroquia":"211001","name":"ANDRES BELLO (KM 48)"},{"cneparroquia":"211002","name":"POTRERITOS"},{"cneparroquia":"211003","name":"EL CARMELO"},{"cneparroquia":"211004","name":"CHIQUINQUIRA"},{"cneparroquia":"211005","name":"CONCEPCION"}]},{"cnemunicipio":"211100","name":"LAGUNILLAS","items":[{"cneparroquia":"211101","name":"ELEAZAR LOPEZ CONTRERAS"},{"cneparroquia":"211102","name":"ALONSO DE OJEDA"},{"cneparroquia":"211103","name":"VENEZUELA"},{"cneparroquia":"211104","name":"CAMPO LARA"},{"cneparroquia":"211105","name":"LIBERTAD"},{"cneparroquia":"211106","name":"EL DANTO"}]},{"cnemunicipio":"211200","name":"CATATUMBO","items":[{"cneparroquia":"211201","name":"UDON PEREZ"},{"cneparroquia":"211202","name":"ENCONTRADOS"}]},{"cnemunicipio":"211300","name":"ROSARIO DE PERIJA","items":[{"cneparroquia":"211301","name":"DONALDO GARCIA"},{"cneparroquia":"211302","name":"SIXTO ZAMBRANO"},{"cneparroquia":"211303","name":"EL ROSARIO"}]},{"cnemunicipio":"211400","name":"CABIMAS","items":[{"cneparroquia":"211401","name":"AMBROSIO"},{"cneparroquia":"211402","name":"GERMAN RIOS LINARES"},{"cneparroquia":"211403","name":"JORGE HERNANDEZ"},{"cneparroquia":"211404","name":"LA ROSA"},{"cneparroquia":"211405","name":"PUNTA GORDA"},{"cneparroquia":"211406","name":"CARMEN HERRERA"},{"cneparroquia":"211407","name":"SAN BENITO"},{"cneparroquia":"211408","name":"ROMULO BETANCOURT"},{"cneparroquia":"211409","name":"ARISTIDES CALVANI"}]},{"cnemunicipio":"211500","name":"VALMORE RODRIGUEZ","items":[{"cneparroquia":"211501","name":"RAUL CUENCA"},{"cneparroquia":"211502","name":"LA VICTORIA"},{"cneparroquia":"211503","name":"RAFAEL URDANETA"}]},{"cnemunicipio":"211600","name":"JESUS ENRIQUE LOSSADA","items":[{"cneparroquia":"211601","name":"JOSE RAMON YEPEZ"},{"cneparroquia":"211602","name":"LA CONCEPCION"},{"cneparroquia":"211603","name":"SAN JOSE"},{"cneparroquia":"211604","name":"MARIANO PARRA LEON"}]},{"cnemunicipio":"211700","name":"ALMIRANTE PADILLA","items":[{"cneparroquia":"211701","name":"MONAGAS"},{"cneparroquia":"211702","name":"ISLA DE TOAS"}]},{"cnemunicipio":"211800","name":"SAN FRANCISCO","items":[{"cneparroquia":"211801","name":"MARCIAL HERNANDEZ"},{"cneparroquia":"211802","name":"FRANCISCO OCHOA"},{"cneparroquia":"211803","name":"SAN FRANCISCO"},{"cneparroquia":"211804","name":"EL BAJO"},{"cneparroquia":"211805","name":"DOMITILA FLORES"},{"cneparroquia":"211806","name":"LOS CORTIJOS"},{"cneparroquia":"211807","name":"JOSE DOMINGO RUS"}]},{"cnemunicipio":"211900","name":"JESUS MARIA SEMPRUM","items":[{"cneparroquia":"211901","name":"BARI"},{"cneparroquia":"211902","name":"JESUS M SEMPRUN"}]},{"cnemunicipio":"212000","name":"FRANCISCO JAVIER PULGAR","items":[{"cneparroquia":"212001","name":"SIMON RODRIGUEZ"},{"cneparroquia":"212002","name":"CARLOS QUEVEDO"},{"cneparroquia":"212003","name":"FRANCISCO J PULGAR"},{"cneparroquia":"212004","name":"AGUSTIN CODAZZI"}]},{"cnemunicipio":"212100","name":"SIMON BOLIVAR","items":[{"cneparroquia":"212101","name":"RAFAEL MARIA BARALT"},{"cneparroquia":"212102","name":"MANUEL MANRIQUE"},{"cneparroquia":"212103","name":"RAFAEL URDANETA"}]}]},{"cneestado":"220000","name":"AMAZONAS","items":[{"cnemunicipio":"220100","name":"ATURES","items":[{"cneparroquia":"220101","name":"FERNANDO GIRON TOVAR"},{"cneparroquia":"220102","name":"LUIS ALBERTO GOMEZ"},{"cneparroquia":"220103","name":"PARHUE??A"},{"cneparroquia":"220104","name":"PLATANILLAL"}]},{"cnemunicipio":"220200","name":"ATABAPO","items":[{"cneparroquia":"220201","name":"SAN FERNANDO DE ATABAPO"},{"cneparroquia":"220202","name":"UCATA"},{"cneparroquia":"220203","name":"YAPACANA"},{"cneparroquia":"220204","name":"CANAME"}]},{"cnemunicipio":"220300","name":"MAROA","items":[{"cneparroquia":"220301","name":"MAROA"},{"cneparroquia":"220302","name":"VICTORINO"},{"cneparroquia":"220303","name":"COMUNIDAD"}]},{"cnemunicipio":"220400","name":"RIO NEGRO","items":[{"cneparroquia":"220401","name":"SAN CARLOS DE RIO NEGRO"},{"cneparroquia":"220402","name":"SOLANO"},{"cneparroquia":"220403","name":"CASIQUIARE"},{"cneparroquia":"220404","name":"COCUY"}]},{"cnemunicipio":"220500","name":"AUTANA","items":[{"cneparroquia":"220501","name":"ISLA DE RATON"},{"cneparroquia":"220502","name":"SAMARIAPO"},{"cneparroquia":"220503","name":"SIPAPO"},{"cneparroquia":"220504","name":"MUNDUAPO"},{"cneparroquia":"220505","name":"GUAYAPO"}]},{"cnemunicipio":"220600","name":"MANAPIARE","items":[{"cneparroquia":"220601","name":"SAN JUAN DE MANAPIARE"},{"cneparroquia":"220602","name":"ALTO VENTUARI"},{"cneparroquia":"220603","name":"MEDIO VENTUARI"},{"cneparroquia":"220604","name":"BAJO VENTUARI"}]},{"cnemunicipio":"220700","name":"ALTO ORINOCO","items":[{"cneparroquia":"220701","name":"LA ESMERALDA"},{"cneparroquia":"220702","name":"HUACHAMACARE"},{"cneparroquia":"220703","name":"MARAWAKA"},{"cneparroquia":"220704","name":"MAVACA"},{"cneparroquia":"220705","name":"SIERRA PARIMA"}]}]},{"cneestado":"230000","name":"DELTA AMACURO","items":[{"cnemunicipio":"230100","name":"TUCUPITA","items":[{"cneparroquia":"230101","name":"SAN JOSE"},{"cneparroquia":"230102","name":"VIRGEN DEL VALLE"},{"cneparroquia":"230103","name":"SAN RAFAEL"},{"cneparroquia":"230104","name":"JOSE VIDAL MARCANO"},{"cneparroquia":"230105","name":"LEONARDO RUIZ PINEDA"},{"cneparroquia":"230106","name":"MONS. ARGIMIRO GARCIA"},{"cneparroquia":"230107","name":"MCL. ANTONIO J DE SUCRE"},{"cneparroquia":"230108","name":"JUAN MILLAN"}]},{"cnemunicipio":"230200","name":"PEDERNALES","items":[{"cneparroquia":"230201","name":"PEDERNALES"},{"cneparroquia":"230202","name":"LUIS B PRIETO FIGUERO"}]},{"cnemunicipio":"230300","name":"ANTONIO DIAZ","items":[{"cneparroquia":"230301","name":"CURIAPO"},{"cneparroquia":"230302","name":"SANTOS DE ABELGAS"},{"cneparroquia":"230303","name":"MANUEL RENAUD"},{"cneparroquia":"230304","name":"PADRE BARRAL"},{"cneparroquia":"230305","name":"ANICETO LUGO"},{"cneparroquia":"230306","name":"ALMIRANTE LUIS BRION"}]},{"cnemunicipio":"230400","name":"CASACOIMA","items":[{"cneparroquia":"230401","name":"IMATACA"},{"cneparroquia":"230402","name":"ROMULO GALLEGOS"},{"cneparroquia":"230403","name":"JUAN BAUTISTA ARISMEN"},{"cneparroquia":"230404","name":"MANUEL PIAR"},{"cneparroquia":"230405","name":"5 DE JULIO"}]}]},{"cneestado":"240000","name":"VARGAS","items":[{"cnemunicipio":"240100","name":"VARGAS","items":[{"cneparroquia":"240101","name":"CARABALLEDA"},{"cneparroquia":"240102","name":"CARAYACA"},{"cneparroquia":"240103","name":"CARUAO"},{"cneparroquia":"240104","name":"CATIA LA MAR"},{"cneparroquia":"240105","name":"LA GUAIRA"},{"cneparroquia":"240106","name":"MACUTO"},{"cneparroquia":"240107","name":"MAIQUETIA"},{"cneparroquia":"240108","name":"NAIGUATA"},{"cneparroquia":"240109","name":"EL JUNKO"},{"cneparroquia":"240110","name":"URIMARE"},{"cneparroquia":"240111","name":"CARLOS SOUBLETTE"}]}]}]
})
 // https://www.youtube.com/watch?v=ncBSWL1tkr0
  //https://github.com/danba340/todos-recoil
  // const addTodo = () => {
  //   setORGANIZACION((oldList) => [
  //     ...oldList,
  //     {
  //       "id": 226,"nombre": "PCV","descripcion": "Partico Comunisra", "selected": true,value: 800
  //     },
  // ]);
  // }

  // const addTodo = () => {
  //   setORGANIZACION((oldList) => [
  //     ...oldList,
  //     {
  //       "id": 226,"nombre": "PCV","descripcion": "Partico Comunisra", "selected": true,value: 800
  //     },
  // ]);
  // }
  // const toggleTodo = (index) => {
  
  //   setORGANIZACION((oldTodoList) => {
  //     const newTodoList = oldTodoList.map((todo, i) => {
  //       if (index === i) {
  //         return {
  //           ...todo,
  //           selected: !todo.selected,
  //         };
  //       } else {
  //         return todo;
  //       }
  //     });
  // //    setPersistedTodoList(newTodoList);
  //     return newTodoList;
  //   });
  // };
  // const deleteTodo = (index) => {
  //   setORGANIZACION((oldList) => {
  //     const newList = oldList.filter(function (el, i) {
  //      // alert()
  //       return index != i;
  //     });
  //     //setORGANIZACION(newList);
  //     return newList;
  //   });
    
  
  // };
  

  ///////////////////////////////////
  //https://www.youtube.com/watch?v=tqlUfdIdzk0
//CRUD https://github.com/mrhm-dev/recoil-cc/blob/master/src/demo/todoApp/state.js
// Custom Hooks
// export const useTodoList = () => {
// 	const [todoList, setTodoList] = useRecoilState(todoListState);
// 	return {
// 		addItem: (value) =>
// 			setTodoList((prev) => [
// 				...prev,
// 				{
// 					id: generateId(),
// 					text: value,
// 					isComplete: false,
// 				},
// 			]),
// 		toggleComplete: (id) => {
// 			const { cloned, index } = cloneArray(todoList, id);
// 			cloned[index].isComplete = !cloned[index].isComplete;
// 			setTodoList(cloned);
// 		},
// 		editItem: (id, value) => {
// 			const { cloned, index } = cloneArray(todoList, id);
// 			cloned[index].text = value;
// 			setTodoList(cloned);
// 		},
// 		deleteItem: (id) => {
// 			const { cloned, index } = cloneArray(todoList, id);
// 			cloned.splice(index, 1);
// 			setTodoList(cloned);
// 		},
// 	};
// };
//ASYNC
//https://codesandbox.io/s/recoiljs-is-meant-to-rock-your-react-world-oljjf?file=/src/Demo.jsx