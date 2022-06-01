import React from 'react'
import './Navbar.css'
import logo from '../img/logo.png'
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container-fluid">
                    <img src={logo} alt="" className="nav-brand logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 navv">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#about">Restaurant</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#about">Left overs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#about">FAQS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#about">Contact Us</Link>
                            </li>
                            <button className="btn btn-light nav-item">DONATE</button>
                            <Link to="/login" ><button className="btn btn-light nav-item butt" style={{ padding: 10 }}>LOGIN</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}