import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Results = (props) => {
    const containerStyle = {
        width: "75%",
        boxShadow: "1px 3px 5px lightgray",
        position: 'relative',
        top: '25vh',
        borderRadius: "3px",
        backgroundColor: "white",
        transition: ".2s ease-in"
        
    }

    const containerStyleHidden = {
        hidden: "true"
    }

    const renderTableHeading = (props) => {
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
                            : <tr />

                }
                
            </thead>
        )
        
    }
    return(
        <div className="row" style={!props.queryResults[0] && props.queryResults[0] !== 0 ? containerStyleHidden : containerStyle}>
            <table className="centered">
                {renderTableHeading(props)}
                <tbody>
                    
                        {props.queryResults.map(({ItemCode, ItemcodeDesc, TotalQuantityOnHand, UDF_SQFT_STANDARD_PRICE, UDF_SQFT_RETAIL_PRICE,UDF_STATUSBRI,UDF_STATUSPAC} ,index)=> { return(
                            <tr key={index}>
                                <td><Link to={`/inventory/${ItemCode}`}>{ItemCode}</Link></td>
                                <td>{ItemcodeDesc}</td>
                                <td>{TotalQuantityOnHand}</td>
                                <td>{`$${UDF_SQFT_STANDARD_PRICE.toFixed(2)}`}</td>
                                <td>{`$${UDF_SQFT_RETAIL_PRICE.toFixed(2)}`}</td>
                                <td>{UDF_STATUSBRI}</td>
                                <td>{UDF_STATUSPAC}</td>

                            </tr>)

                        })}
    
                </tbody>

            </table>
             
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        queryResults: state.queryResults
    }
}

export default connect(mapStateToProps)(Results);