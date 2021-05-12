import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import { Bar, Pie } from "react-chartjs-2";

const optionsBar = {
  legend: {
    display: false
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
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        min: 0,
        scaleLabel: {
          display: true,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 10
        },
        ticks: {
          min: 0,
          fontColor: "rgba(255,255,255,0.7)",
          fontSize: 14
        },
        gridLines: {
          display: false
        }
      }
    ]
  }
};

const optionsPie = {
  maintainAspectRatio: false,
  responsive: true,
  
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10
    }, 
    legend: { display: true, position: "right" },
  },
  tooltips: {
    show:true,
    enabled: true,
  
		mode: 'label',
		callbacks: {
			label: function(tooltipItem, data) {
			  //get the concerned dataset
			  var dataset = data.datasets[tooltipItem.datasetIndex];
			  //calculate the total of this data set
			  var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
				return previousValue + currentValue;
			  });
			  //get the current items value
			  var currentValue = dataset.data[tooltipItem.index];
			  //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
			  var percentage = Math.floor(((currentValue/total) * 100)+0.5);
		
			  return percentage + "%";
			}
		  }

	},
}


class PieChart1 extends Component {
  static defaultProps = {
    data: [142,121,21]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Llamadas Ofrecidas ",
        "Llamadas Atendidas ",
        "Llamadas Abandonadas ",
      ],
      datasets: [
        {
          label: "Tipificación",
          backgroundColor: [
            "#194350",
            "#206a5d",
            "#ce1212",
          ],
          hoverBackgroundColor: [
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
            "rgba(192,3,39,0.4)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Pie
                width={300}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsPie}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChartAMO1 extends Component {
  static defaultProps = {
    data: [51,17,34]
  };

  getData(dataProp) {
    var data = {
      labels: ["Llamadas Totales", "Contactadas", "No Contactadas"],
      datasets: [
        {
          label: "ACUMULADO MENSUAL OUT",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={300}
                height={100}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}



class BarChart1 extends Component {
  static defaultProps = {
    data: [27.43, 72.57, 96.34]
  };

  getData(dataProp) {
    var data = {
      labels: ["Abandono Total  ", "Nivel atención", "Nivel de servicio"],
      datasets: [
        {
          label: "ACUMULADO MENSUAL ",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={300}
                height={190}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChart2 extends Component {
  static defaultProps = {
    data: [124,62,25,6,16,8,3,2]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "INFORMACIÓN REGISTRO","CLIENTE SOLICITA SEGUIMIENTO WHATSAPP","NO LLEGA MI PEDIDO","DIRECTORIO VICKY FORM",
        "ENVÍO A TIENDA","LEVANTA PEDIDO","NO SE REGISTRA","NO VENTA"
    ],
      datasets: [
        {
          label: "Status",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}



class BarChart3 extends Component {
  static defaultProps = {
    data: [616,407, 209]
  };

  getData(dataProp) {
    var data = {
      labels: ["Llamadas Totales", "Contactadas", "No Contactadas"],
      datasets: [
        {
          label: "ACUMULADO MENSUAL OUT",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={190}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart4 extends Component {
  static defaultProps = {
    data: [95,46,27,147,3,6]
  };

  getData(dataProp) {
    var data = {
      labels: [
        "Falla en tipificador", "Registro", "Buzón", "Cuelga llamada", "Se envia catalogo", "Compra en tienda",
      ],
      datasets: [
        {
          label: "OUT",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={190}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart5 extends Component {
  static defaultProps = {
    data: [78, 19, 19, 176, 25, 35, 986, 22, 97, 689, 101, 912, 598, 84]
  };

  getData(dataProp) {
    var data = {
      labels: ["APLICACIÓN DE PAGO", "CAMBIO DE REVISTA", "CAMBIO O CORRECCIÓN DE DATOS", "CANCELACIONES",
        "DEVOLUCIÓN", "FACTURACIÓN", "INFORMACIÓN", "INVESTIGACIÓN CORREO", "NO VENTA", "OTROS",
        "REPOSICIÓN", "SUSCRIPCIONES", "TRANSFERENCIA INTERNA", "VENTA CRUZADA"],
      datasets: [
        {
          label: "Tipificación",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart6 extends Component {
  static defaultProps = {
    data: [53, 9, 28, 358, 8, 17, 554, 4, 5, 476, 287, 488, 43, 10]
  };

  getData(dataProp) {
    var data = {
      labels: ["APLICACIÓN DE PAGO", "CAMBIO DE REVISTA", "CAMBIO O CORRECCIÓN DE DATOS", "CANCELACIONES",
        "DEVOLUCIÓN", "FACTURACIÓN", "INFORMACIÓN", "INVESTIGACIÓN CORREO", "NO VENTA", "OTROS",
        "REPOSICIÓN", "SUSCRIPCIONES", "TRANSFERENCIA INTERNA", "VENTA CRUZADA"],
      datasets: [
        {
          label: "Tipificación",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChart7 extends Component {
  static defaultProps = {
    data: [90, 90, 100, 90, 100, 100, 100, 100]
  };

  getData(dataProp) {
    var data = {
      labels: ["JOSE EDUARDO  CRUZ  GARCIA", "LUIS DANIEL  MALDONADO  GALVAN", "ARTURO ADAN ALCANTARA GUZMAN", "DIANA LAURA  GOYRE GARCIA ", "MARIANA  FLORES  HERNANDEZ", "PATRICIA  JIMENEZ  JUAREZ", "LAURA GISELLE ROBLES  MEJIA", "TERESA  TOVAR TREJO"],
      datasets: [
        {
          label: "AGENTES",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)"
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={150}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}

class BarChart8 extends Component {
  static defaultProps = {
    data: [94.72, 93.02]
  };

  getData(dataProp) {
    var data = {
      labels: ["Enero", "Febrero"],
      datasets: [
        {
          label: "Calidad Anual",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChart9 extends Component {
  static defaultProps = {
    data: [25, 75, 0, 50,42,8]
  };

  getData(dataProp) {
    var data = {
      labels: [" ", " Enero", " ", " ", "Febrero", " ",],
      datasets: [
        {
          label: "ABC",
          backgroundColor: [
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
            "rgba(192,3,39,0.7)",
          ],
          data: dataProp
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                height={350}
                data={
                  isVisible ? () => this.getData(this.props.data) : []
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


class BarChartDoble extends Component {
  static defaultProps = {
    data1: [0, 0, 0],
    data2: [0, 0, 0]
  };

  getData(dataProp) {
    var data = {
      labels: ["2018", "2019", "2020"],
      datasets: [
        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp[0]
        },

        {
          label: "",
          backgroundColor: [
            "rgba(192,3,39,0.6)",
            "rgba(192,3,39,0.7)",
            "rgba(50,50,50,0.8)"
          ],
          data: dataProp[1]
        }
      ]
    };
    return data;
  }

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="chart-wrapper">
              <Bar
                width={400}
                data={
                  isVisible ? () => this.getData(this.props.data) : [0, 0, 0]
                }
                options={optionsBar}
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
  }
}


// class BarChartDoble extends Component {
//   static defaultProps = {
//     data1: [0, 0, 0],
//     data2: [0, 0, 0],
//   };

//   getData(dataProp) {
//     var data = {
//       labels: ["2018", "2019", "2020"],
//       datasets: [
//         {
//           label: "",
//           backgroundColor: [
//             "rgba(192,3,39,0.6)",
//             "rgba(192,3,39,0.7)",
//             "rgba(50,50,50,0.8)"
//           ],
//           data: dataProp[0]
//         },

//         {
//           label: "",
//           backgroundColor: [
//             "rgba(192,3,39,0.6)",
//             "rgba(192,3,39,0.7)",
//             "rgba(50,50,50,0.8)"
//           ],
//           data: dataProp[1]
//         }
//       ]
//     };
//     return data;
//   }

//   render() {
//     return (
//       <VisibilitySensor>
//         {({ isVisible }) => {
//           return (
//             <div className="chart-wrapper">
//               <Bar
//                 width={400}
//                 data={
//                   isVisible ? () => this.getData(this.props.data) : [0, 0, 0]
//                 }
//                 options={optionsBar}
//               />
//             </div>
//           );
//         }}
//       </VisibilitySensor>
//     );
//   }
// }
export {PieChart1, BarChart1,BarChartAMO1, BarChart2, BarChart3, BarChart4, BarChart5, BarChart6, BarChart7, BarChart8, BarChart9, BarChartDoble };
