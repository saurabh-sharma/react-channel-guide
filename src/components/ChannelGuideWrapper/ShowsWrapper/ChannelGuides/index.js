import React, { Component } from 'react';

class ChannelGuides extends Component {
    render() {
        console.log('+++++++++++', this.props.shows);

        return (
            <div className="guides">
            {
                this.props.shows.map((showList,index)=>
                    <div className="show_row" key={index}>
                    {
                        showList.shows.map((show,index)=>
                            <span key={index} style={{width: (show.end - show.start)/1000/3600*200}} className="show">{show.title}</span>
                        )
                    }
                    </div>
                )
            }
            </div>
        );
    }
}

export default ChannelGuides;