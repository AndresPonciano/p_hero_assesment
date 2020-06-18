import React from 'react';

class videoPlayer extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.location.state.video.videoData.id.videoId);

    }


    render() {

        // const video = this.props.location.state.video;

        // console.log('video is', video);
        // const url = 'https://www.youtube.com/embed/' + video.id.videoId;
        // console.log('url is', url);

        return(
            <>
            <h1>im in video player</h1>
                {/* {this.props.location.state.video.id.videoId} */}
                <iframe src={`https://www.youtube.com/embed/${this.props.location.state.video.videoData.id.videoId}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </>
        )
    }
}

export default videoPlayer;