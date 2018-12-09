import React from 'react';
import FeatureCard from './FeatureCard';

const Hero = (props) => {

    const containerStyle = {
        height: "400px",
        padding: "20px",
        position: "relative",
        top: "15%"
    }

    const rowStyle = {
        height: "300px"
    }

    return (
        <div className="container" style={containerStyle} >
            <div className="row" style={rowStyle}>
                <FeatureCard 
                    url="/inventory"
                    icon="search"
                    title="Check Stock"
                    history={props.history}
                />
                <FeatureCard 
                    url="/ordertracker"
                    icon="receipt"
                    title="Get Order Updates"
                    history={props.history}
                />
                <FeatureCard 
                    url="/clp"
                    icon="help"
                    title="Get CLP Distribution Status"
                    history={props.history}
                    status="disabled"
                />
                <FeatureCard 
                    url="/lotphotos"
                    icon="camera_alt"
                    title="Request Lot Photos"
                    history={props.history}
                    status="disabled"
                />
            </div>
            <div className="row" style={rowStyle}>
                <FeatureCard 
                    url="/locate"
                    icon="add_location"
                    title="Locate Material"
                    history={props.history}
                />
                <FeatureCard 
                    url="/quote-search"
                    icon="attach_money"
                    title="Create a Quote"
                    history={props.history}
                    status="disabled"
                />
            </div>
        </div>
    )
}

export default Hero;