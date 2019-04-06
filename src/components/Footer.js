import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { FaChevronUp, FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <Link
                className="footer__scrollup"
                to="app"
                smooth={true}
                duration={500}
            >
                <FaChevronUp />
            </Link>
            <h3 className="footer_tm">Jem Alvarez - 2019</h3>
            <div className="footer_social-wrapper">
                <p className="footer_social-icon">
                    <a href="https://www.facebook.com" target="_blank"><FaFacebookF /></a>
                </p>
                <p className="footer_social-icon">
                    <a href="https://www.instagram.com" target="_blank"><FaInstagram /></a>
                </p>
                <p className="footer_social-icon">
                    <a href="https://www.github.com" target="_blank"><FaGithub /></a>
                </p>
                <p className="footer_social-icon">
                    <a href="https://www.twitter.com" target="_blank"><FaTwitter /></a>
                </p>
                <p className="footer_social-icon">
                    <a href="https://www.linkedin.com" target="_blank"><FaLinkedinIn /></a>
                </p>
            </div>
        </div>
    </footer>
)

export default Footer