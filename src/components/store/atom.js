import { atom } from 'recoil';

export const flagLogin = atom({
  key: 'flagLogin',
  default: false
});
export const login = atom({
  key: 'login',
  default: {id:"id",type:"login",name:"mister",photoURL:"https://image.shutterstock.com/image-vector/photo-camera-icon-260nw-197166461.jpg",email:"",phone:"",cedula:"",lat:0,lng:0,idorg:0,org:"",idfuncional:0,funcional:"",idrol:0,rol:"",codcne:"000000000"}
});

export const funcionales=atom(
{
   key:'funcionales',
   default: [
    {idfuncional:1,funcional:"Comando 2020","selected": true},
    {idfuncional:2,funcional:"Formacion","selected": false},
    {idfuncional:3,funcional:"Conteo Rapido","selected": false}
 ]
})


  export const organizacion=atom(
    {
       key:'organizacion',
       default: [{"id": 0,"nombre": "AD","descripcion": "Accion Democratica", "selected": true,value: 800 },
        {"id": 1,"nombre": "PJ","descripcion": "Primero Justicia","selected": true,value: 800 },
        { "id": 2,"nombre": "VP","descripcion": "Voluntad Popular", "selected": true,value: 800},
        { "id": 3,"nombre": "UNT","descripcion": "Un Nuevo Tiempo",  "selected": true, value: 800}
      
      ]
      
    })

    // export const getindicadores=atom(
    //   {
    //      key:'getindicadores',
    //      default: false
        
    //   })
  export const url = atom({
    key: 'url',
    default: "https://monederoapi.azurewebsites.net/api/GetLogins?code=nMU6jy8N428ZZRJSWynpSKaZikH1DTBXV/9v9pSBi/c3B7KLr9YS8w=="
  });


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
  