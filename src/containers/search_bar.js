import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchFor: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ searchFor: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit}>
                <input className="input is-danger is-rounded" 
                    onChange={this.onInputChange}
                    value={this.state.searchFor} 
                    type="text" 
                    placeholder="search"
                />
                <button className="button is-danger">Search</button>
                </form>
            </>
        )
    }
}