import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as queryActions from '../redux/actions/query';

class Results extends Component {

    componentWillMount(){
        this.props.clearResults();
    }

    renderTableHeading(props){
        return( 
            <thead>
                {props.queryResults.length>0 
                ? 
                    <tr>
                        <th>Item Code</th>
                        <th>Description</th>
                        <th>Quantity Available</th>
                        <th>Price (Wholesale)</th>
                        <th>Price (Retail)</th>
                        <th>Status East</th>
                        <th>Status West</th>
                    </tr> 
                : 
                <tr />

                }
                
            </thead>
        )
        
    }

    render(props){
        const containerStyle = {
            width: "75%",
            boxShadow: "1px 3px 5px lightgray",
            position: 'relative',
            top: '5vh',
            borderRadius: "3px",
            backgroundColor: "white",
            transition: ".2s ease-in"
            
        }
    
        const containerStyleHidden = {
            hidden: "true"
        }
    
        const rowStyle = {
            cursor: "pointer"
        }
        return(
            <div className="row" style={!this.props.queryResults[0] && this.props.queryResults[0] !== 0 ? containerStyleHidden : containerStyle}>
                
                <table className="centered highlight responsive-table">
                    {this.renderTableHeading(this.props)}
                    <tbody>
                        
                            {this.props.queryResults.map(({ItemCode, ItemcodeDesc, TotalQuantityOnHand, UDF_SQFT_STANDARD_PRICE, UDF_SQFT_RETAIL_PRICE,UDF_STATUSBRI,UDF_STATUSPAC} ,index)=> { return(
                                <tr style = {rowStyle} key={index} onClick={this.props.history.location.pathname.match(/^\/locate.*/) ? ()=>this.props.history.push(`/inventory-wh/${ItemCode}`) : ()=>this.props.history.push(`/inventory/${ItemCode}`)}>
                                    <td>{ItemCode}</td>
                                    <td>{ItemcodeDesc}</td>
                                    <td>{TotalQuantityOnHand}</td>
                                    <td>{UDF_SQFT_STANDARD_PRICE && `$${UDF_SQFT_STANDARD_PRICE.toFixed(2)}`}</td>
                                    <td>{UDF_SQFT_RETAIL_PRICE && `$${UDF_SQFT_RETAIL_PRICE.toFixed(2)}`}</td>
                                    <td>{UDF_STATUSBRI}</td>
                                    <td>{UDF_STATUSPAC}</td>
    
                                </tr>)
    
                            })}
        
                    </tbody>
    
                </table>
                 
               
            </div>
        )
    }

    }
    

    
    

const mapStateToProps = (state) => {
    return {
        queryResults: state.queryResults
    }
}

export default connect(mapStateToProps,queryActions)(Results);