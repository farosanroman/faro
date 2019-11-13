import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
//import Title from '../title';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  
}));


var faros=[
  {id:0,url:"https://archivosamarillos.blob.core.windows.net/manualesfaro/carnet1.png"},
  {id:1,url:"https://archivosamarillos.blob.core.windows.net/manualesfaro/carnet2.png"}, 
   {id:2,url:"https://archivosamarillos.blob.core.windows.net/manualesfaro/carnet3.png"},
   
   {id:3,url:"https://archivosamarillos.blob.core.windows.net/manualesfaro/carnet4.png"},
  ]
     function ResponsiveImage( { src, width, height } ) {
        return (
          <div
            style={ { width } }
            className="responsive-image">
            <div  />
            <img
              src={ src }
              className="responsive-image__image" 
              alt=""
              />
              
          </div>
        );
      }
export default function VinoTinto() {
  const classes = useStyles();
  var pos = Math.floor((Math.random() * faros.length) + 1)-1;
  return (
    <div className={classes.root}>
       <Typography component="h2" variant="h4" gutterBottom  color="textSecondary" align="center">
      {'Busca tu Carnet: '}
      <Link color="inherit" href="https://vinotinto.azurewebsites.net/">
        CARNET VINO TINTO
      </Link>{' '}
     
    </Typography>
      
      <ResponsiveImage
          src={faros[0].url}
          width={ 2000 }
          height={ 1000 } 
      />
 <ResponsiveImage
          src={faros[1].url}
          width={ 4000 }
          height={ 1500 } 
      />

<ResponsiveImage
          src={faros[2].url}
          width={ 4000 }
          height={ 1500 } 
      />
 <ResponsiveImage
          src={faros[3].url}
          width={ 4000 }
          height={ 1500 } 
      />

 
 
 
    </div>
  );
}