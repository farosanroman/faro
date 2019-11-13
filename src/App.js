import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lightBlue from '@material-ui/core/colors/lightBlue';
import indigo from '@material-ui/core/colors/indigo';
import cyan from '@material-ui/core/colors/cyan';

import logo from './logo.svg';
import './App.css';
import { reducer, defaultState } from './Context';

import Dashboard from '../src/components/dashboard'
export const Application = React.createContext({ state: null, dispatch: null });

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
    error: red
  }
});

function App() {
  const initialState = () => JSON.parse(window.localStorage.getItem('farostorage14')) || defaultState;
  
  const [state, dispatch] = React.useReducer(reducer, initialState());
 // alert(JSON.stringify(state))
  
  React.useEffect(() => {
    window.localStorage.setItem('farostorage14', JSON.stringify(state));
  }, [state]);

  return (
    <Application.Provider value={{ state, dispatch }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  </Application.Provider>
   
  );
}

export default App;
//https://codepen.io/kelvinzhang/pen/jpoRMm?editors=1010
//https://codepen.io/ivjose/pen/EyjGKa   TARJETA 
//https://medium.com/@reginald.johnson
//https://medium.com/hackernoon/accepting-payments-in-a-react-native-app-part-1-9cb09a271f59
//https://medium.com/react-native-training/accepting-payments-in-a-react-native-app-part-3-c22828ecab13