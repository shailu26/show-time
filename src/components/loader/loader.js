import React, {Component} from 'react';
import './loader.css';
import logo from '../../assets/images/logo1.png'
class Loader extends Component {
    
    render() {

        return (
            <div>
                <div className = "loading-box" > 
                <img src={logo} alt="showtime" className="loading-logo"/> 
                </div>
            </div>
            )
    }
}

export default Loader
