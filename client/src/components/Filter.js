import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

class Filter extends Component{
    constructor(){
        super();
        this.state = {
            selectedWHOption: ''
        }
        
    }

    handleChange(selectedWHOption)  {
        this.setState({selectedWHOption})
    }

    render(){
        const containerStyle = {
            width: "50%",
            boxShadow: "0px 3px 5px lightgray",
            position: "relative",
            height: "50px",
            top: "75px",
            borderRadius: "3px",
            padding: "5px",
            backgroundColor: 'white'
            
        }
        const rowStyle = {
            marginBottom: "0px",
            display: "flex",
            alignContent: "center",
            height: "50px"
        }
        const colStyle = {
            height: '100%'
        }
    
        const options = [
            {value: "PAC", label: "PAC"},
            {value: "BRI", label: "BRI"},
            {value: "NYS", label: "NYS"}
        ]
        return (
            <div className="container" style={containerStyle}>
                <div className="row" style={rowStyle}>
                    <div className="col s6" style = {colStyle}>
                        <Select 
                            value={this.state.selectedWHOption}
                            onChange={(value)=>this.handleChange(value)}
                            options={options}
                            
                        />
                    </div>    
                </div>
            </div>
        )
    }
}

export default connect()(Filter);