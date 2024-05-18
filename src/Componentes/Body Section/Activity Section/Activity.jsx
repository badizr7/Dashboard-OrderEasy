import React from "react";
import './activity.css'


//Importar Iconos
import { BsArrowRightShort } from "react-icons/bs";


//Importar Imagenes
import user1 from '../../../assets/user6.jpg'
import user2 from '../../../assets/user7.jpg'
import user3 from '../../../assets/user8.jpg'
import user4 from '../../../assets/cj.jpg'

const Activity = () =>{
    return(
        <div className="activitySection">
            <div className="heading flex">
                <h1>Actividad Reciente</h1>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user1} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">María Moran</span>
                        <small>Inició Sesion</small>
                    </div>
                    <div className="duration">
                        hace 5 minutos
                    </div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user2} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Mariana Vasquez</span>
                        <small>Ordenó 1 Acer Nitro KG240Y</small>
                    </div>
                    <div className="duration">
                        hace 2 dias
                    </div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user3} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Rafael Mejia</span>
                        <small>Ordenó 1 Dualsense</small>
                    </div>
                    <div className="duration">
                        hace 10 dias
                    </div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user4} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Juan Badillo</span>
                        <small>Ordenó 3 Apple Watch</small>
                    </div>
                    <div className="duration">
                        hace 20 dias
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Activity