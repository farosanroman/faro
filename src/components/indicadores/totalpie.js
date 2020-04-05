
import React,{useState,useEffect,Component} from 'react';
import Chart from 'react-apexcharts'
import Title from '../dashboard/title';
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
//alert(JSON.stringify(props.resultados.respuestas))
var p = props.resultados.respuestas.map(function (resp, index) {
  respuestas.push(resp.nombre)
  cantidades.push(resp.cant)
  //colores.push(partido.partido)
  return resp; 

});
setResultados(cantidades)
setLabels(respuestas)
setColors(['#FFFFFF', '#FDD017','#F88017', '#2554C7', '#000080'])
  }, []); // Important, pass an empty array so to execute useEffect hook only once


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
    tooltip: {
        shared: false,
        intersect: true,
       enabled:true,
       followCursor: true,
       y: {
        formatter: undefined,
        title: {
            formatter: (seriesName) => seriesName+"aaa",
        },
        },
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
      chart: {
       type: 'donut',
     },

     responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            chart: {
              width: 400,
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

    return (
      <div className="donut">
          <Title>{props.resultados.pregunta}</Title>
        <Chart options={options} series={resultados} type="pie" width="300" height="300" />
      </div>
    );
  
}

