import React, { Component } from 'react';

class HoldForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            partNumber: '',
            quantity: 0
        }
    }

    render() {
        return (
            <form>
                <input /> 
                <input /> 

            </form>
        )
    }
}