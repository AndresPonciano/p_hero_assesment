import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';
import SearchList from './SearchList';
import Navbar from './Navbar';

class Home extends React.Component {

    renderHome() {
        if(this.props.isSignedIn === false || this.props.isSignedIn === null) {
            return (
                <div className="section">
                <h1 className="title is-2 has-text-centered" style={{marginTop: 220}}>
                    Welcome to mini YouTube!
                </h1>
                <h1 className="subtitle is-3 has-text-centered has-text-danger">
                    Getting rid of the clutter for a better video watching experience.
                </h1>
                </div>
            )
        }
        else if (this.props.isSignedIn === true) {
            return(
                <div>
                    <Navbar/>
                    <SearchBar/>
                    <SearchList/>
                </div>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderHome()}
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
    mapStateToProps, {})
(Home);