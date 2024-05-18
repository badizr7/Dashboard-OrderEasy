import React from "react";
import './agregar.css'

export const Agregar = () =>{
    return(
        <div className="mainContent">
            <div className="form-title">
                <h1>Publicar un nuevo Producto</h1>
            </div>
            <div className="nuevoProducto">
                <form action="#" method="post">
                    <div className="formGroup">
                        <label htmlFor="Nombre">Nombre del Producto: </label>
                        <input type="text" id="nombre" name="nombre" required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Precio">Precio: </label>
                        <input type="number" id="precio" name="precio" step={1} required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Cantidad">Cantidad: </label>
                        <input type="number" id="precio" name="precio" min={1} required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Descripcion">Descripcion: </label>
                        <textarea name="descipcion" id="descripcion" rows={4} required></textarea>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Imagen">Imagen del Producto: </label>
                        <input type="file" id="imagen" name="imagen" accept="image/*" required/>
                    </div>
                    <div className="formGroup">
                        <button className="btn-vender" type="submit">Agregar Producto</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Agregar;