import React ,  { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'
//const config = {
//    apiKey: 'AIzaSyDZ08hKl01qFilc3nJ4oRmO8wq49pcsw8s',
//    authDomain: 'vinotinto-7f56f.firebaseapp.com',
//    // ...
//  };
 // firebase.initializeApp(config);
//https://www.freecodecamp.org/news/build-a-react-hooks-front-end-app-with-routing-and-authentication/
export const useAuth = (url) => {

    const [userAuth, setUserAuth] = useState(undefined);
    const [isLoadingAuth, setIsLoadingAuth] = useState(false);
    const [isErrorAuth, setIsErrorAuth] = useState(false);
  
    // Just pass the variables that changes in each new fetch requisition
    
    useEffect(() => {
       // alert("effect")
      

       firebase.auth().onAuthStateChanged(
            user=>{
              //alert(JSON.stringify(user))
              //console.log(JSON.stringify(user))
             //setLoginAuth(login)
             setUserAuth(user)
             setIsLoadingAuth(false)
            }
        )
      setIsLoadingAuth(true)
      setIsErrorAuth(false)
    }, [userAuth]);
  
    return [{ userAuth, isLoadingAuth, isErrorAuth }];
  };
  