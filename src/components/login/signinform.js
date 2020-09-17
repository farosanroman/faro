import React,{useEffect,useState} from 'react';
//import firebase from 'firebase'

import {useFirebase} from '../hooks/usefirebase';
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useRecoilState, useRecoilValueLoadable} from "recoil";
//import { monederocomponente,onlinestatusflag} from '../../../../go/src/components/store/atom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//https://m.youtube.com/watch?feature=emb_logo&time_continue=1818&v=mrTPrbSoAx0   react forms hook
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInForm(props) {
  const classes = useStyles();
  const [mensaje,setMensaje]=useState("");
  const [ isLoading, isError , error, user,  signin,signup,signupgmail,signout,deleteuser,sendPasswordResetEmail,confirmPasswordReset] =useFirebase("");
 // const [COMPONENTE, setCOMPONENTE] = useRecoilState(monederocomponente);
  function clickSignin(event) {
    //   alert("firebase user "+correo)
      
       signin("ppa@gmail.com","1231232")
       //setCUENTA({id:MAIL,name:"Jose Luis Perales",country:"VE",currency:"VES",date:Date()})
      // setSAMPLE(jsonCustomer)
    //  event.preventDefault();
     }
     function handleSubmit(event) {
      // alert('A name was submitted: ' + correo);
     //  setFlagCircular(true)
     //  //alert(JSON.stringify(customer))
     //  postData("https://monederoapi.azurewebsites.net/api/PostCutomer?code=AlQBaa9sWYAUNeRpUS6S0O5ZBJodGJxY89bZcwTRbsQ1YoaOReNBMQ==",customer)

       event.preventDefault();
     }
     useEffect(() => {   
      console.log("isLoading:"+isLoading+" isError:"+isError+" error:"+error+" user:"+JSON.stringify(user) )
    // signup("pppazpurua@gmail.com","123123")
   //  signin("pppazpurua@gmail.com","123123")
    // signout("pppazpurua@gmail.com","123123")
    // deleteuser("pppazpurua@gmail.com","123123")
     ///signupgmail()   
     //sendPasswordResetEmail("ppazpurua@gmail.com")  
     //123789

     if ((isLoading==false)&&(isError==false)&&(user!=null)){

       //alert("entro ")
       //alert(JSON.stringify(user.user.uid))
      // {"code":"auth/user-not-found","message":"There is no user record corresponding to this identifier. The user may have been deleted."}
       //alert(JSON.stringify(error))
      setMensaje(user.user.uid)
     }
     if ((isLoading==false)&&(isError==true)){
      // {"code":"auth/user-not-found","message":"There is no user record corresponding to this identifier. The user may have been deleted."}
       //alert(JSON.stringify(error))
       setMensaje(error.code)
     }
    },[isLoading, isError ,error, user, ]); 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() =>clickSignin()}
          >
            Sign In
          </Button>
          <Typography variant="body2" color="secondary">
             {mensaje}
        </Typography>
          <Grid container>
            <Grid item xs>

              <Link href="#" onClick={() => props.changePage(3)} variant="body2">
                {"Forgot password?"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" onClick={() => props.changePage(2)} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

// onClick={() =>{setFlagCircular(true)
//     fetchData('https://f2020.azurewebsites.net/api/FaroFormularioBase?code=5mWvvpNVz/at91R4awZb7g/rSfVWeHbMSARrVFbEdZWtC2fWBaGtnQ==&id=jsonlite');}}