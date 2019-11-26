import React, { Component } from "react";
import logo1 from '../../assets/bbmpcs-logo.png'
import logo2 from '../../assets/bbmpcs-logo.png'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="fixed-top scroll-change" data-menu-anima="fade-bottom">
                    <div
                        className="navbar navbar-default mega-menu-fullwidth navbar-fixed-top"
                        role="navigation"
                    >
                        <div className="navbar navbar-main d-flex justify-content-between">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle">
                                        <i className="fa fa-bars"></i>
                                    </button>
                                    <a className="navbar-brand" href="/">
                                        <img
                                            className="logo-default"
                                            src={logo1}
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                                <div className="collapse navbar-collapse">
                                    <div className="nav navbar-nav navbar-left">
                                        <ul className="nav navbar-nav">
                                            <li>
                                                <a href="./save/index.html">Save</a>
                                            </li>
                                            <li>
                                                <a href="/invest">Invest</a>
                                            </li>
                                            <li>
                                                <a href="/loan">Loan</a>
                                            </li>
                                            <li>
                                                <a href="/about-us">About Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="nav navbar-nav navbar-right">
                                        <ul className="nav navbar-nav">
                                            <li className="logged-out">
                                                <a href="/login">Login</a>
                                            </li>
                                            <li className="logged-out active">
                                                <a href="/register">Register</a>
                                            </li>
                                            <li className="logged-in dropdown">
                                                <a
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    href="#"
                                                >
                                                    <span id="userDetails"></span>{" "}
                                                    <span className="caret"></span>
                                                </a>
                                                <ul className="dropdown-menu multi-level">
                                                    <li>
                                                        <a href="/dashboard">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="/dashboard/profile">Profile</a>
                                                    </li>
                                                    <li id="logout">
                                                        <a href="/logout">Log Out</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
