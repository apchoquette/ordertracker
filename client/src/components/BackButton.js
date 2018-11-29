import React from 'react'

const BackButton = ({history}) => {

    const backBtnStyle = {
        position: 'fixed',
        top: "85px",
        left: "60px"
    }
    return (
        <a style={backBtnStyle} className="waves-effect blue btn" onClick={()=>history.push('/')}>
        <i className="material-icons">arrow_back</i>Dashboard
        </a>
    )
}

export default BackButton;