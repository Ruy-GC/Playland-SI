import React, { Component } from 'react'
import MatMedicina from '../layout/Medicinas/MatMedicina'
import SideBar from '../layout/SideBar'
import { Redirect } from 'react-router';
import MostrardatosMedicinas from '../layout/Medicinas/MostrardatosMedicinas';

export class Medicinas extends Component {
    constructor() {

        super()

        this.state = {
            page: '1',
        }
    }

    page1 = (e) => {
        e.preventDefault()
        this.setState({ page: '1' });
    }
    page2 = (e) => {
        e.preventDefault()
        this.setState({ page: '2' });
    }
    render() {
        if(localStorage.getItem('login') === 'no'){
            return <Redirect push to = "/"/>
        }
        var render;

        if (this.state.page === '1') {
            render = <MatMedicina />;
        } else if (this.state.page === '2') {
            render = <MostrardatosMedicinas />;
        }
        return (
            <div>
            <SideBar />
            <div className="tabMat" id="tabMat">
                <ul className="ulTabMat">
                    
                    <li>
                        <button className="btntab" onClick={this.page1}>Ingresar Medicamento</button>
                    </li>
                    <li>
                        <button className="btntab" onClick={this.page2}>Historial</button>
                    </li>
                </ul>
            </div >
            {render}
        </div>
        )
    }
}
//
export default Medicinas
