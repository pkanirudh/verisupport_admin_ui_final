import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

export const Footer = () => {
    return (
        <div className="footer-distributed">

            <div className="footer-left">

                <h3>Veri<span>Support</span></h3>

                <p className="footer-links">
                    
                    <a href="/">Home</a><br></br>
                    
                    <a href="/">About</a><br></br>
                    
                    <a href="/">Contact</a><br></br>
                </p>

                <p className="footer-company-name">Verizon India &copy; 2019</p>
            </div>

            <div className="footer-center">
            
            <p>
                <span>Contact Us</span>
                </p>
                
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span> SIDCO Industrial Estate, Guindy</span>Chennai, Tamil Nadu 600032</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>8056266354</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">verisupport@verizon.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About Us</span>
                    VeriSupport is an application for customers to register and view their complaints regarding the services from Verizon which will be monitored by company agents. We aim to provide hassle free solutions to the problems faced ny our customers
                    
                </p>

                <div className="footer-icons">

                    <a href="facebook.com"><i className="fa fa-facebook"></i></a>
                    <a href="twitter.com"><i className="fa fa-twitter"></i></a>
                    <a href="/linkedin.com"><i className="fa fa-linkedin"></i></a>
                    <a href="/github.com"><i className="fa fa-github"></i></a>

                </div>

            </div>

        </div>
    );

}

export default Footer;