import React from 'react';
import { Alert } from 'reactstrap';

const Loginer = (props) => {

    const estilo = {
        color: 'white',
        background: '#ff3b3b',
        opacity: '1',
        borderColor: 'white',
        borderRadius: '5px'
    }

    
    return (
        <Alert style = {estilo} color="danger" >
            Usuario y/o Contraseña Incorrectos
        </Alert>
    );
}

export default Loginer
