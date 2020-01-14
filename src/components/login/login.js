import React, {Component} from 'react';
import axios from '../../services/request/axios'
import './login.css';
import jwt from 'jsonwebtoken'
import * as $ from 'jquery';
// import {toast} from 'react-toastify';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('login-container');

        signUpButton.addEventListener('click', () => {
            container
                .classList
                .add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container
                .classList
                .remove("right-panel-active");
        });
    }

    handleLoginClick = (e) => {
        e.preventDefault()
        if (this.state.email && this.state.password) {
            axios
                .post('http://localhost:8001/api/user/login', {
                "email": this.state.email,
                "password": this.state.password
            })
                .then((response) => {
                    // cookies.set('token', response.data.token, {path: '/'})
                    let data = jwt.decode(response.data.token);
                    for (let key in data) {
                        // cookies.set(key.toString(), data[key], {path: '/'})
                    }
                })
                .catch((error) => {
                    // toast.error('Email or Password does not exist', {position:
                    // toast.POSITION.BOTTOM_RIGHT});
                });
        }

    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
        let elem = document.getElementById('password')
        this.validate(elem, event)
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
        let elem = document.getElementById('email')
        this.validate(elem, event)
    }

    validate(elem, event) {
        if (!event.target.value) {
            if (!elem.classList.contains('input-danger')) {
                elem
                    .classList
                    .add('input-danger');
            }
        } else {
            if (elem.classList.contains('input-danger')) {
                elem
                    .classList
                    .remove('input-danger');
            }
        }
    }

    goToSignup = () => {
        this
            .props
            .history
            .push(`/signup`);
    }

    render() {

        return (
            <div className="display-flex">
                <div className="login-pg">

                    <div className="login-container" id="login-container">
                        <div className="form-container sign-up-container">
                            <form action="#" className="login-form">
                                <h1 className="h1-ele">Create Account</h1>
                                <div className="social-container">
                                    <span className="social social-icons span-ele">
                                        <i className="fa fa-facebook-f"></i>
                                    </span>
                                    <span className="social social-icons span-ele">
                                        <i className="fa fa-google-plus"></i>
                                    </span>

                                </div>
                                <span className="span-ele">or use your email for registration</span>
                                <input className="login-input" type="text" placeholder="Name"/>
                                <input className="login-input" type="email" placeholder="Email"/>
                                <input className="login-input" type="password" placeholder="Password"/>
                                <button className="login-btn">Sign Up</button>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form action="#" className="login-form">
                                <h1 className="h1-ele">Sign in</h1>
                                <div className="social-container">
                                    <span className="social social-icons span-ele">
                                        <i className="fa fa-facebook-f"></i>
                                    </span>
                                    <span className="social social-icons span-ele">
                                        <i className="fa fa-google-plus"></i>
                                    </span>

                                </div>
                                <span className="span-ele">or use your account</span>
                                <input className="login-input" type="email" placeholder="Email"/>
                                <input className="login-input" type="password" placeholder="Password"/>
                                <div className="forgot">Forgot your password?</div>
                                <button className="login-btn">Sign In</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1 className="welcome-text h1-ele">Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button className="ghost" id="signIn">Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1 className="black-text h1-ele">Hello, Friend!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animation-view can-hide"></div>
            </div>
        )
    }
}

export default Login