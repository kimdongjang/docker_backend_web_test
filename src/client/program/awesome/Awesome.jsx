import React, { Component } from 'react'

import './awesome.css'

export default class Awesome extends Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        fetch('awesome')
        .then(res=>res.json())
    }

    render() {
        return (
            <div>
                <div class="container">
                    <nav class="header">
                        <div class="icon">
                            <i class="fas fa-flask"></i>
                            <a href="#"><h1>Lab</h1></a>
                        </div>
                        <nav class="menubar">
                            <ul>
                                <li>Home</li>
                                <li>Product</li>
                                <li>Research</li>
                                <li>About Us</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        <div class="signButton">
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                    </nav>
                </div>
                <div class="main">
                    <div class="left">
                        <div class="text">
                            <h5>WELCOME LAB</h5>
                            <h2>Eu do exercitation reprehenderit culpa do occaecat fugiat nulla.</h2>
                            Ut incididunt aliqua culpa enim. Velit aliqua dolor cupidatat veniam minim excepteur magna dolor incididunt ea deserunt ex nulla. Exercitation esse quis ea velit ullamco esse deserunt ut dolore. Sunt quis irure velit cupidatat mollit ut culpa reprehenderit duis.
                        </div>
                        <div class="findButton">
                            <button>Explore</button>
                            <button>Watch Video</button>
                        </div>
                    </div>
                    <div class="right">
                        <img src="https://cdn.pixabay.com/photo/2021/03/02/17/38/science-6063326_960_720.png" alt="labImg"></img>
                    </div>
                </div>
            </div>
        )
    }
}
