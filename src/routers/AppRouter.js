import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ContactPage from '../components/ContactPage'
import Footer from '../components/Footer'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar'
import ProjectsPage from '../components/ProjectsPage'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div id="app-wrapper">
      <Navbar />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
