import React, { Component } from 'react'
import axios from 'axios'
import '../../playland.css'
import MatErr from '../../alerts/matErr'
import MatSuccess from '../../alerts/matSuccess'

export class MatTutor extends Component {
    constructor() {

        super()

        this.state = {
            alumno: '',

            nombret: '',
            direct: '',
            tel: '',
            profesion: '',
            trabajo: '',

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
        axios.request({
            url: 'https://play-land.herokuapp.com/insertTutor',
            method: 'post',

            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },

            data: {
                "student": {
                    "name": this.state.alumno
                },
                "tutor": {
                    "name": this.state.nombret,
                    "address": this.state.direct,
                    "phone": this.state.tel,
                    "profession": this.state.profesion,
                    "work": this.state.trabajo
                }
            }
        }).then(({ data }) => {
            this.setState({
                success: true,
                fail: false,
                alumno: '',
                nombret: '',
                direct: '',
                tel: '',
                profesion: '',
                trabajo: ''
            });
        }).catch((err) => {
            this.setState({ fail: true });

        })
    }
    
    nombres=[]
    opcionNombres
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
                <h2>Matricular Tutor</h2>
                <hr className="hr-Mat" style = {linea}></hr>
                <form>
                    <h3>Datos del Tutor</h3>
                    {alert}
                    <div style={columnas} className="datos">
                        <label>Alumno </label>
                        <select type='text' name='alumno' value={this.state.alumno} onChange={this.onChange} >
                             <option value = "default">Selecciona un Nombre</option>
                            {this.opcionNombres}
                        </select>
                           
                        <label>Nombre </label>
                        <input type='text' name='nombret' value={this.state.nombret} onChange={this.onChange} />
                        <label>Dirección </label>
                        <input type='text' name='direct' value={this.state.direct} onChange={this.onChange} />
                        <label>Teléfono </label>
                        <input type='text' name='tel' value={this.state.tel} onChange={this.onChange} maxLength='10' />
                        <label>Profesión </label>
                        <input type='text' name='profesion' value={this.state.profesion} onChange={this.onChange} />
                        <label>Lugar de Trabajo </label>
                        <input type='text' name='trabajo' value={this.state.trabajo} onChange={this.onChange} />
                    </div>
                    <button id="btnMat" className="btnForm" onClick={this.onClick}>Aceptar</button>
                </form>
            </div>

        )
    }
}
//
export default MatTutor
