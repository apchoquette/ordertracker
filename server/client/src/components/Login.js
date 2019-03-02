import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../redux/actions/auth'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            loggingIn: false
        }
    }
    
    componentWillMount() {
        this.props.fetchUser();
    }

    async submitHandler(e) {
        e.preventDefault();
        console.log('Current Props:', this.props)
        console.log('Logging in:',this.props.user)
        await this.props.logIn(this.state.username,this.state.password).then(()=> {
            
            this.props.fetchUser().then(()=>{
                console.log('fetched user:',this.props.user)
                if(this.props.user){
                    this.props.history.push('/');
                }
            })           
        })
        console.log('Logged in:',this.props.user)
    }

    render() {

        const containerStyle = {
            width: "350px",
            boxShadow: "0px 3px 5px lightgray",
            position: "relative",
            top: "10vw",
            borderRadius: "3px",
            padding: "5px",
            backgroundColor: 'white'
            
        }
        return (
            <div className="row" style={containerStyle}>
                <div className="container center-align">
                    <h3>LOG IN</h3>
                </div>
                <form className="container" onSubmit={(e)=>this.submitHandler(e)}>
                
                    <div className="row">
                        <label>Username</label>
                        <input type="text" onChange={(e) => this.setState({username: e.target.value})} value={this.state.username} name="username"/>
                    </div>
                    <div className="row">
                        <label>Password</label>
                        <input type="password" onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} name="password"/>
                    </div>
                    <div className="row center-align">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, authActions)(Login);