
  export  const postMensaje=(mensaje,callback)=>{
    //alert(JSON.stringify(mensaje))
    
     var url= "https://faronosql.azurewebsites.net/api/FormularioPost?code=IMrz1XP/FdSrIqJrIEJ0J93toYOOty5k6ace8FEV02Ea3DwCx1qUQQ==";
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
      //alert("helper"+JSON.stringify(data)+"helper")
     callback(data)
    })
    .catch(error => {callback("error")});
    
    
    };
    export  const getpostMensaje=(mensaje,callback)=>{
       // alert(JSON.stringify(mensaje))
        
         var url= "https://faronosql.azurewebsites.net/api/MensajeGetPost?code=atKULTfBatWsXDvJDwuwzp97gyYA8gWANrkEDXLdjpLhgyrjhAzqnw==";
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
          //alert("helper"+JSON.stringify(data)+"helper")
         callback(data)
        })
        .catch(error => {callback("error")});
        
        
        };
export  const getMensajes=(criteria,callback)=>{
    // alert(criteria)
     criteria={"codcne":"","roles":"243"}
     var url= "https://faronosql.azurewebsites.net/api/MensajesMAILGet?code=ny1I/IMo/Q6zdcZiCeA1JlI7NC52wk31AJwzndc5hEqHAk0uw2OABw==";
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

   export  const SendGrid=(mensaje,callback)=>{
    //alert(JSON.stringify(mensaje))
    
     var url= "https://faronosql.azurewebsites.net/api/SendGridVT?code=cavrTaG45NaieWsIfwJncoUqEyW3xnuWfoTD1yIwfdSJ/0a84ahnnw==";
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
      //alert("helper"+JSON.stringify(data)+"helper")
     callback(data)
    })
    .catch(error => {callback("error")});
    
    
    };