import React from 'react'
import Header from '../components/Header';
import { BarChart } from '@mui/x-charts/BarChart';
import "../index.css";
const dataset = [
  { month: 'Jan', seoul: 20 },
  { month: 'Feb', seoul: 25 },
  { month: 'Mar', seoul: 30 },
  { month: 'Apr', seoul: 50 },
  { month: 'May', seoul: 80 },
  { month: 'Jun', seoul: 130 },
  { month: 'Jul', seoul: 170 },
  { month: 'Aug', seoul: 160 },
  { month: 'Sep', seoul: 120 },
  { month: 'Oct', seoul: 60 },
  { month: 'Nov', seoul: 40 },
  { month: 'Dec', seoul: 25 },
];
const valueFormatter = () => `${value} mm`;
const chartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    height: 400,
    width: 1000
}
const dataset2 = [
  { month: 'Jan', seoul: 20 },
  { month: 'Feb', seoul: 25 },
  { month: 'Mar', seoul: 30 },
  { month: 'Apr', seoul: 50 },
  { month: 'May', seoul: 80 },
];
const valueFormatter2 = (value) => `${value} mm`;

const chartSetting2 = {
  yAxis: [{ label: 'rainfall (mm)' }],
  height: 400,
  width: 1000
};

function Chart() {
  return (
    <div>
        <Header/>
        <BarChart
            dataset= {dataset}
            xAxis= {[{ scaleType: 'band', dataKey: 'month'}]}
            series= {[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter}]}
            {...chartSetting}
            sx={{marginTop: '4rem'}}
        />
        <BarChart
      dataset={dataset2}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        {
          dataKey: 'seoul',
          label: 'Seoul rainfall',
          valueFormatter: valueFormatter2,
          getColor: () => 'url(#seoulGradient)', // ใช้ gradient fill
        },
      ]}
      slotProps={{
        svgDefs: (
          <defs>
            <linearGradient id="seoulGradient" x1="0" y1="0" x2="0" y2="1" >
              <stop offset="0%" stopColor="#4FC3F7" />
              <stop offset="100%" stopColor="#0288D1" />
            </linearGradient>
          </defs>
        ),
      }}
      {...chartSetting2}
    />
    </div>
  )
}

export default Chart