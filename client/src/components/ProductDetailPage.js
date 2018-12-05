import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as queryActions from '../redux/actions/query';
import BackButton from './BackButton';
import Filter from './Filter';
import Modal from 'react-modal';


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
            console.log('product detail', this.props)
            
            
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

            const headerStyle = {
                fontSize: '4vw'
            }

            const buttonStyle = {
                marginRight: '5px'
            }
            return (
                <div className="container-fluid">
                    
                    <BackButton history={this.props.history} destination='inventory'/>
                    <div className="row center-align" style={containerStyle}>
                        <h3 className="center-align" style={headerStyle}>{this.props.match.params.itemCode}</h3>
                    </div>
                    <Filter />
                    <div className="row" style={containerStyle}>
                        
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
                            {this.props.history.location.pathname.match(/^\/inventory\/.*/) && this.props.queryResults.map(({WarehouseCode, LotSerialNo, StockAvailable } ,index)=> { return(
                                    <tr key={index}>
                                        <td>{WarehouseCode}</td>
                                        <td>{LotSerialNo}</td>
                                        <td>{StockAvailable}</td>
                                        <td><a style={buttonStyle} className="orange-effect deep-orange darken-1 btn-large">Hold</a><a className="waves-effect waves-light btn-large"><i className="material-icons">camera_alt</i></a></td>
                                    </tr>)

                                })}
                            {this.props.history.location.pathname.match(/^\/inventory-wh\/.*/) && this.props.queryResults.map(({ BINLABEL, EXTENDED, QUANTITY, PACKSIZE, USER_ID, FROM_BIN  } ,index)=> { return(
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
            queryResults: state.itemDetails
        }
    
}
        


export default connect(mapStateToProps,queryActions)(ProductDetailPage);