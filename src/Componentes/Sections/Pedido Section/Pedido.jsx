import React from "react";
import './Pedido.css'

// Importar Imagenes
import img1 from '../../../assets/seriesx.png'
import img2 from '../../../assets/Productos/acer nitro.png'
import img3 from '../../../assets/Productos/g203.png'
import img5 from '../../../assets/Productos/blackshark.png'

const Pedido = () => {
    return (
        <div className="mainContent">
            <div>
                <h1 className="title">Mis Pedidos</h1>
            </div>
            <div className="compras">
                <ul>
                    <li className="productoli">
                        <img className="productoimg" src={img1} alt="Xbox Image" />
                        <h3 className="titulo-p">Xbox Series S</h3>
                        <p>Precio: $339</p>
                        <p>Fecha: 24/01/2024</p>
                        <p>Cantidad: 1</p>
                        <p className="porpagar">Estado: Por Pagar</p>
                        <div className="btn-flex">
                            <button className="btn">Pagar</button>
                        </div>
                    </li>
                    <li className="productoli">
                        <img className="productoimg" src={img2} alt="Xbox Image" />
                        <h3 className="titulo-p">Acer Nitro KG240Y</h3>
                        <p>Precio: $286</p>
                        <p>Fecha: 27/02/2024</p>
                        <p>Cantidad: 2</p>
                        <p className="entregado">Estado: Entregado</p>
                    </li>
                    <li className="productoli">
                        <img className="productoimg" src={img3} alt="Xbox Image" />
                        <h3 className="titulo-p">Logitech G203</h3>
                        <p>Precio: $23</p>
                        <p>Fecha: 01/03/2024</p>
                        <p>Cantidad: 1</p>
                        <p className="cancelado">Estado: Cancelado</p>
                        <div className="btn-flex">
                            <button className="btn">Pedir Nuevamente</button>
                        </div>
                    </li>
                    <li className="productoli">
                        <img className="productoimg" src={img5} alt="Xbox Image" />
                        <h3 className="titulo-p">BlackShark V2</h3>
                        <p>Precio: $59</p>
                        <p>Fecha: 17/05/2024</p>
                        <p>Cantidad: 2</p>
                        <p className="entregado">Estado: Entregado</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pedido