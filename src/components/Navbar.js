import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

const Navbar = () => (
    <div>
        <NavLink to="/" activeClassName="active" exact={true}> home </NavLink>
        <NavLink to="/contact" activeClassName="active"> contact </NavLink>
        <NavLink to="/projects" activeClassName="active"> projects </NavLink>
        <NavLink to="/resume" activeClassName="active"> resume </NavLink>
    </div>
)

export default Navbar