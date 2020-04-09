import React, {useState}  from 'react';
import  Error  from "./Error";
//redux

import {connect} from 'react-redux'
import { agregarProducto } from "../Actions/ProductosActions"; 



const AgregarProducto = (props) => {
    //Estos estados solo seran usados dentro de este componente
    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState('')
    const [error, guardarError] = useState(false)

    //manejador del submit
    const handleSubmit = e => {
        e.preventDefault()
        if (nombre === '' || precio === ''){
            guardarError(true)
            return;
        }else{
            guardarError(false)
            const producto = {
                nombre : nombre,
                precio : precio
            }
            props.agregarProducto(producto)
            props.history.push('/')
        }
    }

    return (        

            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            {error && <Error mensaje='Debe llenar todos los campos' />}
                            <form onSubmit = {handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" placeholder="Nombre" 
                                        onChange={e => {guardarNombre(e.target.value)}} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input type="number" className="form-control" placeholder="Precio"  
                                        onChange={e => {guardarPrecio(e.target.value)}} 
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Agregar
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default connect(null, {agregarProducto}) (AgregarProducto);