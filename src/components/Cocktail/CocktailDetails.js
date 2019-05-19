
import React, { Component, Fragment } from 'react';
import axios from 'axios';

const cocktailDetailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
class CocktailDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailDetails: [],
            id: props.match.params.cocktailId
        };
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        axios.get(cocktailDetailsUrl + this.state.id)
            .then(res => {
                const details = res.data;
                this.setState({ cocktailDetails: details });
            })
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        console.log(this.state.cocktailDetails);
        return (<Fragment>
            {(this.state.cocktailDetails !== null && this.state.cocktailDetails.drinks != null && this.state.cocktailDetails.drinks[0] != null) &&
                <Fragment>
                    <figure>
                        <figcaption> Title : {this.state.cocktailDetails.drinks[0].strDrink} </figcaption>
                        <img src={this.state.cocktailDetails.drinks[0].strDrinkThumb} alt={this.state.cocktailDetails.drinks[0].strDrink} />
                    </figure>
                    <p>{this.state.cocktailDetails.drinks[0].strInstructions} </p>
                </Fragment>
            }
            <button class="button" onClick={this.goBack} type="button">Back</button>
        </Fragment>
        )
    }
}

export default CocktailDetails;