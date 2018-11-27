import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import InventorySearch from './components/InventorySearch';
import OrderTracker from './components/OrderTracker';

class App extends Component {

  
  render() {

    const mainContainerStyle = {
        height: '100vh'

    }
    return (
      
        <div>
          <BrowserRouter>
            <div className="container-fluid grey lighten-3"style={mainContainerStyle}>
            
                <NavBar />
                <Route path="/" exact component={Hero} />
                <Route path="/inventory" component={InventorySearch} />
                <Route path="/ordertracker" component={OrderTracker} />
            </div>
          </BrowserRouter>
        </div>
      
    );
  }
}

export default App;
