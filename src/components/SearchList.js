import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {
    constructor(props) {
        super(props);

        this.show = this.show.bind(this);
    }

    show () {
        console.log(this.props.videos[0]);
        console.log(typeof(this.props.videos[0]));
    }

    // renderVideo(videoData) {

    //     console.log('videoData', videoData);
    //     return(
    //         <div key={videoData.id}>
    //             <h1>{videoData.snippet}</h1>
    //         </div>
    //     )
    // }

    render() {

        return(
            <>
            <h1>hmm idk yet</h1>
            <button onClick={this.show}>hello</button>

            <div>
            {/* {this.props.videos.map(this.renderVideo)} */}
            </div>
            </>
        )
    }
}

function mapStateToProps( {videos} ) {
    return { videos };
}

export default connect(mapStateToProps)(SearchList);