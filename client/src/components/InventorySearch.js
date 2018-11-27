import React, { Component } from 'react';

import Results from './Results'
import SearchBar from './SearchBar'

const InventorySearch = () => {

    
    return (
        <div className="container-fluid">
            <SearchBar />
            <Results />

        </div>
    )
}

export default InventorySearch;