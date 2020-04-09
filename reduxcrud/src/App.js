import React from 'react';
import Header from './componentes/Header'
import Productos from './componentes/Productos'
import EditarProducto from './componentes/EditarProducto'
import AgregarProducto from './componentes/AgregarProducto'


//react router dom

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

//de redux

import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store = {store}>
      <Router>
      <Header/>
        <main className='container'>
          <Switch>
            <Route exact path='/' component={Productos}/>
            <Route path='/editar/producto/:id' component={EditarProducto}/>
            <Route path='/agregar/producto' component={AgregarProducto}/>
          </Switch>
        </main>     
      </Router>
    </Provider>
    
  );
}

export default App;
