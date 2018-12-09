import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import * as queryActions from '../redux/actions/query';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
            

        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
            this.setState({query: '%25'+e.target.value+'%25'});  
    }

    submitHandler(e){
        e.preventDefault();
        if(this.props.relatedTo==='product'){
            this.props.fetchQuery(this.state.query);
        }else if(this.props.relatedTo==='order'){
            this.props.fetchOrderStatus(this.state.query);
        }

    }

    renderInput(){
        
        const rowStyle = {
            marginBottom: "0px",
            display: "flex",
            alignContent: "center"
        }

        const inputStyle = {
            padding: "0px"
        }

        return (

            <div className="row" style={rowStyle}>
                <input className="input-field col s12" style={inputStyle} value={this.props.query} onChange={this.changeHandler} placeholder={this.props.placeholder}/>
                <button className="btn waves-effect indigo lighten-2" type="submit" name="action"><i className="material-icons">search</i> </button>
                
           </div>
        )
    }

    render(props){

        const containerStyle = {
            width: "50%",
            minWidth: '300px',
            boxShadow: "0px 3px 5px lightgray",
            position: "relative",
            top: "0px",
            borderRadius: "0px 0px 10px 10px",
            padding: "5px",
            backgroundColor: 'white',
            zIndex: '1'
        }

        return (
                <Row style={containerStyle}>
                    <form className="col s12" onSubmit={(e)=>this.submitHandler(e)}>
                        
                            {this.renderInput()}               
                                {/* <input onChange={(e)=>this.changeHandler(e)} value={this.state.query} placeholder="Enter Item Code or Description" id="textarea1" className="materialize-input"></input> */}
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