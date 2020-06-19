import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import _ from 'lodash';
import SavedItem from './SavedItem';

class SavedList extends React.Component {
    constructor(props) {
        super(props);

        this.showme = this.showme.bind(this);
    }

    componentWillMount() {
        this.props.fetchData(this.props.userId);
    }

    showme() {
        console.log('showing', this.props.savedData);
    }

    renderSaved() {
        return _.map(this.props.savedData, (data, key) => {
            return <SavedItem key={key} data={data}/>;
        });
    }

    render() {
        return (
            <>
            <h1>hi from saved list</h1>
            <button className="button" onClick={this.showme}>showme</button>

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