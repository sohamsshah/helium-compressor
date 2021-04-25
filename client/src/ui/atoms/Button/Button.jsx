import React from 'react'
import "./Button.css"
function Button({onButtonClick, text, ...props}) {
    return (
        <button onClick={onButtonClick} className="button" {...props}>
            {text}
        </button>
    )
}

export default Button
