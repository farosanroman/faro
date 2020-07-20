import Geocode from "react-geocode";
//import usePosition from './useposition'
//import { useGeoPosition } from 'the-platform';

//Geocode.setApiKey("AIzaSyDmSUv0VdWm-a2Q26xUVmM_6q-PEm3VOyk");
//vino2019
Geocode.setApiKey("AIzaSyCuT_6s8mM3unkG_sgUXBwlbJR60ByZTQw");

// Enable or disable logs. Its optional.
Geocode.enableDebug();
export  const getGeolocation=(position,callback)=>{



// Get address from latidude & longitude.
Geocode.fromLatLng(position.latitude,position.longitude).then(
  response => {
//    const address = response.results[0].formatted_address;
 //alert(JSON.stringify(response))
 //   console.log(JSON.stringify(response));
const addres = response.results[0].long_name;
      var countryshort="world";
      var countrylong="world";
      var estado="";
      var estadolong="";
      var municipio="";
      var municipiolong="";
      var ciudad="";
      var ciudadlong="";
      var urbanizacion="";
      var urbanizacionlong="";
      var ruta=""
      var rutalong=""
      var postalcode="00000";
      var premisa="";
      var premisalong="";
      var address=response.results[0].address_components 
      var formatted_address=response.results[0].formatted_address
//alert(formatted_address)
for (var i = 0; i < address.length; i ++){
      if (address[i].types[0]=="country"){ 
        countryshort=address[i].short_name
        countrylong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="administrative_area_level_1")&&(address[i].types[1]=="political")){ 
        estado=address[i].short_name
        estadolong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="administrative_area_level_2")&&(address[i].types[1]=="political")){ 
        municipio=address[i].short_name
        municipiolong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="locality")&&(address[i].types[1]=="political")){ 
        ciudad=address[i].short_name
        ciudadlong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="political")&&(address[i].types[1]=="sublocality")&&(address[i].types[2]=="sublocality_level_1")){ 
        urbanizacion=address[i].short_name
        urbanizacionlong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="route")){ 
        ruta=address[i].short_name
        rutalong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="premise")){ 
        premisa=address[i].short_name
        premisalong=address[i].long_name
        //alert(country)
      }
      if (address[i].types[0]=="postal_code"){ 
        postalcode=address[i].short_name
        //alert(country)
      }
      }    
      var geolocation={country:countryshort,countrylong,estado:estado,municipio:municipio,municipiolong:municipiolong,ciudad:ciudad,ciudadlong:ciudadlong,urbanizacion,urbanizacionlong,ruta,rutalong,premisa,premisalong,postalcode:postalcode,formatted_address}
//alert(JSON.stringify(geolocation))
         callback(geolocation)
 
  },
  error => {
      var geolocation={country:"VE",countrylong:"VE",estado:"ES",municipio:"MU",municipiolong:"MUNICIPIO",ciudad:"VE",ciudadlong:"VE",urbanizacion:"URB",urbanizacionlong:"URB",ruta:"RUTA",rutalong:"RUTALONG",premisa:"PREMISA",premisalong:"PREMISALONG",postalcode:"postalcode"}
         callback(geolocation)
     
  }
);
}
export  const getGeolocation2=(position,callback)=>{
 // https://medium.com/@imranhsayed/google-maps-in-react-autocomplete-location-search-draggable-marker-marker-infobox-565ab8e8cf22
  alert("getGeolocation"+JSON.stringify(position))
      //var geolocation
 //     Geocode.setApiKey("AIzaSyC8pGm126D4IKJ7ATE5afBgePewNvoAob8");
 
 Geocode.setApiKey("AIzaSyDmSUv0VdWm-a2Q26xUVmM_6q-PEm3VOyk");
 //Geocode.fromLatLng("10.4","-66.7").then(

  Geocode.fromLatLng(position.latitude,position.longitude).then(
    response => {
    
     //alert("geogeo"+JSON.stringify(response))
     alert("geo[0]"+JSON.stringify(response.results[0]))
     console.log(JSON.stringify(response.results[0]))
const addres = response.results[0].long_name;
      var countryshort="world";
      var countrylong="world";
      var estado="";
      var estadolong="";
      var municipio="";
      var municipiolong="";
      var ciudad="";
      var ciudadlong="";
      var urbanizacion="";
      var urbanizacionlong="";
      var ruta=""
      var rutalong=""
      var postalcode="00000";
      var premisa="";
      var premisalong="";
      var address=response.results[0].address_components 

for (var i = 0; i < address.length; i ++){
      if (address[i].types[0]=="country"){ 
        countryshort=address[i].short_name
        countrylong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="administrative_area_level_1")&&(address[i].types[1]=="political")){ 
        estado=address[i].short_name
        estadolong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="administrative_area_level_2")&&(address[i].types[1]=="political")){ 
        municipio=address[i].short_name
        municipiolong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="locality")&&(address[i].types[1]=="political")){ 
        ciudad=address[i].short_name
        ciudadlong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="political")&&(address[i].types[1]=="sublocality")&&(address[i].types[2]=="sublocality_level_1")){ 
        urbanizacion=address[i].short_name
        urbanizacionlong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="route")){ 
        ruta=address[i].short_name
        rutalong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="premise")){ 
        premisa=address[i].short_name
        premisalong=address[i].long_name
        //alert(country)
      }
      if (address[i].types[0]=="postal_code"){ 
        postalcode=address[i].short_name
        //alert(country)
      }
      }    
      var geolocation={country:countryshort,countrylong,estado:estado,municipio:municipio,municipiolong:municipiolong,ciudad:ciudad,ciudadlong:ciudadlong,urbanizacion,urbanizacionlong,ruta,rutalong,premisa,premisalong,postalcode:postalcode}
      //console.log(geolocation.location);
      callback(geolocation)
      //this.setState({address:response.results[0].address_components,country:country})
     //console.log(response);
    },
    error => {
    alert("error"+JSON.stringify(error))
      console.error(error);
      var geolocation={country:"VE",countrylong:"VE",estado:"ES",municipio:"MU",municipiolong:"MUNICIPIO",ciudad:"VE",ciudadlong:"VE",urbanizacion:"URB",urbanizacionlong:"URB",ruta:"RUTA",rutalong:"RUTALONG",premisa:"PREMISA",premisalong:"PREMISALONG",postalcode:"postalcode"}
      //console.log(geolocation.location);
      callback(geolocation)
    })
    
  
  

      
      };

