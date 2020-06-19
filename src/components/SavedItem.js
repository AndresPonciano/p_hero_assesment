import React from 'react';
import { Link } from 'react-router-dom';

class SavedItem extends React.Component {

    render() {
        // const key = this.props.key;
        const data = this.props.data;
        // console.log('help', this.state);
        // this.setState({data: this.props.data})
        return (
            <div>
                <div className="box" key={data.id.videoId}>
                    <div className="media-left" key={data.id.videoId}>
                        <figure className="is-64x64">
                            <img src={data.snippet.thumbnails.default.url} alt="thumbnail"></img>
                        </figure>
               </div>
                <Link to={{
                  pathname: `${data.snippet.title}`,
                  state: {
                    video: {data},
                  }
                }}>
                  <h1 className="title">{data.snippet.title}</h1>
                </Link>
                <h1 className="subtitle">{data.snippet.channelTitle}</h1>
                <h1 className="subtitle">{data.snippet.description}</h1>                
                </div>
            </div>
        );
    }
}

export default SavedItem;