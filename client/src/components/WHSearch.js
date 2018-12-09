import React from 'react';
import SearchBar from './SearchBar';
import BackButton from './BackButton';
import Results from './Results';

const WHSearch = (props) => {
    return (
        <div>
            <BackButton history = {props.history}/>
            <SearchBar placeholder="Part Number or Description" purpose="CS" relatedTo="product"/>
            <Results history={props.history}/>
        </div>
    )
}

export default WHSearch;