import React from 'react';
import './App.css';
import * as Cookies from "js-cookie";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import requireAuth from './services/authentication'
import LoginComponent from './components/login/login';
import HomeComponent from './components/home/home';
import Navbar from './components/navbar/navbar';
import MovieDetailComponent from './components/movie-detail/movieDetail';
import {ThemeContext} from './theme-context';
import * as $ from 'jquery';
let component = () => {
    return (
        <div className='main-container'>
            <Navbar/>
            <Switch>
                <Route path='/' component={HomeComponent} exact/>
                <Route path='/movie/:movieName/:id' component={MovieDetailComponent} exact/>
                {/* <Route path='/' component={requireAuth(HomeComponent)} exact/> */}
            </Switch>
        </div>
    )
}

function App() {
    const {theme, toggle} = React.useContext(ThemeContext)
    $(() => {
        setTimeout(() => {
            let value = localStorage.getItem('dark') ? localStorage.getItem('dark'): '';
            $('#dn').prop('checked', value.toLowerCase() === 'true'? true: false);
        }, 0)
    });
    return (

        <div
            className={theme.backgroundColor === 'white' ? 'show-time-app white': 'show-time-app black'}
            style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color
        }}>

            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LoginComponent}/>
                    <Route path='/' component={component}/>
                </Switch>
            </BrowserRouter>

            <div className="toggleWrapper">
                <input
                    type="checkbox"
                    onChange={toggle}
                    className="dn"
                    id="dn"/>
                <label htmlFor="dn" className="toggle">
                    <span className="toggle__handler">
                        <span className="crater crater--1"></span>
                        <span className="crater crater--2"></span>
                        <span className="crater crater--3"></span>
                    </span>
                    <span className="star star--1"></span>
                    <span className="star star--2"></span>
                    <span className="star star--3"></span>
                    <span className="star star--4"></span>
                    <span className="star star--5"></span>
                    <span className="star star--6"></span>
                </label>
            </div>
        </div>

    );

}

export default App;