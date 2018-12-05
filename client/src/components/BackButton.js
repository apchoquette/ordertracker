import React from 'react'

const BackButton = ({history,destination}) => {

    const backBtnStyle = {
        position: 'fixed',
        top: "200px",
        left: "6vw"
    }
    return (
        <a style={backBtnStyle} className="waves-effect blue btn" onClick={()=>history.goBack()}>
        <i className="material-icons">arrow_back</i>
        </a>
    )
}

export default BackButton;