import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between" >
            <Link className="navbar-brand" to="/">CRUD - React, Redux, REST API & Axios</Link>                
                
            <div className="div-inline my-2 my-lg-0">                    
                <Link className="btn btn-danger my-2 my-sm-0" to="/agregar/producto">Agregar Producto</Link>
            </div>
            
        </nav>
    );
};

export default Header;