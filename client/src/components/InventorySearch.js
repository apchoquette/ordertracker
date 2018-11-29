import React, { Component } from 'react';

import BackButton from './BackButton';
import Results from './Results';
import SearchBar from './SearchBar';

const InventorySearch = (props) => {


    return (
        <div className="container-fluid">
            <BackButton history = {props.history}/>
            <SearchBar placeholder="Part Number"/>
            <Results />

        </div>
    )
}

export default InventorySearch;