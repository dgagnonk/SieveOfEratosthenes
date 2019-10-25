import React, {Component} from 'react';

class NumberInputField extends Component {

    constructor() {
        super();
        this.state = {
            number: 0,
            errorText: '',
            median: 'N/A'
        }


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }

    onError(errText) {
        this.setState((previousState, props) => {
            return { 
                errorText: errText + " ('" + this.state.number + "')",
                median: "N/A"
            }
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("> Submitting form");
        //console.log(this.state);

        fetch('http://localhost:3000/setprime', {
            method: 'POST',
            body: JSON.stringify(this.state),
        })
        .then(r => {
            console.log(r);
            if (r.status !== 200) {
                throw r.statusText;
            } 
            return r.json();
        })
        .then(data => {
            console.log(data);
            this.setState((previousState, props) => {
                return { 
                    errorText: '',
                    median: data
                }
            })
        })
        .catch(e => {
            console.log(e);
            this.onError(e.toString());
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="number" onChange={this.onChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                <p className="errorLabel">{this.state.errorText}</p>
                <p className="medianLabel">Median: {this.state.median.toString()}</p>
            </div>
        );

    }

}

export default NumberInputField;