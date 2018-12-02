import React from 'react'

const BackButton = ({history,destination}) => {

    const backBtnStyle = {
        position: 'fixed',
        top: "85px",
        left: "60px"
    }
    return (
        <a style={backBtnStyle} className="waves-effect blue btn" onClick={destination ? ()=>history.push(`/${destination}`) : ()=>history.push('/')}>
        <i className="material-icons">arrow_back</i>
        </a>
    )
}

export default BackButton;