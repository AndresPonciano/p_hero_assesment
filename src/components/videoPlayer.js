import React from 'react';
import AddVideo from './AddVideo';


class videoPlayer extends React.Component {

    render() {
        return(
            <>
                <iframe src={`https://www.youtube.com/embed/${this.props.location.state.video.videoData.id.videoId}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
                <AddVideo videoData={this.props.location.state.video.videoData}/>
            </>
        )
    }
}

export default videoPlayer;