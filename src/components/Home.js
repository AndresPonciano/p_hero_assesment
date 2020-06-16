import React from 'react';
import { connect } from 'react-redux';

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
                </div>
            )
        }
    }

    render() {
        console.log('athome', this.props.isSignedIn);

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