import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as queryActions from '../redux/actions/query';
import  AutoComplete  from 'react-autocomplete'


class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            query: ''

        }
    }

    

    changeHandler(e){
        this.setState({query: e.target.value})
        this.props.fetchItemCodes(e.target.value)
        
    }

    submitHandler(e){
        e.preventDefault();
        this.props.fetchQuery(this.state.query);
    }

  

    render(props){

        console.log(this.state)
        

        const containerStyle = {
            width: "50%",
            boxShadow: "0px 3px 5px lightgray",
            position: "relative",
            top: "25vh",
            borderRadius: "3px",
            padding: "5px"
            
        }

        const rowStyle = {
            marginBottom: "0px"
        }
    
        return (
           
                <div className="row" style={containerStyle}>
                    <form className="col s12" onSubmit={(e)=>this.submitHandler(e)}>
                        <div className="row" style={rowStyle}>
                            <div className="input-field col s12">
                                {
                                this.props.itemCodes ? <AutoComplete
                                    getItemValue={(item) => item} 
                                    items={this.props.itemCodes}
                                    renderItem={(item, isHighlighted) =>
                                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                        {item}
                                        </div>
                                    }
                                    value={this.state.query}
                                    onChange={(e)=>this.changeHandler(e)}
                                    onSelect={(val) => this.state.query = val}
                                    /> 
                                : <p>Loading...</p>}
                                {/* <input onChange={(e)=>this.changeHandler(e)} value={this.state.query} placeholder="Enter Item Code or Description" id="textarea1" className="materialize-input"></input> */}
                                <button className="btn waves-effect waves-light right" type="submit" name="action">Submit  
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        queryResults: state.queryResults,
        itemCodes: state.itemCodes
    }
    
}

export default connect(mapStateToProps,queryActions)(SearchBar);