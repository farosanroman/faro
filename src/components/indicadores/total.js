import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../dashboard/title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Total(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.indicador}</Title>
      <Typography component="p" variant="h4">
        33,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        al 30 Noviembre 2019
      </Typography>
     
    </React.Fragment>
  );
}