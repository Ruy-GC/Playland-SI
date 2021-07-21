import React from 'react'
import { Alert } from 'reactstrap';

const matErr = (props) => {

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
            Comprobar que los datos sean del tipo correcto o que todos estén llenos 
        </Alert>
    );
}

export default matErr