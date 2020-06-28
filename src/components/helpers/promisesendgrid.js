export  const PromiseSendGrid=(correos,callback)=>{
  //alert("post")
var nuevo=[];
var i=0
var  error=[]
    Promise.all(correos.map(c =>{
       // console.log(c)
       nuevo.push(c)

       var url= "https://faronosql.azurewebsites.net/api/SendGridVT?code=cavrTaG45NaieWsIfwJncoUqEyW3xnuWfoTD1yIwfdSJ/0a84ahnnw==";
       fetch(url,{
       method: "POST",
       body: JSON.stringify(c),
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

  //   module.exports = async function (context, req) {
  //     //context.log('JavaScript HTTP trigger function processed a request.');
  //     var mail=req.body
  //     var head='<head><h1>Encabezado</h1></head>'
  // var table='<table><tr><th>Month</th><th>Savings</th></tr><tr><td>January</td><td>$100</td></tr><tr><td>January</td><td>$100</td></tr></table>'  
  // var boton='<body><img src="https://th.bing.com/th/id/OIP.0gGbWbkHhtYt9-R3j0a-2AHaEK?w=307&h=180&c=7&o=5&pid=1.7" alt="Girl in a jacket" width="200" height="200"><h1>aaaa</h1><br/><a href="https://poliflash.github.io/PoliData/?cedula=V3664204"><button  style="background-color:red;color:yellow;font-size:40px">Click para ir al Formulario 101</button></a></body>'
  // var lnk='<br/><a href="cualquier url" target="_blank">https://poliflash.github.io/PoliData/?cedula=V3664204</a>'
  // var ht='<html>'+head+'<br/>'+table+'<br/>'+boton+lnk+'</html>'
  // var message = {   
  //          "personalizations": [ { "to": [ { "email": "ppazpurua@gmail.com" },{"email":"gboyerizo@gmail.com"} ] } ],
  //         from: { email: "ppazpurua@gmail.com" },        
  //         subject: "🇻🇪📣 FaroV2.120 Mensaje del Comando",
  //         content: [{
  //             type: 'text/html',
  //             value:ht
  //         }]
  //     };
  //        context.res = {
            
  //             body:mail
  //         };
  
  //     context.done(null, mail);
  // };

  // {
  //   "bindings": [
  //     {
  //       "authLevel": "function",
  //       "type": "httpTrigger",
  //       "direction": "in",
  //       "name": "req",
  //       "methods": [
  //         "get",
  //         "post"
  //       ]
  //     },
  //     {
  //       "type": "http",
  //       "direction": "out",
  //       "name": "res"
  //     },
  //     {
  //       "type": "sendGrid",
  //       "name": "$return",
  //       "apiKey": "SENDGRIDKEY",
  //       "direction": "out"
  //     }
  //   ]
  // }

  //body
//  {"personalizations":[{"to":[{"email":"ppazpurua@gmail.com"},{"email":"gboyerizo@gmail.com"}]}],"from":{"email":"ppazpurua@gmail.com"},"subject":"🇻🇪📣 FaroV2.130 Mensaje del Comando","content":[{"type":"text/html","value":"<html><head><h1>Encabezado</h1></head><br/><table><tr><th>Month</th><th>Savings</th></tr><tr><td>January</td><td>$100</td></tr><tr><td>January</td><td>$100</td></tr></table><br/><body><img src=\"https://th.bing.com/th/id/OIP.0gGbWbkHhtYt9-R3j0a-2AHaEK?w=307&h=180&c=7&o=5&pid=1.7\" alt=\"Girl in a jacket\" width=\"200\" height=\"200\"><h1>aaaa</h1><br/><a href=\"https://poliflash.github.io/PoliData/?cedula=V3664204\"><button  style=\"background-color:red;color:yellow;font-size:40px\">Click para ir al Formulario 101</button></a></body><br/><a href=\"cualquier url\" target=\"_blank\">https://poliflash.github.io/PoliData/?cedula=V3664204</a></html>"}]}