import React, { Component } from 'react'
import axios from 'axios'
import '../../playland.css'
import MatErr from '../../alerts/matErr'
import MatSuccess from '../../alerts/matSuccess'

export class MatMedicina extends Component {
    constructor() {

        super()

        this.state = {
            alumno: '',

            nombre: '',
            fecha: '',
            uhora: '',
            phora: '',

            fail: false,
            success: false
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        e.preventDefault()
        this.setState({ fail: false });
        this.setState({ success: false });
        axios.request(
            {
                url: 'https://play-land.herokuapp.com/insertMedicamento',
                method: 'post',

                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                data: {
                    "student": {
                        "name": this.state.alumno,
                    },
                    "drug": {
                        "name": this.state.nombre,
                        "date": this.state.fecha,
                        "timeLast": this.state.uhora,
                        "timeNext": this.state.phora

                    }
                }
            }).then(({ data }) => {
                this.setState({
                    success: true,
                    fail: false,
                    alumno: '',
                    nombre: '',
                    fecha: '',
                    uhora: '',
                    phora: ''
                });
            }).catch((err) => {
                this.setState({ fail: true });

            })
    }

    componentDidMount(){
        axios.request(
            {
                url:'https://play-land.herokuapp.com/getAlumnos',
                method:'post',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(({data}) =>{
                this.nombres = data.studentsInfo
                this.opcionNombres=this.nombres.map((nombre,index)=>
                <option key={index} value = {nombre.nombreAlumnos}>{nombre.nombreAlumnos}</option>)
                this.forceUpdate()
            }).catch((err) => {
                console.error(err)})}  

    render() {
        var alert;
        const columnas = {
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridGap: '5px'
        }
        if (this.state.fail === true) {
            alert = <MatErr />
        }

        if (this.state.success === true) {
            alert = <MatSuccess />
        }

        const linea = {
            opacity:'100%'
        }
        return (
            <div id="matForm" className='datosN'>
                <br></br>
                <h2>Nuevo Medicamento</h2>

                <hr className="hr-Mat" style = {linea}></hr>
                <form>
                    <h3>Datos del Medicamento</h3>
                    {alert}
                    <div style={columnas} className="datos">
                        <label>Alumno </label>
                        <select type='text' name='alumno' value={this.state.alumno} onChange={this.onChange}>
                            <option value = "default">Selecciona un Nombre</option>
                            {this.opcionNombres}
                        </select>
                        <label>Fecha </label>
                        <input type='text' name='fecha' value={this.state.fecha} onChange={this.onChange} placeholder='AAAA/MM/DD' />
                        <label>Medicamento </label>
                        <input type='text' name='nombre' value={this.state.nombre} onChange={this.onChange} />
                        <label>Última Hora de Administración </label>
                        <input type='text' name='uhora' value={this.state.uhora} onChange={this.onChange} placeholder='00:00 24hrs' />
                        <label>Próxima Hora de Administración </label>
                        <input type='text' name='phora' value={this.state.phora} onChange={this.onChange} placeholder='00:00 24hrs' />
                    </div>
                    <button id="btnMat" className="btnForm" onClick={this.onClick}>Aceptar</button>
                </form>
            </div>
        )
    }
}
//
export default MatMedicina
