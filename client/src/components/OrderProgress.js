import React, { Component } from 'react';

class OrderProgress extends Component {
    constructor(){
        super();
        this.state = {
            type: 'special',
            stage: "Preparing Order"
        }
    }

    getProgressBarStyle(){

        switch(this.state.stage){
            case "Order Received":
                return {width: "8%"}
            case "In Production":
                return {width: "25%"}
            case "Order Being Transferred":
                return {width: "42%"}
            case "Preparing Order":
                return {width: "58%"}
            case "Order Ready for Pickup":
                return {width: "75%"}
            case "Order Picked Up" || "Order Shipped":
                return {width: "100%"}
            default:
                return {
                    width: '0%'
                } 
        }
    }
    

    render() {

        const progressBarStyle = this.getProgressBarStyle();
        const containerStyle = {
            width: "75%",
            boxShadow: "1px 3px 5px lightgray",
            position: 'relative',
            top: '30px',
            borderRadius: "3px",
            backgroundColor: "white",
            fontSize: ".8vw"   
        }

        const statusStyle = {

        }

        const statusStyle__inactive = {
            color: 'lightgray'
        }

        const stagesSpecial = [
            {
                stage: "Order Received",
                status: "Order Received" === this.state.stage
            },
            {
                stage: "In Production",
                status: "In Production" === this.state.stage,
                ETA: undefined
            },
            {
                stage: "Order Being Transferred",
                status: "Order Being Transferred" === this.state.stage
            },
            
            {
                stage: "Preparing Order",
                status: "Preparing Order" === this.state.stage
            },
            {
                stage: "Order Ready for Pickup",
                status: "Order Ready for Pickup" === this.state.stage
            },
            {
                stage: "Order Shipped/Picked Up",
                status: "Order Shipped" === this.state.stage,
                trackingNumber: undefined
            }]

        const stagesReg = [
            {
                stage: "Order Received",
                status: "Order Received" === this.state.stage
            },
            {
                stage: "Backordered",
                status: "Backordered" === this.state.stage,
                ETA: undefined
            },
            {
                stage: "Order Being Transferred",
                status: "Order Being Transferred" === this.state.stage
            },
            {
                stage: "Preparing Order",
                status: "Preparing Order" === this.state.stage
            },
            {
                stage: "Order Ready for Pickup",
                status: "Order Ready for Pickup" === this.state.stage
            },
            {
                stage: "Order Shipped/Picked Up",
                status: "Order Shipped" === this.state.stage,
                trackingNumber: undefined
            }]
        
        return(
            <div className="row" style={containerStyle}>
                <div className="progress">
                    <div className="determinate" style={progressBarStyle}></div>
                </div>
                <div className="row valign-wrapper">

                    {this.state.type === 'regular' 
                        ? stagesReg.map((stage,i)=> {
                            return (
                                <div key={i} className="col s2 center-align" style={stage.status ? statusStyle : statusStyle__inactive}>
                                    {stage.stage}
                                </div>
                            )})
                        : stagesSpecial.map((stage,i)=> {
                            return (
                                <div key={i} className="col s2 center-align" style={stage.status ? statusStyle : statusStyle__inactive}>
                                    {stage.stage}
                                </div>
                            )})
                        }
                    
                    
                </div>
            </div>
        )
    }
}

export default OrderProgress;