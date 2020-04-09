import {EXTRAER_PRODUCTOS, AGREGAR_PRODUCTO, BORRAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO} from './tipes'
import axios from 'axios'

export const extraerProductos = () => async dispatch => {
    //extrae los datos del servidor y los almacena en el store
    const consulta = await axios.get('http://localhost:5000/productos')
    dispatch( {
        type : EXTRAER_PRODUCTOS,
        payload : consulta.data
    })
}

export const agregarProducto = post => async dispatch => {
    //toma el producto nuevo y lo agrega al servidor
    const consulta = await axios.post('http://localhost:5000/productos', post)
    dispatch( {
        type : AGREGAR_PRODUCTO,
        payload : consulta.data
    })
}
export const editarProducto = producto => async dispatch => {
    //toma el producto nuevo y lo agrega al servidor
    const consulta = await axios.put(`http://localhost:5000/productos/${producto.id}`, producto)
    console.log(consulta);
    dispatch( {
        type : EDITAR_PRODUCTO,
        payload : consulta.data
    })
}
export const eliminarProducto = id => async dispatch => {
    //borra el elemento seleccionado
    await axios.delete(`http://localhost:5000/productos/${id}`)
    dispatch( {
        type : BORRAR_PRODUCTO,
        payload : id
    })
}
export const mostrarProducto = id => async dispatch => {
    //toma el producto seleccionado y lo guarda en el store
    const consulta = await axios.get(`http://localhost:5000/productos/${id}`)
    dispatch( {
        type : MOSTRAR_PRODUCTO,
        payload : consulta.data
    })
}

