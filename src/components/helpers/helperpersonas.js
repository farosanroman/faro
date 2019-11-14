export  const getPersona=(cedula,callback)=>{
//alert(cedula)
    const url="https://faro2018consultas.azurewebsites.net/api/twtpersona?cedula="+cedula
   fetch(url,{     
  })
  .then(response => response.json())
      .catch(error =>{
        callback([])
      })
  .then(data => {
  alert("helper"+JSON.stringify(data)+"helper")
   callback(data)
  })
  
  };
  export  const getTestigos=(criteria,callback)=>{
   // alert(criteria)
    criteria={"codcne":"","roles":"243"}
    var url= "https://faro2018consultas.azurewebsites.net/api/personasxcodcnexroles?codcne="+criteria.codcne+"&roles="+criteria.roles;
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



