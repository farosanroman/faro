import React,{ useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lightBlue from '@material-ui/core/colors/lightBlue';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';

import Login from './components/dashboard/login'
import logo from './logo.svg';
import './App.css';


import Dashboard from '../src/components/dashboard'
import { reducer, defaultState } from './Context';
export const Application = React.createContext({ state: null, dispatch: null });

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
    error: red,
    warning: orange,
    succeess:green,
    info:amber,
  }
});
//alert(JSON.stringify(indigo))
function App() {
  const initialState = () => JSON.parse(window.localStorage.getItem('farostorage20')) || defaultState;
  
  const [state, dispatch] = React.useReducer(reducer, initialState());
 // alert(JSON.stringify(state))

 const [pag, setPag] = useState(0);
 const onLoginClick = () => {  
   //  alert("onLoginClick")
     setPag(1)
 }  
  React.useEffect(() => {
    window.localStorage.setItem('farostorage20', JSON.stringify(state));
  }, [state]);

  return (
    <Application.Provider value={{ state, dispatch }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
          {(pag==0)&&<Login loginclick={onLoginClick} />}
          {(pag==1)&&<Dashboard />}
  

    </ThemeProvider>
  </Application.Provider>
   
  );
}

export default App;
//HOOKS 
//https://www.youtube.com/watch?v=-G43PbpmGrA
//https://www.youtube.com/watch?v=cjBm0HnYcqw BEST ON CONTEXT AND REDUCER   BEST BEST BEST OjO

//https://codepen.io/kelvinzhang/pen/jpoRMm?editors=1010
//https://codepen.io/ivjose/pen/EyjGKa   TARJETA 
//https://medium.com/@reginald.johnson
//https://medium.com/hackernoon/accepting-payments-in-a-react-native-app-part-1-9cb09a271f59
//https://medium.com/react-native-training/accepting-payments-in-a-react-native-app-part-3-c22828ecab13

