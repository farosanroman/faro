
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
                    colors: ['#800080', '#FDD017','#F88017', '#2554C7', '#000080'],
                    labels: ['Testigo', 'Activista', 'Formador', 'Facilitador', 'Coordinador'],
                    chart: {
                        width: 280,
                        type: 'donut',
                        dropShadow: {
                          enabled: true,
                          color: '000000',
                          top: -1,
                          left: 1,
                          blur: 1,
                          opacity: 0.3
                        }
                      },
                      responsive: [{
                        breakpoint: 280,
                        options: {
                          chart: {
                            width: 280
                          },
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }],
                     
                },
                
                series: [588, 122, 23, 17, 15],
               
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