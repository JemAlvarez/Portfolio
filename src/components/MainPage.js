import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'
import Rellax from 'rellax'
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import Projects from '../data/projects'

const projects = Projects.slice(0, 2)

class MainPage extends React.Component {
    componentDidMount() {
        const typed = new Typed(".typed", typedOptions)
        const rellax = new Rellax('.rellax')
    }
    render() {
        return (
            <div className="container main">
                <div className="hero">
                    <div className="hero__subcontainer">
                        <h1 className="hero__title">Hi I'm Jem, I do <span className="typed"></span></h1>
                        <img className="hero__image rellax" data-rellax-speed="1.5" src={'/images/img.png'} alt="image" />
                    </div>
                    <Link className="hero__link" to="/contact">Contact</Link>
                </div>
                <div className="me-section">
                    <div className="me__container right-border bottom-border">
                        <h3 className="main__heading">About Me</h3>
                        <p>Hello, I'm Jem 👋. I'm an 21 y/o self taught iOS and Web developer, been programming since 16 y/o. I specialize in Swift, SwiftUI (but also do UIKit), I'm an Apple fan boy 😅, but love all tech. Always learning new software engineering technologies. 😃</p>
                    </div>
                    <div className="me__container">
                        <a href="https://github.com/JemAlvarez" target="_blank" className="me__social-link">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com/official_JemAl" target="_blank" className="me__social-link">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/jemalvarez/" target="_blank" className="me__social-link">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <div className="featured-projects">
                    <h3 className="main__heading">Latest Projects</h3>
                    <div className="featured-projects__container">
                        {projects.map(prjt => (
                            <ProjectCard prjt={prjt} />
                        ))}
                    </div>
                </div>
                <div className="skills">
                    <div className="skills__container right-border bottom-border">
                        <h3 className="main__heading">Web Dev</h3>
                        <ul className="skills__list">
                            <li>HTML / CSS</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                        </ul>
                    </div>
                    <div className="skills__container bottom-border">
                        <h3 className="main__heading">iOS Dev</h3>
                        <ul className="skills__list">
                            <li>Swift</li>
                            <li>UIKit</li>
                            <li>SwiftUI</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const typedOptions = {
    strings: [
        "iOS (Swift / SwiftUI)",
        "Web Dev (JS / React)"
    ],
    cursorChar: '|',
    shuffle: true,
    typeSpeed: 85,
    backSpeed: 70,
    loop: true,
    backDelay: 2000
}

export default MainPage