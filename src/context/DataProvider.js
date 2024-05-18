import { createContext, useState, useEffect } from "react";
import { Data } from './Data.js';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const producto = Data.items;
        if (producto) {
            setProductos(producto);
        } else {
            setProductos([]);
        }
    }, []);

    const addCarrito = (id) => {
        const check = carrito.every(item => item.id !== id);
        if (check) {
            const data = productos.filter(producto => producto.id === id);
            if (data.length > 0 && data[0].stock > 0) {
                setCarrito([...carrito, { ...data[0], cantidad: 1, total: data[0].price }]);
            } else {
                alert("El producto no tiene stock disponible.");
            }
        } else {
            alert("El producto ya se ha añadido al carrito.");
        }
    }

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'));
        if (dataCarrito) {
            setCarrito(dataCarrito);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito));
    }, [carrito]);

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price * item.cantidad);
            }, 0);
            setTotal(res);
        }
        getTotal();
    }, [carrito]);

    const suma = id => {
        const updatedCarrito = carrito.map(item => {
            if (item.id === id) {
                if (item.cantidad < item.stock) {
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

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
        suma: suma,
        resta: resta
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
