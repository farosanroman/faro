import { useState, useEffect } from "react";
import firebase from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyACfHViztnTvTHEdPC5tm-lMebjTQEwIsY",
    authDomain: "vinotinto-7f56f.firebaseapp.com",
    databaseURL: "https://vinotinto-7f56f.firebaseio.com",
    projectId: "vinotinto-7f56f",
    storageBucket: "vinotinto-7f56f.appspot.com",
    messagingSenderId: "892393449979",
    appId: "1:892393449979:web:f8a44a97924a8aeaee435e"
  };
  firebase.initializeApp(firebaseConfig);
export const useFirebase = () => {
  
  
    //firebase.initializeApp(firebaseConfig);
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [error, setError] = useState(false);
   const [user, setUser] = useState(null);

  //  useEffect(() => {
  //     alert(JSON.stringify(user))
  // }, [user])
   const signin = (email, password) => {
    setIsError(false)
    setIsLoading(true)
   return firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .then(response => {
        // alert("A"+JSON.stringify(response))

       setUser(response);
       setIsError(false)
       setIsLoading(false)
       //return response.user;
     })
  .catch(function(error) {
         // Handle Errors here.
         //var errorCode = error.code;
         //var errorMessage = error.message;
         setUser(null)
         setIsError(true)
         setError(error)
         setIsLoading(false)
       });
  }

  const signup = (email, password) => {
    setIsError(false)
  setIsLoading(true)
   return firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then(response => {
        //alert(JSON.stringify(response))
       setUser(response);
       //setUser(result)
       setIsError(false)
       setIsLoading(false)
       //return response.user;
     }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        setUser(null)
        setIsError(true)
        setError(error)
        setIsLoading(false)
        //alert(JSON.stringify(error))
      });
 
 };
//  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//     .then((userCredentials)=>{
//         if(userCredentials.user){
//           userCredentials.user.updateProfile({
//             displayName: 'Frank S. Andrew'
//           }).then((s)=> {
//             this.props.navigation.navigate('Account');
//           })
//         }
//     })
//     .catch(function(error) {
//       alert(error.message);
//     });
 const sendPasswordResetEmail = email => {
  setIsError(false)
  setIsLoading(true)
   return firebase
     .auth()
     .sendPasswordResetEmail(email)
     .then((result) => {
      console.log(JSON.stringify(result))
      setUser(result)
      setError(error)
      setIsError(false)
      setIsLoading(false)
     }).catch(function(error) {
      console.log(JSON.stringify(error))
      setUser(null)
      setError(error)
      setIsError(true)
      setIsLoading(false)
    });
 };
 const signout = (email, password) => {
  return firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(response => {
     // alert(JSON.stringify(response))
      firebase.auth()
      .signOut()
      .then(() => {
        alert("hizo signout")
      });
  })
.catch(function(error) {
      // Handle Errors here.
     // var errorCode = error.code;
     // var errorMessage = error.message;
      alert("signout"+JSON.stringify(error))
    });
}
const deleteuser = (email, password) => {
   
  return firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(response => {
     // alert(JSON.stringify("va a borrar "+response))

        var user = firebase.auth().currentUser;
         user.delete().then(function() {
       // User deleted.
         }).catch(function(error) {
      // An error happened.
         });
      
  })
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("signout"+JSON.stringify(error))
    });
}
////////  GMAIL
const signupgmail = () => {
//NOTA en gmail el signIn hace el registro en Firebase
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log(JSON.stringify(provider))
  //setUser(result)
  setIsError(false)
  setIsLoading(true)
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      //alert(JSON.stringify(result))
      //alert(result.user.email)
      setUser(result)
      setIsError(false)
      setIsLoading(false)
      //console.log("USER")
      //console.log(JSON.stringify(result))



    })
    .catch(function(error) {
      setUser(null)
      setError(error)
      setIsError(true)
      setIsLoading(false)
    });
  }

  const deletegmail = () => {
     //ME BORRA EN Firebase no borra en Gmail. Muy interesante
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(JSON.stringify(provider))
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        alert(JSON.stringify(result))
        alert(result.user.email)
        console.log("USER")
        console.log(JSON.stringify(result))
  
        var user = firebase.auth().currentUser;
        user.delete().then(function() {
      // User deleted.
        }).catch(function(error) {
     // An error happened.
        });
  
  
      })
      .catch(function(error) {
        // ...
      });
    }
  

 
 const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };
// this.auth.currentUser.updatePassword(password)
   return [isLoading, isError ,error, user,  signin,signup,signupgmail,signout,deleteuser,sendPasswordResetEmail,confirmPasswordReset];
 };

//  const [user, setUser] = useState(null);
  
//  // Wrap any Firebase methods we want to use making sure ...
//  // ... to save the user to state.
//  const signin = (email, password) => {
//    return firebase
//      .auth()
//      .signInWithEmailAndPassword(email, password)
//      .then(response => {
//        setUser(response.user);
//        return response.user;
//      });
//  };

//  const signup = (email, password) => {
//    return firebase
//      .auth()
//      .createUserWithEmailAndPassword(email, password)
//      .then(response => {
//        setUser(response.user);
//        return response.user;
//      });
//  };

//  const signout = () => {
//    return firebase
//      .auth()
//      .signOut()
//      .then(() => {
//        setUser(false);
//      });
//  };

//  const sendPasswordResetEmail = email => {
//    return firebase
//      .auth()
//      .sendPasswordResetEmail(email)
//      .then(() => {
//        return true;
//      });
//  };

//  const confirmPasswordReset = (code, password) => {
//    return firebase
//      .auth()
//      .confirmPasswordReset(code, password)
//      .then(() => {
//        return true;
//      });
//  };

//  // Subscribe to user on mount
//  // Because this sets state in the callback it will cause any ...
//  // ... component that utilizes this hook to re-render with the ...
//  // ... latest auth object.
//  useEffect(() => {
//    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//      if (user) {
//        setUser(user);
//      } else {
//        setUser(false);
//      }
//    });

//    // Cleanup subscription on unmount
//    return () => unsubscribe();
//  }, []);
 
//  // Return the user object and auth methods
//  return {
//    user,
//    signin,
//    signup,
//    signout,
//    sendPasswordResetEmail,
//    confirmPasswordReset
//  };
// }