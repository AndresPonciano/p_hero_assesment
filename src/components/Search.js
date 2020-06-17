import React from 'react';
import axios from 'axios';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        }
    }


    componentDidMount() {
        let thing = 'cats';
        let key = process.env.REACT_APP_YOUTUBE_API_KEY;
        const getUrl = 'https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=25&q=' + thing + '&key=' + key;

        axios.get(getUrl)
            .then(res => {
                const videos = res.data;
                this.setState({ videos })
                // console.log('please', this.state.videos);
                // console.log('cmon', this.state.videos.items.length)
            })
    }

    onSearchClick = () => {
        console.log('lets search')
    }

    render() {
        return (
            <>
                <h1>doing search here</h1>
                <button className="button is-danger" onClick={this.onSearchClick}>search</button>
            </>
        )
    }
}

export default Search;