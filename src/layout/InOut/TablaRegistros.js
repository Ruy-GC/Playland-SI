import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import '../../playland.css'

export class TablaRegistros extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnDefs: [{
                headerName: 'Nombre', field: 'nombreAlumnos', editable: false, colId: '0'
            }, {
                headerName: 'Tutor', field: 'nombreExternos', editable: false, colId: '1'
            }, {
                headerName: 'Fecha', field: 'fecha', editable: false, colId: '2'
            }, {
                headerName: 'Hora', field: 'hora', editable: false, colId: '3'
            }, {
                headerName: 'Tipo', field: 'tipo', editable: false, colId: '4'
            }, {
                headerName: 'Estado', field: 'estado', editable: false, colId: '5'
            }, {
                headerName: 'Higiene', field: 'higiene', editable: false, colId: '6'
            }, {
                headerName: 'Enfermedad', field: 'enfermedad', editable: false, colId: '7'
            }, {
                headerName: 'Lesión', field: 'lesion', editable: false, colId: '8'
            }
            ],
            rowData: [],
        }
    }

    datos = []
    componentWillReceiveProps(newProps) {
        axios.request(
            {
                url: 'https://play-land.herokuapp.com/getRegistro',
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                data: {
                    'student': {
                        "name": `${newProps.nombre}`
                    }
                }
            }).then(({ data }) => {
                var moment = require('moment');

                
                for (let  i = 0;i<data.regInfo.length; i = i+1){
                    var parsedDate = moment(data.regInfo[i].fecha).add(1, 'day');
                    var formattedDate = parsedDate.format('YYYY-MM-DD');
                    data.regInfo[i].fecha = formattedDate
                }

                this.setState({ rowData: data.regInfo })
            }).catch((err) => {
                console.error(err)
            })
    }

    render() {
        return (
            <div className="divTabla">
                <div className='ag-theme-alpine-dark' style={{ float:'right', width: '85%', height: '500px'}}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                    />
                </div>
            </div>
        )
    }
}
//
export default TablaRegistros
