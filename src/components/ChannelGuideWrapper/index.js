import React, { Component } from 'react';
import ChannelsWrapper from './ChannelsWrapper';
import ShowsWrapper from './ShowsWrapper'

class ChannelGuideWrapper extends Component {
    render() {
        console.log('>>>>>>>>>', this.props.pguide)
        return (
            <div>
                <ChannelsWrapper channels={this.props.pguide.channels} />
                <ShowsWrapper shows={this.props.pguide.channels} />
            </div>
        );
    }
}

export default ChannelGuideWrapper;