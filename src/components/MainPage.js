import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'

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
                        <img className="hero__image" src={'/images/img.jpg'} alt="image" />
                    </div>
                    <Link className="hero__link" to="/contact">Contact</Link>
                </div>
                <div className="me-section">
                    <div>
                        <h3>Heading</h3>
                        <p>Something about me blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
                    </div>
                    <div>
                        <h3>Heading</h3>
                        <p>bunch of links with social media</p>
                    </div>
                </div>
                {/* 
                    <div>
                        <h3>Featured projects</h3>
                        <p>Project card</p>
                        <p>Project card</p>
                    </div>
                */}
                <div>
                    <div>
                        <h3>Type of skill</h3>
                        <p>List of skills</p>
                    </div>
                    <div>
                        <h3>Type of skill</h3>
                        <p>List of skills</p>
                    </div>
                    <div>
                        <h3>Type of skill</h3>
                        <p>List of skills</p>
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