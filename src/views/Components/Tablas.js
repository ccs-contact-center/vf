import React, { Component } from "react";

class Tabla1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th scope="row" className="bg-danger">Categoria</th>
                            <th scope="row" className="bg-danger">Llamadas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Información</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Otros</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Prospecto</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td>Quejas</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td className="bg-danger "><strong>Total general</strong></td>
                            <td className="bg-danger"><strong>81</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Información</strong></td>
                            <td><strong>34</strong></td>
                        </tr>
                        <tr>
                            <td>Cliente solicita seguimiento WhatsApp </td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Horarios y ubicación de tiendas</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Información registro</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>Seguimiento a entrega </td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td><strong>Otros</strong> </td>
                            <td><strong>6</strong></td>
                        </tr>
                        <tr>
                            <td>Se corta llamada</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td><strong>Prospecto</strong></td>
                            <td><strong>43</strong></td>
                        </tr>
                        <tr>
                            <td>Levanta pedido</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>No venta</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td><strong>Quejas</strong></td>
                            <td><strong>1</strong></td>
                        </tr>
                        <tr>
                            <td>Error de entrega</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td className="bg-danger "><strong>Total general</strong></td>
                            <td className="bg-danger"><strong>81</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Información registro</strong></td>
                            <td><strong>21</strong></td>
                        </tr>
                        <tr>
                            <td>No se registra</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Registro exitoso</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td><strong>Levanta pedido</strong></td>
                            <td><strong>32</strong></td>
                        </tr>
                        <tr>
                            <td>Confirmar depósito</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Pago con TDC</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Promesa de pago</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td><strong>No venta</strong></td>
                            <td><strong>11</strong></td>
                        </tr>
                        <tr>
                            <td>Quiere envío a tienda</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Sin existencias, no cubre monto para envió gratis</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td className="bg-danger "><strong>Total general</strong></td>
                            <td className="bg-danger"><strong>64</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaAMO1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Concepto</th>
                            <th scope="col">Total mes</th>
                            <th scope="col">Sem 1</th>
                            <th scope="col">Sem 2</th>
                            <th scope="col">Sem 3</th>
                            <th scope="col">Sem 4</th>
                            <th scope="col">Sem 7</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Llamadas Totales</td>
                            <th className="bg-danger" >40</th>
                            <td>3</td>
                            <td>7</td>
                            <td>2</td>
                            <td>13</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <th scope="row" >Contactadas</th>
                            <th className="bg-danger" >29</th>
                            <td>0</td>
                            <td>4</td>
                            <td>2</td>
                            <td>10</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <th scope="row" >No Contactadas</th>
                            <th className="bg-danger" >11</th>
                            <td>3</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row" >% de Contactación</th>
                            <th className="bg-danger" >72.50%</th>
                            <th className="bg-danger" >0.00%</th>
                            <th className="bg-danger" >57.14%</th>
                            <th className="bg-danger" >100.00%</th>
                            <th className="bg-danger" >76.92%</th>
                            <th className="bg-danger" >86.67%</th>
                        </tr>
                        <tr>
                            <th scope="row" >AHT</th>
                            <th className="bg-danger" >00:01:06</th>
                            <td>00:02:31</td>
                            <td>00:01:39</td>
                            <td>00:01:24</td>
                            <td>00:00:33</td>
                            <td>00:00:20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaTO1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th scope="row" className="bg-danger">Categoria</th>
                            <th scope="row" className="bg-danger">Llamadas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Información</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Otros</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Prospecto</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Quejas</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td className="bg-danger "><strong>Total general</strong></td>
                            <td className="bg-danger"><strong>23</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Información</strong></td>
                            <td><strong>1</strong></td>
                        </tr>
                        <tr>
                            <td>Otros </td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td><strong>Otros</strong></td>
                            <td><strong>10</strong></td>
                        </tr>
                        <tr>
                            <td>Fallas audio</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Se corta llamada</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td><strong>Prospecto</strong> </td>
                            <td><strong>10</strong></td>
                        </tr>
                        <tr>
                            <td>Levanta pedido</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>No venta</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td><strong>Quejas</strong></td>
                            <td><strong>2</strong></td>
                        </tr>
                        <tr>
                            <td>Mala atención en tienda</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>No llega mi pedido</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td className="bg-danger "><strong>Total general</strong></td>
                            <td className="bg-danger"><strong>23</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Levanta pedido</strong></td>
                            <td><strong>9</strong></td>
                        </tr>
                        <tr>
                            <td>Pago con TDC</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td><strong>Promesa de pago</strong></td>
                            <td><strong>2</strong></td>
                        </tr>
                        <tr>
                            <td><strong>No venta</strong></td>
                            <td><strong>1</strong></td>
                        </tr>
                        <tr>
                            <td>Quería promoción de web /tienda</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td className="bg-danger "><strong>Total general</strong></td>
                            <td className="bg-danger"><strong>10</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaIIO4 extends Component {
    render() {
        return (
            <div >
                <table className="table table-bordered table-sm" >
                    <thead>
                        <tr className="bg-danger">
                            <th ColSpan="7" scope="col">Fecha</th>
                        </tr>
                        <tr className="bg-danger">
                            <th scope="col">Concepto</th>
                            <th scope="col">recibidas</th>
                            <th scope="col">atendidas</th>
                            <th scope="col">abandonadas</th>
                            <th scope="col">% abandono</th>
                            <th scope="col">aht</th>
                            <th scope="col">att</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} className="bg-danger" scope="col">Intervalo</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >142</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >121</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >21</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >14.79%</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >0:06:49</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >0:06:47</th>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >09:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >09:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >10:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:08</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >10:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >11:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >11:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>50.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:30</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:29</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >12:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12.50%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:40</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:38</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >12:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:17</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:15</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >13:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>14</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:05:13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:05:11</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >13:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>16.67%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:58</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:57</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >14:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:20</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:19</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >14:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:58</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:54</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >15:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>33.33%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:45</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:44</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >15:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:33</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:26</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >16:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>23.08%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:59</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:56</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >16:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>23.08%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:17</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:16</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >17:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:09:32</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:09:30</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >17:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7.69%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:22</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:21</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >18:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>40.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:09</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >18:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:11:05</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:11:04</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >19:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:11:39</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:11:38</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >19:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >20:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >20:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>-</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaIIO5 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Intervalo</th>
                            <th scope="col">TOTALES </th>
                            <th scope="col">Contactadas </th>
                            <th scope="col">No Contactadas </th>
                            <th scope="col">% de Contactación </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >08:00 a. m. </th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">08:30 a. m. </th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">09:00 a. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">09:30 a. m.</th>
                            <td>1</td>
                            <td>1</td>
                            <td></td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <th scope="row"> 10:00 a. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">10:30 a. m. </th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">11:00 a. m. </th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"> 11:30 a. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">12:00 p. m. </th>
                            <td>1</td>
                            <td></td>
                            <td>1</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">12:30 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">01:00 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">01:30 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">02:00 p. m.</th>
                            <td>4</td>
                            <td>3</td>
                            <td>1</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <th scope="row">02:30 p. m.</th>
                            <td>4</td>
                            <td>2</td>
                            <td>2</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <th scope="row">03:00 p. m.</th>
                            <td>6</td>
                            <td>5</td>
                            <td>14</td>
                            <td>83%</td>
                        </tr>
                        <tr>
                            <th scope="row">03:30 p. m.</th>
                            <td>1</td>
                            <td>1</td>
                            <td></td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <th scope="row">04:00 p. m.</th>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <th scope="row">04:30 p. m.</th>
                            <td>1</td>
                            <td></td>
                            <td>1</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">05:00 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">05:30 p. m.</th>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <th scope="row">06:00 p. m.</th>
                            <td>8</td>
                            <td>7</td>
                            <td>1</td>
                            <td>88%</td>
                        </tr>
                        <tr>
                            <th scope="row">06:30 p. m.</th>
                            <td>7</td>
                            <td>6</td>
                            <td>1</td>
                            <td>86%</td>
                        </tr>
                        <tr>
                            <th scope="row">07:00 p. m.</th>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">07:30 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">08:00 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">08:30 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">09:00 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">09:30 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">10:00 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th className="bg-danger">TOTAL</th>
                            <th className="bg-danger">40</th>
                            <th className="bg-danger">29</th>
                            <th className="bg-danger">11</th>
                            <th className="bg-danger">73%</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


class TablaVW1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Mes</th>
                            <th scope="col">Objetivo venta</th>
                            <th scope="col">Monto vendido</th>
                            <th scope="col">% Alcance</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Enero</th>
                            <td className=" tabla-p-t-b">$270,113.44</td>
                            <td className=" tabla-p-t-b">$175,352.60</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">65.00%</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Febrero</th>
                            <td className=" tabla-p-t-b">$300,000.00 </td>
                            <td className=" tabla-p-t-b">$218,979.17 </td>
                            <th scope="row" className="bg-danger tabla-p-t-b">72.99%</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Marzo</th>
                            <td className=" tabla-p-t-b">$110,000.00 </td>
                            <td className=" tabla-p-t-b">$133,623.88 </td>
                            <th scope="row" className="bg-danger tabla-p-t-b">121.48%</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Abril</th>
                            <td className=" tabla-p-t-b">$110,000.00 </td>
                            <td className=" tabla-p-t-b">$96,484.74 </td>
                            <th scope="row" className="bg-danger tabla-p-t-b">87.71%</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Mayo</th>
                            <td className=" tabla-p-t-b">-</td>
                            <td className=" tabla-p-t-b">-</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">-</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Junio</th>
                            <td className=" tabla-p-t-b">-</td>
                            <td className=" tabla-p-t-b">-</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">-</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Julio</th>
                            <td className=" tabla-p-t-b">-</td>
                            <td className=" tabla-p-t-b">-</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">-</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Agosto</th>
                            <td className=" tabla-p-t-b">-</td>
                            <td className=" tabla-p-t-b">-</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">-</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Septiembre</th>
                            <td className=" tabla-p-t-b">-</td>
                            <td className=" tabla-p-t-b">-</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">-</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Octubre</th>
                            <td className=" tabla-p-t-b">-</td>
                            <td className=" tabla-p-t-b">-</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">-</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Noviembre</th>
                            <td className=" tabla-p-t-b">-</td>
                            <td className=" tabla-p-t-b">-</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">-</th>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger tabla-p-t-b">Diciembre</th>
                            <td className=" tabla-p-t-b">-</td>
                            <td className=" tabla-p-t-b">-</td>
                            <th scope="row" className="bg-danger tabla-p-t-b">-</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TablaVW2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">WHATSAPP</th>
                            <th scope="col">Monto vendido</th>
                            <th scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">WHATSAPP</th>
                            <td> $92,510.74 </td>
                            <td>95.9%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">IN</th>
                            <td> $3,974.00 </td>
                            <td>4.1%</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">OUT</th>
                            <td>-</td>
                            <td>0.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


class TablaTW2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Categoria - Subcategoria Tip.</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Tipificaciones Whats App </td>
                            <td>336</td>
                        </tr>
                        <tr>
                            <td> Whats App info Venta </td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>% conversion Whats App info venta</td>
                            <td>36%</td>
                        </tr>
                        <tr>
                            <td>Ventas en bitácora</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <td>Monto vendido</td>
                            <td>$ 96,484.74 </td>
                        </tr>
                        <tr>
                            <td>Ticket Promedio</td>
                            <td>$    1,084.10  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


class TablaTW3 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">INFORMES</th>
                            <th scope="col">78</th>
                            <th scope="col">23%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> INFO DE TIENDAS</td>
                            <td>2</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td> NUEVO LANZAMIENTO</td>
                            <td>30</td>
                            <td>9%</td>
                        </tr>
                        <tr>
                            <td> NÚM. ASOCIADA</td>
                            <td>0</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <td> PROMOCIONES</td>
                            <td>43</td>
                            <td>13%</td>
                        </tr>
                        <tr>
                            <td> VICKY PUNTOS</td>
                            <td>3</td>
                            <td>1%</td>
                        </tr>
                        <tr className="bg-danger">
                            <th scope="col">NO VENTA</th>
                            <th scope="col">10</th>
                            <th scope="col">3%</th>
                        </tr>
                        <tr>
                            <td> SIN EXISTENCIAS, NO CUBRE MONTO ENVÍO  GRATIS</td>
                            <td>5</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td> SIN EXISTENCIAS, VA A IR A TIENDA</td>
                            <td>0</td>
                            <td>0%</td>
                        </tr>   
                        <tr>
                            <td> SIN EXISTENCIAS, VA A SOLICITAR MÁS OPCIONES</td>
                            <td>5</td>
                            <td>1%</td>
                        </tr>
                        <tr className="bg-danger">
                            <th scope="col">PROSPECTO</th>
                            <th scope="col">150</th>
                            <th scope="col">45%</th>
                        </tr>
                        <tr>
                            <td> LEVANTA PEDIDO PROMESA DE PAGO</td>
                            <td>5</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td> SOLICITA ENVÍO SEXY BOOK</td>
                            <td>1</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <td> SOLICITA EXISTENCIAS</td>
                            <td>121</td>
                            <td>36%</td>
                        </tr>
                        <tr>
                            <td> SOLICITA REGISTRO</td>
                            <td>24</td>
                            <td>7%</td>
                        </tr>
                        <tr className="bg-danger">
                            <th scope="col">QUEJAS</th>
                            <th scope="col">5</th>
                            <th scope="col">1%</th>
                        </tr>
                        <tr>
                            <td> ERROR EN ENTREGA</td>
                            <td>0</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <td> NO LLEGA SU PEDIDO</td>
                            <td>2</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td>PRODUCTO DAÑADO</td>
                            <td>0</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <td>PRODUCTO FALTANTE</td>
                            <td>3</td>
                            <td>1%</td>
                        </tr>
                        <tr className="bg-danger">
                            <th scope="col">POSTVENTA</th>
                            <th scope="col">2</th>
                            <th scope="col">1%</th>
                        </tr>
                        <tr>
                            <td>SEGUIMIENTO A PEDIDO</td>
                            <td>1</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <td>SOLICITA SU GUÍA</td>
                            <td>1</td>
                            <td>0%</td>
                        </tr>
                        <tr className="bg-danger">
                            <th scope="col">VENTA</th>
                            <th scope="col">89</th>
                            <th scope="col">26%</th>
                        </tr>
                        <tr>
                            <td>LEVANTA PEDIDO PAGADO</td>
                            <td>89</td>
                            <td>26%</td>
                        </tr>
                        
                       
                    </tbody>
                </table>
            </div>
        )
    }
}



