import React,{useEffect,useState} from 'react';
import firebase from 'firebase'
import {useFirebase} from '../hooks/usefirebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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

export default function ChangePwdForm(props) {
  const classes = useStyles();
  const [ isLoading, isError , error, user,  signin,signup,signupgmail,signout,deleteuser,sendPasswordResetEmail,confirmPasswordReset] =useFirebase("");
  //const [COMPONENTE, setCOMPONENTE] = useRecoilState(monederocomponente);
  function clickChange(event) {
    //   alert("firebase user "+correo)
    sendPasswordResetEmail("ppazpurua@gmail.com")
       //signin("ppa@gmail.com","1231232")
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
    },[isLoading, isError ,error, user, ]); 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Password
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
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() =>clickChange()}
          >
            Change Password
          </Button>
          
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