import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
//import { Grid, Paper, Typography } from "@material-ui/core";

import Chart  from 'react-google-charts';
const useStyles = makeStyles({
  card: {
    maxWidth: 350,
  },
 // toolbarMargin: theme.mixins.toolbar
});
//const onClick = content => () => {
//  setOpen(false);
//  setContent(content);
//};
function GeoChart({location,country}) {
  //console.log(country)
  //console.log(JSON.stringify(location))
 //alert("alert"+JSON.stringify(location)+"/"+country+"/")
 // const [country0, setCountry] = React.useState('USA');
  
  const classes = useStyles();
 // type: 'horizontalBar',
//https://github.com/mui-org/material-ui/issues/15066
//alert()
return (

    <div style={{ marginTop: 10, padding: 30 } }>
      <Chart
       options={{
        sizeAxis: { minValue: 0, maxValue: 100 },
        region: 'VE', // SA
        //displayMode: 'marker',
        colorAxis: { colors: ['blue', 'blue'] }, // orange to blue,
        showTip: true
      }}
  width={'250px'}
  height={'300px'}
  chartType="GeoChart"
  data={ [
    ["lat", "lng","p"],
    [location.lat,location.lng,1]
    ]
}
//
  // Note: you will need to get a mapsApiKey for your project.
  //https://developers.google.com/chart/interactive/docs/gallery/geochart#regions-mode-format
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="AIzaSyCuT_6s8mM3unkG_sgUXBwlbJR60ByZTQw"
  rootProps={{ 'data-testid': '1' }}
/>
 
    </div>
  );
}



export default GeoChart;