import React, { Component } from 'react'
import ConsultaNiños from '../Ninos/ConsultaNiños'
import TablaTutores from './TablaTutores'
import '../../playland.css'

class ConsultaTutores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombreniño: '',
            actualizar: false
        }
        this.PasarNombre = this.PasarNombre.bind(this)
    }

    PasarNombre(Nombre) {
        this.setState({ nombreniño: Nombre })
    }


    render() {
        var nombre = this.state.nombreniño
        const linea = {
            opacity:'100%'
        }
        return (
            <div id="matForm" className="CompTab" style={{ 'marginLeft': '25%' }}>
                <h3 className="h2Blue">Ver Tutores</h3>
                <hr className="hr-Mat" style = {linea}/>
                <div className="textdiv-Tut"><h3 className="texttable">Nombre Alumnos</h3><h3 className="texttable2">Detalles</h3></div>
                <div>
                    <ConsultaNiños PasarNombre={this.PasarNombre} />
                </div>
                <div>
                    <TablaTutores nombre={nombre}
                    />
                </div>
            </div>
        )
    }
}
//
export default ConsultaTutores