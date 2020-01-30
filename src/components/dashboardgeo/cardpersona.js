import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  avatarlarge: {
    backgroundColor: grey[500],margin: 5,
    width: 150,
    height: 150,
    alignSelf:"center"
  },
});

export default function CardPersona() {
  const classes = useStyles();

  return (
      
    <Card className={classes.card}>
        
      
      <CardActionArea justify="center">

        <CardContent>
        <Grid container 
       spacing={0}
       direction="column"
       alignItems="center"
       justify='center'
        
         >
           <Grid item >
         <Avatar aria-label="recipe"  src={"https://pbs.twimg.com/profile_images/1084274289090744320/M10oqLPc_400x400.jpg"} className={classes.avatarlarge} >
            
            </Avatar>
            </Grid>
         </Grid>
          <Typography gutterBottom variant="h5" component="h2">
            Fulanito de Tal y Cual
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tremendo Testigo de la Democracia
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          VER
        </Button>
        <Button size="small" color="primary">
          CONTACTO
        </Button>
      </CardActions>
      
    </Card>
  );
}

