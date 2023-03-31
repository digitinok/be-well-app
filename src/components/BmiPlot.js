import React from 'react';
import Plot from 'react-plotly.js';

export default function BmiPlot({w=40,h=140}) {
  //limit weight  and hight to range of plot
  if (w<40){w=40;}
  if (h<140){h=140;}
  if (w>100){w=100;}
  if (h>200){h=200;}

  const heights = Array(61).fill().map((_,i) => ((i)+140));
  const weights = Array(61).fill().map((_,i) => ((i)+40));

  const bmiValues = [];

for (let y in heights) {
  let temp = []
  for (let x in weights) {
      temp.push(weights[x] / ((heights[y]/100)**2));
  }
  bmiValues.push(temp);
}

return (
<Plot
  data={[
    {
      name: 'you',
      type: 'scatter',
      mode: 'points',
      x: [w],
      y: [h],
      marker: {color: 'black'}
    },
    {
      type: 'heatmap',
      z: bmiValues,
      x: weights,
      y: heights,
      hoverongaps: false,
      colorscale: [
        ['0.0', 'rgb(0,0,149)'],
        ['0.206', 'rgb(0,0,180)'],
        ['0.208', 'rgb(0,255,0)'],
        ['0.363', 'rgb(0,255,0)'],
        ['0.366', 'rgb(255,200,0)'],
        ['0.485', 'rgb(255,200,0)'],
        ['0.487', 'rgb(255,0,0)'],
        ['0.607', 'rgb(255,0,0)'],
        ['0.61', 'rgb(255,0,255)'],
        ['1.0', 'rgb(255,0,255)']
      ],
      showscale: true,
    }
  ]}

  layout={{
    xaxis: {
      title: 'Weight [kg]',
    },
    yaxis: {
      title: 'Height [cm]',
    },
    font: {
      family: 'Arial',
      size: 12,
      color: 'rgb(255,255,255)'
    },
    width: 960,
    height: 720,
    title: 'Body-Mass-Index Chart',
    //colorscale: {['one','two']},
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',

  }}
/>
)
}