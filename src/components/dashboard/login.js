import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
  {id:0,url:"https://media-cdn.tripadvisor.com/media/photo-s/11/8f/4a/46/castle-point-lighthouse.jpg"},
  {id:1,url:"https://media2.fdncms.com/charleston/imager/u/original/28743769/img_20170915_193857.jpg"},
  {id:2,url:"https://kapiticoastphotosoc.files.wordpress.com/2014/05/castle-point-lighthouse.jpg"},
  {id:3,url:"https://images2.minutemediacdn.com/image/upload/c_crop,h_3242,w_5760,x_0,y_214/f_auto,q_auto,w_1100/v1565106638/shape/mentalfloss/gettyimages-943835158.jpg"},
  {id:4,url:"http://www.villacaribehotel.com/images/jkit/items/289-screen.jpg"},
  
  {id:5,url:"https://i.pinimg.com/originals/24/62/c0/2462c057256b07f941d9614621aabee7.jpg"},
  
  {id:6,url:"https://cflvdg.avoz.es/sc/LW98UaOPtnf8mdVCnWfPMGZsL7k=/x/2017/03/19/0012_201703CM19C3F4jpg/Foto/CM19C3F4.jpg"},
  
  {id:7,url:"https://previews.123rf.com/images/smithore/smithore1009/smithore100900001/7812698-la-vieille-and-tevennec-lighthouses-in-brittany-sea-france.jpg"},
  
  {id:7,url:"https://upload.wikimedia.org/wikipedia/commons/7/73/La_vieille_with_mast.jpg"}
  
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
export default function Login() {
  const classes = useStyles();
  var pos = Math.floor((Math.random() * faros.length) + 1)-1;
  return (
    <div className={classes.root}>
      <ResponsiveImage
          src={faros[pos].url}
          width={ 900 }
          height={ 800 } 
      />

 
    </div>
  );
}