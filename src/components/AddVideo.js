import React from 'react';
import { addData } from '../actions';
import { connect } from 'react-redux';

class AddVideo extends React.Component {
    constructor(props) {
        super(props);
    
        this.addToList = this.addToList.bind(this);
    }

    addToList() {
        console.log('trying to add to database');
        console.log(this.props.userId);
        addData(this.props.userId, this.props.videoData);
    }


    render() {

        console.log('in addvideo', this.props.videoData);
        console.log('in addvideo', this.props.userId);

        return (
            <>
                <button className="button is-danger" style={{marginLeft: 450}} onClick={this.addToList}>Save Video</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { userId: state.auth.userId}
}

export default connect(
    mapStateToProps, { addData }
)(AddVideo);