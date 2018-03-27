import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import films from './films';
import SingleFilm from './singleFilm';
import People from './people';
import singlePerson from './singlePerson';
import './app.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <React.Fragment>

            <div className ="button-container">
            <Link to="/" className='btn films-btn button'>Go Home</Link>
            <Link to="/films" className = "btn films-btn button">View Films</Link>
            <Link to="/people" className = "btn films-btn button">View People</Link>

            </div>
            <div className = "container">
            <Switch>
              <Route exact path="/" />
              <Route exact path = "/films" component={films}/>
              <Route exact path = "/people" component={People}/>
              <Route exact path="/films/:id" component={SingleFilm} />
              <Route exact path="/people/:id" component={singlePerson} />

            </Switch>
            </div>


          </React.Fragment>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
