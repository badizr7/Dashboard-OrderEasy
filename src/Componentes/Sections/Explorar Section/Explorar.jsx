import React from "react";
import './Explorar.css'

//Importar Imagenes
import img1 from '../../../assets/seriesx.png'
import img2 from '../../../assets/Productos/acer nitro.png'
import img3 from '../../../assets/Productos/g203.png'
import img4 from '../../../assets/Productos/switch zelda.png'
import img5 from '../../../assets/Productos/blackshark.png'
import img6 from '../../../assets/Productos/atx.png'
import img7 from '../../../assets/Productos/k552.png'
import img8 from '../../../assets/Productos/asusrog.png'




const Explorar = () => {
    return (
        <div className="mainContent">
            <div className="table">

                <div className="tableHeader">
                    <h1 className="titulo">Top Ventas</h1>
                </div>
                <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Posicion</th>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>N° Ventas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="row">1</th>
                            <td> <img src={img1} alt="Xbox Image" /></td>
                            <td>Xbox Series X</td>
                            <td>Consolas</td>
                            <td>$339</td>
                            <td>1200 Ventas</td>
                        </tr> 

                        <tr>
                            <th className="row">2</th>
                            <td><img src={img4} alt="Switch Image"/></td>
                            <td>Nintendo Switch</td>
                            <td>Consolas</td>
                            <td>$308</td>
                            <td>900 Ventas</td>
                        </tr>

                        <tr>
                            <th className="row">3</th>
                            <td> <img src={img3} alt="G203 Image" /></td>
                            <td>Logitech G203</td>
                            <td>Perifericos</td>
                            <td>$23</td>
                            <td>700 Ventas</td>
                        </tr> 

                        <tr>
                            <th className="row">4</th>
                            <td><img src={img2} alt="Acer Nitro Image" /></td>
                            <td>Acer Nitro KG240Y</td>
                            <td>Monitor Gamer</td>
                            <td>$143</td>
                            <td>680 Ventas</td>
                        </tr>

                        <tr>
                            <th className="row">5</th>
                            <td> <img src={img7} alt="Redragon Image" /></td>
                            <td>Kumara K552</td>
                            <td>Perifericos</td>
                            <td>$60</td>
                            <td>640 Ventas</td>
                        </tr> 

                        <tr>
                            <th className="row">6</th>
                            <td><img src={img5} alt="Blackshark Image" /></td>
                            <td>Blackshark V2</td>
                            <td>Perifericos</td>
                            <td>$59</td>
                            <td>600 Ventas</td>
                        </tr>

                        <tr>
                            <th className="row">7</th>
                            <td> <img src={img6} alt="Atx Image" /></td>
                            <td>Chasis ATX</td>
                            <td>Gabinetes</td>
                            <td>$72</td>
                            <td>200 Ventas</td>
                        </tr> 

                        <tr>
                            <th className="row">8</th>
                            <td><img src={img8} alt="ROG Image" /></td>
                            <td>Asus ROG G16</td>
                            <td>Portatiles</td>
                            <td>$2054</td>
                            <td>30 Ventas</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Explorar