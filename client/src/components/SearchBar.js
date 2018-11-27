import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Input } from 'react-materialize';
import * as queryActions from '../redux/actions/query';



class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            query: ''

        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    

    changeHandler(e) {
        this.setState({query: e.target.value});
        
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
            padding: "5px",
            backgroundColor: 'white'
            
        }

        const rowStyle = {
            marginBottom: "0px"
        }
    
        return (
           
                <Row style={containerStyle}>
                    <form className="col s12" onSubmit={(e)=>this.submitHandler(e)}>
                        <Row style={rowStyle}>
                            
                                
                                
                                <Input s={12} value={this.props.query} onChange={this.changeHandler} placeholder="Part Number"/>
          
                            
                                {/* <input onChange={(e)=>this.changeHandler(e)} value={this.state.query} placeholder="Enter Item Code or Description" id="textarea1" className="materialize-input"></input> */}
                                <button className="btn waves-effect indigo lighten-2 right" type="submit" name="action">Submit  
                                </button>
                            
                        </Row>
                    </form>
                </Row>
            
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        queryResults: state.queryResults
    }
    
}

export default connect(mapStateToProps,queryActions)(SearchBar);