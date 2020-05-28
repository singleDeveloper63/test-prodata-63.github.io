import React, { Component } from 'react';
import Register from './Pages/Register/js/register';
import Homepage from './Pages/Homepage/js/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js';

import { BrowserRouter as Router , Route} from 'react-router-dom';

export default class App extends Component {
   
    Authentication({ match, location }){
        console.log(match);
        return <h1>Authenticated</h1>
    }

    render(){
        return(
            <Router>
                <Route exact path="/register" component={ Register } />
                <Route exact path="/" component={ Homepage } />
            </Router>
        )
    }
}