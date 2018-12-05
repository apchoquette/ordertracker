import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import * as filterActions from '../redux/actions/filter';

class Filter extends Component{
    constructor(){
        super();
        this.state = {
            selectedPAC: ''
        }
        
    }

    componentWillMount(){
        this.props.setFilter({warehouse: 'PAC'})
    }

    handleWHChange()  {
        
            
            
            if(this.props.filters.warehouse==='BRI'){
                this.props.setFilter({warehouse: 'PAC'})

            }else if(this.props.filters.warehouse === 'PAC'){
                this.props.setFilter({warehouse: 'BRI'})
            }
       
        
    }

    handleSQFTChange() {

    }

    render(){
        const containerStyle = {
            width: "40%",
            boxShadow: "0px 3px 5px lightgray",
            position: "relative",
            height: "10%",
            top: "-30px",
            borderRadius: "3px",
            padding: "5px",
            backgroundColor: 'white',
            minWidth: '250px'
            
        }
        const rowStyle = {
            marginBottom: "0px",
            display: "flex",
            alignContent: "center",
            height: "50px"
        }

        const divLabelStyle = {
            position: "absolute",
            top: "10px",
            left: "10px"
        }

        const toggleStyle = {
            margin: "5px",
            fontSize: "1vw"
        }
       
        return (
            <div className="container" style={containerStyle}>
                <small style={divLabelStyle}>Filters</small>
                <div className="container">
                    
                    <div className="switch center-align">
                    
                        <label style={toggleStyle}>
                        PAC
                        <input type="checkbox" onChange={() =>this.handleWHChange()}/>
                        <span className="lever"></span>
                        BRI
                        </label>
                        <label style={toggleStyle}>
                        SqFt
                        <input disabled type="checkbox" onChange={() =>this.handleSQFTChange()}/>
                        <span className="lever"></span>
                        Pc
                        </label>
                    </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps,filterActions)(Filter);