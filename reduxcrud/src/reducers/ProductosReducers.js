import {EXTRAER_PRODUCTOS, AGREGAR_PRODUCTO, BORRAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO} from '../Actions/tipes'

const defaulState ={
    productos : [],
    producto : {
        nombre:'',
        precio:''
    }
}

export default function (state = defaulState, action)  {
    switch (action.type){
        case EXTRAER_PRODUCTOS:
            return{
                ...state,
                productos : action.payload
            }
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                productos : [...state.productos, action.payload]
            }
        case EDITAR_PRODUCTO:
            return{
                ...state,
                productos : state.productos.map(producto => {
                    if (producto.id === action.payload.id) return action.payload
                    else return producto
                })
            }
        case BORRAR_PRODUCTO:
            return{
                ...state,
                productos : state.productos.filter(producto => producto.id !== action.payload)
            }
        case MOSTRAR_PRODUCTO:
            return{
                ...state,
                producto : action.payload
            }
        default:
            return state
    }        
}