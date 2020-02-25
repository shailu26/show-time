import React, {lazy, Suspense} from 'react';
import './App.scss';
import * as Cookies from "js-cookie";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import requireAuth from './services/authentication'
import {ThemeContext} from './theme-context';
import * as $ from 'jquery';
import logo from './assets/images/logo1.png'
import LoaderComponent from './components/loader/loader';
import {ShowTimeProvider} from './react-context/show-time-app-context'
const LoginComponent = (lazy(() => (import ('./components/login/login'))));
const HomeComponent = (lazy(() => (import ('./components/home/home'))));
const Navbar = (lazy(() => (import ('./components/navbar/navbar'))));
const MovieDetailComponent = (lazy(() => (import ('./components/movie-detail/movieDetail'))));
const BookMovieComponent = (lazy(() => (import ('./components/book-movie/bookMovie'))));
const TheatreLayoutComponent = (lazy(() => (import ('./components/theatre-layout/theatre-layout'))));
const AdminLayout = (lazy(() => (import ('./components/admin/admin-layout/admin-layout'))));
let component = () => {
    return (
        <div className='main-container'>
            <Navbar/>
            <Suspense fallback={< LoaderComponent />}>
                <Switch>
                    <Route path='/' component={HomeComponent} exact/>
                    <Route path='/movie/:movieName/:id' component={MovieDetailComponent} exact/>
                    <Route
                        path='/movie/:movieName/:id/book-tickets'
                        component={BookMovieComponent}
                        exact/>
                    <Route
                        path='/movie/:movieName/:id/select-seats'
                        component={TheatreLayoutComponent}
                        exact/>
                    <Route
                        path='/admin'
                        component={AdminLayout}
                        exact/> {/* <Route path='/' component={requireAuth(HomeComponent)} exact/> */}
                </Switch>
            </Suspense>
        </div>
    )
}

function App() {
    const {theme, toggle} = React.useContext(ThemeContext)
    $(() => {
        setTimeout(() => {
            let value = localStorage.getItem('dark')
                ? localStorage.getItem('dark')
                : '';
            $('#dn').prop('checked', value.toLowerCase() === 'true'
                ? true
                : false);
        }, 0)
    });
    return (
        <ShowTimeProvider>
            <div
                className={theme.backgroundColor === 'white'
                ? 'show-time-app white'
                : 'show-time-app black'}
                style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color
            }}>

                <BrowserRouter>
                    <Suspense fallback={< LoaderComponent />}>
                        <Switch>
                            <Route exact path="/login" component={LoginComponent}/>
                            <Route path='/' component={component}/>
                        </Switch>
                    </Suspense>
                </BrowserRouter>

                <div className="toggleWrapper">
                    <input type="checkbox" onChange={toggle} className="dn" id="dn"/>
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
        </ShowTimeProvider>
    );

}

export default App;