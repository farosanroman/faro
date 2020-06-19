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

import Login from './components/layout/login'
import logo from './logo.svg';
import './App.css';
import { 	RecoilRoot } from 'recoil';

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
     <RecoilRoot>
    <ThemeProvider theme={theme}>
      <CssBaseline />
          {(pag==0)&&<Login loginclick={onLoginClick} />}
          {(pag==1)&&<Dashboard />}
  

    </ThemeProvider>
    </RecoilRoot>
  </Application.Provider>
   
  );
}

export default App;
//HOOKS 
//https://www.youtube.com/watch?v=-G43PbpmGrA
//https://www.youtube.com/watch?v=cjBm0HnYcqw BEST ON CONTEXT AND REDUCER   BEST BEST BEST OjO
//https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks  reducer in custom Kent

//https://codepen.io/kelvinzhang/pen/jpoRMm?editors=1010
//https://codepen.io/ivjose/pen/EyjGKa   TARJETA 
//https://medium.com/@reginald.johnson
//https://medium.com/hackernoon/accepting-payments-in-a-react-native-app-part-1-9cb09a271f59
//https://medium.com/react-native-training/accepting-payments-in-a-react-native-app-part-3-c22828ecab13

//SENDGRID AzureFunction
//https://www.freecodecamp.org/news/how-to-build-a-serverless-report-server-with-azure-functions-and-sendgrid-3c063a51f963/



/*
const { Connection, Request } = require('tedious');

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};


 var config = {
        userName: process.env.TEDIUS_LOGIN,
        password: process.env.TEDIUS_PASSWORD,
        server: process.env.TEDIUS_SERVER,
        options: {encrypt: true, database: process.env.TEDIUS_DATABASE}
    };
module.exports = function (context, req) {
  context.log(process.env.TEDIUS_SERVER)
  executeStatement()
    .then(data => {
      if (data.length > 0) {
       
       context.res = {
                status: 200,
                body:data
            };
         context.done();
      } else {
          context.log('context.done()');
        
      }
    })
    .catch(err => {
      context.log(`ERROR: ${err}`);
    });
};

function executeStatement() {
  return new Promise((resolve, reject) => {
    const connection = new Connection(config);
    //const query="select * from nodoorganizacional"
    //const query="[openfarosql].[indicadoresget]   '', '','1039',''"
    const query = 'SELECT idrol, nombre as Modified     FROM rol';
                  // WHERE Modified >= dateadd(day, -1, getdate())`;

    connection.on('connect', err => {
      if (err) reject(err);

      let request = new Request(query, err => {
        if (err) {
          reject(err);
        }
      });

      const results = [];
      request.on('row', columns => {
        let result = {};
        columns.forEach(column => {
          result[column.metadata.colName] = column.value;
        });

        results.push(result);
      });

      request.on('doneProc', (rowCount, more) => {
        resolve(results);
      });

      connection.execSql(request);
    });
  });
}
*/