import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import _ from 'lodash';
import SavedItem from './SavedItem';
import Header from './Header';
import Navbar from './Navbar';

class SavedList extends React.Component {

    componentDidMount() {
        this.props.fetchData(this.props.userId);
    }

    renderSaved() {
        const videoList = _.map(this.props.savedData, (data, key) => {
                return <SavedItem key={key} data={data}/>;
            });

        if(!_.isEmpty(videoList)) {
            return videoList;
        }
        return (
            <div className="section">
                <h1 className="title is-4">You have no videos saved.</h1>
            </div>
        )

    }

    render() {
        return (
            <>
            <Header/>
            <Navbar/>
            {this.renderSaved()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { savedData: state.data, userId: state.auth.userId }
}

export default connect(
    mapStateToProps, { fetchData })
(SavedList);