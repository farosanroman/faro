import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import VideoLabel from '@material-ui/icons/VideoLabel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 350,
    height:'100%'
  },
  media: {
    height: 450,
    maxwidth:200,
   // paddingTop: '56.25%', // 16:9
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function CardCursos(props) {
  const classes = useStyles();
 
 const cursos= [
    {"key":1,"image":"./manual1.png","titulo":"Titulo1","subtitulo":"En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla","url":"https://archivosamarillos.blob.core.windows.net/manualesfaro/manual1.png"},
    {"key":2,"image":"./mesa_comovotar_maual.png","titulo":"Titulo2","subtitulo":"En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla","url":"https://archivosamarillos.blob.core.windows.net/manualesfaro/mesa_comovotar_maual.png"},
    {"key":3,"image":"./mesa_comovotar.png","titulo":"Titulo3","subtitulo":"En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla","url":"https://archivosamarillos.blob.core.windows.net/manualesfaro/mesa_comovotar.png"},
    {"key":4,"image":"./mesa_escrutinio.png","titulo":"Titulo4","subtitulo":"En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla","url":"https://archivosamarillos.blob.core.windows.net/manualesfaro/mesa_escrutinio.png"},
    {"key":5,"image":"./mesa_instalacion.png","titulo":"Titulo4","subtitulo":"En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla","url":"https://archivosamarillos.blob.core.windows.net/manualesfaro/mesa_instalacion.png"}
    
]
  return (
    <div>
      <Grid container justify="center">
      <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image="https://archivosamarillos.blob.core.windows.net/manualesfaro/mesa_instalacion.png"
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
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image="https://archivosamarillos.blob.core.windows.net/manualesfaro/mesa_comovotar.png"
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
    
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image="https://archivosamarillos.blob.core.windows.net/manualesfaro/mesa_comovotar_maual.png"
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
   
   <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
      
      <CardMedia
        className={classes.media}
        image="https://archivosamarillos.blob.core.windows.net/manualesfaro/mesa_escrutinio.png"
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
    </div>
  );
}

//MediaCard.propTypes = {
//  classes: PropTypes.object.isRequired
//};

export default CardCursos;