import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default class Forum extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        fetch('forum')
        .then(res=>res.json())
    }
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
