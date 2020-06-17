import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';
import SearchList from './SearchList';

class Home extends React.Component {

    renderHome() {
        if(this.props.isSignedIn === false || this.props.isSignedIn === null) {
            return (
                <h1>
                    Welcome to mini youtube
                </h1>
            )
        }
        else if (this.props.isSignedIn === true) {
            return(
                <div>
                    something else
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