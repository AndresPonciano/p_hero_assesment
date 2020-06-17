import React from 'react';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';
import { timeChange } from '../actions';

class Header extends React.Component {
    
    componentDidMount() {
        setInterval(() => {
            this.onTimeChange();
        }, 1000);
    }

    onTimeChange() {
        this.props.timeChange();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
        <>
            <nav className="navbar is-danger">
                <div className="navbar-start">
                    <div className="navbar-item">
                        {this.props.time.format('LLL')}
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <GoogleAuth/>
                    </div>
                </div>
            </nav>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return { time: state.time.time };
}

export default connect(
    mapStateToProps, { timeChange }
)(Header);