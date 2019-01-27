import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    state = {
        open: false,
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            console.log(window.scrollY)
            if (window.innerWidth >= 720) {
                this.setState(() => ({ open: false }))
            }
        })
        window.addEventListener('scroll', () => {
            if (window.scrollY > 5) {
                document.querySelector('nav').classList.add('navbar-border')
            } else {
                document.querySelector('nav').classList.remove('navbar-border')
            }
        })
    }
    closeMenu() {
        this.setState(() => ({ open: false }))
    }
    renderNavMenu() {
        if (this.state.open === true) {
            if (window.innerWidth >= 720) {
                this.setState(() => ({ open: false }))
            }
            return (
                <div className="navbar__menu">
                    <NavLink onClick={() => { this.closeMenu() }} to="/" activeClassName="navbar__link-active" className="navbar__link" exact={true}> home </NavLink>
                    <NavLink onClick={() => { this.closeMenu() }} to="/contact" activeClassName="navbar__link-active" className="navbar__link"> contact </NavLink>
                    <NavLink onClick={() => { this.closeMenu() }} to="/projects" activeClassName="navbar__link-active" className="navbar__link"> projects </NavLink>
                    <NavLink onClick={() => { this.closeMenu() }} to="/resume" activeClassName="navbar__link-active" className="navbar__link"> resume </NavLink>
                </div>
            )
        }
    }
    render() {
        return (
            <nav>
                <div className="navbar__outer">
                    <div className="container">
                        <div className="navbar">
                            <div className="navbar__logo">
                                <Link to="/"><img src="https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png.png" /></Link>
                            </div>
                            <div className="navbar__links">
                                <NavLink onClick={() => { this.closeMenu() }} to="/" activeClassName="navbar__link-active" className="navbar__link" exact={true}>home</NavLink>
                                <NavLink onClick={() => { this.closeMenu() }} to="/contact" activeClassName="navbar__link-active" className="navbar__link">contact</NavLink>
                                <NavLink onClick={() => { this.closeMenu() }} to="/projects" activeClassName="navbar__link-active" className="navbar__link">projects</NavLink>
                                <NavLink onClick={() => { this.closeMenu() }} to="/resume" activeClassName="navbar__link-active" className="navbar__link">resume</NavLink>
                            </div>
                            <span
                                className="navbar__icon"
                                onClick={() => {
                                    this.setState(() => {
                                        if (this.state.open === false) {
                                            return { open: true }
                                        } else if (this.state.open === true) {
                                            return { open: false }
                                        }
                                    })
                                }}
                            >
                                |||
                        </span>
                        </div>
                    </div>
                    {this.renderNavMenu()}
                </div>
            </nav>
        )
    }
}

export default Navbar