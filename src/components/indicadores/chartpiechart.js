import React from 'react';

import Title from '../dashboard/title';
import PieChart, {
    Legend,
    Export,
    Series,
    Label,
    Font,
    Connector
  } from 'devextreme-react/pie-chart';
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}
const dataSource = [{
    country: 'AD',
    medals: 110
  }, {
    country: 'PJ',
    medals: 100
  }, {
    country: 'VP',
    medals: 72
  }, {
    country: 'UNT',
    medals: 47
  }, {
    country: 'SUMATE',
    medals: 46
  }, {
    country: 'FRENTE',
    medals: 41
  }, {
    country: 'MUD',
    medals: 40
  }, {
    country: 'INDEPENDIENTE',
    medals: 31
  }];
export default function ChartPyramid() {
  
  return (
    <React.Fragment>
      <Title>Partidos</Title>
   
      <PieChart id={'pie'}
        palette={'Bright'}
        dataSource={dataSource}
       
      >
        <Legend
          orientation={'horizontal'}
          itemTextPosition={'right'}
          horizontalAlignment={'center'}
          verticalAlignment={'bottom'}
          columnCount={4} />
       
        <Series argumentField={'country'} valueField={'medals'}>
          <Label
            visible={true}
            position={'columns'}
            customizeText={'customizeText'}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
      </PieChart>

      
  

 
    </React.Fragment>
  );
}