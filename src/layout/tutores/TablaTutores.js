import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'
import axios from 'axios'
import UpdateErr from '../../alerts/updateErr'
import UpdateSuccess from '../../alerts/updateSuccess'
import DeleterErr from '../../alerts/deleteErr'
import DeleteSuccess from '../../alerts/deleteSuccess'
import Popup from "reactjs-popup";
import '../../playland.css'

class TablaTutores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnDefs: [
                {
                    headerName: 'Tutor',
                    field: 'nombreExternos',
                    editable: false,
                    colId: '0'
                }, {
                    headerName: 'Dirección',
                    field: 'direccion',
                    editable: true,
                    colId: '1'
                }, {
                    headerName: 'Teléfono',
                    field: 'telefono',
                    editable: true,
                    colId: '2'
                }, {
                    headerName: 'Profesión',
                    field: 'profesion',
                    editable: true,
                    colId: '4'
                }, {
                    headerName: 'Lugar de Trabajo',
                    field: 'lugarTrabajo',
                    editable: true,
                    colId: '5'
                }
            ],
            rowData: [],
            success: false,
            fail: false,
            deleteSuc: false,
            deleteErr: false
        }
    }
    //mis variables iniciales
    datosIniciales = []
    datosSeleccion = []
    nombreViejo = ''
    componentWillReceiveProps(newProps) {
        //en cuanto le pican se hace la consulta para mostrar los datos en la tabla
        axios.request(
            {
                url: 'https://play-land.herokuapp.com/getTutor',
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
                //asigno el valor de la consulta a las rows de la tabla
                this.setState({ rowData: data.tutorInfo })
                //paso el arreglo de los tutores a otro arreglo
                this.datosIniciales = data.tutorInfo
            }).catch((err) => {
            })
    }

    onRowClicked(event) {
        // aqui extraigo los datos del tutor que selecciono con el row index y 
        //los paso a otro arreglo para trabajarlo mejor
        //tambien extraigo el nombre en nombre viejo en caso de requerir el valor actual o el viejo
        this.datosSeleccion[0] = this.datosIniciales[event.rowIndex].nombreExternos
        this.datosSeleccion[1] = this.datosIniciales[event.rowIndex].direccion
        this.datosSeleccion[2] = this.datosIniciales[event.rowIndex].telefono
        this.datosSeleccion[3] = this.datosIniciales[event.rowIndex].edad
        this.datosSeleccion[4] = this.datosIniciales[event.rowIndex].profesion
        this.datosSeleccion[5] = this.datosIniciales[event.rowIndex].lugarTrabajo
        this.nombreViejo = this.datosIniciales[event.rowIndex].nombreExternos
    }

    onCellValueChanged(newValue) {
        //aqui asigno el nuevo valor 
        this.datosSeleccion[newValue.colDef.colId] = newValue.newValue
    }

    updateData(e) {
        //el post para hacer el update con los datos ya modificados
        e.preventDefault()
        this.setState({ fail: false });
        this.setState({ success: false });
        axios.request({
            url: 'https://play-land.herokuapp.com/updateTutor',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                UpTutor: {
                    'name': this.datosSeleccion[0],
                    'address': this.datosSeleccion[1],
                    'phone': this.datosSeleccion[2],
                    'age': this.datosSeleccion[3],
                    'profession': this.datosSeleccion[4],
                    'work': this.datosSeleccion[5]
                },
                'tutor': {
                    'name': this.nombreViejo
                }
            }
        }).then(({ data }) => {
            this.setState({deleteSuc: false, deleteErr: false, fail: false, success: true })
        }).catch((err) => {
            this.setState({deleteSuc: false, deleteErr: false, fail: true, success: false })

        })
    }

    delete(e) {
        this.setState({deleteSuc: false})
        this.setState({deleteErr: false})

        e.preventDefault()
        axios.request({
            url: 'https://play-land.herokuapp.com/deleteTutor',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                'tutor': {
                    'name': this.nombreViejo

                }
            }
        }).then((data) => (
            this.setState({deleteSuc: true, deleteErr: false, fail: false, success: false })
        )).catch((err) => (
            this.setState({deleteSuc: false, deleteErr: true, fail: false, success: false })
        ))
    }

    render() {
        var alert
        if (this.state.fail === true) {
            alert = <UpdateErr />
        }

        if (this.state.success === true) {
            alert = <UpdateSuccess />
        }

        if(this.state.deleteErr === true){
            alert = <DeleterErr/>
        }

        if(this.state.deleteSuc === true){
            alert = <DeleteSuccess/>
        }
        return (
            <div className="divTabla">
                <div className='ag-theme-alpine-dark' style={{ float: 'right', width: '85%', height: '500px' }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        onRowClicked={this.onRowClicked.bind(this)}
                        onCellValueChanged={this.onCellValueChanged.bind(this)}
                    />
                </div>
                <button className="btnTable" onClick={this.updateData.bind(this)}>Actualizar</button>
                <Popup trigger={<button className="btnTable" >Borrar</button>} position="right center">
                    <center>
                        <div>¿Estás seguro de eliminar este registro?</div>
                        <button className="btnTable" onClick={this.delete.bind(this)}>si</button> 
                    </center>
                </Popup>
                {alert}
            </div>
        )
    }
}
//
export default TablaTutores