export  const resultados=(centros,callback)=>{
  var resultado = {electores:0,centros:0,mesas:0,votos:0,unidad:0,oficialismo:0,otros:0,nulos:0,porcunidad:0,porcoficialismo:0,participacion:0};
  var numbers = [65, 44, 12, 4];
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
  resultados.participacion=0.0
  if ((resultado.votos>0)&&(resultado.electores>0)){
  resultado.participacion=resultado.votos/resultado.electores*100.0
  }
  callback(resultado)

}
export  const getLocation=(mensaje,callback)=>{
   // alert(JSON.stringify(mensaje))
   
    var url="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDmSUv0VdWm-a2Q26xUVmM_6q-PEm3VOyk"
    // url="https://archivosamarillos.blob.core.windows.net/manualesfaro/0101.json"
    //alert(url)
    var mensaje=""
    fetch(url,{
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
   })
   .then(response => response.json())
       .catch(error =>{
        //alert("error"+JSON.stringify(error))
         callback([])
       })
   .then(data => {
    //alert("helper"+JSON.stringify(data)+"helper")
      callback(data)




    
     //console.log(data)
   })
   .catch(error => {callback([])});
    
    };
    export  const getLocation22=(mensaje,callback)=>{
      var geolocation
  //    alert(JSON.stringify(mensaje))
      var location
      var url="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAIbEcob4vSkEpy1XUzw4v-ukdHAORHsD0"
      // url="https://archivosamarillos.blob.core.windows.net/manualesfaro/0101.json"
      //alert(url)
      var mensaje=""
      fetch(url,{
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
     })
     .then(response => response.json())
         .catch(error =>{
           //NO HAY INTERNET
          //alert("error geolocation (helper.js)"+JSON.stringify(error))
           callback({flagConexion:false})
         })
     .then(data => {
   // alert("helper"+JSON.stringify(data)+"helper")
    //  alert(data.error.errors[0].reason)
      if (data.error.errors[0].reason=="dailyLimitExceeded"){
   //     alert("si")
        //data.location={lng:-66.9188,lat:10.509}
        location={lat:10.000,lng:-67.0000}
     //   alert(JSON.stringify(location))
      }else{
            location=data.location
      }
 Geocode.setApiKey("AIzaSyC8pGm126D4IKJ7ATE5afBgePewNvoAob8");
  Geocode.fromLatLng(location.lat,location.lng).then(
    response => {
    
     //alert("geogeo"+JSON.stringify(response))
     //alert("geo[0]"+JSON.stringify(response.results[0].address_components))
      const addres = response.results[0].long_name;
      var countryshort="world";
      var countrylong="world";
      var estado="";
      var estadolong="";
      var municipio="";
      var municipiolong="";
      var ciudad="";
      var ciudadlong="";
      var urbanizacion="";
      var urbanizacionlong="";
      var ruta=""
      var rutalong=""
      var postalcode="00000";
      var premisa="";
      var premisalong="";
      var address=response.results[0].address_components
      for (var i = 0; i < address.length; i ++){
      if (address[i].types[0]=="country"){ 
        countryshort=address[i].short_name
        countrylong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="administrative_area_level_1")&&(address[i].types[1]=="political")){ 
        estado=address[i].short_name
        estadolong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="administrative_area_level_2")&&(address[i].types[1]=="political")){ 
        municipio=address[i].short_name
        municipiolong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="locality")&&(address[i].types[1]=="political")){ 
        ciudad=address[i].short_name
        ciudadlong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="political")&&(address[i].types[1]=="sublocality")&&(address[i].types[2]=="sublocality_level_1")){ 
        urbanizacion=address[i].short_name
        urbanizacionlong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="route")){ 
        ruta=address[i].short_name
        rutalong=address[i].long_name
        //alert(country)
      }
      if ((address[i].types[0]=="premise")){ 
        premisa=address[i].short_name
        premisalong=address[i].long_name
        //alert(country)
      }
      if (address[i].types[0]=="postal_code"){ 
        postalcode=address[i].short_name
        //alert(country)
      }
      }
      var geolocation={location:data.location,accuracy:data.accuracy,country:countryshort,countrylong,estado:estado,municipio:municipio,municipiolong:municipiolong,ciudad:ciudad,ciudadlong:ciudadlong,urbanizacion,urbanizacionlong,ruta,rutalong,premisa,premisalong,postalcode:postalcode}
      console.log(geolocation.location);
      callback(geolocation)
      //this.setState({address:response.results[0].address_components,country:country})
     //console.log(response);
    },
    error => {
    // alert("error"+JSON.stringify(error))
      console.error(error);
    })
    
  
  
  
  
      
       //console.log(data)
     })
     .catch(error => {callback([])});
      
      };
      //////////////////

  ///////////////////////////////////
  //////////////////////////////////
  ////////////////////////////////////
  ///////////////////////////////////
    
