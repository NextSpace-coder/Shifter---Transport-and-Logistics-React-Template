import React from 'react';
import {Link} from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import logo from '../../images/logo/logo.png'

import './style.css'

const Header = () => {

    const SubmitHandler = ( e ) => {
       e.preventDefault()
    }

    return(
            <header>
                <div className="header-top-1" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-12 col-12">
                                <ul className="d-flex account_login-area">
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>Mon - Fri : 8.00 am - 6.00 pm</li>
                                    <li><i className="fa fa-map-marker"></i>123 Business Ave, New York, USA</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="btn-style"><Link to="/contact">Contact Us</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-style-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
                                <div className="logo">
                                    <Link to="/"><img src={logo} alt=""/></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 d-none d-lg-block col-m">
                                <div className="main-menu">
                                    <nav className="nav_mobile_menu">
                                        <ul>
                                            <li className="active"><Link to="/">Home</Link>
                                                <ul className="submenu">
                                                    <li className="active"><Link to="/">Home One</Link></li>
                                                    <li><Link to="/home2">Home Two</Link></li>
                                                    <li><Link to="/home3">Home Three</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/servicesingle">Service</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/servicesingle">service single</Link></li>
                                                    <li><Link to="/freight">Air Freight</Link></li>
                                                    <li><Link to="/road">Road Freight</Link></li>
                                                    <li><Link to="/ocean">Ocean Freight</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/blog">Blog with sidebar</Link></li>
                                                    <li><Link to="/blog-fullwidth">Blog full width</Link></li>
                                                    <li><Link to="/blog-single">Blog single sidebar</Link></li>
                                                    <li><Link to="/blog-single-fullwidth">Blog single fullwidth</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/">Pages</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/pricing">pricing table</Link></li>
                                                    <li><Link to="/team">Team</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 col-2 search">
                                <ul>
                                    <li><Link to="/"><i className="fa fa-search"></i></Link>
                                        <ul>
                                            <li>
                                                <form onSubmit={SubmitHandler}>
                                                    <input type="text" placeholder="search here.."/>
                                                    <button type="btn"><i className="fa fa-search"></i></button>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-1 col-sm-1 col-2">
                                <MobileMenu/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
     )
        
}

export default Header;
