import React, { Component } from 'react'

class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: null
        }
    }

    handleLogin() {
        console.log('Log in pressed')
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper red lighten-2">
                    <a href="/" className="brand-logo">ToolBox</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/inventory">Stock Check</a></li>
                        <li><a href="/ordertracker">Order Tracker</a></li>
                        <li><a href="/help">Help</a></li>
                        <li><a className="waves-effect waves-light btn" onClick={this.handleLogin}>Log in!</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;