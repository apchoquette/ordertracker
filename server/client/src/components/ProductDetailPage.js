import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as queryActions from '../redux/actions/query';
import BackButton from './BackButton';
import Filter from './Filter';
import Modal from 'react-modal';
import filterSelector from '../selectors/filterSelector';


class ProductDetailPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            holdModalOpen: false,
            pictureModalOpen: false
        }
    }

    componentWillMount(props) {
        const itemCode = "'%25" + this.props.match.params.itemCode + "%25'"
        if(this.props.history.location.pathname.match(/^\/inventory\/.*/)){
            this.props.fetchProductDetails(itemCode);
        }else {
            this.props.fetchWHProductDetails(itemCode);
        }
    }

    render(props) {
        const containerStyle = {
            width: "40%",
            boxShadow: "1px 3px 5px lightgray",
            position: 'relative',
            top: '-20px',
            borderRadius: "0px 0px 10px 10px",
            transition: ".2s ease-in"
        }

        const resultsStyle = {
            width: "75%",
            boxShadow: "1px 3px 5px lightgray",
            position: 'relative',
            top: '-20px',
            borderRadius: "3px 3px 10px 10px",
            backgroundColor: 'white',
            transition: ".2s ease-in"
        }

        const warningStyle = {
            width: "75%",
            height: "100px",
            boxShadow: "1px 3px 5px lightgray",
            position: 'relative',
            top: '-20px',
            borderRadius: "3px 3px 10px 10px",
            backgroundColor: 'white',
            transition: ".2s ease-in"
        }

        const headerStyle = {
            fontSize: '4vw'
        }

        const buttonStyle = {
            marginRight: '5px'
        }
        
        return (
            <div className="container-fluid">
                    
                <BackButton history={this.props.history} destination='inventory'/>
                <div className="container center-align blue lighten-3" style={containerStyle}>
                    <h3 className="center-align" style={headerStyle}>{this.props.match.params.itemCode}</h3>
                </div>
                <Filter />
                

                {this.props.queryResults.length > 0 ?
                <div className="row" style={resultsStyle}>
                    <table className="centered highlight responsive-table">
                        <thead>
                            {this.props.history.location.pathname.match(/^\/inventory\/.*/) && this.props.queryResults.length>0 
                            ? 
                            <tr>
                                <th>Warehouse</th>
                                <th>Lot #</th>
                                <th>Stock Available</th>
                            </tr> 
                            : 
                            <tr />
                            }
                            {this.props.history.location.pathname.match(/^\/inventory-wh\/.*/) && this.props.queryResults.length>0 
                            ? 
                            <tr>
                                <th>Location</th>
                                <th>Lot #</th>
                                <th>Stock Available</th>
                                <th>Last Location</th>
                                <th>Pack Size</th>
                                <th>Last User</th>    
                            </tr> 
                            : 
                            <tr />
                            }
                    
                        </thead>
                        <tbody>
                            {this.props.history.location.pathname.match(/^\/inventory\/.*/) 
                            && this.props.queryResults.map(({WarehouseCode, LotSerialNo, StockAvailable } ,index)=> { return(
                                <tr key={index}>
                                    <td>{WarehouseCode}</td>
                                    <td>{LotSerialNo}</td>
                                    <td>{StockAvailable}</td>
                                    <td><a style={buttonStyle} className="orange-effect deep-orange darken-1 btn-large">Add to Order</a><a className="waves-effect waves-light btn-large"><i className="material-icons">camera_alt</i></a></td>
                                </tr>)
                            })}
                            {this.props.history.location.pathname.match(/^\/inventory-wh\/.*/) 
                            && this.props.queryResults.map(({ BINLABEL, EXTENDED, QUANTITY, PACKSIZE, USER_ID, FROM_BIN  } ,index)=> { return(
                                <tr key={index}>
                                    <td>{BINLABEL}</td>
                                    <td>{EXTENDED.split('|')[1]}</td>
                                    <td>{QUANTITY}</td>
                                    <td>{FROM_BIN}</td>
                                    <td>{PACKSIZE}</td>
                                    <td>{USER_ID}</td>
                                </tr>)
                                })}
                        </tbody>
                    </table>
                </div>
                : <div className="container" style={warningStyle}>
                    <h3 className="center-align">No Material Available in {this.props.currentFilter}</h3>
                    <h6 className="center-align">Please select a different warehouse.</h6>
                    </div>}
                <Modal 
                />
                <Modal 
                />          
            </div>
            )
        }
}

const mapStateToProps = (state) => {
        return {
            queryResults: filterSelector(state.itemDetails,state.filters.warehouse),
            currentFilter: state.filters.warehouse
        }
}
        
export default connect(mapStateToProps,queryActions)(ProductDetailPage);