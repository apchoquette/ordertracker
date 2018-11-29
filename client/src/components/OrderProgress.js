import React, { Component } from 'react';

class OrderProgress extends Component {
    constructor(){
        super();
        this.state = {
            stage: undefined
        }
    }

    getProgressBarStyle(){
        if(this.state.stage==='Order Received'){
            return {
                width: '10%'
            }
        }else if(this.state.stage==='Order Being Picked'){
            return {
                width: '25%'
            }
        }else if(this.state.stage==='Order Ready for Pickup'){
            return {
                width: '100%'
            }
        }else if(this.state.stage==='Order Shipped'){
            return {
                width: '100%'
            }
        }else{
            return {
                width: '0%'
            }
        }
            
        }
    

    render() {

        const progressBarStyle = this.getProgressBarStyle();
        const containerStyle = {
            width: "50%",
            boxShadow: "1px 3px 5px lightgray",
            position: 'relative',
            top: '25vh',
            borderRadius: "3px",
            backgroundColor: "white"
            
        }
        
        return(
            <div className="row" style={containerStyle}>
                <div className="progress">
                    <div className="determinate" style={progressBarStyle}></div>
                </div>
            </div>
        )
    }
}

export default OrderProgress;