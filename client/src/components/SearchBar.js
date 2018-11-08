import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(){
        super();
        this.state ={

        }
    }


    render(){
        return (
            <form>
                <input type="text" placeholder="enter product name or part number"/>
            </form>
        )
    }
}

export default SearchBar;