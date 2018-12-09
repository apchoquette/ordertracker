import React, { Component } from 'react'
import { connect } from 'react-redux';

class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: null
        }
    }

    render() {
        const navBarStyle = {
            zIndex: '1000'
        }
        return (
            <nav style={navBarStyle}>
                <div className="nav-wrapper red lighten-2">
                    <a href="/" className="brand-logo">ToolBox</a>
                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    
                        {this.props.user && <li><a href="/inventory">Stock Check</a></li>}
                        {this.props.user && <li><a href="/ordertracker">Order Tracker</a></li>}
                        {this.props.user && <li><a className="disabled" href="/clp">CLP</a></li>}
                        {this.props.user && <li><a href="/lotphotos">Lot Photos</a></li>}
                        <li><a href="/help">Help</a></li>
                        {this.props.user && <li><a className="waves-effect waves-light btn" href="http://localhost:4000/api/logout">Log out</a></li>}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(NavBar);