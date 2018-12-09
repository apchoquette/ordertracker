import React from 'react';
import Filter from './Filter';


import BackButton from './BackButton';
import Results from './Results';
import SearchBar from './SearchBar';

const InventorySearch = (props) => {

    

    return (
        <div className="container-fluid">
            <BackButton history = {props.history}/>
            <SearchBar placeholder="Part Number or Description" purpose="CS" relatedTo="product"/>
            
            <Results history = {props.history} />

        </div>
    )
}

export default InventorySearch;