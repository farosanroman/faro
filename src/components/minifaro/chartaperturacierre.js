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


export default function ChartAperturaCierre(props) {
   
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
                name: 'Apertura',
                data: [ 10,  33,45,60,70,75,75,82,87, 88, 90,95, 97, 99,100]
              }, {
                name: 'Cierre',
                data:  [0, 0,0, 0, 0,0, 0, 0,0,20,40, 44, 56, 66,77]
              }]
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
                  type: 'datetime',
                  categories: ["2018-09-19T07:00:00.000Z", "2018-09-19T08:00:00.000Z", "2018-09-19T09:00:00.000Z", "2018-09-19T10:00:00.000Z", "2018-09-19T11:00:00.000Z", "2018-09-19T12:00:00.000Z", "2018-09-19T13:00:00.000Z", "2018-09-19T14:00:00.000Z", "2018-09-19T15:00:00.000Z", "2018-09-19T16:00:00.000Z", "2018-09-19T17:00:00.000Z", "2018-09-19T18:00:00.000Z", "2018-09-19T19:00:00.000Z", "2018-09-19T20:00:00.000Z","2018-09-19T21:00:00.000Z", "2018-09-19T22:00:00.000Z"]
                },
                tooltip: {
                  x: {
                    format: 'dd/MM/yy HH:mm'
                  },
                },
                colors:['#1ee93f', '#E91E63', '#9C27B0']
              }
           
                    return (
            <React.Fragment>
           <div className="donut">
      </div>
                        <Card className="pl-3 pt-3 mb-4">
                        <Title>{'Apertura/Cierre Mesas'}</Title>
                            <div className="d-flex justify-content-between">
                                <div className="pr-4 flex-grow-1 text-nowrap">
                                    
                                    <Typography component="p" variant="h6">
                                        Asignaciones
                                        </Typography>
                                        <Typography component="p" variant="h6">
                                        67%
                                        </Typography>
                
                                  
                                </div>
                                <div className="d-flex align-items-center pt-2">
                                    <Chart options={chart50Options} series={chart50Data} type="area" height={250} />
                                </div>
                            </div>
                        </Card>
           
            </React.Fragment>
        );
}