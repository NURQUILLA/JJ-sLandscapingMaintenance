import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import {facebook, instagram, google} from "../assets/images/index.jsx";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section social-icons">
                    <Link to="https://www.instagram.com/jjslandscapemaintenance/">
                    <img src={instagram}  alt="Facebook" className="facebook"/>
                    </Link>

                    <Link to="https://www.google.com/search?sca_esv=fbad10a121f811a1&rlz=1C1VDKB_enUS961US961&sxsrf=AE3TifNJl1tIBemwRaJeV8X9wfLhyWzl3Q:1749415416165&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8M3ZTwncwrs5KHhd_JoAC5qZIiFvSZini2JSXhzZc72Y5LQ94Os4yYu0JRC3UJDPlpdUDvGOrxcGgec_wzAp2eR3nwudJpKP_PSK_q8h2syUyXHgQ%3D%3D&q=JJ%27s+Landscape+%26+Maintenance+Reviews&sa=X&ved=2ahUKEwiivcej2OKNAxWT_8kDHZCaHoMQ0bkNegQINhAD&biw=1280&bih=585&dpr=1.5">
                    <img src={google}  alt="Facebook" className="facebook"/>
                    </Link>

                    <Link to="https://www.facebook.com/p/JJs-Landscape-Maintenance-61555391546554/">
                    <img src={facebook}  alt="Facebook" className="facebook"/>
                    </Link>
                </div>

                <div className="footer-section">
                    <h4>Service Areas</h4>
                    <ul>
                        <li>Lawrenceville</li>
                        <li>Dacula</li>
                        <li>Duluth</li>
                        <li>Snellville</li>
                        <li>Grayson</li>
                        <li>Lilburn</li>
                        <li>Buford</li>
                        <li>Auburn</li>
                    </ul>
                </div>


                <div className="footer-section">
                    <h4>Hours</h4>
                    <ul>
                        <li>Sunday Closed</li>
                        <li>Monday 7:00AM - 7:00PM</li>
                        <li>Tuesday 7:00AM - 7:00PM</li>
                        <li>Wednesday 7:00AM - 7:00PM</li>
                        <li>Thursday 7:00AM - 7:00PM</li>
                        <li>Friday 7:00AM - 7:00PM</li>
                        <li>Saturday Closed</li>
                        <li>Closed All Major Holodays</li>
                    </ul>
                </div>


                <div className="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li>Lawn Care</li>
                        <li>Sod Work</li>
                        <li>Handyman Work</li>
                        <li>Tractor Work</li>
                        <li>Preasure Washing</li>
                        <li>Misc</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;