import React, { Component } from 'react'
import axios from 'axios'
import '../../playland.css'
import MatErr from '../../alerts/matErr'
import MatSuccess from '../../alerts/matSuccess'

export class Matninos extends Component {
    constructor() {

        super()

        this.state = {
            nombre: '',
            fechaN: '',
            horario: '',
            fechaR: '',
            lugarN: '',
            peso: '',
            estatura: '',
            sangre: '',
            lado: '',
            direc: '',
            desarrolloE: '',
            parto: '',
            alimento: '',
            dentincion: '',
            enfermedades: '',
            golpes: '',
            alergias: '',
            pediatra: '',
            sueno: '',
            motricidad: '',
            habla: '',
            esfinteres: '',
            independencia: '',
            agudezaV: '',
            agudezaA: '',
            deficienciasM: '',
            comportamiento: '',

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

        axios.request(

            {
                url: 'https://play-land.herokuapp.com/admision',
                method: 'post',

                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                },

                data: {
                    "student": {
                        "name": this.state.nombre,
                        "birthDate": this.state.fechaN,
                        "admissionTime": this.state.horario,
                        "entryDate": this.state.fechaR,
                        "birthPlace": this.state.lugarN,
                        "weigth": this.state.peso,
                        "height": this.state.estatura,
                        "bloodType": this.state.sangre,
                        "dominantSide": this.state.lado,
                        "address": this.state.direc,
                        "pregnancy": this.state.desarrolloE,
                        "childbirth": this.state.parto,
                        "feeding": this.state.alimento,
                        "dentition": this.state.dentincion,
                        "diseases": this.state.enfermedades,
                        "blows": this.state.golpes,
                        "allergies": this.state.alergias,
                        "doctor": this.state.pediatra,
                        "sleepHabits": this.state.sueno,
                        "motorSkill": this.state.motricidad,
                        "language": this.state.habla,
                        "sphinter": this.state.esfinteres,
                        "selfSufficiency": this.state.nombre,
                        "visual": this.state.agudezaV,
                        "auditory": this.state.agudezaA,
                        "motor": this.state.deficienciasM,
                        "behavior": this.state.comportamiento
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
                    nombre: '',
                    fechaN: '',
                    horario: '',
                    fechaR: '',
                    lugarN: '',
                    peso: '',
                    estatura: '',
                    sangre: '',
                    lado: '',
                    direc: '',
                    desarrolloE: '',
                    parto: '',
                    alimento: '',
                    dentincion: '',
                    enfermedades: '',
                    golpes: '',
                    alergias: '',
                    pediatra: '',
                    sueno: '',
                    motricidad: '',
                    habla: '',
                    esfinteres: '',
                    independencia: '',
                    agudezaV: '',
                    agudezaA: '',
                    deficienciasM: '',
                    comportamiento: '',

                    nombret: '',
                    direct: '',
                    tel: '',
                    profesion: '',
                    trabajo: '',
                });

            }).catch((err) => {
                this.setState({ fail: true });
            });

    }

    btndisabled = true
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
                <h2>Matricular Niño</h2>

