import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../../context/DataProvider";
import { ProductoItem } from "../ProductoItem";
import { useParams } from "react-router-dom";
import './ProductoDetalles.css'

//Importar Iconos
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

export const ProductoDetalles = () => {

    const value = useContext(DataContext);
    const [productos] = value.productos;
    const params = useParams();
    const [detalle, setDetalle] = useState([])
    const [menu, setMenu] = value.menu
    const [carrito] = value.carrito
    const addCarrito = value.addCarrito;
    let item = 0;


    const toogleMenu = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        productos.forEach(producto => {
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto)
            }
        })
    }, [params.id, productos])


    return (
        <>
            {
                <div className="mainContent">
                    <div className="topSection">
                        <div className="headerSection flex">
                            <div className="title">
                                <h1 className="detail_title">{detalle.title}</h1>
                            </div>

                            <div className="searchBar flex">
                                <input type="text" placeholder="Buscar" />
                                <BiSearchAlt className="icon" />
                            </div>

                            <div className="adminDiv">
                                <AiOutlineShoppingCart className="icon cart" onClick={toogleMenu} />
                                <span className="cartTotal">{carrito.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="detalles">

                        <p className="price">${detalle.price}</p>
                        <span className="cantidad">Cantidad: {detalle.stock}</span>
                        <button className="btn" onClick={() => addCarrito(detalle.id)}>Añadir al Carrito</button>
                        <img src={detalle.image} alt={detalle.title} />
                        <div className="description">
                            <h1>Descripcion: </h1>
                            <p>{detalle.Description}</p>
                        </div>
                    </div>


                    <h2 className="relacionados">Productos Relacionados</h2>
                    <div className="productos">
                        {
                            productos.map(producto => {
                                if ((item < 6) && (detalle.category === producto.category)) {
                                    item++;
                                    return (
                                        <ProductoItem
                                            key={producto.id}
                                            id={producto.id}
                                            title={producto.title}
                                            price={producto.price}
                                            image={producto.image}
                                            category={producto.category}
                                            cantidad={producto.cantidad}
                                        />
                                    );
                                }
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}