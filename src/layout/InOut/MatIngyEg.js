import React, { Component } from 'react'
import axios from 'axios'
import '../../playland.css'
import MatErr from '../../alerts/matErr'
import MatSuccess from '../../alerts/matSuccess'

export class MatIngyEg extends Component {
    constructor() {

        super()

        this.state = {
            alumno: '',

            date: '',
            time: '',
            tipo: '1',
            state: 'Dormido',
            hygiene: 'Limpio',
            diseases: '',
            injury: '',

            nombret: '',

            fail: false,
            success: false
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.onChangeNombre = this.onChangeNombre.bind(this)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        e.preventDefault()
        this.setState({ fail: false });
        this.setState({ success: false });
        axios.request({
            url: 'https://play-land.herokuapp.com/insertRegistro',
            method: 'post',

            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },

            data: {
                "student": {
                    "name": this.state.alumno

                },
                "reg": {
                    "date": this.state.date,
                    "time": this.state.time,
                    "tipo": this.state.tipo,
                    "state": this.state.state,
                    "hygiene": this.state.hygiene,
                    "diseases": this.state.diseases,
                    "injury": this.state.injury
                },
                "tutor": {
                    "name": this.state.nombret
                }
            }
        }).then(({ data }) => {
            this.setState({
                success: true,
                fail: false,
                alumno: '',
                date: '',
                time: '',
                tipo: '1',
                state: 'Dormido',
                hygiene: 'Limpio',
                diseases: '',
                injury: '',

                nombret: '',
            });
        }).catch((err) => {
            this.setState({ fail: true });
        })
    }
    //variables iniciales
    //en esta guardo todos los nombres de los niños
    nombres=[]
    //en esta guardo el jsx en el que se pondran las <option>
    opcionNombres
    nombresTutores=[]
    opcionnombresTutores
    componentDidMount(){
        //pido los datos
        axios.request(
            {
                url:'https://play-land.herokuapp.com/getAlumnos',
                method:'post',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(({data}) =>{
                //igualo el arreglo de los nombres con el erreglo que me llego de los datos
                this.nombres = data.studentsInfo
                //igualo opcion nombres a un map que me regresa un jsx con la sintaxis de un tag option
                //pero pone uno por cada uno
                this.opcionNombres=this.nombres.map((nombre,index)=>
                <option key={index} value = {nombre.nombreAlumnos}>{nombre.nombreAlumnos}</option>)
                //para que se actualize el combobox
                this.forceUpdate()  
                //ahora con el nombre del niño seleccionado podemos hacer la consulta de los tutores
            }).catch((err) => {
                console.error(err)
            })
    }

    onChangeNombre(e){
        this.setState({ [e.target.name]: e.target.value });
        axios.request(
            {
                url: 'https://play-land.herokuapp.com/getTutor',
                method:'post',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                data: {
                    'student': {
                        'name': `${e.target.value}`
                    }
                }
            }).then(({data}) =>{
                console.log(data)
                this.nombresTutores = data.tutorInfo
                this.opcionnombresTutores = this.nombresTutores.map((nombre,index)=>
                <option key={index} value = {nombre.nombreExternos}>{nombre.nombreExternos}</option>)
                this.forceUpdate()
            }).catch((err) => {
                console.error(err)
            });
    }

    render() {
        var alert;
        const columnas = {
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridGap: '5px'
        }

        const linea = {
            opacity:'100%'
        }

        if (this.state.fail === true) {
            alert = <MatErr />
        }

        if (this.state.success === true) {
            alert = <MatSuccess />
        }
        return (
            <div id="matForm" className='datosN'>
                <br></br>
                <h2>Entradas y Salidas</h2>

                <hr className="hr-Mat" style = {linea}/>
                <br></br>
                <form>
                    <h3>Datos</h3>
                    {alert}

                    <div style={columnas} className="datos">
                    <label>Alumno </label>
                        <select type='text' name='alumno' value={this.state.alumno} onChange={this.onChangeNombre}>
                            <option value = "default">Selecciona un Nombre</option>
                            {this.opcionNombres}
                        </select>
                        <label>Fecha</label>
                        <input type='text' name='date' value={this.state.date} onChange={this.onChange} placeholder='AAAA/MM/DD'/>
                        <label>Tipo</label>
                        <select type='text' name='tipo' value={this.state.tipo} onChange={this.onChange}>
                            <option value = '1'>Entrada</option>
                            <option value = '2'>Salida</option>
                        </select>
                        <label>Hora</label>
                        <input type='text' name='time' value={this.state.time} onChange={this.onChange} placeholder='00:00 24hrs'/>
                        <label>Tutor</label>
                        <select type='text' name='nombret' value={this.state.nombret} onChange={this.onChange}>
                            <option value = "default">Selecciona un Tutor</option>
                            {this.opcionnombresTutores}
                        </select>
                        <label>Higiene al Ingreso/Salida </label>
                        <select type='text' name='hygiene' value={this.state.hygiene} onChange={this.onChange}>
                            <option value = 'Limpio' defaultValue>Limpio</option>
                            <option value = 'Regular'>Regular</option>
                            <option value = 'Sucio'>Sucio</option>
                        </select>
                        <label>Estado de Ingreso </label>
                        <select type='text' name='state' value={this.state.state} onChange={this.onChange}>
                            <option value = 'Dormido' defaultValue >Dormido</option>
                            <option value = 'Despierto'>Despierto</option>
                            <option value = 'Caminando'>Caminando</option>
                            <option value = 'En Brazos'>En brazos</option>
                        </select>
                        <label>Enfermedades </label>
                        <input type='text' name='diseases' value={this.state.diseases} onChange={this.onChange} />
                        <label>Lesiones </label>
                        <input type='text' name='injury' value={this.state.injury} onChange={this.onChange} />
                    </div>
                    <button id="btnMat" className="btnForm" onClick={this.onClick}>Aceptar</button>
                </form>
            </div>
        )
    }
}
//
export default MatIngyEg
