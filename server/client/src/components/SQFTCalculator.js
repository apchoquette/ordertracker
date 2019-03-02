import React, {Component} from 'react';
import { connect } from 'react-redux';

class SQFTCalculator extends Component {

    constructor(){
        super();
        this.state = {
            currentQuantity: null
        }
    }

    

    render(props){

        const boxStyle = {
            display: 'flex',
            padding: '10px',
            width: '200px',
            height: '100px',
            boxShadow:'0px 1px 3px lightgray',
            backgroundColor: 'white'
        }

        const subBoxStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%'
        }
        
        const formStyle = {
            width: '75%'
        }


        return (
            <div className="container" style = {boxStyle}>
                <div style = {subBoxStyle}>
                    <input type="text" onChange={(e) => this.setState({currentQuantity: e.target.value/2})}/><p>pieces</p>
                </div>
                <div style = {subBoxStyle}>
                    {this.state.currentQuantity === null ? <h3>--</h3> : <p>{this.state.currentQuantity} Sq. Ft.</p>}
                </div>
            </div>
        )
    }
    
}

export default connect()(SQFTCalculator);

