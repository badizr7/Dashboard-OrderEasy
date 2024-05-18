import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { Link } from "react-router-dom";
import './top.css'

//Importar Iconos
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";


//Importar Imagenes
import img from '../../../assets/soyadmin.jpg'
import video from '../../../assets/video.mp4'


const Top = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito] = value.carrito

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Bienvenido a Order Easy</h1>
                    <p>Hola, Bienvenido de Vuelta</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Buscar" />
                    <BiSearchAlt className="icon" />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon" />
                    <IoNotificationsOutline className="icon" />
                    <Link to={"/Publicar"}>
                    <FaHandHoldingDollar className="icon"/>
                    </Link>
                    <AiOutlineShoppingCart className="icon cart" onClick={toogleMenu} />
                    <span className="cartTotal">{carrito.length}</span>
                    <img className="adminImage" src={img} alt="Admin Image" />
                </div>
            </div>

            {menu ? null : (
                <div className="cardSection flex">

                    <div className="rightCard flex">
                        <h1>Añade y vende extraordinarios productos tecnologicos</h1>
                        <p>El mas rapido sistema de inventario de productos tecnologicos!</p>

                        <div className="videoDiv">
                            <video src={video} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Top