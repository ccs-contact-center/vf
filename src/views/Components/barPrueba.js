import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class Prueba extends React.Component {
  chart = null;

  componentDidMount() {
    this.configureChart();
  }

  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "% Alcance",
            data: [0,  0, 0, 0,  0, 0, 0,  0, 0, 0,  0, 0],
            pointHoverRadius: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            type: "line",
            backgroundColor: "rgba(192,3,39,0.7)",
            fill: false,
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: "Objetivo venta",
            data: [270113.44, 300000, 110000, 110000],
            type: "bar",
            backgroundColor: "rgba(192,3,39,0.7)",
          },
          {
            label: "Monto vendido",
            data: [175352.6, 218979.17, 133623.88, 96484.74],
            type: "bar",
            backgroundColor: "#737276"
          },




        ],
        labels: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
         

        ]
      },
      options: {
        elements: {
          line: {
            tension: 0.000001
          }
        },
        tooltips: {
          displayColors: false
        },
        legend: {
          display: true,
          position: "bottom"
        },
        scales: {
          yAxes: [
            {
              min: 0,
              scaleLabel: {
                display: true,
                fontColor: "rgba(255,255,255,0.7)",
                fontSize: 10
              },
               //stacked: true,
              ticks: {
                beginAtZero: true,
                min: 0,
                fontColor: "rgba(255,255,255,0.7)",
                fontSize: 14
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                fontColor: "rgba(255,255,255,0.7)",
                fontSize: 10
              },
              display: true,
              //stacked: false,
              barThickness: 25,
              ticks: {
                beginAtZero: true,
                min: 0,
                fontColor: "rgba(255,255,255,0.7)",
                fontSize: 14
              },
              fontColor: "rgba(255,255,255,0.7)",
              fontSize: 10,
              gridLines: {
                display: false
              }
              
            },
            
          ]
        }
      }
    });
    return mixedChart;
  };

  render() {
    return (
      <div>
        <div>

        </div>
        <canvas
          style={{ width: "1000px" }}
          ref={chart => {
            this.chart = chart;
          }}
        />
      </div>
    );
  }
}

export default Prueba;


