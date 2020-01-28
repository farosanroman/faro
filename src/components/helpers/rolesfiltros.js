export const RolesFiltros=(data,criteria,callback)=>{
    
    //alert(data[0].timestamp.substr(0,5)+"l")
    //alert((data[0].timestamp.substr(0,5)=='10/28'))
    var dat=[]
    //for (var i = 25000; i < data.length-3000; i++) {
    var roles = data.map(function (item, index, array) { 
                if (item.idnodofuncional==9){
                    return item;
                }
           });
    callback(roles)
      
}