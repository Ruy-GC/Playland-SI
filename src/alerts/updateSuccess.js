import React from 'react'
import { Alert } from 'reactstrap';

const updateSuccess = () => {
    const estilo = {
        textAlign: 'center',
        color: 'white',
        background: '#00ab59',
        opacity: '1',
        borderColor: 'white',
        borderRadius: '5px',
        marginTop: '-2%'
    }

    return (
        <Alert style = {estilo} color="success">
            El registro ha sido actualizado con exito 
        </Alert>
    )
}

export default updateSuccess
