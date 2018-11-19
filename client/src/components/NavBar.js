import React, { Component } from 'react'

class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: null
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <a href="#" className="brand-logo">ToolBox</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Stock Check</a></li>
                        <li><a href="badges.html">Order Tracker</a></li>
                        <li><a href="collapsible.html">Help</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;