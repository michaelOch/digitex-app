import React from 'react';
import { Link } from "react-router-dom";

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../utils/theme';

import './Header.css';

function Header() {

    const pages = [
        { title: "About us", link: "/" },
        { title: "Exchange", link: "/exchange" },
        { title: "Blog", link: "/blog" },
        { title: "Careers", link: "/careers" }
      ];

    const handleClose = (e) => {
        const element = e.target.parentElement.parentElement.parentElement;
        if(element) {
            if(element.classList.contains('show')) {
                element.classList.remove('show')
            }
        }
    }

    return (
        <header className="header-section">
            <nav className="navbar navbar-expand-lg fixed-top py-3">
                <div className="container-fluid">
                    <div className="">
                        <img src="./images/logo.svg" alt="logo" className="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} color={theme.colors.white} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="close">
                            <FontAwesomeIcon 
                                icon={faTimes} 
                                color={theme.colors.black} 
                                style={{fontSize: "24px"}} 
                                onClick={function(e) {
                                    e.preventDefault();
                                    e.nativeEvent.stopPropagation();
                                    handleClose(e);
                                }}
                            />
                        </div>
                        <ul className="navbar-nav">
                            {pages.map((page, i) => (
                                <li key={i + 1} className={`nav-item ${ i === 0 ? 'ml-4' : 'mx-2' }`}>
                                    <Link to={page.link}>
                                        <span className={`nav-link px-3 ${ i !== 0 ? 'left-bar' : '' }`}>{page.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="dropdown">
                            <button className="btn shadow-none dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Link to='/'>
                                            <span className="dropdown-item">Community</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to='/'>
                                            <span className="dropdown-item">Video Tutorials</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to='/'>
                                            <span className="dropdown-item">Press</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to='/'>
                                            <span className="dropdown-item">Support</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to='/'>
                                            <span className="dropdown-item">White Paper</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to='/'>
                                            <span className="dropdown-item">Digitex City</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="navbar-nav align-items-center ml-auto">
                            <li className="nav-item mx-2">
                                <Link to='/signup'>
                                    <span className='nav-link px-3'>Sign up</span>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li className="nav-item mx-2">
                                <Link to='/login'>
                                    <span className='nav-link px-3'>Log In</span>
                                </Link>
                            </li>
                        </ul>
                        
                        <div className="d-flex justify-content-center align-items-center mx-2">
                            <Link to='/'>
                                <span className='btn btn-primary'>Buy DGTX</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
