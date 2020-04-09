import React, {useEffect, useState} from 'react';
import  Error  from "./Error";
//redux
import {connect} from 'react-redux' 
import {mostrarProducto} from '../Actions/ProductosActions'
import {editarProducto} from '../Actions/ProductosActions'


const EditarProducto = (props) => {

    const [nombreState, guardarNombreState] = useState('')
    const [precioState, guardarPrecioState] = useState('')
    const [error, guardarError] = useState(false)

    const {mostrarProducto, producto, editarProducto} = props
    const {id} = props.match.params
    const {nombre, precio} = producto

    

    useEffect(() => {
        const traerproducto =async () => {
            await mostrarProducto(id)                      
        }
        traerproducto()
        guardarNombreState(nombre)
        guardarPrecioState(precio)
    },[mostrarProducto, id, nombre, precio])


    const handleSubmit = e => {
        e.preventDefault()
        if (nombreState === '' || precioState === ''){
            guardarError(true)
            return;
         }else{
            guardarError(false)
            const producto = {
                nombre : nombreState,
                precio : precioState,
                id : id
            }
            editarProducto(producto)
            props.history.push('/')
        }
    }
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Editar Producto</h2>
                        {error && <Error mensaje='Debe llenar todos los campos' />}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" 
                                     onChange={e => {guardarNombreState(e.target.value)}}
                                //La sintaxis es para que cargue el nombre una vez producto deje de ser undefined
                                    defaultValue={nombreState}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input type="number" className="form-control" placeholder="Precio"
                                     onChange={e => {guardarPrecioState(e.target.value)}}
                                    defaultValue={precioState}
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

const mapStateToProps = state => ({
    producto : state.productos.producto
})

export default connect(mapStateToProps, {mostrarProducto, editarProducto}) (EditarProducto);