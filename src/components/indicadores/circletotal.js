
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

import Title from '../dashboard/title';
    export default function CircleTotal() {
            return (
                <React.Fragment>

                    <Grid container spacing={4}>
                        
                        <Grid item xs={12} sm={6} lg={3}>
                        
                            <Card className="card-box p-3 mb-4">
                            <Title>Personas</Title>
                                <Box className="card-tr-actions card-tr-actions-sm">
                                    {/* <IconButton color="primary" className="text-black-50">
                                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} className="font-size-sm" />
                                    </IconButton> */}
                                </Box>
                               
                                    <Table><TableRow><TableCell>
                                    <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="3s" //String: Length of animation
                                            responsive={false} // Boolean: Make SVG adapt to parent size
                                            size={80} // Number: Defines the size of the circle.
                                            lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                                            progress={43} // Number: Update to change the progress and percentage.
                                            progressColor="#1bc943"  // String: Color of "progress" portion of circle.
                                            bgColor="rgba(27, 201, 67, 0.15)" // String: Color of "empty" portion of circle.
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
                                            end={547}
                                            duration={4}
                                            separator=""
                                            decimals={0}
                                            decimal=","
                                            prefix=""
                                            suffix=""
                                        /></Typography>
                                        <span className="text-muted">Totales</span>
                                        </TableCell></TableRow></Table> 
                         
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Card className="card-box p-3 mb-4">
                            <Title>Personas</Title>
                                <Table><TableRow><TableCell>
                                <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="3s" //String: Length of animation
                                            responsive={false} // Boolean: Make SVG adapt to parent size
                                            size={80} // Number: Defines the size of the circle.
                                            lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                                            progress={69} // Number: Update to change the progress and percentage.
                                            progressColor="#f4772e"  // String: Color of "progress" portion of circle.
                                            bgColor="rgba(244, 119, 46, 0.15)" // String: Color of "empty" portion of circle.
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
                                            end={547}
                                            duration={4}
                                            separator=""
                                            decimals={0}
                                            decimal=","
                                            prefix=""
                                            suffix=""
                                        /></Typography>
                                        <span className="text-muted">Tres Meses</span>
                                        </TableCell></TableRow></Table> 
                               
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Card className="card-box p-3 mb-4">
                            <Title>Personas</Title>
                                    <Table><TableRow><TableCell>
                                    <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="3s" //String: Length of animation
                                            responsive={false} // Boolean: Make SVG adapt to parent size
                                            size={80} // Number: Defines the size of the circle.
                                            lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                                            progress={56} // Number: Update to change the progress and percentage.
                                            progressColor="#11c5db"  // String: Color of "progress" portion of circle.
                                            bgColor="rgba(17, 197, 219, 0.15)" // String: Color of "empty" portion of circle.
                                            textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                        roundedStroke={true}
                            textStyle={{
                                fontSize: '60px', fontWeight: 'bold'
                            }} // Boolean: Rounded/Flat line ends
                                            showPercentage={true} // Boolean: Show/hide percentage.
                                            showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                                        />
                                        </TableCell><TableCell>
                                    <Typography component="p" variant="h4">
                                         
                                            <CountUp
                                            start={0}
                                            end={547}
                                            duration={4}
                                            separator=""
                                            decimals={0}
                                            decimal=","
                                            prefix=""
                                            suffix=""
                                        /></Typography>
                                        <span className="text-muted">Ultima Semana</span>
                                        </TableCell></TableRow></Table> 
                         
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Card className="card-box p-3 mb-4">
                            <Title>Personas</Title>
                                <Table><TableRow><TableCell>
                                        <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="3s" //String: Length of animation
                                            responsive={false} // Boolean: Make SVG adapt to parent size
                                            size={80} // Number: Defines the size of the circle.
                                            lineWidth={22} // Number: Defines the thickness of the circle's stroke.
                                            progress={34} // Number: Update to change the progress and percentage.
                                            progressColor="#f83245"  // String: Color of "progress" portion of circle.
                                            bgColor="rgba(248, 50, 69, 0.15)" // String: Color of "empty" portion of circle.
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
                                            end={547}
                                            duration={4}
                                            separator=""
                                            decimals={0}
                                            decimal=","
                                            prefix=""
                                            suffix=""
                                        /></Typography>
                                        <span className="text-muted">Retirados</span>
                                        </TableCell></TableRow></Table> 
                               
                            </Card>
                        </Grid>
                    </Grid>

                </React.Fragment>
            );
    }