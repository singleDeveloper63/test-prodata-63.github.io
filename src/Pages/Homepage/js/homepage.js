import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
             <div>
                 <h1> Home page </h1> 
                 <Link to="/register"> Register page </Link>
             </div>
        );
    }
}

export default Homepage;