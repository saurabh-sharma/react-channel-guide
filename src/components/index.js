import React, { Component } from 'react';
import ChannelGuideWrapper from './ChannelGuideWrapper';
import _ from 'lodash';
import main from '../js/main';


class App extends Component {
    constructor(props){
        super(props)
    }
    /*-----------------------

    Currently time is taken and calculated
    on the basis of current system time and
    start and end time are being generated
    relatively

    -----------------------*/



    currenttime = + new Date();
    x= this.currenttime;
    oneHour = 60*60*1000;
    halfHour = 30*60*1000;
    
    pguide = {  
        "channels": [
            {
            "name": "channel1",
            "shows": [
                {
                "start": this.currenttime,
                "end": this.currenttime += this.oneHour,
                "title": "Show1"
                },
                {
                "start": this.currenttime ,
                "end": this.currenttime += this.halfHour,
                "title": "Show2"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime += this.oneHour+this.oneHour,
                "title": "Show3"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime += this.halfHour,
                "title": "Show4"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime += this.oneHour+this.halfHour,
                "title": "Show5"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime +=this.halfHour,
                "title": "Show6"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime +=this.oneHour,
                "title": "Show7"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime +=this.halfHour,
                "title": "Show8"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime +=this.halfHour,
                "title": "Show9"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime +=this.oneHour,
                "title": "Show10"
                }
            ]
            },
            {
            "name": "channel2",
            "shows": [
                {
                "start":this.currenttime = this.x,
                "end": this.currenttime += this.oneHour+this.oneHour,
                "title": "Show1"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime += this.halfHour,
                "title": "Show2"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime += this.halfHour,
                "title": "Show3"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime += this.oneHour,
                "title": "Show4"
                },
                {
                "start": this.currenttime,
                "end": this.currenttime += this.oneHour+this.oneHour,
                "title": "Show5"
                }
            ]
            }
        ]
    };
    
    render() {
        return (
            <div>
                <ChannelGuideWrapper pguide={this.pguide} />
            </div>
        );
    }
}

export default App;