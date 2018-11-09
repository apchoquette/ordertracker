import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    const containerStyle = {
        width: "50%",
        boxShadow: "0px 3px 5px lightgray",
        position: 'relative',
        top: '25vh',
        borderRadius: "3px"
        
    }
    return(
        <div className="row" style={containerStyle}>
            <table className="centered">
                <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Description</th>
                        <th>Quantity Available</th>
                        <th>Price (Wholesale)</th>
                        <th>Price (Retail)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.queryResults.map((result,i)=> {
                            return (<td key={i}>{result}</td>)
                        })}
                    </tr>
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