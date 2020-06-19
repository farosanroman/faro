import { atom } from 'recoil';

export const flagLogin = atom({
  key: 'flagLogin',
  default: false
});
export const login = atom({
  key: 'login',
  default: {id:"id",type:"login",name:"mister",photoURL:"https://image.shutterstock.com/image-vector/photo-camera-icon-260nw-197166461.jpg",email:"",phone:"",cedula:"",lat:0,lng:0,idorg:0,org:"",idfuncional:0,funcional:"",idrol:0,rol:"",codcne:"000000000"}
});
export const organizacion=atom(
  {
     key:'organizacion',
     default: [{"id": 1,"nombre": "AD","descripcion": "Accion Democratica", "selected": true,value: 800 },
      {"id": 3,"nombre": "PJ","descripcion": "Primero Justicia","selected": true,value: 800 },
      { "id": 2,"nombre": "VP","descripcion": "Voluntad Popular", "selected": true,value: 800},
      { "id": 4,"nombre": "UNT","descripcion": "Un Nuevo Tiempo",  "selected": true, value: 800},
      {"id": 7,"nombre": "CAUSA R","descripcion": "Un Nuevo Tiempo",  "selected": true, value: 800}
    
    ]
    
  })
export const funcionales=atom(
{
   key:'funcionales',
   default: []
})

// [{"idorganizacion":"","idnodofuncional":"1039","codigonodofuncional":"COMAN","nombrenodofuncional":"Comando 2020","pordefecto":1},
// {"idorganizacion":"","idnodofuncional":"1038","codigonodofuncional":"FORMA","nombrenodofuncional":"Formación","pordefecto":2}]

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