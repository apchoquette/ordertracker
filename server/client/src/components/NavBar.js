import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as authActions from '../redux/actions/auth';

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
                    <a href="/" className="brand-logo">AKDO Dealer Toolbox</a>
                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    
                    {this.props.user && <li><a className="btn waves-effect yellow darken-2 pulse" href="/orders">Current Order<span className="badge">1</span></a></li>}
                        <li><a href="/help">Help</a></li>
                        {this.props.user && <li><a className="waves-effect waves-light btn" href={process.env.NODE_ENV === 'production' ? "/api/logout" : "http://localhost:4000/api/logout"}>Log out</a></li>}
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

export default connect(mapStateToProps,authActions)(NavBar);