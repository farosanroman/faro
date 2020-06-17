import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import Circle from 'react-circle';
import Title from '../layout/title';
import Card from '@material-ui/core/Card';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
     

   <span><CountUp
       start={10000}
       end={33456}
       duration={4}
        deplay={2}
       separator="."
       decimals={0}
       decimal=","
   /></span>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        al 30 Noviembre 2019
      </Typography>
      <Table><TableRow><TableCell>
          <Circle animate={true} animationDuration="1s"   progress={75} size={60} percentSpacing={10}  bgColor="lightgray"  
                    textColor="black" progressColor="black"    roundedStroke={false}  showPercentage={true}  showPercentageSymbol={true} lineWidth={50}/>
                  </TableCell><TableCell>
                  <Typography component="p" variant="h4">
   

   <span><CountUp
       start={20000}
       end={33456}
       duration={4}
        deplay={2}
       separator="."
       decimals={0}
       decimal=","
   /></span>
    </Typography>



                  </TableCell></TableRow></Table>  
      
                            <Circle
                                                animate={true} // Boolean: Animated/Static progress
                                        animationDuration="3s" //String: Length of animation
                                        responsive={false} // Boolean: Make SVG adapt to parent size
                                        size={60} // Number: Defines the size of the circle.
                                        lineWidth={50} // Number: Defines the thickness of the circle's stroke.
                                        progress={74} // Number: Update to change the progress and percentage.
                                        progressColor="#1bc943"  // String: Color of "progress" portion of circle.
                                        bgColor="#edeef1" // String: Color of "empty" portion of circle.
                                        textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                        textStyle={{
                                                 fontSize: '60px', fontWeight: 'bold'
                                         }}
                                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                                        showPercentage={true} // Boolean: Show/hide percentage.
                                        showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                            />
                    <Typography component="p" variant="h4">
   

                                                    <span><CountUp
                                                        start={0}
                                                        end={687}
                                                        duration={4}
                                                         deplay={2}
                                                        separator=""
                                                        decimals={0}
                                                        decimal=","
                                                    /></span>
                                                     </Typography>
                                               
    </React.Fragment>
  );
}