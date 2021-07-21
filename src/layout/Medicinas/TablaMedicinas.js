import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import '../../playland.css'

export class TablaMedicinas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnDefs: [{
                headerName: 'Fecha', field: 'fecha', editable: false, colId: '0'
            }, {
                headerName: 'Tipo de Medicamento', field: 'tipoMedicamento', editable: false, colId: '1'
            }, {
                headerName: 'Última Administración', field: 'ultimaAdministracion', editable: false, colId: '2'
            }, {
                headerName: 'Próxima Administración', field: 'proximaAministracion', editable: false, colId: '3'
            }
            ],
            rowData: [],
        }
    }

    datos = []
    componentWillReceiveProps(newProps) {
        axios.request(
            {
                url: ' https://play-land.herokuapp.com/getDrugs',
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
                console.log(data.drugInfo)
                var moment = require('moment');

                
                for (let  i = 0;i<data.drugInfo.length; i = i+1){
                    var parsedDate = moment(data.drugInfo[i].fecha).add(1, 'day');
                    var formattedDate = parsedDate.format('YYYY-MM-DD');
                    data.drugInfo[i].fecha = formattedDate
                }

                this.setState({ rowData: data.drugInfo })
            }).catch((err) => {
            })
    }

    render() {
        return (
            <div className="divTabla">
                <div className='ag-theme-alpine-dark' style={{ float:'left', width: '75%', height: '500px'}}>
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
export default TablaMedicinas
