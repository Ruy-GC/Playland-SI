import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import UpdateErr from '../../alerts/updateErr';
import UpdateSuccess from '../../alerts/updateSuccess';
import DeleterErr from '../../alerts/deleteErr'
import DeleteSuccess from '../../alerts/deleteSuccess'
import Popup from "reactjs-popup";
import '../../playland.css'

class ConsultaNiños extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            columnDefs: [{
                headerName: 'Nombre', field: 'nombreAlumnos', editable: false, colId: '0'
            }, {
                headerName: 'Fecha de Nacimiento', field: 'fechaNacimiento', editable: true, colId: '1'
            }, {
                headerName: 'Horario', field: 'horario', editable: true, colId: '2'
            }, {
                headerName: 'Fecha de Entrada', field: 'fechaEntrada', editable: true, colId: '3'
            }, {
                headerName: 'Lugar de Nacimiento', field: 'lugarNacimiento', editable: true, colId: '4'
            }, {
                headerName: 'Peso Actual', field: 'pesoActual', editable: true, colId: '5'
            }, {
                headerName: 'Estatura Actual', field: 'estaturaActual', editable: true, colId: '6'
            }, {
                headerName: 'Tipo Sangre', field: 'tipoSangre', editable: true, colId: '7'
            }, {
                headerName: 'Lado Dominante', field: 'ladoDominante', editable: true, colId: '8'
            }, {
                headerName: 'Dirección', field: 'direccion', editable: true, colId: '9'
            }, {
                headerName: 'Desarrollo del Embarazo', field: 'desarrolloEmbarazo', editable: true, colId: '10'
            }, {
                headerName: 'Tipo de Parto', field: 'parto', editable: true, colId: '11'
            }, {
                headerName: 'Alimentación', field: 'alimentacion', editable: true, colId: '12'
            }, {
                headerName: 'Dentinción', field: 'detincion', editable: true, colId: '13'
            }, {
                headerName: 'Enfermedades Padecidas', field: 'enfermedadesPadecidas', editable: true, colId: '14'
            }, {
                headerName: 'Golpes Padecidos', field: 'GolpesPadecidos', editable: true, colId: '15'
            }, {
                headerName: 'Alergias', field: 'alegias', editable: true, colId: '16'
            }, {
                headerName: 'Pediatra', field: 'pediatra', editable: true, colId: '17'
            }, {
                headerName: 'Hábitos de Sueño', field: 'habitosSueño', editable: true, colId: '18'
            }, {
                headerName: 'Motricidad', field: 'motricidad', editable: true, colId: '19'
            }, {
                headerName: 'Habla', field: 'habla', editable: true, colId: '20'
            }, {
                headerName: 'Dontrol de Esfínteres', field: 'controlEsfinteres', editable: true, colId: '21'
            }, {
                headerName: 'Independencia', field: 'independencia', editable: true, colId: '22'
            }, {
                headerName: 'Agudeza Visual', field: 'agudezVisual', editable: true, colId: '23'
            }, {
                headerName: 'Agudeza Auditiva', field: 'agudezaAuditiva', editable: true, colId: '24'
            }, {
                headerName: 'Deficiencias Motoras', field: 'deficienciasMotoras', editable: true, colId: '25'
            }, {
                headerName: 'Comportamiento', field: 'comportamiento', editable: true, colId: '26'
            }
            ],
            rowData: [],

            success: false,
            fail: false,
            deleteSuc: false,
            deleteErr: false
        }
    }
    datos = [27]

    componentWillReceiveProps(newProps) {
        axios.request(
            {
                url: 'https://play-land.herokuapp.com/getAlumno',
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                data: {
                    'student': {
                        'name': `${newProps.nombre}`
                    }
                }
            }).then(({ data }) => {
                var moment = require('moment');

                var parsedDate = moment(data.studentInfo[0].fechaNacimiento).add(1, 'day');
                var formattedDate = parsedDate.format('YYYY-MM-DD');
                data.studentInfo[0].fechaNacimiento = formattedDate

                parsedDate = moment(data.studentInfo[0].fechaEntrada).add(1, 'day');
                formattedDate = parsedDate.format('YYYY-MM-DD');
                data.studentInfo[0].fechaEntrada = formattedDate

                this.datos[0] = `${data.studentInfo[0].nombreAlumnos}`
                this.datos[1] = `${data.studentInfo[0].fechaNacimiento}`
                this.datos[2] = `${data.studentInfo[0].horario}`
                this.datos[3] = `${data.studentInfo[0].fechaEntrada}`
                this.datos[4] = `${data.studentInfo[0].lugarNacimiento}`
                this.datos[5] = `${data.studentInfo[0].pesoActual}`
                this.datos[6] = `${data.studentInfo[0].estaturaActual}`
                this.datos[7] = `${data.studentInfo[0].tipoSangre}`
                this.datos[8] = `${data.studentInfo[0].ladoDominante}`
                this.datos[9] = `${data.studentInfo[0].direccion}`
                this.datos[10] = `${data.studentInfo[0].desarrolloEmbarazo}`
                this.datos[11] = `${data.studentInfo[0].parto}`
                this.datos[12] = `${data.studentInfo[0].alimentacion}`
                this.datos[13] = `${data.studentInfo[0].detincion}`
                this.datos[14] = `${data.studentInfo[0].enfermedadesPadecidas}`
                this.datos[15] = `${data.studentInfo[0].GolpesPadecidos}`
                this.datos[16] = `${data.studentInfo[0].alegias}`
                this.datos[17] = `${data.studentInfo[0].pediatra}`
                this.datos[18] = `${data.studentInfo[0].habitosSueño}`
                this.datos[19] = `${data.studentInfo[0].motricidad}`
                this.datos[20] = `${data.studentInfo[0].habla}`
                this.datos[21] = `${data.studentInfo[0].controlEsfinteres}`
                this.datos[22] = `${data.studentInfo[0].independencia}`
                this.datos[23] = `${data.studentInfo[0].agudezVisual}`
                this.datos[24] = `${data.studentInfo[0].agudezaAuditiva}`
                this.datos[25] = `${data.studentInfo[0].deficienciasMotoras}`
                this.datos[26] = `${data.studentInfo[0].comportamiento}`
                this.setState({ rowData: data.studentInfo })
            }).catch((err) => {
            })


    }


    updateCell = (newValue) => {
        this.datos[newValue.column.colId] = `${newValue.newValue}`
    }

    updateData = (e) => {
        this.setState({ fail: false });
        this.setState({ success: false });    
            
        e.preventDefault()
        axios.request({
            url: ' https://play-land.herokuapp.com/updateStudent',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                "UpStudent": {
                    "name": this.datos[0],
                    "birthDate": this.datos[1],
                    "admissionTime": this.datos[2],
                    "entryDate": this.datos[3],
                    "birthPlace": this.datos[4],
                    "weigth": this.datos[5],
                    "height": this.datos[6],
                    "bloodType": this.datos[7],
                    "dominantSide": this.datos[8],
                    "address": this.datos[9],
                    "pregnancy": this.datos[10],
                    "childbirth": this.datos[11],
                    "feeding": this.datos[12],
                    "dentition": this.datos[13],
                    "diseases": this.datos[14],
                    "blows": this.datos[15],
                    "allergies": this.datos[16],
                    "doctor": this.datos[17],
                    "sleepHabits": this.datos[18],
                    "motorSkill": this.datos[19],
                    "language": this.datos[20],
                    "sphinter": this.datos[21],
                    "selfSufficiency": this.datos[22],
                    "visual": this.datos[23],
                    "auditory": this.datos[24],
                    "motor": this.datos[25],
                    "behavior": this.datos[26]
                },
                'student': {
                    'name': this.props.nombre
                }
            }
        }).then(({ data }) => {
            var nombreAlumno = this.datos[0];
            this.props.RecibirNuevoNombre(nombreAlumno)
            this.setState({deleteSuc: false, deleteErr: false, fail: false, success: true })

        }).catch((err) => {
            this.setState({deleteSuc: false, deleteErr: false, fail: true, success: false })

        })
    }

    deleteN = (e) =>{
        e.preventDefault()
        console.log(this.props.nombre)
        axios.request({
            url: 'https://play-land.herokuapp.com/deleteStudent',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                "student" : {
                    "name" : this.datos[0]
                }
            }
        }).then(({ data }) => {
            console.log(data)
            var nombreAlumno = '';
            this.props.RecibirNuevoNombre(nombreAlumno)
            this.setState({rowData: []})
            this.setState({deleteSuc: true, deleteErr: false, fail: false, success: false })
        }).catch((err) => {
            this.setState({deleteSuc: false, deleteErr: true, fail: false, success: false })
        })
    }
    render() {
        var alert
        if(this.state.fail === true){
            alert = <UpdateErr/>
        }  

        if(this.state.success === true){
            alert = <UpdateSuccess/>
        } 
        
        if(this.state.deleteErr === true){
            alert = <DeleterErr/>
        }

        if(this.state.deleteSuc === true){
            alert = <DeleteSuccess/>
        }
        return (
            
            <div className="divTabla" >
                {/**tabla con los datos del niño*/}
                <div className='ag-theme-alpine-dark' style={{ float:'right', width: '85%', height: '500px'}}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        onCellValueChanged={this.updateCell}
                    />
                </div>
                <button className="btnTable" onClick={this.updateData}>Actualizar</button>
                <Popup trigger={<button className="btnTable" >Borrar</button>} position="right center">
                    <center>
                        <div>¿Estás seguro de eliminar este registro?</div>
                        <button className="btnTable" onClick={this.deleteN}>si</button> 
                    </center>
                </Popup>
                {alert}
            </div>
        )
    }
}
//
export default ConsultaNiños