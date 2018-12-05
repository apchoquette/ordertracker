import React from 'react'

const FeatureCard = ({url,icon,title,history}) => {
    //STYLES
    const cardStyle = {
        height: "100%",
        cursor: "pointer",
        marginTop: "20px"
    }

    const cardStyleInactive = {
        height: "100%",
        cursor: "not-allowed",
        fontColor: "lightgray"
    }

    const iconStyle = {
        fontSize: "100px"
    }

    const cardContentStyle = {
        position: "relative",
        top: "15%"
    }

    return (
        <div className="col xl3 l4 m6 s12 center-align" style={cardStyle} onClick={()=>history.push(`${url}`)}>
            <div className="card hoverable" style={cardStyle}>
                <div className="card-content" style={cardContentStyle}>
                    <i className="material-icons" style={iconStyle}>{icon}</i>
                    <h6>{title}</h6>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard;