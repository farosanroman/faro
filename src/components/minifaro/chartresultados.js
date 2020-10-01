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
import Chart from 'react-apexcharts';


export default function ChartResultados(props) {
   
            // const chart50Options = {
            //     chart: {
            //         toolbar: {
            //             show: false
            //         },
            //         sparkline: {
            //             enabled: true
            //         }
            //     },
            //     dataLabels: {
            //             enabled: false
            //         },
            //     stroke: {
            //         color: props.color,
            //         width: 3
            //     },
            //     colors: [props.color],
            //     legend: {
            //         show: false
            //     },
            //     xaxis: {
            //         crosshairs: {
            //             width: 0
            //         }
            //     },
            //     markers: {
            //         size: 0
            //     },
            //     yaxis: {
            //         min: 0
            //     }
            // }
            const chart50Data = [{
                name: 'Unidad',
                data: [ 80,75,60,40,35,23]
              }, 
              {
                name: 'Oficialismo',
                data:  [20,25,40,60,65,77]
              },
              {
                name: 'Participacion',
                data:  [75,70,68,65,63,68]
              }
            ]
              const chart50Options={
                chart: {
                  height: 350,
                  type: 'area'
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  curve: 'smooth'
                },
                xaxis: {
                  
                  categories: ["P1","P2","P3","P4","P5","P6"]
                },
                tooltip: {
                  x: {
                    format: 'dd/MM/yy HH:mm'
                  },
                },
                colors:['#00bfff', '#ff0000', '#d3d3d3']
              }
           
                    return (
            <React.Fragment>
           <div className="donut">
      </div>
                        <Card className="pl-3 pt-3 mb-4">
                        <Title>{'Resultados'}</Title>
                            <div className="d-flex justify-content-between">
                                <div className="pr-4 flex-grow-1 text-nowrap">
                                    
                                    <Typography component="p" variant="h6">
                                        Cantidad
                                        </Typography>
                                        <Typography component="p" variant="h6">
                                        57%
                                        </Typography>
                
                                  
                                </div>
                                <div className="d-flex align-items-center pt-2">
                                    <Chart options={chart50Options} series={chart50Data} type="bar" height={250} />
                                </div>
                            </div>
                        </Card>
           
            </React.Fragment>
        );
}