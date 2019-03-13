import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ContactPage from '../components/ContactPage'
import Footer from '../components/Footer'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar'
import ProjectsPage from '../components/ProjectsPage'
import Spinner from '../components/Spinner'

export const history = createHistory();

class AppRouter extends React.Component {
  componentWillMount() {
    window.addEventListener('load', () => {
      document.querySelector('body').setAttribute('style', 'overflow: auto')
      document.querySelector('.sweet-loading').remove()
    })
  }

  render() {
    return (
      <Router history={history}>
        <div id="app-wrapper">
          <Spinner />
          <Navbar />
          <Switch>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/projects" component={ProjectsPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default AppRouter;
