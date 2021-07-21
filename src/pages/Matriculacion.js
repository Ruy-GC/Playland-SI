import React, { Component } from 'react'
import SideBar from '../layout/SideBar'
import Matninos from '../layout/Ninos/Matninos'
import MatTutor from '../layout/tutores/MatTutor'
import { Redirect } from 'react-router';
import MostrarDatosAlumnos from '../layout/Ninos/MostrarDatosAlumnos'
import ConsultaTutores from '../layout/tutores/ConsultaTutores'
export class Inicio extends Component {
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
    page3 = (e) => {
        e.preventDefault()
        this.setState({ page: '3' });
        console.log(this.state.page);
    }
    page4 = (e) => {
        e.preventDefault()
        this.setState({ page: '4' });
    }
    
    render() {
        
        
        if (localStorage.getItem('login') === 'no') {
            return <Redirect push to="/" />
        }

        var render;

        if (this.state.page === '1') {
            render = <Matninos />;
        } else if (this.state.page ==='2') {
            render = <MatTutor />;
        } else if (this.state.page === '3') {
            render = <MostrarDatosAlumnos />;
        } else if (this.state.page === '4') {
            render = <ConsultaTutores />;
        }
        
        return (

            <div>
                <SideBar />
                <div className="tabMat" id="tabMat">
                    <ul className="ulTabMat">
                        
                        <li>
                            <button className="btntab" onClick={this.page1} >Registrar Admisión</button>
                        </li>
                        <li>
                            <button className="btntab" onClick={this.page2}>Registrar Tutor</button>
                        </li>
                        <li>
                            <button className="btntab" onClick={this.page3}>Ver Niños</button>
                        </li>
                        <li>
                            <button className="btntab" onClick={this.page4}>Ver Tutores</button>
                        </li>
                        
                    </ul>
                </div >
                {render}
            </div>
        )

    }
}
//
export default Inicio

