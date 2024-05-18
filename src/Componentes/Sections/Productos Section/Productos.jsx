import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import { Link } from "react-router-dom";
import './Productos.css'


//Importar Iconos
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";




const Productos = () => {




    const value = useContext(DataContext)
    const [productos] = value.productos
    const [menu, setMenu] = value.menu
    const [carrito] = value.carrito


    const toogleMenu = () => {
        setMenu(!menu)
    }

    console.log(productos);



    return (
        <div className="mainContent">
            <div className="topSection">
                <div className="headerSection flex">
                    <div className="title">
                        <h1>Productos</h1>
                    </div>

                    <div className="searchBar flex">
                        <input type="text" placeholder="Buscar" />
                        <BiSearchAlt className="icon" />
                    </div>

                    <div className="adminDiv">
                        <Link to={"/Publicar"}>
                            <FaHandHoldingDollar className="icon" />
                        </Link>
                        <AiOutlineShoppingCart className="icon cart" onClick={toogleMenu} />
                        <span className="cartTotal">{carrito.length}</span>
                    </div>
                </div>
            </div>
            <div className="productos">
                {
                    productos.map(producto => (
                        <ProductoItem key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            price={producto.price}
                            image={producto.image}
                            category={producto.category}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Productos;