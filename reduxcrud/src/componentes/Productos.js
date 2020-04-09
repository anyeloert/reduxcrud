import React, {useEffect,Fragment} from 'react';
import Producto from './Producto'
//redux

import {connect} from 'react-redux'
import {extraerProductos} from '../Actions/ProductosActions'

const Productos = (props) => {

    const {extraerProductos, productos} = props

    // envio de los datos del servidor al state cuando se carga el componente y cuando se actualizan los props
        useEffect(() => {       
        extraerProductos()
    }, [extraerProductos]) 
    return (
        <Fragment>
            <h2 className='text-center mt-5'>Listado de Productos</h2>
            <ul className="list-group acciones mt-5 "> 
                   { (productos) ? // para que cargue el componente Producto cuando haya cargado el props productos
                        productos.map(producto => (
                            <Producto
                                    key = {producto.id}
                                    producto = {producto}
                                />
                            )): null }
            </ul>
        </Fragment>
        
    );
};
//metodo que busca los datos del state
const mapStateToProps = state => ({
    productos : state.productos.productos
})

export default connect(mapStateToProps, {extraerProductos}) (Productos);