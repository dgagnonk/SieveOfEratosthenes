/*
    NumberInputField.js
    ===========
    React component file for the number input field.
*/

import React, { Component } from 'react';
import "./NumberInputField.css";

class NumberInputField extends Component {

    constructor() {
        super();

        // number is the user number, errorText is any error text, and median is the displayed median array
        this.state = {
            number: 0,
            errorText: '',
            median: 'N/A'
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // When the user changes the text box contents, change the component's state appropriately
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    // When there is an error, display relevant error text
    onError(errText) {
        this.setState((previousState, props) => {
            return {
                errorText: errText + " ('" + this.state.number + "')",
                median: "N/A"
            }
        })
    }

    // When the user submits the number to the server
    onSubmit(e) {
        e.preventDefault();
        console.log("> Submitting form");
        //console.log(this.state);

        // Perform POST request to server
        // Send this component's state as body data
        fetch('http://localhost:3000/setprime', {
            method: 'POST',
            body: JSON.stringify(this.state),
        })
            // When a response is given...
            .then(r => {
                //console.log(r);

                // If there is an error (200 is OK)
                if (r.status !== 200) {
                    throw r.statusText;
                }
                return r.json();
            })
            // Data is exposed after response stream is finished
            .then(data => {
                //console.log(data);

                // Set state to received data and no error
                this.setState((previousState, props) => {
                    return {
                        errorText: '',
                        median: data
                    }
                })
            })
            // Show appropriate error text
            .catch(e => {
                //console.log(e);
                this.onError(e.toString());
            })
    }

    // Render component.
    // Includes text box, submit button, error label, and median array label
    render() {
        return (
            <div className="col-sm">
                <div align="center">
                    <form onSubmit={this.onSubmit}>
                        <input id="txtNum" type="text" name="number" onChange={this.onChange} className="form-control" />
                        <button id="btnSubmit" type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <p id="lblError">{this.state.errorText}</p>
                    <p id="lblMedian">Median: {this.state.median.toString()}</p>
                </div>
            </div>

        );

    }

}

export default NumberInputField;