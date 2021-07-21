import React from 'react'
import { Alert } from 'reactstrap';

const deleteErr = () => {
    
    const estilo = {
        textAlign: 'center',
        color: 'white',
        background: '#ff3b3b',
        opacity: '1',
        borderColor: 'white',
        borderRadius: '5px'
    }

    return (
        <Alert style = {estilo} color="danger">
            El Registro no se ha podido eliminar 
        </Alert>
    );
}

export default deleteErr
