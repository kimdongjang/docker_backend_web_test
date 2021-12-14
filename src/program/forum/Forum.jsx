import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default class Forum extends Component {
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
