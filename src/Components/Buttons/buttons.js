import React from 'react'
// import Button from '@material-ui/core/Button'
import './buttons.css'
const buttons = (props) =>{
    return(
    <button className="Button" onClick={props.clicked}>{props.children}</button>
    )
}

export default buttons