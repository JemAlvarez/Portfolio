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
                        <p>Hi, I'm Jem. I'm an 18 y/o self taught web developer. I specialize in front-end but I can also do back-end, learning to become a full-stack developer. Always trying to learn new technologies. Love pizza :)</p>
                    </div>
                    <div className="me__container">
                        <a href="https://github.com/JemAlvarez" target="_blank" className="me__social-link">
                            <FaGithub />
                        </a>
                        <a href="https://facebook.com" target="_blank" className="me__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" className="me__social-link">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/official_JemAl" target="_blank" className="me__social-link">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/jem-alvarez-046962164/" target="_blank" className="me__social-link">
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
                        <h3 className="main__heading">Front-End</h3>
                        <ul className="skills__list">
                            <li>HTML / CSS</li>
                            <li>JavaScript</li>
                            <li>React JS / Redux</li>
                        </ul>
                    </div>
                    <div className="skills__container right-border bottom-border">
                        <h3 className="main__heading">Back-End</h3>
                        <ul className="skills__list">
                            <li>Node JS</li>
                            <li>Express JS</li>
                            <li>Databases</li>
                        </ul>
                    </div>
                    <div className="skills__container">
                        <h3 className="main__heading">Misc</h3>
                        <ul className="skills__list">
                            <li>Design</li>
                            <li>Git</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const typedOptions = {
    strings: [
        "HTML / CSS",
        "SASS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "MongoDB"
    ],
    cursorChar: '|',
    shuffle: true,
    typeSpeed: 85,
    backSpeed: 70,
    loop: true,
    backDelay: 2000
}

export default MainPage