import React, { Component } from 'react';
import Results from './components/Results';
import SearchBar from './components/SearchBar';



class App extends Component {
  render() {

    
    return (
      
        <div>
          
            <SearchBar />
          
            <Results />
          
        </div>
      
    );
  }
}

export default App;
