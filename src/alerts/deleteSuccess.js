import React from 'react'
import { Alert } from 'reactstrap';

const deleteSuccess = () => {
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
            El registro ha sido eliminado con exito 
        </Alert>
    )
}

export default deleteSuccess
