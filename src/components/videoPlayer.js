import React from 'react';
import AddVideo from './AddVideo';
import Header from './Header';
import Navbar from './Navbar';

class videoPlayer extends React.Component {

    render() {

        console.log('in videoplayer', this.props.location.state.video.data);

        return(
            <>
                <Header/>
                <Navbar/>
                <iframe src={`https://www.youtube.com/embed/${this.props.location.state.video.data.id.videoId}`}
                    style={{marginTop: 70, marginLeft: 450}}
                    width="600px"
                    height="400px"
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
                <br/>
                <AddVideo videoData={this.props.location.state.video.data}/>
            </>
        )
    }
}

export default videoPlayer;