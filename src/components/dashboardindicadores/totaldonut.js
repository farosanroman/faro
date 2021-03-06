
import React,{useState,useEffect} from 'react';
import { useRecoilState,useRecoilValue, useSetRecoilState} from "recoil";
import { indicadoresorganizacion} from '../store/atom';

import Circle from 'react-circle';
import CountUp from 'react-countup';


import Title from '../layout/title';
import Chart from 'react-apexcharts';

//import Title from '../dashboard/title';
export default function TotalDonut(props) {
  const [ colors, setColors ] = React.useState([]);
  const [ resultados, setResultados ] = React.useState( []);
  const [ labels, setLabels ] = React.useState( []);
  const INDICADORESORGANIZACION=useRecoilValue(indicadoresorganizacion) 

  useEffect(() => {
    //   console.log(JSON.stringify(props))
     // alert(JSON.stringify(INDICADORESORGANIZACION))
   
   setResultados(23,45,67,78,78)
   setLabels(['AD','PJ','UNT','VP','RP'])
   setColors(['#ECF0F1', '#FDD017', '#2554C7', '#F88017','#000080'])
 
     }, []); // Important, pass an empty array so to execute useEffect hook only once
  useEffect(() => {
 //   console.log(JSON.stringify(props))
  // alert(JSON.stringify(INDICADORESORGANIZACION))
var respuestas=[]
var colores=[]
var cantidades=[]
//console.log("DONUT "+JSON.stringify(props.resultados))
//alert("DONUT "+JSON.stringify(JSON.stringify(props.resultados)))
var p = props.resultados.map(function (respuesta, index) {
  if ((respuesta.cant>0)&&(respuesta.respuesta!='SUMATE')){
  respuestas.push(respuesta.respuesta)
  cantidades.push(respuesta.cant)
  //colores.push(partido.partido)
  return respuesta; 
  }
});
//console.log(respuestas)
//console.log(cantidades)
setResultados(cantidades)
setLabels(respuestas)
if (props.titulo=="Partidos"){
setColors(['#ECF0F1', '#FDD017', '#2554C7', '#F88017','#000080'])
}else{
  setColors(['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'])
}

if (props.titulo=="Partidos"){
setResultados([23,45,67,78,78])
setLabels(['AD','PJ','UNT','VP','RP'])
setColors(['#ECF0F1', '#FDD017', '#2554C7', '#F88017','#000080'])
}
if (props.titulo=="Roles"){
  setResultados([23,45,67,78,78])
  setLabels(['Testigo','Coordinador','Conteo','Movilizador','Motorizado'])
  setColors(['#ECF0F1', '#FDD017', '#2554C7', '#F88017','#000080'])
  }
  }, [props.resultados]); // Important, pass an empty array so to execute useEffect hook only once

 //  var colors=['#FFFFFF', '#FDD017','#F88017', '#2554C7', '#000080']
           
        //    const piechart= {
               var options2= {
                chart: {
                 // width: 380,
                  type: 'pie',
                },
                colors:colors,
                labels:labels,
                plotOptions: {
                  pie: {
                    expandOnClick: false
                  }
                },
              
                legend: {
                  position: "bottom",
                  horizontalAlign: "center"
                },
              //   chart: {
              //    type: 'donut',
              //  },
          
               responsive: [
                {
                  breakpoint: 600,
                  options: {
                    plotOptions: {
                      chart: {
                        width: 600,
                        height:600
          
                      },
                      bar: {
                        horizontal: true
                      }
                    },
                    legend: {
                      position: "bottom"
                    }
                  }
                }
              ]
              }
            
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
                  plotOptions: {
                    pie: {
                      expandOnClick: false
                    }
                  },
                
                  legend: {
                    position: "bottom",
                    horizontalAlign: "center"
                  },
                //   chart: {
                //    type: 'donut',
                //  },
            
                 responsive: [
                  {
                    breakpoint: 600,
                    options: {
                      plotOptions: {
                        chart: {
                          width: 600,
                          height:600
            
                        },
                        bar: {
                          horizontal: true
                        }
                      },
                      legend: {
                        position: "bottom"
                      }
                    }
                  }
                ]
          //      },
                
   
               
        }
        var                 series=resultados
      //  var                 series=[12,23,45]
                    return (
            <React.Fragment>
<div className="donut">
<Title>{props.titulo}</Title>
        <Chart options={options2} series={series} type="donut" width="360" height="350" />
      </div>

            </React.Fragment>
        );
}