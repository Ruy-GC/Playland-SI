import React, { Component } from 'react'
import axios from 'axios'
import '../playland.css'
import { Redirect } from 'react-router'
import LoginErr from '../alerts/loginer.js'
import playlandlogo from '../images/playlandlogo.png'
import stringcorelogo from '../images/stringcorelogo.png'
import strippeslogin from '../images/strippeslogin.png'

export class login extends Component {
    constructor() {

        super()

        this.state = {
            Usuario: '',
            Contrasena: '',
            token: '',
            fail: false
        }

        localStorage.setItem('login','no');
        this.onClick = this.onClick.bind(this)

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        this.setState({ fail: false });

        e.preventDefault()
        axios.request(
            {
                url: 'https://play-land.herokuapp.com/login',
                method: 'post',
                auth: {
                    username: this.state.Usuario,
                    password: this.state.Contrasena

                }
            }).then(({ data }) => {
                localStorage.setItem('token',data.token);
                localStorage.setItem('login','si');
                this.setState({ token: data.token });
            }).catch((err) => {
                this.setState({ fail: true });
            })
    }

    render() {

        const op1 = {
            opacity: "80%"
        }

        const op2 = {
            opacity: "45%"
        }

        var error;
        if(this.state.token !== ''){
            return <Redirect push to = "/Matriculacion"/>
        }
              
        if(this.state.fail === true){
            error = <LoginErr/>
        }   

        return (

            <center>
                <div className="Background" src=""></div>
                <div>
                    <img className="logoplayland" src={playlandlogo} alt=''></img>
                    <img className="stripes" src={strippeslogin} style = {op2} alt=''></img>
                    <form className="logindiv" style = {op1}>
                        {error}
                        <h6 className="lblBien">¡Bienvenid@!<hr/></h6>
                        <input className="txtlogin" name='Usuario' type='text' value={this.state.usuario} onChange={this.onChange} placeholder='Usuario' />
                        <input className="txtlogin" name='Contrasena' type='password' value={this.state.contrasena} onChange={this.onChange} placeholder='Contraseña' />
                        <button className="btnlogin" onClick={this.onClick}>
                            
                                
                                <p>
                                Iniciar Sesión
                                </p>
                            
                        </button>
                    </form>

                    <img className="logostring" src={stringcorelogo} alt=''></img>
                </div>
            </center>
        );
    }
}
//
export default login 