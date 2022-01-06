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
            <h3 className="footer_tm">Jem Alvarez - 2022</h3>
            <div className="footer_social-wrapper">
                <p className="footer_social-icon">
                    <a href="https://github.com/JemAlvarez" target="_blank"><FaGithub /></a>
                </p>
                <p className="footer_social-icon">
                    <a href="https://twitter.com/official_JemAl" target="_blank"><FaTwitter /></a>
                </p>
                <p className="footer_social-icon">
                    <a href="https://www.linkedin.com/in/jem-alvarez-046962164/" target="_blank"><FaLinkedinIn /></a>
                </p>
            </div>
        </div>
    </footer>
)

export default Footer