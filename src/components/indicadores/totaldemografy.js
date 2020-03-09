

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


export default function TotalDemografy() {
   
            const chart50Options = {
                chart: {
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                        enabled: false
                    },
                stroke: {
                    color: '#11c5db',
                    width: 3
                },
                colors: ['#11c5db'],
                legend: {
                    show: false
                },
                xaxis: {
                    crosshairs: {
                        width: 0
                    }
                },
                markers: {
                    size: 0
                },
                yaxis: {
                    min: 0
                }
            }
            const chart50Data = [
                {
                    name: 'Orders',
                    data: [0, 10, 22, 43, 46, 26, 24, 45]
                }
            ]

            const chart51Options = {
                chart: {
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                        enabled: false
                    },
                stroke: {
                    color: '#1bc943',
                    width: 3
                },
                colors: ['#1bc943'],
                legend: {
                    show: false
                },
                xaxis: {
                    crosshairs: {
                        width: 0
                    }
                },
                markers: {
                    size: 0
                },
                yaxis: {
                    min: 0
                }
            }
            const chart51Data = [
                {
                    name: 'Orders',
                    data: [0, 43, 24, 56, 35, 56, 65]
                }
            ]

            const chart52Options = {
                chart: {
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                        enabled: false
                    },
                stroke: {
                    color: '#4191ff',
                    width: 3
                },
                colors: ['#4191ff'],
                legend: {
                    show: false
                },
                xaxis: {
                    crosshairs: {
                        width: 0
                    }
                },
                markers: {
                    size: 0
                },
                yaxis: {
                    min: 0
                }
            }
            const chart52Data = [
                {
                    name: 'Orders',
                    data: [0, 7, 18, 28, 23, 24, 62, 43]
                }
            ]
            const piechart= {
                options: {
                    stroke: {
                        width: 1,
                      },
                    colors: ['#FFFFFF', '#FDD017','#F88017', '#2554C7', '#000080'],
                    labels: ['AD', 'PJ', 'VP', 'UNT', 'CAUSAR'],
                    chart: {
                        width: 380,
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
                        breakpoint: 480,
                        options: {
                          chart: {
                            width: 200
                          },
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }],
                      title: {
                        text: "Favourite Movie Type"
                      },
                },
                
                series: [58, 55, 41, 17, 15],
               
        }
        var options = {
            series: [{
            name: 'Males',
            data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
              3.9, 3.5, 3
            ]
          },
          {
            name: 'Females',
            data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
              -4.1, -4, -4.1, -3.4, -3.1, -2.8
            ]
          }
          ],
            chart: {
            type: 'bar',
            height: 640,
            stacked: true
          },
          colors: ['#008FFB', '#FF4560'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '100%',
          
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          
          grid: {
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: -5,
            max: 5,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%"
              }
            }
          },
          title: {
            text: 'Mauritius population pyramid 2011'
          },
          xaxis: {
            categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
              '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
              '0-4'
            ],
            title: {
              text: 'Percent'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          },
          };
          var series222= [{
            name: 'Males',
            data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
              3.9, 3.5, 3
            ]
          },
          {
            name: 'Females',
            data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
              -4.1, -4, -4.1, -3.4, -3.1, -2.8
            ]
          }
          ]
                    return (
            <React.Fragment>
<div className="donut">
<Chart options={options} series={series222} type="bar" width="580" />
      
     
      </div>
  
            </React.Fragment>
        );
}