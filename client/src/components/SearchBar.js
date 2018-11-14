import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as queryActions from '../redux/actions/query';
import { AutoComplete } from 'react-materialize';

class SearchBar extends Component {
    constructor(){
        super();
        this.state ={
            query: ''

        }
    }

    componentWillMount() {
        this.props.fetchItemCodes();
    }

    changeHandler(e){
        this.setState({query: e.target.value})
        
        
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
            borderRadius: "3px"
            
        }

        const rowStyle = {
            marginBottom: "0px"
        }
    
        return (
           
                <div className="row" style={containerStyle}>
                    <form className="col s12" onSubmit={(e)=>this.submitHandler(e)}>
                        <div className="row" style={rowStyle}>
                            <div className="input-field col s12">
                                <AutoComplete 
                                onChange={(e)=>this.changeHandler(e)} 
                                value={this.state.query}
                                data={this.state.queryResults}
                                
                                /> 
                                {/* <textarea onChange={(e)=>this.changeHandler(e)} value={this.state.query} placeholder="Enter Item Code or Description" id="textarea1" className="materialize-textarea"></textarea> */}
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