import React, { useContext } from "react";
import './Carrito.css';
import { DataContext, DataProvider } from "../../../context/DataProvider";



// Importar Iconos 
import { IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";




const Pedidos = () => {


    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () => {
        setMenu(false)
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";


    const resta = id => {
        const updatedCarrito = carrito.map(item => {
            if (item.id === id) {
                const updatedCantidad = item.cantidad > 1 ? item.cantidad - 1 : 1;
                const updatedTotal = updatedCantidad * item.price;
                return { ...item, cantidad: updatedCantidad, total: updatedTotal };
            }
            return item;
        });
        setCarrito(updatedCarrito);
    }

    const suma = id => {
        const updatedCarrito = carrito.map(item => {
            if (item.id === id) {
                if (item.cantidad < item.stock) { // Verificar si la cantidad es menor que el stock
                    const updatedCantidad = item.cantidad + 1;
                    const updatedTotal = updatedCantidad * item.price;
                    return { ...item, cantidad: updatedCantidad, total: updatedTotal };
                } else {
                    alert("No hay más stock disponible de este producto.");
                }
            }
            return item;
        });
        setCarrito(updatedCarrito);
    }





    const removeProducto = id => {
        if (window.confirm("¿Seguro quieres eliminar el producto?")) {
            carrito.forEach((item, index) => {

                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }
            })
            setCarrito([...carrito])
        }
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carritoClose" onClick={tooglefalse}>
                    <IoMdClose className="icon" />
                </div>
                <h2>Su Carrito</h2>

                <div className="carritoCenter">
                    {

                        carrito.length === 0 ? <h2 style={{
                            textAlign: "center", fontSize: "2rem"
                        }}> Carrito Vacío</h2> : <>
                            {


                                carrito.map((producto) => (
                                    <div className="carritoItem" key={producto.id}>
                                        <img src={producto.image} alt="" />
                                        <div>
                                            <h3>{producto.title}</h3>
                                            <p className="price">${producto.price}</p>
                                        </div>
                                        <div>
                                            <FaArrowUp className="icon up-arrow" onClick={() => suma(producto.id)} />
                                            <p className="cantidad">{producto.cantidad}</p>
                                            <FaArrowDown className="icon down-arrow" onClick={() => resta(producto.id)} />
                                        </div>
                                        <div className="icon removeItem" onClick={() => removeProducto(producto.id)}>
                                            <FaTrash className="trash" />
                                        </div>
                                    </div>
                                ))
                            }
                        </>}
                </div>

                <div className="carritoFooter">
                    <h3>Total: ${total}</h3>
                    <button className="btn">Pagar</button>
                </div>
            </div>
        </div>

    )
}

export default Pedidos