import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import Navbar from '../../../Components/Navbar/navbar';
import $ from 'jquery';
import '../css/register.css';
import Footer from '../../../Components/Footer/footer';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            email : "",
            password : ""
        }

        this.sendDatas = this.sendDatas.bind(this);
    }


    componentDidMount(){
        $('[data-toggle="tooltip"]').tooltip();
    }
    togglePassword(){
        let passwordArea = document.getElementById('password');
        let icon = document.getElementById('pTo');
        var isVisible = passwordArea.getAttribute('type');
        
        if(isVisible === "password"){
            passwordArea.setAttribute("type", "text");
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }else{
            passwordArea.setAttribute("type", "password");
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }

    }

    sendDatas(e){
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>  
                <Navbar />
                <div className="mx-auto registerPage py-5">
                    <div className="container mx-auto mb-4 pb-4 pt-4">
                        <div className="card mx-auto registerCard shadow-lg ">
                            <div className="card-body">
                                <img src={require('../../../assets/Logos/logo.png')} className="card-img-top mx-auto d-block" style={{width:"300px"}}  alt="Logo"/>
                                <h3 className="text-center text-success my-4">Ro'yxatdan o'tish</h3>
                                <form className="px-5 py-3" onSubmit={ this.sendDatas }>
                                    <div className="form-group">
                                        <label htmlFor="username"><i className="fa fa-user"> </i>&nbsp;&nbsp;Foydalanuvchi ismi</label>
                                        <input type="text" className="form-control" id="username"
                                        placeholder="Janob_Dasturchi" 
                                        onInvalid={ e=> e.target.setCustomValidity("Iltimos bu maydonni to'g'ri to'ldiring !")} 
                                        onChange={ e => this.setState({username : e.target.value })} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"><i className="fa fa-envelope"></i>&nbsp;&nbsp;Elektron pochta</label>
                                        <input type="email" className="form-control" id="email" placeholder="salimov@misollar.com"
                                        onInvalid={ e => e.target.setCustomValidity("Iltimos bu maydonni to'g'ri to'ldiring !")}
                                        onChange={ e => this.setState({email : e.target.value})} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"><i className="fa fa-key"></i>&nbsp;&nbsp;Maqbul parol tanlang</label>
                                            <div className="input-group">
                                                <br/>
                                                <input type="password" className="form-control" placeholder="Parol kiriting"
                                                onInvalid={ e=> e.target.setCustomValidity("Iltimos bu maydonni to'g'ri to'ldiring !")} id="password" 
                                                onChange={ e => this.setState({password : e.target.value })} required/>
                                                <div className="input-group-append" onClick={ this.togglePassword }>
                                                    <i className="fa fa-fw fa-eye-slash" id="pTo"></i>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="text-center mt-5">
                                        <button className="btn btn-outline-primary" type="submit">Ro'yxatdan o'tish</button>
                                        <button className="btn btn-warning ml-3" type="reset">Tozalash</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
             </div>
             <Footer/>
        </div>
        );
    }

}

export default Register;