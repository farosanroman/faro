import Geocode from "react-geocode";
//import usePosition from './useposition'
//import { useGeoPosition } from 'the-platform';

//Geocode.setApiKey("AIzaSyDmSUv0VdWm-a2Q26xUVmM_6q-PEm3VOyk");
//vino2019
Geocode.setApiKey("AIzaSyACfHViztnTvTHEdPC5tm-lMebjTQEwIsY");
//pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw
// Enable or disable logs. Its optional.
Geocode.enableDebug(); 
//<<<<<<MUY BUENO PARA VER EL JSON

export  const getGeolocation=(position,callback)=>{
//  alert(JSON.stringify(position))
// Get address from latidude & longitude.
if (JSON.stringify(position)=="{}"){
//alert("getlocation 15")
  return
} else{

}
Geocode.fromLatLng(position.latitude.toString(),position.longitude.toString()).then(
    
  //Geocode.fromLatLng("10.47186","-66.87202").then(
  response => {
//    const address = response.results[0].formatted_address;
// alert(JSON.stringify(response))
  // console.log(JSON.stringify(response));
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
//alert("geo"+JSON.stringify(geolocation))
         callback(geolocation)
 
  },
  error => {
    alert("error getlocation GEOCODE Google"+JSON.stringify(error))
   
      var geolocation={country:"VE",countrylong:"VE",estado:"ES",municipio:"MU",municipiolong:"MUNICIPIO",ciudad:"VE",ciudadlong:"VE",urbanizacion:"URB",urbanizacionlong:"URB",ruta:"RUTA",rutalong:"RUTALONG",premisa:"PREMISA",premisalong:"PREMISALONG",postalcode:"postalcode"}
         callback(geolocation)
     
  }
);
}
//https://geo.ipify.org/api/v1?apiKey=at_masYl8oVUmgbnwlRkLVBGgUdrtufO&ipAddress=200.71.112.241
export  const getLocation=(mensaje,callback)=>{
  //OBTERNER la LAT y LONG
   alert("getLocation "+JSON.stringify(mensaje))
  
   var url="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyACfHViztnTvTHEdPC5tm-lMebjTQEwIsY"
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
   alert("helper"+JSON.stringify(data)+"helper")
     callback(data)

    //console.log(data)
  })
  .catch(error => {callback([])});
   
   };
   export  const getLocation22=(mensaje,callback)=>{
     var geolocation
 //    alert(JSON.stringify(mensaje))
     var location
     var url="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyACfHViztnTvTHEdPC5tm-lMebjTQEwIsY"
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
   alert("helper"+JSON.stringify(data)+"helper")
   //  alert(data.error.errors[0].reason)
     if (data.error.errors[0].reason=="dailyLimitExceeded"){
  //     alert("si")
       //data.location={lng:-66.9188,lat:10.509}
       location={lat:10.000,lng:-67.0000}
    //   alert(JSON.stringify(location))
     }else{
           location=data.location
     }
Geocode.setApiKey("AIzaSyDZ08hKl01qFilc3nJ4oRmO8wq49pcsw8s");
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
   //  console.log(geolocation.location);
     callback(geolocation)
     //this.setState({address:response.results[0].address_components,country:country})
    //console.log(response);
   },
   error => {
    alert("error"+JSON.stringify(error))
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
   

