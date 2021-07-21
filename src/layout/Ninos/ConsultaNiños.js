import React, {Component} from 'react'
import axios from 'axios'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import '../../playland.css'

class ConsultaNiños extends Component{
    constructor(props){
        super(props)
        this.state={
            columnDefs:[{
                headerName:'Alumnos', 
                field:'nombreAlumnos',
                sortable: true,
                filter:true,
                editable:true
            }],
            rowData:[],
            rowSelection:true
        }
    }

    componentWillReceiveProps(newProps){
        axios.request(
            {
                url:'https://play-land.herokuapp.com/getAlumnos',
                method:'post',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(({data}) =>{
               this.setState({rowData:data.studentsInfo})
            }).catch((err) => {
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
               this.setState({rowData:data.studentsInfo})
            }).catch((err) => {
            })
    }

    onRowClicked(event) {
        let NombreAlumno = event.data.nombreAlumnos
        this.props.PasarNombre(NombreAlumno)
      }

    onCellValueChanged(newValue){
    }

    render(){
        return(
            
            <div className="divTabla">
                {/**tabla con los nombres de los niños*/}
                <div className='ag-theme-alpine-dark' style={{float:'left', height:'500px', width:'15%'}}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        rowSelection={this.state.rowSelection}
                        onRowClicked={this.onRowClicked.bind(this)}
                        onCellValueChanged={this.onCellValueChanged.bind(this)}>
                    </AgGridReact> 
                </div>
            </div>
        )
    }
}
//
export default ConsultaNiños