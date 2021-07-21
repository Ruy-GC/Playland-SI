import React from 'react'
import { Alert } from 'reactstrap';

const matSuccess = () => {
    const estilo = {
        textAlign: 'center',
        color: 'white',
        background: '#00ab59',
        opacity: '1',
        borderColor: 'white',
        borderRadius: '5px'
    }

    return (
        <Alert style = {estilo} color="success">
            El registro ha sido añadido con exito 
        </Alert>
    )
}

export default matSuccess