export  const getCentrosCODCNE=(codcne,callback)=>{
   // codcne="01"
   if (codcne=="00"){
   // alert(codcne) 
    codcne=""}
    const url="https://faro2018consultas.azurewebsites.net/api/centrosxcodcne?codcne="+codcne
 // alert(url)
    fetch(url,{     
  })
  .then(response => response.json())
      .catch(error =>{
        callback([])
      })
  .then(data => {
    //alert("helper"+JSON.stringify(data)+"helper")
   callback(data)
  })
  
  };


export  const getPersonasCODCNE=(codcne,callback)=>{
  //alert(codcne)
    const url="https://faro2018consultas.azurewebsites.net/api/personasxcodcnexroles?codcne=13&roles=231,230,232"
   fetch(url,{     
  })
  .then(response => response.json())
      .catch(error =>{
        callback([])
      })
  .then(data => {
   // alert("helper"+JSON.stringify(data)+"helper")
   callback(data)
  })
  
  };
/*
export  const getPersonaFaro=(cedula,callback)=>{
    const url="https://faro2018consultas.azurewebsites.net/api/twtpersona?cedula="+cedula
   fetch(url,{     
  })
  .then(response => response.json())
      .catch(error =>{
        callback([])
      })
  .then(data => {
    //alert("helper"+JSON.stringify(data)+"helper")
   callback(data)
  })
  
  };
  */
  export  const getFormulariosBase=(idformulario,callback)=>{
    const url="https://geofaro.azurewebsites.net/api/FormulariosbaseGet?code=VcLl5IimP/pKy2fb1RTl7r/E1QgMKAObz4J/0rZbO58dvCM/U75yew==";
   fetch(url,{     
  })
  .then(response => response.json())
      .catch(error =>{
       // alert("error"+JSON.stringify(error))
        callback([])
      })
  .then(data => {
    //alert(data)
   // alert("helper"+JSON.stringify(data)+"helper")
   callback(data)
  })
  
  };
  ////////////////////////////
  export  const getFormularioBase=(idformulario,callback)=>{
    const url="https://geofaro.azurewebsites.net/api/FormulariobaseGet?code=Gf0mb3wc83fzMVDMzTEx0rQm2FmoZ5TDyp2BUTIOtTLC1cJpbBKd/A==&id="+idformulario
   fetch(url,{     
  })
  .then(response => response.json())
      .catch(error =>{
       // alert("error"+JSON.stringify(error))
        callback([])
      })
  .then(data => {
    //alert("helper"+JSON.stringify(data)+"helper")
   callback(data)
  })
  
  };
  ////////////////////////////
  
  export  const postMensaje=(mensaje,callback)=>{
  //alert(JSON.stringify(mensaje))
  
   var url= "https://farodesarrollo2010.azurewebsites.net/api/FormularioPersonaPost?code=VtEH0pzl8ADUEHmaoT7NDikIh6WGOgZuYHc5pvLsDdeALF1iqLdKWg==";
   fetch(url,{
   method: "POST",
   body: JSON.stringify(mensaje),
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
     },
  })
  .then(response => response.json())
      .catch(error =>{
       // alert("error"+JSON.stringify(error))
        callback([])
      })
  .then(data => {
    alert("helper"+JSON.stringify(data)+"helper")
   callback(data)
  })
  .catch(error => {callback("error")});
  
  
  };
    //////////////////
    export  const getFormulario=(cedulaidformulario,callback)=>{
      //alert(JSON.stringify(mensaje))
      
       var url= "https://geofaro.azurewebsites.net/api/FormularioGet?code=v4bRQ3gXGf37hkInDVfHaHu7/xQJuh/4LuxfPqN3g9eGxp2tuaUMIg==&id="+cedulaidformulario;
       
       fetch(url,{     
      })
        .then(response => {
             response.json().then(data => {
             // alert(JSON.stringify(data))
              if (data.length>0){
                 callback(data) 
                }else{
                  callback([])
                }
         });  
       })
      .catch(error => callback('error'));
    
    
      
      };
  ///////////////////////////////////////////////////////////////////////////////
  
  export  const getFormulariosAllxIdFormulario=(idformulario,callback)=>{
    //alert(JSON.stringify(mensaje))
    //FUUERA DE COMBATE
     var url= "https://geofaro.azurewebsites.net/api/FormulariosAllxIdformularioGet?code=xKb4ASWqC5zzogF/sDXwCqCL9vI132xxY6zhYTCxHdh5PHoXxkru2g==&id="+idformulario;
     
     fetch(url,{     
    })
      .then(response => {
           response.json().then(data => {
           // alert(JSON.stringify(data))
            if (data.length>0){
               callback(data) 
              }else{
                callback([])
              }
       });  
     })
    .catch(error => callback('error'));
  
  
    
    };
    //////////////////
    
  
    export  const getFormulariosCorreosPendientesxIdFormulario=(idformulario,callback)=>{
      //alert(JSON.stringify(mensaje))
      //FUUERA DE COMBATE
       var url= "https://geofaro.azurewebsites.net/api/FormulariosCorreosPendientesxIdformularioGet?code=wAe4IbpZJvXC0XWsbKBroMwPvdI5ySNMmd3XzlYAlM4cn5akQpKCZg==&id="+idformulario;
       
       fetch(url,{     
      })
        .then(response => {
             response.json().then(data => {
             // alert(JSON.stringify(data))
              if (data.length>0){
                 callback(data) 
                }else{
                  callback([])
                }
         });  
       })
      .catch(error => callback('error'));
    
    
      
      };
  
    export  const getpostMensaje=(criteria,callback)=>{
      //alert(JSON.stringify(mensaje))
      //console.log(id)
       var url= "https://geofaro.azurewebsites.net/api/FormularioGetPost?code=oWmJ8Vf0rLp6Ne4vubO6lghIFODGtPMfKaW6uwgE7ca8oOhQatwwlg==&id="+criteria.id+"&valido="+criteria.valido;
             //alert(url)    
       
       fetch(url,{     
      })
        .then(response => {
             response.json().then(data => {
             // alert("then"+JSON.stringify(data))
              if (data.length>0){
  
                 callback(data) 
                }else{
                  callback([])
                }
         });  
       })
      .catch(error => callback('error'));
    
    
      
      };
    //https://w.trhou.se/bhriv87fql
    /////////////////////////////////////////////////////////////////////////////////
    export  const mailVerify1=(correo,callback)=>{
      //alert(JSON.stringify(mensaje))
      //console.log(id)
       var url= "http://nodechatbotjson.azurewebsites.net/mailverify?mail="+correo.correo+"&cedula="+correo.cedula 
       
     ;
      fetch(url,{     
      })
        .then(response => {
             response.json().then(data => {
              
                 callback(data) 
              
         });  
       })
      .catch(error => callback('error'));
    
      };
    
  
    export  const mailVerify=(correos,callback)=>{
    //http://nodechatbotjson.azurewebsites.net/mailverify?mail=ppazpurua@gmail.com&correo=999
    alert("helper"+JSON.stringify(correos))
    alert("http://nodechatbotjson.azurewebsites.net/mailverify?mail="+correos[0].correo+"&cedula="+correos[0].cedula)
      var i=0
    const  urls=correos.map(c=>
        
          "http://nodechatbotjson.azurewebsites.net/mailverify?mail="+c.correo+"&cedula="+c.cedula  
            
      )
      
    Promise.all(urls.map(url =>
      fetch(url)
      .then(response => response.json())
      .catch(error => console.log('There was a problem!', error))
  
    ))
    .then(data => {
      alert("then"+JSON.stringify(data))
      callback(data)
    })
    //https://w.trhou.se/bhriv87fql
    }


