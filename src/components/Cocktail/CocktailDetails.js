import React, {useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const cocktailDetailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const CocktailDetails = (props) => {
    const [cocktailDetails, setCocktailDetails] = useState([]);
    const id = props.match.params.cocktailId;

    useEffect(() => {
        axios({
            url: cocktailDetailsUrl + id,
            method: 'get'
          }).then(res => setCocktailDetails(res.data));
     },[setCocktailDetails]);

     const goBack=()=>{
        props.history.goBack();
     }

    return (<Fragment>
            {(cocktailDetails !== null && cocktailDetails.drinks != null && cocktailDetails.drinks[0] != null) &&
                <Fragment>
                    <figure>
                        <figcaption> Title : {cocktailDetails.drinks[0].strDrink} </figcaption>
                        <img src={cocktailDetails.drinks[0].strDrinkThumb} alt={cocktailDetails.drinks[0].strDrink} />
                    </figure>
                    <p>{cocktailDetails.drinks[0].strInstructions} </p>
                </Fragment>
            }
            <button className="button" onClick={goBack} type="button">Back</button>
        </Fragment>)
}

export default CocktailDetails;