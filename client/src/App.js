import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Hero from './components/Hero';
import Login from './components/Login';
import NavBar from './components/NavBar';
import InventorySearch from './components/InventorySearch';
import OrderTracker from './components/OrderTracker';
import ProductDetailPage from './components/ProductDetailPage';

class App extends Component {

  
  render() {

    console.log('App top level props: ',this.props)

    const mainContainerStyle = {
        height: '100%'

    }
    return (
      
        <div className="container-fluid grey lighten-3" style={mainContainerStyle}>
          <BrowserRouter>
            <div className="container-fluid grey lighten-3">
                <Route path='/' exact 
                    render={() => this.props.user !== null ? 
                    <Redirect to="/"/>
                    : <Login />} />
                <NavBar />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Hero} />
                <Route path="/inventory" component={InventorySearch} exact/>
                <Route path="/ordertracker" component={OrderTracker} />
                <Route path="/inventory/:itemCode" component={ProductDetailPage} exact/>
            </div>
          </BrowserRouter>
        </div>
      
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(App);
