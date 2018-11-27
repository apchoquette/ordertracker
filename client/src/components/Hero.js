import React from 'react';

const Hero = () => {

    const containerStyle = {
        height: "400px",
        padding: "20px",
        position: "relative",
        top: "25vh"
    }

    const rowStyle = {
        height: "300px"
    }

    const cardStyle = {
        height: "100%",
        cursor: "pointer"
    }

    const cardStyle2 = {
        height: "100%",
        cursor: "pointer"
    }

    const iconStyle = {
        fontSize: "100px"
    }

    const cardContentStyle = {
        position: "relative",
        top: "15%"
    }
    return (
        <div className="container" style={containerStyle}>
            <div className="row" style={rowStyle}>
                <div className="col s4 center-align" style={cardStyle} >
                    <div className="card hoverable" style={cardStyle2}>
                        <div className="card-content" style={cardContentStyle}>
                            
                            <i className="material-icons" style={iconStyle}>search</i>
                            <h6>Check Stock</h6>

                        </div>
                    </div>
                </div>
                <div className="col s4 center-align" style={cardStyle}>
                    <div className="card hoverable" style={cardStyle2}>
                        <div className="card-content" style={cardContentStyle}>
                            <i className="material-icons" style={iconStyle}>receipt</i>
                            <h6>Get Order Updates</h6>

                        </div>
                    </div>
                
                </div>
                <div className="col s4 center-align" style={cardStyle}>
                    <div className="card hoverable" style={cardStyle2} >
                            <div className="card-content" style={cardContentStyle}>
                                <i className="material-icons" style={iconStyle}>help</i>
                                <h6>Get CLP Distribution Status</h6>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;