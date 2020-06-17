import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Title from './title';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

 const tileData = [
  {
    img: "https://www.el-carabobeno.com/wp-content/uploads/photos/37882-696x416.jpg"    ,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: "http://www.villacaribehotel.com/images/jkit/items/289-screen.jpg"    ,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwoISWp_pxf0etkrx3_x19NhN2XPgpk7VAEgju3E2jpXmvCTz",
         title: 'Image',
         author: 'author',
         cols: 1,
       },
       {
        img: "http://elestimulo.com/wp-content/uploads/2017/12/Punto-rojo-3-1100x618.jpg",
        title: 'Image',
        author: 'author',
        cols: 2,
      },{
        img: "https://www.acn.com.ve/wp-content/uploads/2019/09/rumichaca.jpg",
        title: 'Image',
        author: 'author',
        cols: 1,
      },{
        img: "https://miro.medium.com/max/4000/1*HHSS2MAwp_Z0zvuR9iKg6Q.jpeg",
        title: 'Image',
        author: 'author',
        cols: 2,
      }
     ];
   

export default function Fotos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
           <Grid container spacing={3}>
       <Grid item xs={12}>
           <Title>Irregularidades</Title>
           </Grid>
           <Grid item xs={12}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      </Grid>
      </Grid>
    </div>
  );
}