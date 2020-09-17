
//https://flatlogic.com/templates/react-material-admin/demo
import React, { useState } from "react";
import {
  Grid,
  Container,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Typography
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

import Title from '../dashboard/title';
import FaroPieChart from '../indicadores/faropiechart';
import Widget from './widget';
import Dot from './dot';
import useStyles from "./logstyles";
//import FaroPieChart from './faropiechartborrar';
//import { StateStoring } from 'devextreme-react/data-grid';
//alert(JSON.stringify(DASHBOARD))

//const drawerWidth = 240;

export default function Log() {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
  const classes = useStyles();
  var theme = useTheme();
  const PieChartData = [
    { name: "AD", value: 400, color: "primary" },
    { name: "PJ", value: 300, color: "secondary" },
    { name: "VP", value: 300, color: "warning" },
    { name: "UNT", value: 200, color: "success" },
  ];
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  //const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
  
// alert("indicadores "+JSON.stringify(DASHBOARD2.dashboard[3].resultados))
    return (
        <div className={classes.root}>     
        <Container maxWidth="lg" className={classes.container}>   
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>

       <Widget
            title="Visitas VinoTinto"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Typography size="xl" weight="medium">
                12,678
              </Typography>
              <LineChart
                width={55}
                height={30}
                data={[
                  { value: 10 },
                  { value: 15 },
                  { value: 16 },
                  { value: 17 },
                  { value: 18 },
                  { value: 22 },
                  { value: 28 },
                  { value: 37 },
                ]}
                margin={{ left: theme.spacing(2) }}
              >
                <Line
                  type="natural"
                  dataKey="value"
                //  stroke={theme.palette.success.main}
                  strokeWidth={2}
                  dot={true}
                />
              </LineChart>
            </div>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Total 
                </Typography>
                <Typography size="md">860</Typography>
              </Grid>
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Retiros
                </Typography>
                <Typography size="md">32</Typography>
              </Grid>
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Ritmo
                </Typography>
                <Typography size="md">3.25%</Typography>
              </Grid>
            </Grid>
          </Widget>
           
       
       </Grid>   
       <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Rendimiento"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
                <Dot color="warning" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Integration
                </Typography>
              </div>
              <div className={classes.legendElement}>
                <Dot color="primary" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  SDK
                </Typography>
              </div>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Integration
              </Typography>
              <LinearProgress
                variant="determinate"
                value={30}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                SDK
              </Typography>
              <LinearProgress
                variant="determinate"
                value={55}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
          </Widget>
        </Grid>  
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Servidor"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                60% / 37°С / 3.3 Ghz
              </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.secondary.main}
                      fill={theme.palette.secondary.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                54% / 31°С / 3.3 Ghz
              </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.primary.main}
                      fill={theme.palette.primary.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                57% / 21°С / 3.3 Ghz
              </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.warning.main}
                      //fill={theme.palette.warning.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Widget>
        </Grid> 
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget title="Partidos" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={PieChartData}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                         // fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.pieChartLegendWrapper}>
                  {PieChartData.map(({ name, value, color }, index) => (
                    <div key={color} className={classes.legendItemContainer}>
                      <Dot color={color} />
                      <Typography style={{ whiteSpace: "nowrap" }}>
                        &nbsp;{name}&nbsp;
                      </Typography>
                      <Typography color="text" colorBrightness="secondary">
                        &nbsp;{value}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>       
   </Container>
</div>
    );
  }
// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
    var array = new Array(length).fill();
    let lastValue;
  
    return array.map((item, index) => {
      let randomValue = Math.floor(Math.random() * multiplier + 1);
  
      while (
        randomValue <= min ||
        randomValue >= max ||
        (lastValue && randomValue - lastValue > maxDiff)
      ) {
        randomValue = Math.floor(Math.random() * multiplier + 1);
      }
  
      lastValue = randomValue;
  
      return { value: randomValue };
    });
  }
  
  function getMainChartData() {
    var resultArray = [];
    var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
    var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
    var mobile = getRandomData(31, 1500, 7500, 7500, 1500);
  
    for (let i = 0; i < tablet.length; i++) {
      resultArray.push({
        tablet: tablet[i].value,
        desktop: desktop[i].value,
        mobile: mobile[i].value,
      });
    }
  
    return resultArray;
  }