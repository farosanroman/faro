import React, { useState,Fragment } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CardCursos     from      './cardcursos'
//import TweetEmbed from 'react-tweet-embed'
const useStyles = makeStyles({
    card: {
      maxWidth: 350,
    },
   // toolbarMargin: theme.mixins.toolbar
  });
  const style={   Paper:{padding:1,marginTop:1,marginBottom:1}
}
const style2={   Paper:{padding:1,marginTop:1,marginBottom:10,height:20}
}


export default function Cursos() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  
    function handleDateChange(date) {
      setSelectedDate(date);
    }
  
  
    const classes = useStyles();
  

 

  return (
    <Fragment>
  
 <CardCursos />   
                
    </Fragment>

  );
}