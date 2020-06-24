
import React from 'react';
import Circle from 'react-circle';
import CountUp from 'react-countup';

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { Grid, Paper, Typography } from "@material-ui/core";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from '../layout/title';
import { findProps } from 'devextreme-react/core/template';
    export default function TotalCircle(props) {
            return (
                <React.Fragment>

                        
                            <Card className="card-box p-3 mb-4">
                               <Title>{props.titulo}</Title>
                               
                               
                                    <Table><TableRow><TableCell>
                                    <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="1s" //String: Length of animation
                                            responsive={false} // Boolean: Make SVG adapt to parent size
                                            size={80} // Number: Defines the size of the circle.
                                            lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                                            progress={props.porc} // Number: Update to change the progress and percentage.
                                            progressColor={props.color}  // String: Color of "progress" portion of circle.
                                            bgColor={props.bcolor} // String: Color of "empty" portion of circle.
                                            textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                        roundedStroke={true}
                            textStyle={{
                                fontSize: '60px', fontWeight: 'bold'
                            }} // Boolean: Rounded/Flat line ends
                                            showPercentage={true} // Boolean: Show/hide percentage.
                                            showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                        />
                                    
                                        </TableCell><TableCell>
                                    <Typography component="p" variant="h4">
                                         
                                            <CountUp
                                            start={0}
                                            end={props.total}
                                            duration={2}
                                            separator="."
                                            decimals={0}
                                            decimal=","
                                            prefix=""
                                            suffix=""
                                        /></Typography>
                                        <span className="text-muted">{props.leyenda}</span>
                                        </TableCell></TableRow></Table> 
                         
                            </Card>
     
                </React.Fragment>
            );
    }