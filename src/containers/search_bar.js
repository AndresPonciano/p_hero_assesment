import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchFor: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ searchFor: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        //fetch data
        this.props.fetchVideos(this.state.searchFor);
        this.setState({ searchFor: '' });
    }

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit}>
                <input className="input is-danger is-inline mt-3 ml-2" 
                    size="50"
                    onChange={this.onInputChange}
                    value={this.state.searchFor} 
                    type="text" 
                    placeholder="search"
                />
                <button className="button is-danger mt-3 ml-2">Search</button>
                </form>
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);