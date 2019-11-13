import React ,  { useState, useEffect } from 'react';

//import { Application } from '../App';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import VideoLabel from '@material-ui/icons/VideoLabel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import {PersonasControl}     from './personascontrol'
//import DialogoRegistroUid from './body/dialogoregistrouid'
//import About from './about'
import taller_react from '../../images/taller_react.png'
import taller_node from '../../images/taller_node.png'
import taller_cosmosdb from '../../images/taller_cosmosdb.png'
import taller_mapbox from '../../images/taller_mapbox.png'
import taller_material from '../../images/taller_material.png'

import taller_fullstack from '../../images/taller_fullstack.png'
//import { usePosition } from './tools/useposition';
//import { usePosition } from 'use-position';
function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Faro de San Roman
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://material-ui.com/">
      Facebook React, Mapbox, DevExtreme, Google Firebase, Google Material, Twitter Bootstrap, NodeJS, Microsoft: Azure CosmosDB, SQL Server, AzureFunctions, EasyAPI 
      </Link>
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    //backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card0: {
    maxWidth:600,
    height:'100%'
  },
  media0: {
    height:600,
    maxWidth:600,
   // paddingTop: '56.25%', // 16:9
  },
  card: {
    maxWidth: 345,
    height:'100%'
  },
  media: {
    height:350,
    maxwidth:350,
   // paddingTop: '56.25%', // 16:9
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
//alert("login ")
//const cards = [1, 2, 3];
const colortheme = createMuiTheme({
  palette: {
    primary: { main: "#C3C3C3", contrastText: "#fff" },
    secondary: { main: "#FFFFFF", contrastText: "#fff" }
  }
});
const config = {
  apiKey: 'AIzaSyDZ08hKl01qFilc3nJ4oRmO8wq49pcsw8s',
  authDomain: 'vinotinto-7f56f.firebaseapp.com',
  // ...
};
export default function Contenido() {
 // const { state, dispatch } = React.useContext(Application);
  
  const [flag, setFlag] = useState(false);


const classes = useStyles();
//https://material-ui.com/getting-started/templates/
  return (
    <React.Fragment>
     <main>
        {/* Hero unit */}

        <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
               
                src={taller_fullstack}
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                    Arquitectura FullStack para el Desarrollo Colaborativo
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Participantes politicos son responsables del contenido en las diferentes organizaciones.
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    COntinue leyendo…
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>



        <Container className={classes.cardGrid}  >
          {/* End hero unit */}
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
          
                    <p>La plataforma del desarrollo colaborativo estara basada en un conjunto de tecnologias emergentes basadas en Open Source. A continuacion se presentan las plataformas mas importantes.
                       </p>
                      
            </Typography>
        </Container>
        <Grid container justify="center">
      <Grid item sm>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image={taller_react}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Ver Video">
          <VideoLabel />
          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
     
    </Card>
        
    </Grid>
    <Grid item sm>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image={taller_node}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Ver Video">
          <VideoLabel />
          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
     
    </Card>
        
    </Grid>
    <Grid item sm>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image={taller_cosmosdb}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Ver Video">
          <VideoLabel />
          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
     
    </Card>
        
    </Grid>
    <Grid item sm>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image={taller_mapbox}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Ver Video">
          <VideoLabel />
          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
     
    </Card>
        
    </Grid>
    <Grid item sm>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image={taller_material}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Ver Video">
          <VideoLabel />
          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
     
    </Card>
        
    </Grid>

    </Grid>
      </main>
      {/* End footer */}
     
    </React.Fragment>
  );
 
}

/*
Formidable is a Seattle, Denver, Phoenix, and London-based boutique engineering consultancy and open source software organization, specializing in React.js, React Native, GraphQL, Node.js, and the architecture of large-scale JavaScript applications. We are a team of consultants working together to find holistic and sustainable solutions to challenging software and process problems for our clients. We build products for some of the world's biggest companies while helping their internal teams develop the skillset to build and maintain thoughtful and scalable systems.

As an Experienced Backend Engineer at Formidable, you will use a modern JavaScript stack to implement new applications, features, services, and tools for some of the largest and most successful companies in the world. You will also help clients build cloud platforms at-scale, assisting in every part of the process, from concept to production. You will regularly collaborate with client teams to provide project leadership, mentorship, and technical expertise. When you’re not working on client projects, you’ll have a chance to contribute to our community-leading open source software.

You will be joining a team that works together to solve exciting software problems, and fosters a culture of supportive learning and knowledge exchange, both within our company and throughout the greater JavaScript community. We make sure our employees get opportunities to grow within Formidable and participate in daily decision-making processes. Our engineers are leaders in the community and are frequently invited to speak at key conferences. Working with other Formidables, you are guaranteed to stay on top of industry trends and tools and to cultivate your skill set continually.

If you're interested in joining a collaborative community that supports employees and understands the importance of maintaining a work-life balance, we would love to talk to you!

*/
