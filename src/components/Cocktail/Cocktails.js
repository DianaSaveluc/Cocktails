import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail';
import { Link } from 'react-router-dom';

const cocktailFilters = {
  '/cocktail/alcoholic': '?a=Alcoholic',
  '/cocktail/nonalcoholic': '?a=Non_Alcoholic',
  '/cocktail/ordinarydrink': '?c=Ordinary_Drink',
  '/cocktail/cocktailglass': '?g=Cocktail_Glass',
  '/cocktail/champagneflute': '?g=Champagne_flute'
}
const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';

class Cocktails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      category: props.match.path
    };
  }

  componentDidMount() {
    axios.get(cocktailUrl + cocktailFilters[this.state.category])
      .then(res => {
        const cocktails = res.data;
        this.setState({ cocktails: cocktails });
      })
  }

  render() {
    let drinks = null;
    if (this.state.cocktails != null && this.state.cocktails.drinks != null) {
      drinks = this.state.cocktails.drinks.map((cocktail, index) => { return <Cocktail {...cocktail} category={this.state.category} key={cocktail.idDrink} /> });
    }
    return (<Fragment>
      <div className="categoryBox">
        {drinks}
      </div>
      <Link to={`${this.state.category}/addcocktail`}>Add cocktail</Link>
    </Fragment>
    )
  }
}

export default Cocktails;