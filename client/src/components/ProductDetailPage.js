import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as queryActions from '../redux/actions/query';
import BackButton from './BackButton';

class ProductDetailPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false
        }
    }

        componentWillMount(props) {
            const itemCode = "'%25" + this.props.match.params.itemCode + "%25'"
            this.props.fetchProductDetails(itemCode);

        }

        render(props) {
            const containerStyle = {
                width: "75%",
                boxShadow: "1px 3px 5px lightgray",
                position: 'relative',
                top: '10vh',
                borderRadius: "3px",
                backgroundColor: "white",
                transition: ".2s ease-in"
                
            }

            const buttonStyle = {
                marginRight: '5px'
            }
            return (
                <div className="container-fluid">
                    <BackButton history={this.props.history} destination='inventory'/>
                    <div className="row center" style={containerStyle}>
                        <h3>{this.props.match.params.itemCode}</h3>
                    </div>
                    <div className="row" style={containerStyle}>
                        
                        <table className="centered highlight">
                            <thead>
                                {this.props.queryResults.length>0 
                                ? 
                                <tr>
                                    <th>Warehouse</th>
                                    <th>Lot #</th>
                                    <th>Stock Available</th>
                                    
                                </tr> 
                                : 
                                <tr />
                                }
                    
                            </thead>
                            <tbody>
                                {this.props.queryResults.map(({WarehouseCode, LotSerialNo, StockAvailable } ,index)=> { return(
                                    <tr key={index}>
                                        <td>{WarehouseCode}</td>
                                        <td>{LotSerialNo}</td>
                                        <td>{StockAvailable}</td>
                                        <td><a style={buttonStyle} className="orange-effect deep-orange darken-1 btn-large">Hold</a><a className="waves-effect waves-light btn-large"><i className="material-icons">camera_alt</i></a></td>
                                    </tr>)

                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
            
        }
}

const mapStateToProps = (state) => {
    return {
        queryResults: state.queryResults
    }
}

export default connect(mapStateToProps,queryActions)(ProductDetailPage);