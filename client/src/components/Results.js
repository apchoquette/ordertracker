import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
    const containerStyle = {
        width: "50%",
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
                {props.queryResults[0] ?
                <tr>
                    <th>Item Code</th>
                    <th>Description</th>
                    <th>Quantity Available</th>
                    <th>Price (Wholesale)</th>
                    <th>Price (Retail)</th>
                </tr> : <p></p>}
            </thead>
        )
        
    }
    return(
        <div className="row" style={!props.queryResults[0] && props.queryResults[0] !== 0 ? containerStyleHidden : containerStyle}>
            <table className="centered">
                {renderTableHeading(props)}
                <tbody>
                    <tr>
                        {props.queryResults[0]!==0 && props.queryResults.map((result,i)=> {
                            
                           
                                if(i<3){
                                    return (<td key={i}>{result}</td>)
    
                                }else{
                                    
                                    return (<td key={i}>${parseInt(result).toFixed(2)}</td>)
                                }
                            
                            
                            
                        })}
                        {props.queryResults[2] > 0 && <td><a className="waves-effect waves-light btn-large deep-orange accent-1">Hold</a></td>}
                        
                        
                        
                    </tr>
                    
                </tbody>

            </table>
             
            {props.queryResults[0]===0 && <div className="container"><h5 className="center-align"><i>No results found...</i></h5></div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        queryResults: state.queryResults
    }
}

export default connect(mapStateToProps)(Results);