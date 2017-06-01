import React, { Component } from 'react';
import ChannelGuideHeader from './ChannelGuideHeader';
import ChannelGuides from './ChannelGuides';

class ShowsWrapper extends Component {
    render() {
        const shows = this.props.shows

        return (
            <div className="showsWrapper">
                <ChannelGuideHeader />
                <ChannelGuides shows={shows} />
            </div>
        );
    }
}


export default ShowsWrapper;