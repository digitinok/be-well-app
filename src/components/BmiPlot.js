import React from 'react';
import Plot from 'react-plotly.js';

export default function BmiPlot({w,h}) {
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

// console.log(heights, weights, bmiValues, bmiValues[50,0]);

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
        color: 'rgb(150,150,150)'
      },
      width: 960,
      height: 720,
      title: 'Body-Mass-Index Chart',
    }}
  />
)
}