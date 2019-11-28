import React, { PureComponent } from 'react';
import {  PieChart, Pie, Sector, Cell,Leyend,Tooltip} from 'recharts';
import Title from '../dashboard/title';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const data2 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['lightgray','orange', 'blue', 'purple', '#fff700', 'green', 'red', '#BDBDBD'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function Leyenda(nombres) {
   // alert(JSON.stringify(nombres))
    //const data=props.indicador.resultados
    
    return (
  <div>

<div style={{ width: '100%' }}>
      <Box display="flex"  flexWrap="wrap" flexDirection="row" justifyContent="center" p={1} m={1}  >
      {nombres.nombres.map((item, index) => (
             <Box  bgcolor={COLORS[index]} >
                {item.nombre}
             </Box>
         ))}  
       
        
      </Box>
      </div>

    
  </div>
    );
  }
export default function FaroPieChart(props) {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
    const data=props.indicador.resultados
    const nombre=props.indicador.nombre
    return (
      <React.Fragment>
          <Title>{nombre}</Title>

          <PieChart width={200} height={200} >
        <Pie
          data={data} 
          cx={100} 
          cy={100} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="#8884d8"
        
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
      <Leyenda nombres={data}/>
      </React.Fragment>
    );
  }

