import React, { Component } from 'react';

import BackButton from './BackButton';
import SearchBar from './SearchBar';
import OrderProgress from './OrderProgress';

class OrderTracker extends Component {
    
    render(){
        return (
            <div className="container-fluid">
                <BackButton 
                    history={this.props.history} 
                />
                <SearchBar 
                    placeholder="Order Number" 
                    relatedTo="order"
                />    
                <OrderProgress />   
            </div>
        )
    }
    
}
    
export default OrderTracker;
