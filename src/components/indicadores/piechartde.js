import React from 'react';

import PieChart, {
  Series,
  Label,
  Legend
} from 'devextreme-react/pie-chart';
import Title from '../dashboard/title';
//import { countries, waterLandRatio } from './data.js';


export default function PieChartDE(props) {
    //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

    const countries = [{
      nombre: 'Russia',
      value: 100
    }, {
      nombre: 'Canada',
      value: 200
    }, {
      nombre: 'USA',
      value: 300
    }];
  
  const pieCharts = [{
    title: 'Area of Countries',
    palette: 'Soft',
    dataSource: props.data
  }
  ];
    const pies = pieCharts.map((options, i) => (
        <PieChart
          className="pie"
          key={i}
          palette={['lightgray','orange', 'blue', 'purple', '#fff700', 'green', 'red', '#BDBDBD']}
          sizeGroup="piesGroup"
          dataSource={props.data}
        >
          <Series argumentField="nombre" valueField="value">
            <Label visible={true} format="percent" />
          </Series>
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
            itemTextPosition="right"
            rowCount={2}
          />
        </PieChart>
      ));
    
      return (
        <div className="pies-container">
          <Title>{props.indicador}</Title>

          {pies}
        </div>
      );
    }