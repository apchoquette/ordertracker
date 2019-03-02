import React, { Component } from 'react';

class CurrentOrder extends Component {



    render(){

        const style = {
            mainContainer: {
                backgroundColor: 'lightgray',
                padding: '10px',
                borderRadius: '2px',
                boxShadow: '0px 2px 5px gray'
            }
        }
        return (
            <div className="container">
                <div className="row">
                    <h2 className="center-align">Your Current Order</h2>
                </div>
                <div className="row" style={style.mainContainer}>
                    <table>
                        <thead>
                            <th className="center-align">Quantity</th>
                            <th className="center-align">Item Code</th>
                            <th className="center-align">Description</th>

                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}

export default CurrentOrder;