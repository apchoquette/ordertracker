import React from 'react'

const BackButton = ({history,destination}) => {

    const backBtnStyle = {
        position: 'fixed',
        top: "70px",
        left: "0"
    }
    return (
        <a style={backBtnStyle} className="waves-effect blue btn" onClick={()=>history.goBack()}>
            <i className="material-icons">arrow_back</i>
        </a>
    )
}

export default BackButton;