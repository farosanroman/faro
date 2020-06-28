export  const PromisePostFormularios=(formularios,callback)=>{
  //alert("post")
var nuevo=[];
var i=0
var  error=[]
    Promise.all(formularios.map(f =>{
        console.log(f)
       nuevo.push(f)

       var url= "https://farodesarrollo2010.azurewebsites.net/api/FormularioPersonaPost?code=VtEH0pzl8ADUEHmaoT7NDikIh6WGOgZuYHc5pvLsDdeALF1iqLdKWg==";
       fetch(url,{
       method: "POST",
       body: JSON.stringify(f),
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
         },
      })
      .then(response => response.json())
          .catch(error =>{
           // alert("error"+JSON.stringify(error))
            nuevo.push([])
          })
      .then(data => {
        //alert("helper"+JSON.stringify(data)+"helper")
        i+=1
        //console.log(i)
        nuevo.push(data)
      })
      .catch(error => {error.push("error")});
      

        }
    )

        )
       // console.log(JSON.stringify(antenasFeatureCollectionValues))
     // alert("retorn "+i)
        callback(nuevo)    
    //https://w.trhou.se/bhriv87fql
    }


