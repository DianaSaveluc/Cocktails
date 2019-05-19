import React, { Fragment } from 'react';
import { Link} from 'react-router-dom';

const Cocktail = (props) => {
    return <Fragment>
        <figure>
            <img src={props.strDrinkThumb} alt={props.strDrink} id={props.idDrink} height={200} />
            <figcaption key={props.idDrink}><Link to={`${props.category}/${props.idDrink}`}>{props.strDrink}</Link> </figcaption>
        </figure>
    </Fragment>
};
export default Cocktail;