                <hr className="hr-Mat" style = {linea}/>
                <form>
                    <h3>Datos del Niño</h3>
                    {alert}
                    <div style={columnas} className="datos">
                        <label>Nombre </label>
                        <input type='text' name='nombre' value={this.state.nombre} onChange={this.onChange} required />
                        <label>Fecha de Nacimiento </label>
                        <input type='text' name='fechaN' value={this.state.fechaN} onChange={this.onChange} placeholder='AAAA/MM/DD' />
                        <label>Horario </label>
                        <input type='text' name='horario' value={this.state.horario} onChange={this.onChange} placeholder='00:00 24hrs'/>
                        <label>Fecha de Registro </label>
                        <input type='text' name='fechaR' value={this.state.fechaR} onChange={this.onChange} placeholder='AAAA/MM/DD' />
                        <label>Lugar de Nacimiento </label>
                        <input type='text' name='lugarN' value={this.state.lugarN} onChange={this.onChange}/>
                        <label>Peso Actual </label>
                        <input type='number' name='peso' value={this.state.peso} onChange={this.onChange} placeholder='Kg' />
                        <label>Estatura Actual </label>
                        <input type='number' name='estatura' value={this.state.estatura} onChange={this.onChange} placeholder='Mts' />
                        <label>Tipo de Sangre </label>
                        <select type='text' name='sangre' value={this.state.sangre} onChange={this.onChange}>
                            <option value = 'default'>Tipo de sangre</option>
                            <option value='O-'>O-</option>
                            <option value='O+'>O+</option>
                            <option value='A-'>A-</option>
                            <option value='A+'>A+</option>
                            <option value='B-'>B-</option>
                            <option value='B+'>B+</option>
                            <option value='AB-'>AB-</option>
                            <option value='AB+'>AB+</option>
                        </select>
                        <label>Lado Dominante </label>
                        <input type='text' name='lado' value={this.state.lado} onChange={this.onChange} />
                        <label>Dirección </label>
                        <input type='text' name='direc' value={this.state.direc} onChange={this.onChange} />
                        <label>Desarrollo del Embarazo </label>
                        <input type='text' name='desarrolloE' value={this.state.desarrolloE} onChange={this.onChange} />
                        <label>Tipo de Parto </label>
                        <input type='text' name='parto' value={this.state.parto} onChange={this.onChange} />
                        <label>Alimentación </label>
                        <input type='text' name='alimento' value={this.state.alimento} onChange={this.onChange} />
                        <label>Dentinción </label>
                        <input type='text' name='dentincion' value={this.state.dentincion} onChange={this.onChange} />
                        <label>Enfermedades Recientes</label>
                        <input type='text' name='enfermedades' value={this.state.enfermedades} onChange={this.onChange} />
                        <label>Golpes Padecidos </label>
                        <input type='text' name='golpes' value={this.state.golpes} onChange={this.onChange} />
                        <label>Alergias </label>
                        <input type='text' name='alergias' value={this.state.alergias} onChange={this.onChange} />
                        <label>Pediatra </label>
                        <input type='text' name='pediatra' value={this.state.pediatra} onChange={this.onChange} />
                        <label>Hábitos de Sueño </label>
                        <input type='text' name='sueno' value={this.state.sueno} onChange={this.onChange} />
                        <label>Motricidad </label>
                        <input type='text' name='motricidad' value={this.state.motricidad} onChange={this.onChange} />
                        <label>Habla </label>
                        <input type='text' name='habla' value={this.state.habla} onChange={this.onChange} />
                        <label>Control de Esfínteres </label>
                        <input type='text' name='esfinteres' value={this.state.esfinteres} onChange={this.onChange} />
                        <label>Independencia </label>
                        <input type='text' name='independencia' value={this.state.independencia} onChange={this.onChange} />
                        <label>Agudeza Visual </label>
                        <input type='text' name='agudezaV' value={this.state.agudezaV} onChange={this.onChange} />
                        <label>Agudeza Audtiva </label>
                        <input type='text' name='agudezaA' value={this.state.agudezaA} onChange={this.onChange} />
                        <label>Deficiencias Motoras </label>
                        <input type='text' name='deficienciasM' value={this.state.deficienciasM} onChange={this.onChange} />
                        <label>Comportamiento </label>
                        <textarea rows="5" name='comportamiento' value={this.state.comportamiento} onChange={this.onChange} />
                    </div>
                    <br></br><br></br>
                    <h3>Datos del Tutor</h3>
                    <div style={columnas} className="datos">
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

                    <button type='submit' id="btnMat" className="btnForm" onClick={this.onClick}>Aceptar</button>
                </form>
            </div>
        )
    }
}
//
export default Matninos