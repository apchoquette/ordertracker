import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Hero from './components/Hero';
import Login from './components/Login';
import NavBar from './components/NavBar';
import InventorySearch from './components/InventorySearch';
import OrderTracker from './components/OrderTracker';
import ProductDetailPage from './components/ProductDetailPage';
import WHSearch from './components/WHSearch';

class App extends Component {

  
  render() {

    const mainContainerStyle = {
        height: '100%'

    }
    return (
      
        <div className="container-fluid grey lighten-3" style={mainContainerStyle}>
          <BrowserRouter>
            <div className="container-fluid grey lighten-3">
                <NavBar />
                <Route path='/' exact 
                    render={() => this.props.user===null 
                        ? <Redirect to="/login" />
                        : <Route path="/" exact component={Hero} />} 
                />
                <Route path="/login" 
                    render={() => this.props.user 
                        ? <Redirect to="/"/> 
                        : <Route to="/login" exact component={Login} />}  
                />
                <Route path="/inventory" 
                    render={() => this.props.user===null 
                        ? <Redirect to="/login" /> 
                        : <Route path="/inventory" component={InventorySearch} exact />}
                />
                <Route path="/ordertracker" 
                    render={() => this.props.user===null 
                        ? <Redirect to="/login" /> 
                        : <Route path="/ordertracker" component={OrderTracker} exact />}  
                />
                <Route path="/inventory/:itemCode" 
                    render={() => this.props.user===null 
                        ? <Redirect to="/login" /> 
                        : <Route path="/inventory/:itemCode" component={ProductDetailPage} exact />} 
                />
                <Route path="/inventory-wh/:itemCode" 
                    render={() => this.props.user===null 
                        ? <Redirect to="/login" /> 
                        : <Route path="/inventory-wh/:itemCode" component={ProductDetailPage} exact />} 
                />
                <Route path="/locate" 
                    render={() => this.props.user===null 
                        ? <Redirect to="/login" /> 
                        : <Route path="/locate" component={WHSearch} exact />} 
                />
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
