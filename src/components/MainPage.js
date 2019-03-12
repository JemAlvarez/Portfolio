import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

class MainPage extends React.Component {
    componentDidMount() {
        const typed = new Typed(".typed", options)
    }
    render() {
        return (
            <div className="container main">
                <div className="hero">
                    <div className="hero__subcontainer">
                        <h1 className="hero__title">Hi I'm Jem, I do <span className="typed"></span></h1>
                        <img className="hero__image" src={'/images/img.png'} alt="image" />
                    </div>
                    <Link className="hero__link" to="/contact">Contact</Link>
                </div>
                <div className="me-section">
                    <div className="me__container right-border bottom-border">
                        <h3 className="main__heading">About Me</h3>
                        <p>Something about me blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Something about me blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
                    </div>
                    <div className="me__container">
                        <div className="me__social-link"><a href="https://github.com/JemAlvarez" target="_blank"><FaGithub /></a></div>
                        <div className="me__social-link"><a href="https://google.com" target="_blank"><FaFacebookF /></a></div>
                        <div className="me__social-link"><a href="https://google.com" target="_blank"><FaInstagram /></a></div>
                        <div className="me__social-link"><a href="https://google.com" target="_blank"><FaTwitter /></a></div>
                        <div className="me__social-link"><a href="https://google.com" target="_blank"><FaLinkedinIn /></a></div>
                    </div>
                </div>
                {/* 
                    <div>
                        <h3>Featured projects</h3>
                        <p>Project card</p>
                        <p>Project card</p>
                    </div>
                */}
                <div className="skills">
                    <div className="skills__container right-border bottom-border">
                        <h3 className="main__heading">Type of skill</h3>
                        <ul className="skills__list">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    <div className="skills__container right-border bottom-border">
                        <h3 className="main__heading">Type of skill</h3>
                        <ul className="skills__list">
                            <li>Item 4</li>
                            <li>Item 5</li>
                            <li>Item 6</li>
                        </ul>
                    </div>
                    <div className="skills__container">
                        <h3 className="main__heading">Type of skill</h3>
                        <ul className="skills__list">
                            <li>Item 7</li>
                            <li>Item 8</li>
                            <li>Item 9</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const options = {
    strings: [
        "HTML / CSS",
        "SASS",
        "JavaScript",
        "React JS",
        "Node JS"
    ],
    cursorChar: '|',
    shuffle: true,
    typeSpeed: 85,
    backSpeed: 70,
    loop: true,
    backDelay: 2000
}


export default MainPage