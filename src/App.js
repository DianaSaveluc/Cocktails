import React, { Component, Fragment } from 'react';
import { CocktailDetails, Cocktails, AddCocktail } from './components/Cocktail';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <ul className="container">
              <li><Link to="/cocktail/alcoholic">Alcoholic</Link></li>
              <li><Link to="/cocktail/nonalcoholic">Non Alcoholic</Link></li>
              <li><Link to="/cocktail/ordinarydrink">Ordinary drink</Link></li>
              <li><Link to="/cocktail/cocktailglass">Cocktail glass</Link></li>
              <li><Link to="/cocktail/champagneflute">Champagne flute</Link></li>
            </ul>
          </div>

          <Route exact path="/cocktail/alcoholic" key="alcoholic" component={Cocktails} />
          <Route exact path="/cocktail/nonalcoholic" key="nonalcoholic" component={Cocktails} />
          <Route exact path="/cocktail/ordinarydrink" key="ordinarydrink" component={Cocktails} />
          <Route exact path="/cocktail/cocktailglass" key="cocktailglass" component={Cocktails} />
          <Route exact path="/cocktail/champagneflute" key="champagneflute" component={Cocktails} />
          <Route exact path="/cocktail/:category/addcocktail" component={AddCocktail} />
          <Route exact path="/cocktail/:category/:cocktailId" component={CocktailDetails} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
