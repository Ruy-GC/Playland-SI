import ReactDOM from 'react-dom';
import './index.css';
import './playland.css';
import React from 'react';
import './App.css';
import Login from './layout/login.js';
import { HashRouter as Router, Route } from 'react-router-dom'
import Matriculacion from './pages/Matriculacion';
import Medicinas from './pages/Medicinas';
import IngEg from './pages/IngEg';

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Login} />
      <Route exact path='/Matriculacion' component={Matriculacion} />
      <Route exact path='/Medicinas' component={Medicinas} />
      <Route exact path='/Ingresos_Egresos' component={IngEg} />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
