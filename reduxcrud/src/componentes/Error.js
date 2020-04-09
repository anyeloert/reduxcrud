import React from 'react';

const Error = ({mensaje}) => (
    <div className="alert alert-danger text-center">
        <strong> {mensaje}</strong>
    </div>
    );

export default Error;