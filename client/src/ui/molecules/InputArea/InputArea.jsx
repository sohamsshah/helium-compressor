import React from 'react'
import Button from "./../../atoms/Button/Button"
import Input from "./../../atoms/Input/Input"
import "./InputArea.css"

function InputArea({onInputChange, onButtonClick, textareaContent, children, buttonText, ...props}) {
    return (
        <div className="input-area" {...props}>
            <div className="input-area__input">
                <Input onInputChange={onInputChange} textareaContent={textareaContent} placeholder="type something"></Input>
            </div>
            <div className="input-area__bottom">
                <div>
                    <Button onClick={onButtonClick} text={buttonText} /> 
                </div>
                <div className="bottom__size">Size: {textareaContent.length}</div> 
            </div>
        </div>
    )
}

export default InputArea
