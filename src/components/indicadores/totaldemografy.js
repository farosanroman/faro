

import React ,{useEffect} from 'react';
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


export default function TotalDemografy(props) {
  const [ colors, setColors ] = React.useState([]);
  const [ resultados, setResultados ] = React.useState( []);
  const [ labels, setLabels ] = React.useState( []);
  const [ masculinos, setMasculinos ] = React.useState(  [0.4, 0.65, 0.76, 0.88,     1.5, 2.1,   2.9, 3.8,    3.9,   4.2,   4,    4.3, 4.1, 4.2, 4.5, ]);
  const [ femeninos, setFemeninos ] = React.useState(   [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1   ]);
 
  useEffect(() => {
 //   console.log(JSON.stringify(props))
 //   alert(JSON.stringify(props.resultados))
var respuestas=[]
var colores=[]
var cantmasculinos=[]
var cantfemeninos=[]

//alert(JSON.stringify(props.resultados[0].masculino))
//alert(JSON.stringify(props.total))
var p = props.resultados.masculino.map(function (resp, index) {
   //respuestas.push(resp.nombre)
   cantmasculinos.push(resp.total/(props.total*1.0)*100.00)
//   //colores.push(partido.partido)
//   return resp; 

 });
 var p = props.resultados.femenino.map(function (resp, index) {
  //respuestas.push(resp.nombre)
  cantfemeninos.push((-1.0)*resp.total/props.total*100.0)
//   //colores.push(partido.partido)
//   return resp; 

});
setMasculinos(cantmasculinos)
setFemeninos(cantfemeninos)
setLabels(respuestas)
setColors(['#FFFFFF', '#FDD017','#F88017', '#2554C7', '#000080'])
  }, []); // Important, pass an empty array so to execute useEffect hook only once


         
        var options = {
          //   series: [{
          //   name: 'Males',
          //   data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
          //     3.9, 3.5, 3
          //   ]
          // },
          // {
          //   name: 'Females',
          //   data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
          //     -4.1, -4, -4.1, -3.4, -3.1, -2.8
          //   ]
          // }
          // ],
            chart: {
            type: 'bar',
            height: 700,
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
            min: -20,
            max: 20,
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
            text: 'Piramide Poblacional'
          },
          xaxis: {
            categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
              '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', 
            ],
            title: {
              text: 'Porcentaje'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          },
          };
          var series222= [{
            name: 'Masculinos',
            data: masculinos 
          },
          {
            name: 'Femeninos',
            data: femeninos
          }
          ]
                    return (
            <React.Fragment>
<div className="donut">
<Chart options={options} series={series222} type="bar" width="450" />
      
     
      </div>
  
            </React.Fragment>
        );
}