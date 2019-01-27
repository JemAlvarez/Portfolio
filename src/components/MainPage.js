import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => (
    <div>
        <div>
            <h1>Main Heading <span>typing text</span></h1>
            <img src={'https://placeimg.com/250/250/tech'} alt="asdfa" />
            <Link to="/contact">Contact</Link>
        </div>
        <div>
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

export default MainPage