import React from 'react';
import logo from '../../utils/assets/logo.svg';
import { Link } from "react-router-dom";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faRedditAlien, faTelegramPlane, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../utils/theme';

import './Footer.css';

function Footer() {

    return (
        <footer className="footer-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 mt-2">
                        <div className="d-flex flex-column justify-content-between h-100">
                            <div className="mb-5">
                                <img src={logo} alt="logo" className="" />
                            </div>
                            <div className="d-flex flex-wrap align-items-center">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faFacebookF} color={theme.colors.white} style={{fontSize: "22px", marginRight: "1rem"}} />
                                </Link>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faTwitter} color={theme.colors.white} style={{fontSize: "22px", marginRight: "1rem"}} />
                                </Link>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faTelegramPlane} color={theme.colors.white} style={{fontSize: "22px", marginRight: "1rem"}} />
                                </Link>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faLinkedinIn} color={theme.colors.white} style={{fontSize: "22px", marginRight: "1rem"}} />
                                </Link>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faYoutube} color={theme.colors.white} style={{fontSize: "22px", marginRight: "1rem"}} />
                                </Link>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faInstagram} color={theme.colors.white} style={{fontSize: "22px", marginRight: "1rem"}} />
                                </Link>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faRedditAlien} color={theme.colors.white} style={{fontSize: "22px", marginRight: "1rem"}} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 mt-2">
                        <div className="block content-wrapper">
                            <ul className="content">
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">About us</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Exchange</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 mt-2">
                        <div className="content-wrapper">
                            <ul className="content">
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Careers</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Whitepaper</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Digitex City</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 mt-2">
                        <div className="content-wrapper">
                            <ul className="content">
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Community</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Video Tutorials</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Press</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Support</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mt-2">
                        <div className="content-wrapper">
                        <ul className="content">
                                <li className="">
                                    <Link to='/'>
                                        <span className="d-block mb-3">Contact us</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="content">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td className="p-1">
                                                <FontAwesomeIcon icon={faTelegramPlane} color={theme.colors.secondary} />
                                            </td>
                                            <td className="p-1">
                                                <p className="mb-0 contact">t.me/digitexfutureschat</p>
                                                <p className="mb-0 contact">t.me/digitexupdates</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-1">
                                                <FontAwesomeIcon icon={faEnvelope} color={theme.colors.secondary} />
                                            </td>
                                            <td className="p-1">
                                                <p className="mb-0 contact">support@digitexfutures.com</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap align-items-center mt-5 pt-4 footer-bottom">
                    <ul className="d-flex flex-wrap justify-content-center align-items-center mb-0">
                        <li className="">
                            <Link to='/'>
                                <span className="px-3">&copy;2020 Digitex</span>
                            </Link>
                        </li>
                        <li className="">
                            <Link to='/shop'>
                                <span className="left-bar px-3">Privacy Policy</span>
                            </Link>
                        </li>
                        <li className="">
                            <Link to='/'>
                                <span className="left-bar px-3">Terms &amp; Conditions</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
