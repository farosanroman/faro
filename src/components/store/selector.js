import { selector } from 'recoil';
import { plancuentas,auxi,url } from '.';

// export const filterCuentas = selector({
//     key: "filterCuentas",
//     get: ({get}) => {
//         const a = get(auxi);
//      // console.log("selector "+a)
//         const listCuentas = get(plancuentas);
//         // const filterListValueState = get(filterListValue);
        
//         // if (filterListValueState.length) {
//         //   return listState.filter((item) =>
//         //     item.value.includes(filterListValueState) && item
//         //   );
//         // }
//       //  console.log(listCuentas)

//          return listCuentas.filter(item => item.AUXILIAR ==a);;

//     }
// })

//const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=USD&tsym=VES&limit=10`;
export const fetchRecoil = selector({
  key: 'fetchRecoil',
  get: async ({ get }) => {
    const urll = get(url);

    try{
          const response = await fetch(urll);
          const data = await response.json();
        //alert(JSON.stringify(data))
          return data;
      }catch(error){
          throw error;
      }
  }
});

//EJEMPLO https://dev.to/shubhamk/recoil-the-asynchronous-way-to-manage-state-part-1-18kk
