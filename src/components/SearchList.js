import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchList extends Component {

    renderVideo(videoData) {
        return(
            <div className="box" key={videoData.id.videoId}>
              <div className="media-left" key={videoData.id.videoId}>
                <figure className="is-64x64">
                  <img src={videoData.snippet.thumbnails.default.url} alt="thumbnail"></img>
                </figure>
              </div>
                <Link to={{
                  pathname: `${videoData.snippet.title}`,
                  state: {
                    video: {videoData},
                  }
                }}>
                  <h1 className="title">{videoData.snippet.title}</h1>
                </Link>
                <h1 className="subtitle">{videoData.snippet.channelTitle}</h1>
                <h1 className="subtitle">{videoData.snippet.description}</h1>                
            </div>
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

function mapStateToProps( {videos} ) {
    return { videos };
}

export default connect(mapStateToProps)(SearchList);