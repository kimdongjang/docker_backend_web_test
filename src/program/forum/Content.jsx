import React, { Component } from 'react'

import TopGuide from './TopGuide'
import Writer from './Writer';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Content</h2>
                <TopGuide/>
                <Writer/>

            </div>
        )
    }
}
