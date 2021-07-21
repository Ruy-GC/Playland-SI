import React from 'react'
import { Alert } from 'reactstrap';

const updateErr = () => {
    const estilo = {
        textAlign: 'center',
        color: 'white',
        background: '#ff3b3b',
        opacity: '1',
        borderColor: 'white',
        borderRadius: '5px',
        marginTop: '-2%'
    }

    return (
        <Alert style = {estilo} color="danger">
            Comprobar que los datos sean del tipo correcto o que tengan el formato correcto 
        </Alert>
    );
}

export default updateErr
