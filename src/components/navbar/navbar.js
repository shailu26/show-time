import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import './navbar.scss'
import logo from '../../assets/images/logo1.png';
import * as Cookies from "js-cookie";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
            auth: true,
            searchOption: ''
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === "dark"
                    ? "light"
                    : "dark"
            }));
        };
    }
    componentDidMount() {
        if (!Cookies.get('token')) {
            this.setState({auth: false});
        }
    }

    signOut = () => {
        // cookies.remove('token'); if (cookies.get('token')) { cookies.remove('token');
        // } this     .props     .history     .push(`/`);
    }

    goToPath = (path) => {
        this
            .props
            .history
            .push(`${path}`);
    }

    searchOption = (e) => {
        this.setState({searchOption: e.target.value});
    }

    render() {

        return (
            <header className="navbar">
                <div onClick={() => this.goToPath('/')} className="home-link router-link-exact-active router-link-active cursor-pointer">
                    <span className="site-name can-hide">Show</span>
                    <img src={logo} alt="Starship" className="logo"/> 
                    <span className="site-name can-hide">Time</span>
                </div>
                <div className="links" style={{maxWidth: '1312px'}}>
                    <div className="search-box">
                        <input aria-label="Search" autoComplete="off" spellCheck="false" value="" className="" placeholder="" onChange={this.searchOption}/>
                    </div>
                    <nav className="nav-links">
                        <div className="nav-item cursor-pointer"><div onClick={() => this.goToPath('/login')} className="nav-link">Login</div></div>
                    </nav>
                </div>
            </header>
//             <header>
//                 <nav>
//                     <ul className="navbar">
//                         <li id="title">
//                             <div className="brand">
//                                 <Link to="/">
//                                     <img src={logo} alt="logo"/>
//                                 </Link>

//                             </div>
//                             <div className="container">
//                                 <input placeholder='Search...' className='global-search' type="text" spellCheck="false" autoComplete="false" autoCorrect="false" />
//                                 <span className="fa fa-search faglobal"></span>
//                             </div>
//                         </li>
//                         {/* <li className="list-item">
//                             <div className="item">Tab
//                             </div>
//                         </li>
//                         <li className="list-item">
//                             <div className="item">Tab
//                             </div>
//                         </li> */}
//                         <li className="list-item pd-rt-80">
//                             {this.state.auth
//                                 ? <div className="item">Tab
//                                     </div>
//                                 : <div className="item">
//                                     <button className="btn btn-outline-red btn-hover">
//                                         Login
//                                     </button>
//                                 </div>
// }
//                         </li>

//                     </ul>
//                 </nav>
//             </header>
        )
    }
}

export default withRouter(Navbar);
