import React from 'react';

class SavedItem extends React.Component {
    render() {
        const key = this.props.key;
        const data = this.props.data;
        return (
            <div key={key}>
                <h1>{data.id.videoId}</h1>
            </div>
        );
    }
}

export default SavedItem;