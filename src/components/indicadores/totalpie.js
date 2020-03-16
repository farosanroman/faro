
import React,{useState,useEffect} from 'react';
import Circle from 'react-circle';
import CountUp from 'react-countup';

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { Grid, Paper, Typography } from "@material-ui/core";


import Title from '../dashboard/title';
import Chart from 'react-apexcharts';

//import Title from '../dashboard/title';
export default function TotalPie(props) {
  const [ colors, setColors ] = React.useState([]);
  const [ resultados, setResultados ] = React.useState( []);
  const [ labels, setLabels ] = React.useState( []);
  
  useEffect(() => {
 //   console.log(JSON.stringify(props))
 //   alert(JSON.stringify(props.resultados))
var respuestas=[]
var colores=[]
var cantidades=[]
var p = props.resultados.map(function (respuesta, index) {
  respuestas.push(respuesta.respuesta)
  cantidades.push(respuesta.cant)
  //colores.push(partido.partido)
  return respuesta; 

});
setResultados(cantidades)
setLabels(respuestas)
setColors(['#FFFFFF', '#FDD017','#F88017', '#2554C7', '#000080'])
  }, []); // Important, pass an empty array so to execute useEffect hook only once

 //  var colors=['#FFFFFF', '#FDD017','#F88017', '#2554C7', '#000080']
           
        //    const piechart= {
               
            var     options= {
                    stroke: {
                        width: 0,
                      },
                  //  // colors:colors,
                    labels: labels,
                    dataLabels: {
                      dropShadow: {
                        enabled: false
                      },
                      textAnchor: 'middle',
                      
                    },
                    // chart: {
                    //     width: 350,
                    //     type: 'donut',
                        
                    //   },
                    // fill: {
                  
                    // opacity: 1,
                    // type: "gradient",
                    // gradient: {
                    //   shade: "dark",
                    //   type: "vertical",
                    //   shadeIntensity: 0.35,
                    //   gradientToColors: undefined,
                    //   inverseColors: false,
                    //   opacityFrom: 0.85,
                    //   opacityTo: 0.85,
                    //   stops: [90, 0, 100]
                    // }
                  //},
                      // plotOptions: {
                      //   pie: {
                      //     expandOnClick: false
                      //   }
                      // },
                    
                      // legend: {
                      //   position: "bottom",
                      //   horizontalAlign: "right"
                      // }
                      chart: {
                        type: 'donut',
                      },
                      
                      responsive: [{
                        breakpoint: 350,
                        options: {
                          chart: {
                            width: 200
                          },
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }],
          //      },
                
   
               
        }
        var                 series=resultados
                    return (
            <React.Fragment>
<div className="donut">
<Title>{props.titulo}</Title>
        <Chart options={options} series={series} type="donut" width="360" />
      </div>

            </React.Fragment>
        );
}