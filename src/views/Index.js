import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactFitText from "react-fittext";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText
} from "reactstrap";
import "../index.css";
import logo from "../assets/img/brand/logo.png";
import estrate1 from "../assets/img/estrate1.png";
import estrate2 from "../assets/img/estrate2.png";
import estrate3 from "../assets/img/estrate3.png";
import estrate4 from "../assets/img/estrate4.png";
import { PieChart1,  BarChartAMO1,   } from "./Components/Graphics"
import { Tabla1, TablaAMO1, TablaTO1, TablaIIO4, TablaIIO5,TablaVW1,TablaVW2,TablaTW2,TablaTW3,  } from "./Components/Tablas"
import Prueba from "./Components/barPrueba"
import { MapInteractionCSS } from 'react-map-interaction';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTIN: {
        scale: 1,
        translation: { x: 0, y: 0 }
      },
      valueTO: {
        scale: 1,
        translation: { x: 0, y: 0 }
      },
      value2: {
        scale: 1,
        translation: { x: 0, y: 0 }
      },
      valueII3: {
        scale: 1,
        translation: { x: 0, y: 0 }
      },
      valueII4: {
        scale: 1,
        translation: { x: 0, y: 0 }
      },
      valueVW1: {
        scale: 1,
        translation: { x: 0, y: 0 }
      }
    };
  }

  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */


          verticalCentered={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div
                    style={{
                      padding: "3%",
                      textAlign: "center",
                      width: "50vw"
                    }}
                  >
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                      }}
                    />

                    <ReactFitText>
                      <h1 className="transparent">
                        Resultados<br />
                        Semanal<br />
                        Abril 2021<br />VICKY FORM
                      </h1>
                    </ReactFitText>
                  </div>
                </div>

                






                <div className="section "
                  style={{
                    padding: "3%",
                    textAlign: "center",

                  }}>
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h1>
                          <b>HIGHLIGHTS SEMANAL</b>
                        </h1>
                      </Col>
                      <Col xs="12">
                        <p>
                          1 AGENTE<br />
                          HORARIO<br />
                          Lunes a viernes 1:00 pm a 7:00 pm<br />
                          Sábado de 9:00 am a 3:00 pm
                        </p>
                      </Col>
                      <Col xs="12">
                        <ul>
                          <li>Envíos masivos de WhatsApp</li>
                          <li>Actualización de estados para atraer atención.</li>
                          <li>No se puede realizar OUT, por el tema de que solo contamos con un agente y las llamadas
                               IN las consumen.</li>
                          <li>Marcación a BBDD extraída por CCS</li>
                          <li>Búsqueda de prendas alternativas a las inexistencias</li>
                          <li>Difusión masiva de WhatsApp de incitación a realizar pedido</li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section ">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>ACUMULADO MENSUAL IN</span></h2>
                      </Col>
                    </Row>
                    <Row className="centrado-fila">
                      <Col xs="6">
                        <ul>
                          <li>Llamadas Ofrecidas &rarr; 142.</li>
                          <li>Llamadas Atendidas &rarr; 121.</li>
                          <li>Llamadas Abandonadas &rarr; 21. </li>
                          <li>% de abandono Total &rarr; 14.79%.</li>
                          <li>% de nivel atención  &rarr; 85.21%.</li>
                          <li>% de nivel de servicio &rarr;  82.64%.</li>

                        </ul>
                      </Col>
                      <Col xs="6">
                        <PieChart1 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>TIPIFICACIÓN IN </span></h2>
                      </Col>
                      <Col xs="12">

                      </Col>
                    </Row>
                  </Container>
                  <div style={{ width: "95%", height: "80%" }}>
                    <MapInteractionCSS
                      valueTIN={this.state.valueTIN}
                      onChange={(valueTIN) => this.setState({ valueTIN })}
                      className="centrado-fila"
                    >
                      <Tabla1 />
                    </MapInteractionCSS>
                  </div>
                </div>
                <div className="section ">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>ACUMULADO MENSUAL OUT</span></h2>
                      </Col>
                    </Row>
                    <Row className="centrado-fila">
                      <Col xs="4">
                        <ul>
                          <li>Llamadas Totales &rarr; 616.</li>
                          <li>Contactadas &rarr; 247.</li>
                          <li>No Contactadas &rarr; 209. </li>
                          <li>% de Contactación  &rarr; 66.07%.</li>
                          <li>AHT  &rarr; 00:03:29.</li>
                        </ul>
                      </Col>
                      <Col xs="8">
                        <TablaAMO1 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section ">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>ACUMULADO MENSUAL OUT</span></h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <BarChartAMO1 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>TIPIFICACIÓN OUT  </span></h2>
                      </Col>
                    </Row>
                  </Container>
                  <div style={{ width: "95%", height: "80%" }}>
                    <MapInteractionCSS
                      valueTO={this.state.valueTO}
                      onChange={(valueTO) => this.setState({ valueTO })}
                      className="centrado-fila"
                    >
                      <TablaTO1 />
                    </MapInteractionCSS>
                  </div>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>INTERVALO IN/OUT  </span></h2>
                      </Col>
                    </Row>
                  </Container>
                  <div className="display90">
                    <MapInteractionCSS
                      valueII3={this.state.valueII3}
                      onChange={(valueII3) => this.setState({ valueII3 })}
                      className="centrado-fila"
                    >
                      <TablaIIO4 />
                    </MapInteractionCSS>
                  </div>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>INTERVALO IN/OUT  </span></h2>
                      </Col>
                    </Row>
                  </Container>
                  <div className="display90">
                    <MapInteractionCSS
                      value={this.state.value}
                      onChange={(value) => this.setState({ value })}
                      className="centrado-fila"
                    >
                      <TablaIIO5 />
                    </MapInteractionCSS>
                  </div>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12" >
                        <h2 className="border border-bottom border-danger"><span>INTERVALO IN/OUT  </span></h2>
                        <h1 className="text-justify">Se realiza modificación en la grabación del IVR para incentivar
                        la venta vía WhatsApp.<br />
                        El horario con mayor demanda es de 13:00 pm a 18:00 pm. <br />
                        Nuestro agente se enfoca en ventas cruzadas.<br />
                        Nuestro agente se enfoca en ventas cruzadas.</h1>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12" >
                        <h2 className="border border-bottom border-danger">
                          <span>VENTAS WHATS  </span>
                        </h2>
                        <TablaVW1/>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12" >
                        <h2 className="border border-bottom border-danger">
                          <span>VENTAS WHATS  </span>
                        </h2>
                        <TablaVW2/>
                        <p>
                          <ul>
                            <li>Ticket promedio $798</li>
                            <li>Alcance en meta 87.71% del 1 al 30 de Abril. </li>
                          </ul>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12" >
                        <h2 className="border border-bottom border-danger">
                          <span>VENTAS WHATS  </span>
                        </h2>
                      </Col>
                      <Col xs="12" >
                        <Prueba/>
                        </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12" >
                        <h2 className="border border-bottom border-danger">
                          <span>TIPIFICACIÓN WHATS   </span>
                        </h2>
                      </Col>
                      <Col xs="12" >
                      <TablaTW2/>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12" >
                        <h2 className="border border-bottom border-danger">
                          <span>TIPIFICACIÓN WHATS   </span>
                        </h2>
                      </Col>
                    </Row>
                  </Container>
                  <div style={{ width: "95%", height: "80%" }}>
                    <MapInteractionCSS
                      valueVW1={this.state.valueVW1}
                      onChange={(valueVW1) => this.setState({ valueVW1 })}
                      className="centrado-fila"
                    >
                     <TablaTW3/>
                    </MapInteractionCSS>
                  </div>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger"><span>ESTRATEGIAS</span></h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="3">
                        <Card style={{ backgroundColor: " rgb(38, 38, 38)" }}>
                          <CardBody className="cardAltura">
                            <img
                              src={estrate1}
                              width={140}
                              alt="estrate2.png"
                              className="img-fluid"
                              style={{
                                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                              }}
                            />
                            <CardText>Publicacion de estados en WhatsApp con el arte institucional</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card style={{ backgroundColor: " rgb(38, 38, 38)" }}>
                          <CardBody className="cardAltura">
                            <img
                              src={estrate2}
                              width={160}
                              alt="estrate2.png"
                              className="img-fluid"
                              style={{
                                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                              }}
                            />
                            <CardText>1 a 3 pm se realiza envio masivo de mensajes para invitar a la socia  a realizar pedido</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card style={{ backgroundColor: " rgb(38, 38, 38)" }}>
                          <CardBody className="cardAltura">
                            <img
                              src={estrate3}
                              width={100}
                              alt="estrate3.png"
                              className="img-fluid"
                              style={{
                                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                              }}
                            />
                            <CardText>4 a 5 pm se generan cotizaciones y seguimientos de promesas de pago</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card style={{ backgroundColor: " rgb(38, 38, 38)" }}>
                          <CardBody className="cardAltura">
                            <img
                              src={estrate4}
                              width={160}
                              alt="estrate4.png"
                              className="img-fluid"
                              style={{
                                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                              }}
                            />
                            <CardText>5 a 7 pm se realizan pendientes de venta que salgan del día</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>


                

                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2>
                          <b>Gracias</b> <br />
                          <a href="www.ccscontactcenter.com">www.ccscontactcenter.com</a><br />
                    CDMX<br />
                    Amores 321 1° piso<br />
                    Col. Del Valle<br />
                    C.P. 03100 <br />
                    Tel. +52 (55) 5091.9160
                    <br />
                        </h2>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/*############################################################# AREAS #############################################################*/}

                {/* <Comercial />
                <Implementacion />
                <RRHH />
                <Capacitacion />
                <Comunicacion />
                <Operacion />
                <TI />
                <CommandCenter />
                <Calidad />
                <Procesos /> */}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
