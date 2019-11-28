import React, { PureComponent } from 'react';
import {  PieChart, Pie, Sector, Cell,Leyend,Tooltip} from 'recharts';
import Title from '../dashboard/title';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','white'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function FaroPieChartBorrar(props) {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
const data=props.data
//const sweetArray = [2, 3, 4, 5, 35]
const data2 = data.map(d => {
    return {name:d.nombre,value:d.value}
})

    return (
      <React.Fragment>
          <Title>{props.indicador}</Title>

      <PieChart width={200} height={180}>
        <Pie
          data={data2}
          cx={100}
          cy={100}
          labelLine={true}
          label={renderCustomizedLabel}
         
          outerRadius={75}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      
        <Tooltip />
          
      </PieChart>
      </React.Fragment>
    );
  }

