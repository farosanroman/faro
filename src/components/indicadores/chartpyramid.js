import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../dashboard/title';
import Chart, {
  CommonSeriesSettings,
  ValueAxis,
  LabelDE,
  Legend,
  Series,
  Tooltip,Size
} from 'devextreme-react/chart';
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const dataSource = [{
  age: '0-4',
  male: -3.1,
  female: 2.9
}, {
  age: '5-9',
  male: -3.1,
  female: 3.0
}, {
  age: '10-14',
  male: -3.0,
  female: 2.9
}, {
  age: '15-19',
  male: -3.2,
  female: 3.0
}, {
  age: '20-24',
  male: -3.5,
  female: 3.3
}, {
  age: '25-29',
  male: -3.5,
  female: 3.4
}, {
  age: '30-34',
  male: -3.5,
  female: 3.3
}, {
  age: '35-39',
  male: -3.3,
  female: 3.1
}, {
  age: '40-44',
  male: -3.7,
  female: 3.4
}, {
  age: '45-49',
  male: -3.8,
  female: 3.5
}, {
  age: '50-54',
  male: -3.4,
  female: 3.2
}, {
  age: '55-59',
  male: -3.1,
  female: 3.0
}, {
  age: '60-64',
  male: -2.7,
  female: 2.7
}, {
  age: '65-69',
  male: -2.9,
  female: 2.9
}, {
  age: '70-74',
  male: -2,
  female: 2.1
}, {
  age: '75-79',
  male: -1.2,
  female: 1.4
}, {
  age: '80-84',
  male: -0.8,
  female: 1.2
}, {
  age: '85-89',
  male: -0.5,
  female: 0.8
}, {
  age: '90-94',
  male: -0.2,
  female: 0.5
}, {
  age: '95+',
  male: 0,
  female: 0.1
}];
function customizeLabel(e){
  //alert()
 return `${Math.abs(e.value)}%`;
 //return Math.abs(e.valueText)+"%"
};
function customizeTooltip(e){
  // alert(e.valueText)
   return { text: Math.abs(e.valueText)+"%" };
 };

export default function ChartPyramid() {


  return (
    <React.Fragment>
      <Title>Piramide Poblacional</Title>
      <ResponsiveContainer>
      <Chart
        dataSource={dataSource}
        id={'chart'}
        rotated={true}
        barGroupWidth={12}
      >
        <CommonSeriesSettings
          type={'stackedbar'}
          argumentField={'age'}
        />
        <Series
          valueField={'male'}
          name={'Hombres'}
          color={'#3F7FBF'}
        />
        <Series
          valueField={'female'}
          name={'Mujeres'}
          color={'#F87CCC'}
        />
        <Tooltip
          enabled={true}
          customizeTooltip={customizeTooltip}
        />
         <ValueAxis>
          <Label customizeText={customizeLabel} />
        </ValueAxis>
        <Legend
          verticalAlignment={'bottom'}
          horizontalAlignment={'center'}
          margin={{ left: 50 }}
        />
      <Size width={450} height={380} />
      </Chart>

      
  

 
      </ResponsiveContainer>
    </React.Fragment>
  );
}