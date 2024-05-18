import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css'

//Importar Logo
import logo from '../../assets/logo.png'

//Importar Iconos
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";


const Sidebar = () => {
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <Link to={"/"}>
                    <img src={logo} alt="Image Name" />
                </Link>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    Menu Principal
                </h3>
                <ul className="menuList grid">
                    <li className="listItem">
                        <Link to="/" className="menuLink flex">
                            <IoMdSpeedometer className="icon" />
                            <h3 className="smallText">
                                Dashboard
                            </h3>
                        </Link>
                    </li>

                    <li className="listItem">
                        <Link to="/Productos" className="menuLink flex">
                            <BsTrophy className="icon" />
                            <h3 className="smallText">
                                Productos
                            </h3>
                        </Link>
                    </li>

                    <li className="listItem">
                        <Link to="/Explorar" className="menuLink flex">
                            <MdOutlineExplore className="icon" />
                            <h3 className="smallText">
                                Explorar
                            </h3>
                        </Link>
                    </li>
                    <li className="listItem">
                        <Link to="/Pedido" className="menuLink flex">
                            <MdDeliveryDining className="icon" />
                            <h3 className="smallText">
                                Pedidos
                            </h3>
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Sidebar
