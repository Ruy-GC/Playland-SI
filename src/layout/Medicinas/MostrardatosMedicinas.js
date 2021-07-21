import React, { Component } from 'react'
import TablaMedicinas from './TablaMedicinas'
import ConsultaNiños from '../Ninos/ConsultaNiños'
import '../../playland.css'

export class MostrardatosMedicinas extends Component {
    constructor(props){
        super(props)
        this.state={
            NombreNiño:'',
        }
        this.SeleccionarNombre = this.SeleccionarNombre.bind(this)
    }

    SeleccionarNombre(Nombre){
        this.setState({NombreNiño:Nombre})
    }

    render() {
        var data = this.state.NombreNiño
        const linea = {
            opacity:'100%'
        }
        return (
            <div id="matForm" className="CompTab" style = {{'margin-left': '25%'}}>   
            <h3 className="h2Blue">Medicamentos Ingresados</h3>
            <hr className="hr-Mat" style = {linea}/>
            <center>
            <div className="textdiv"><h3 className="texttable">Nombre Alumnos</h3><h3 className="texttable2">Detalles Medicinas</h3></div>
            </center>
                <div>
                    <ConsultaNiños PasarNombre={this.SeleccionarNombre}/>
                </div>
                <div>
                    <TablaMedicinas nombre={data} />
                </div>
            </div>

        )
    }
}
//
export default MostrardatosMedicinas
