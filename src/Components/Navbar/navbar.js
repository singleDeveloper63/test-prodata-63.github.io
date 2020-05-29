 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import './navbar.css';

 class Navbar extends Component{s

    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg sticky-top" >
                <div className="container">
                    <Link className="navbar-brand align-bottom p-0" to="/">
                        <img src={require('../../assets/Logos/circle.jpg')} className="bg-light rounded-circle" style={{ height: "50px" }} alt="Logo"/>
                        <span>ProData</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" 
                        aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainMenu">
                        <ul className="navbar-nav p-3">
                            <li className="nav-item ">
                                <Link to="/itnews" className="nav-link">
                                    <i className="fa fa-fw fa-newspaper"></i> IT Yangiliklari
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/prolangs" className="nav-link">
                                    <i className="fa fa-fw fa-code"></i>    Dasturlash tillari
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/itnews" className="nav-link">
                                    <i className="fa fa-fw fa-list"></i>    Algoritmlar
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/itnews" className="nav-link">
                                    <i className="fa fa-fw fa-database"></i>    Resurslar
                                </Link>
                            </li>
                        </ul>
                        
                        <Link style={{ color : 'white', textDecoration : 'none'}} className="ml-auto px-2"  to="/register" data-toggle="tooltip" data-placement="bottom" title="Ro'yxatdan o'tish">
                                <i className="fa fa-fw fa-user-plus"></i>   <span className="d-lg-none">Ro'yxatdan o'tish</span>
                            </Link>
                            <Link style={{ color : 'white', textDecoration : 'none'}} className="mr-auto px-2"  to="/login" data-toggle="tooltip" data-placement="bottom" title="Kirish">
                                <i className="fa fa-fw fa-sign-in-alt"></i> <span className="d-lg-none">Kirish</span>
                            </Link>
                    </div>
                </div>
            </nav>
        
        );
    }

 }

 export default Navbar;