import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import InventorySearch from './components/InventorySearch';
import OrderTracker from './components/OrderTracker';
import ProductDetailPage from './components/ProductDetailPage';

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

export default App;
