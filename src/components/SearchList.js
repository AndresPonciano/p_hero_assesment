import React, { Component } from 'react';
import { connect } from 'react-redux';
import SavedItem from './SavedItem';

class SearchList extends Component {

    renderVideo(videoData) {
        return(
          <SavedItem key={videoData.id.videoId} data={videoData}/>
        )
    }

    render() {

        return(
            <>
            <div>
            {this.props.videos[0].map(this.renderVideo)}
            </div>
            </>
        )
    }
}

//getting videos from index reducer
function mapStateToProps( {videos} ) {
    return { videos };
}

export default connect(mapStateToProps)(SearchList);