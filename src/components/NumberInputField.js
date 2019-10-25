import React, {Component} from 'react';

class NumberInputField extends Component {

    constructor() {
        super();
        this.state = {
            number: 0,
            errorText: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }

    onError(errText) {
        this.setState((previousState, props) => {
            return { errorText: errText}
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
            return r.json();
        })
        .then(data => {
            console.log(data);
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
            </div>
        );

    }

}

export default NumberInputField;