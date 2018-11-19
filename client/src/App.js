import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Results from './components/Results';
import SearchBar from './components/SearchBar';



class App extends Component {
  render() {

    
    return (
      
        <div>
            <NavBar />
            <SearchBar />
          
            <Results />
          
        </div>
      
    );
  }
}

export default App;
