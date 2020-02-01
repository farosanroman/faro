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
    width: 50,
    height: 50,
    alignSelf:"center"
  },
});

export default function CardPersona(prop) {
    //console.log(persona)
   // alert(prop)
  const classes = useStyles();
  const [persona, setPersona] = React.useState(prop);
  //alert(JSON.stringify(prop))
  //alert(prop.persona.nombreapellido)
  //alert(JSON.stringify(prop))
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
         <Avatar aria-label="recipe"  src={"https://i.pravatar.cc/100"} className={classes.avatarlarge} >
            
            </Avatar>
            </Grid>
         </Grid>
         
          <Typography className={classes.title} color="textSecondary" gutterBottom>
  {"testigo.rol"}
  </Typography>
  <Typography gutterBottom variant="h8" component="h3">
  {prop.persona.nombreapellido}
  </Typography>
  <Typography className={classes.pos} color="textSecondary">
  {"testigo.celular"}-{"testigo.correo"}
  </Typography>
  <Typography variant="body2" component="p">
  
            {"testigo.nombre"}, {"testigo.descripcion"}

  
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

