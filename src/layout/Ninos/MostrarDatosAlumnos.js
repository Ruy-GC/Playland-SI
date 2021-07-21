import React,{Component} from 'react'
import ConsultaNiños from './ConsultaNiños'
import TablaDatosNiños from './TablaDatosNiño'
import '../../playland.css'

class MostrarDatosAlumnos extends Component{
    constructor(props){
        super(props)
        this.state={
            NombreNiño:'',
            NombreAct: ''
        }
        this.SeleccionarNombre = this.SeleccionarNombre.bind(this)
        this.actualizarLista = this.actualizarLista.bind(this)

    }


    SeleccionarNombre(Nombre){
        this.setState({NombreNiño:Nombre})
    }

    actualizarLista(Nombre){
        this.setState({NombreAct:Nombre})
    }

    render(){
        var data = this.state.NombreNiño
        var nombreAct = this.state.NombreAct
        const linea = {
            opacity:'100%'
        }
        return(
            
            <div id="matForm" className="CompTab" style = {{'marginLeft': '25%'}}>   
            <h3 className="h2Blue">Ver Niños</h3>
            <hr className="hr-Mat" style = {linea}/>
            <center>
            <div className="textdiv"><h3 className="texttable">Nombre Alumnos</h3><h3 className="texttable2">Detalles</h3></div>
            </center>
                <div>
                    <ConsultaNiños PasarNombre={this.SeleccionarNombre} ActNombre = {nombreAct}/>
                </div>
                <div>
                    <TablaDatosNiños nombre={data} RecibirNuevoNombre = {this.actualizarLista}/>
                </div>
            </div>

        )
    }
}
//
export default MostrarDatosAlumnos  