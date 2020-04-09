import React, { Fragment } from 'react';
//react-router-dom
import {Link} from 'react-router-dom'
//redux
import {connect} from 'react-redux'
import {eliminarProducto} from '../Actions/ProductosActions'

    const Producto = (props) =>{ 
    const {precio, nombre, id} = props.producto
    return(
            <Fragment>
                <li className="list-group-item d-flex justify-content-between align-items-center col-6 mx-auto">
                <p className='mb-0'>{nombre}</p>
                <div>
                        <span className="badge badge-warning badge-pill mr-1">${precio}</span>
                        <Link to={`/editar/producto/${id}`} className="btn btn-primary mr-1">Editar</Link>
                        {/* Se envia la accion de borrar directamente al boton */}
                        <button type="button" className="btn btn-danger" 
                            onClick={() => props.eliminarProducto(id)}>
                            Borrar
                    </button>
                </div>
                    
                </li>
            
            </Fragment>
        );
}
export default connect(null, {eliminarProducto}) (Producto);