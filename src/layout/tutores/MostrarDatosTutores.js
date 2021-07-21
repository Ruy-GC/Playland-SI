import React, { Component } from 'react'
import ConsultaTutores from './ConsultaTutores'
import TablaTutores from './TablaTutores'
import '../../playland.css'

export class MostrarDatosTutores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NombreNiño: '',
            NombreAct: ''
        }
        this.SeleccionarNombre = this.SeleccionarNombre.bind(this)
        this.actualizarLista = this.actualizarLista.bind(this)

    }


    SeleccionarNombre(Nombre) {
        this.setState({ NombreNiño: Nombre })
    }

    actualizarLista(Nombre) {
        this.setState({ NombreAct: Nombre })
    }

    render() {
        var data = this.state.NombreNiño
        var nombreAct = this.state.NombreAct
        return (
            < div style={{ 'margin-left': '23%' }}>
                <div>
                    <ConsultaTutores PasarNombre={this.SeleccionarNombre} ActNombre={nombreAct} />
                </div>
                <div>
                    <TablaTutores nombre={data} RecibirNuevoNombre={this.actualizarLista} />
                </div>
            </div>
        )
    }
}
//
export default MostrarDatosTutores
