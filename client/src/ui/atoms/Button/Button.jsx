import React from 'react'
import "./Button.css"
function Button({onButtonClick, variant="primary", text, ...props}) {
    return (
        <button onClick={onButtonClick} className={(variant === 'primary') ? 'btn btn-primary' : 'btn btn-secondary'} {...props}>
            {text}
        </button>
    )
}

export default Button