//aqui no--------
class Tabla3 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th ColSpan="2" scope="col">OUT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="bg-danger">Tipificación</th>
                            <th scope="row" className="bg-danger">Cuenta</th>
                        </tr>
                        <tr>
                            <td>Falla en tipificador</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Registro</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Buzón</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>Pago con TPV</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Cuelga llamada</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Se envia catalogo</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Compra en tienda</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <th scope="row" className="bg-danger">Total general</th>
                            <th scope="row" className="bg-danger">198</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla4 extends Component {
    render() {
        return (
            <div >
                <table className="table table-bordered table-sm" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Concepto</th>
                            <th scope="col">recibidas</th>
                            <th scope="col">atendidas</th>
                            <th scope="col">abandonadas</th>
                            <th scope="col">% abandono</th>
                            <th scope="col">aht</th>
                            <th scope="col">att</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} className="bg-danger" scope="col">Intervalo</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >339</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >246</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >93</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >27.43%</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >0:06:14</th>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} >0:06:14</th>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >09:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>3</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>42.86%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:03:25</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:03:25</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >09:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12.50%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:21</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:21</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >09:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12.50%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:21</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:21</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >10:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>22.22%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:38</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:38</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >10:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>6</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>25.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:05</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:05</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >11:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>6</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>60.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:19</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:19</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >11:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>11</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8.33%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:47</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:47</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >12:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:01</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:01</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >12:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>25</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>18</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>28.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:05:49</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:05:49</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >13:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>21</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>42.86%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:49</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:49</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >13:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>38.46%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:54</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:54</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >14:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>30</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>23</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>7</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>23.33%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:03</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:03</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >14:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>22</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>14</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>36.36%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:02</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:02</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >15:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>16</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>11</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>31.25%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:41</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:41</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >15:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>22</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>17</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>5</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>22.73%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:03:57</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:03:57</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >16:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>14</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>12</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>14.29%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:51</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:51</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >16:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>19</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>6</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>31.58%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:05:31</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:05:31</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >17:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>18</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>10</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>55.56%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:53</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:53</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" ></th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >17:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>17</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>15</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>11.76%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:35</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:34</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" ></th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >18:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>19</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>11</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>8</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>42.11%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:51</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:04:51</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" ></th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}></td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >18:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>30.77%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:42</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:42</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >19:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>4</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:34</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:07:34</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >19:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:13</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:08:13</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >20:00</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>9</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:22</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:06:22</td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: "5px", paddingBottom: "5px" }} scope="row" >20:30</th>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>1</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>2</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0.00%</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:02:45</td>
                            <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>0:02:45</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla5 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Intervalo</th>
                            <th scope="col">TOTALES </th>
                            <th scope="col">Contactadas </th>
                            <th scope="col">No Contactadas </th>
                            <th scope="col">% de Contactación </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >08:00 a. m. </th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">08:30 a. m. </th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">09:00 a. m.</th>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>67%</td>
                        </tr>
                        <tr>
                            <th scope="row">09:30 a. m.</th>
                            <td>13</td>
                            <td>9</td>
                            <td>4</td>
                            <td>69%</td>
                        </tr>
                        <tr>
                            <th scope="row"> 10:00 a. m.</th>
                            <td>23</td>
                            <td>19</td>
                            <td>4</td>
                            <td>83%</td>
                        </tr>
                        <tr>
                            <th scope="row">10:30 a. m. </th>
                            <td>28</td>
                            <td>15</td>
                            <td>13</td>
                            <td>54%</td>
                        </tr>
                        <tr>
                            <th scope="row">11:00 a. m. </th>
                            <td>29</td>
                            <td>21</td>
                            <td>8</td>
                            <td>72%</td>
                        </tr>
                        <tr>
                            <th scope="row"> 11:30 a. m.</th>
                            <td>15</td>
                            <td>13</td>
                            <td>2</td>
                            <td>87%</td>
                        </tr>
                        <tr>
                            <th scope="row">12:00 p. m. </th>
                            <td>16</td>
                            <td>12</td>
                            <td>4</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <th scope="row">12:30 p. m.</th>
                            <td>23</td>
                            <td>13</td>
                            <td>10</td>
                            <td>57%</td>
                        </tr>
                        <tr>
                            <th scope="row">01:00 p. m.</th>
                            <td>59</td>
                            <td>32</td>
                            <td>27</td>
                            <td>54%</td>
                        </tr>
                        <tr>
                            <th scope="row">01:30 p. m.</th>
                            <td>49</td>
                            <td>32</td>
                            <td>17</td>
                            <td>65%</td>
                        </tr>
                        <tr>
                            <th scope="row">02:00 p. m.</th>
                            <td>39</td>
                            <td>17</td>
                            <td>22</td>
                            <td>44%</td>
                        </tr>
                        <tr>
                            <th scope="row">02:30 p. m.</th>
                            <td>29</td>
                            <td>21</td>
                            <td>8</td>
                            <td>72%</td>
                        </tr>
                        <tr>
                            <th scope="row">03:00 p. m.</th>
                            <td>13</td>
                            <td>9</td>
                            <td>4</td>
                            <td>69%</td>
                        </tr>
                        <tr>
                            <th scope="row">03:30 p. m.</th>
                            <td>54</td>
                            <td>31</td>
                            <td>23</td>
                            <td>57%</td>
                        </tr>
                        <tr>
                            <th scope="row">04:00 p. m.</th>
                            <td>49</td>
                            <td>40</td>
                            <td>9</td>
                            <td>82%</td>
                        </tr>
                        <tr>
                            <th scope="row">04:30 p. m.</th>
                            <td>28</td>
                            <td>21</td>
                            <td>7</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <th scope="row">05:00 p. m.</th>
                            <td>63</td>
                            <td>48</td>
                            <td>15</td>
                            <td>76%</td>
                        </tr>
                        <tr>
                            <th scope="row">05:30 p. m.</th>
                            <td>30</td>
                            <td>23</td>
                            <td>7</td>
                            <td>77%</td>
                        </tr>
                        <tr>
                            <th scope="row">06:00 p. m.</th>
                            <td>30</td>
                            <td>15</td>
                            <td>15</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <th scope="row">06:30 p. m.</th>
                            <td>12</td>
                            <td>6</td>
                            <td>6</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <th scope="row">07:00 p. m.</th>
                            <td>6</td>
                            <td>4</td>
                            <td>2</td>
                            <td>67%</td>
                        </tr>
                        <tr>
                            <th scope="row">07:30 p. m.</th>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <th scope="row">08:00 p. m.</th>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>67%</td>
                        </tr>
                        <tr>
                            <th scope="row">08:30 p. m.</th>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <th scope="row">09:00 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">09:30 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">10:00 p. m.</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="bg-danger">TOTAL</td>
                            <td className="bg-danger">616</td>
                            <td className="bg-danger">407</td>
                            <td className="bg-danger">209</td>
                            <td className="bg-danger">66%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla6 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Etiquetas de fila</th>
                            <th scope="col">Cuentas de status </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >Renovación Diciembre</th>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th scope="row">Renovación Enero</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row">Sin contacto</th>
                            <td>6</td>
                        </tr>
                        <tr>
                            <th scope="row">Sin respuesta</th>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th scope="row">Suscripción Vigente</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th scope="row"> Total General</th>
                            <td className="bg-danger">15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Tabla7 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">AGENTE</th>
                            <th scope="col">CALF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >JOSE ANTONIO GONZALEZ RODRIGUEZ</th>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">JUAN CARLOS RODRIGUEZ HILARIO</th>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}




export {
    Tabla1, TablaAMO1, TablaTO1, TablaIIO4, TablaIIO5, TablaVW1, TablaVW2,TablaTW2,TablaTW3,
    Tabla3, Tabla4, Tabla5, Tabla6, Tabla7
}