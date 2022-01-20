import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Text in textbox is converted to upper case", "success");
    }
    const handleLowClick = () =>{
        let newtext2 = text.toLowerCase();
        setText(newtext2);
        props.showAlert("Text in textbox is converted to lower case", "success");
    }
    const handleClearClick = () =>{
        setText('');
        props.showAlert("Text is textbox is cleared", "success");
    }

    const handleOnChange= (event) =>{
        setText(event.target.value);
        props.showAlert("Text in textbox is changed", "success");
      }

    const handleCopyText = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text in textbox is copied to clipboard", "success");
    }

    const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces have been removed from text in textbox", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className = "container my-2" style = {{ color: props.mode === 'dark'? 'white' : '#41424a' }} >
                <h1>{props.heading} </h1>
                <div className="mb-3" >
                    <textarea className="form-control" value= {text} id="myBox" style = {{  color: props.mode === 'dark'? 'white' : '#41424a', backgroundColor: props.mode === 'dark'? '#41424a' : 'white' }} 
                        rows="8" onChange = { handleOnChange }></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleCopyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className = "container my-3" style = {{marginTop:'20px', color: props.mode === 'dark'? 'white' : '#41424a' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter( (element) =>{ return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{ 0.008 * text.split(" ").filter( (element) =>{ return element.length !== 0 }).length } Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
