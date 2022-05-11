import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='error-container'>
            <h1>ERROR 404 :(</h1>

            <h3>Página no encontrada</h3>
            <Link to='/' key='/'>
                Regresar al inicio...
            </Link>
        </div>
    );
};

export default Page404;
