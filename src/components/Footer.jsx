import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section social-icons">
                    <img src="/assets/instagram.svg" alt="Instagram" />
                    <img src="/assets/youtube.svg" alt="YouTube" />
                    <img src= {BsFacebook} alt="Facebook" className="facebook"/>
                    <BsFacebook />
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