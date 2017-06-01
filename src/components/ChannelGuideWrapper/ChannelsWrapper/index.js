import React, { Component } from 'react';

class ChannelsWrapper extends Component {
    render() {
        const channelList = this.props.channels;
        return (
        <div className="channelWrapper">
            <div className="header">
                <div className="weekdays">Sun</div>
            </div>
            <div className="channels">
            {
                channelList.map((channel, index)=>
                    <span className="channel" key={index}>{channel.name}</span>
                )
            }

            </div>
        </div>
        );
    }
}

export default ChannelsWrapper;