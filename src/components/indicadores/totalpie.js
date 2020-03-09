
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
import Chart from 'react-apexcharts';

//import Title from '../dashboard/title';
export default function TotalPie(props) {
   
           
            const piechart= {
                fill: {
                  
                    opacity: 1,
                    type: "gradient",
                    gradient: {
                      shade: "dark",
                      type: "vertical",
                      shadeIntensity: 0.35,
                      gradientToColors: undefined,
                      inverseColors: false,
                      opacityFrom: 0.85,
                      opacityTo: 0.85,
                      stops: [90, 0, 100]
                    }
                  },
                options: {
                    stroke: {
                        width: 1,
                      },
                    colors: ['#FFFFFF', '#FDD017','#F88017', '#2554C7', '#000080'],
                    labels: ['AD', 'PJ', 'VP', 'UNT', 'CAUSAR'],
                    chart: {
                        width: 250,
                        type: 'donut',
                        dropShadow: {
                          enabled: true,
                          color: '000000',
                          top: -1,
                          left: 1,
                          blur: 1,
                          opacity: 0.2
                        }
                      },
                      responsive: [{
                        breakpoint: 380,
                        options: {
                          chart: {
                            width: 270
                          },
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }],
                     
                },
                
                series: [58, 55, 41, 17, 15],
               
        }
        
                    return (
            <React.Fragment>
<div className="donut">
<Title>{props.titulo}</Title>
        <Chart options={piechart.options} series={piechart.series} type="donut" width="380" />
      </div>

            </React.Fragment>
        );
}