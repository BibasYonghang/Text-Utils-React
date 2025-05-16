import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };



    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const clearButton = () => {
        setText('');
    }

    // Count words properly
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#031535' : 'white' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#031535' }}

                        onChange={handleOnChange}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert To Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Convert To Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={clearButton}>Clear Text</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? '#031535' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{0.0008 * wordCount} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>

            </div>
        </>
    );
}
