import React, { Component } from 'react'
import MatIngyEg from '../layout/InOut/MatIngyEg'
import SideBar from '../layout/SideBar'
import { Redirect } from 'react-router';
import MostrarDatosInOut from '../layout/InOut/MostrarDatosInOut';

export class IngEg extends Component {
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
            render = <MatIngyEg />;
        } else if (this.state.page === '2') {
            render = <MostrarDatosInOut />;
        }
        return (
            <div>
            <SideBar />
            <div className="tabMat" id="tabMat">
                <ul className="ulTabMat">
                    
                    <li>
                        <button className="btntab" onClick={this.page1}>Entradas y Salidas</button>
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
export default IngEg
