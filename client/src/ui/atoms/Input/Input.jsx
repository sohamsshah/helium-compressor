import React from 'react'
import "./Input.css"
function Input({onInputChange, textareaContent, children, placeholder, ...props}) {
    return (
        <textarea onChange={(e) => onInputChange(e.target.value)}className="textarea" cols="50" rows="4" placeholder={placeholder} value={textareaContent} {...props}></textarea>
    )
}

export default Input
