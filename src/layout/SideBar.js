import React,{Component} from 'react'
import logo from '../images/playlandlogo.png'

import { Link, Redirect } from 'react-router-dom'
import '../playland.css'

class SideBar extends Component{
    constructor() {

        super()

        this.state = {
           logout: false
        }
    }

    logout = (e) =>{
        e.preventDefault()
        this.setState({logout:true})
    }

    render(){
        if(this.state.logout === true){
            return <Redirect push to = "/"/>
        }
        return(
            <div id="sidediv" className = 'sidediv'>
                <div>
                    <img className = 'logoside' src={logo} alt = ''></img>
                </div>
                
                <ul>

                <li><hr id="sidedivline"className="hr"/></li>

                    <li className = 'ingeng'>
                        <div >
                            <Link to = '/Ingresos_Egresos'>
                                <span><i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;Entradas y Salidas</span>
                            </Link>
                        </div>
                    </li>
                    <li className = 'mat'>
                        <div>
                            <Link to = '/Matriculacion'>
                                <span><i className="fa fa-users fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;Niños y Tutores</span>
                            </Link>
                        </div>
                    </li>
                    <li className = 'med'>
                        <div>
                            <Link to = '/Medicinas'>
                                <span><i className="fa fa-plus-square fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;Medicamentos</span>
                            </Link>
                        </div>
                    </li>

                    <li><hr id="sidedivline" className="hr"/></li>
                    <li>
                        <button id="btnhide" className="btnside" onClick={myFunction}>Esconder Barra</button>
                    </li>

                    {//<li> Boton de cambio de tema (No Funciona)
                      //  <button id="btntheme" className="btnside" onClick={ThemeChange}>Cambio de Tema</button>
                    //</li>}
                     }

                    <li>
                        <button className = 'btnside' onClick = {this.logout}>Cerrar Sesión</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar
/// Funciones de opciones de estilo de usuario
function myFunction() {
    var mat = document.getElementById("matForm");
    var x = document.getElementById("tabMat");
    var y = document.getElementById("btnhide");
  
    if (x.style.display === "none") {
      x.style.display = "block";
      y.textContent = "Esconder Barra";

      //Estilo del div de los formularios
      
      mat.style.paddingTop = "2.5%";
      mat.style.transitionDuration = ".7s";
      
      
      
      
      //Estilo de el boton de Esconder Barra
      y.style.transitionDuration = ".7s";



    } else {
      x.style.display = "none";
      y.textContent = "Mostrar Barra"

      //Estilo del div de los formularios
      mat.style.paddingTop = "1%";
      mat.style.transitionDuration = ".7s";

      //Estilo del div de las Tablas
      //
    }
  }











  //function ThemeChange() { CODIGO CAMBIO DE TEMA
     
//    var sidediv = document.getElementById("sidediv");
//   var sidedivline = document.getElementById("sidedivline");
//  
//     if(sidediv.style.background === "#121926"){
//       sidediv.style.backgroundColor = "#121926";
//         
//     }else if(sidediv.style.background === "#425277"){
//        sidediv.style.backgroundColor = "#425277";
//        sidedivline.style.backgroundColor = "white";
//      }

  //}

