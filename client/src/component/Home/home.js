import React, { Component } from 'react';
import "./home.css";
import {Link } from "react-router-dom";

export default class home extends Component {
    render() {
        return (
            <div className="home_container">
                <h1>Welcome to Todo App</h1>
                <div className="link_container">
                    <Link style={{color:'white',textDecoration:'none',fontWeight:900}} to="/"><span >Home</span></Link>
                    <Link style={{color:'white',textDecoration:'none',fontWeight:900}} to="/todo">Todo</Link>
                    <Link style={{color:'white',textDecoration:'none',fontWeight:900}} to="/about">About</Link> 
                    
                </div>
            </div>
        )
    }
}
