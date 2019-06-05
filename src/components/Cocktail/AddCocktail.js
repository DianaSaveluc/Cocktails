import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class AddCocktail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredient1: '',
            ingredient2: '',
            quantity: '',
            file: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeData(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    readPhoto(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    handleSubmit(event) {
        const element = (
            <div className="flex-outer">
                <li>
                    <label>Cocktail name</label>
                    <label>{this.state.name}</label>
                </li>
                <li>
                    <label>Ingredient 1</label>
                    <label>{this.state.ingredient1}</label>
                </li>
                <li>
                    <label>Ingredient 2</label>
                    <label>{this.state.ingredient2}</label>
                </li>
                <li>
                    <label>Quantity</label>
                    <label>{this.state.quantity}</label>
                </li>
                <li>
                    <label>Image</label>
                    <label>{this.state.image}</label>
                    <img src={this.state.file} alt="" />
                </li>
            </div>
        );
        ReactDOM.render(element, document.getElementById('InsertedData'));
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <ul className="flex-outer">
                        <li>
                            <label>Cocktail name</label>
                            <input
                                name="name"
                                value={this.state.name}
                                onChange={(e) => this.handleChangeData(e)}
                                type="text" /><br />
                        </li>
                        <li>
                            <label>Ingredient 1</label>
                            <input
                                name="ingredient1"
                                value={this.state.ingredient1}
                                onChange={(e) => this.handleChangeData(e)}
                                type="text" /><br />
                        </li>
                        <li>
                            <label>Ingredient 2</label>
                            <input
                                name="ingredient2"
                                value={this.state.ingredient2}
                                onChange={(e) => this.handleChangeData(e)}
                                type="text" /><br />
                        </li>
                        <li>
                            <label>Quantity</label>
                            <input
                                name="quantity"
                                value={this.state.quantity}
                                onChange={(e) => this.handleChangeData(e)}
                                type="number" /><br />
                        </li>
                        <li>
                            <label>Upload image</label>
                            <input
                                name="image"
                                value={this.state.image}
                                onChange={(e) => this.readPhoto(e)}
                                type="file" /><br />
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                </form>
                <div id="InsertedData"></div>
            </Fragment>
        );

    }
}

export default AddCocktail;