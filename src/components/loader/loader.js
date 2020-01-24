import React, {Component} from 'react';
import './loader.scss';
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
