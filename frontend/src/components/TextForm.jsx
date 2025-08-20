import React, { useState } from 'react';

export default function TextForm() {
    const [text, setText] = useState("");
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    // Handle typing in textarea
    const handleChange = (e) => {
        setHistory([...history, text]); // save current before change
        setText(e.target.value);
        setRedoStack([]); // clear redo when typing
    };

    // Button handlers
    const clearText = () => setText("");
    const uppercaseText = () => setText(text.toUpperCase());
    const lowercaseText = () => setText(text.toLowerCase());
    const capitalizeText = () =>
        setText(
            text
                .split(' ')
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ')
        );



    const undo = () => {
        if (history.length === 0) return;
        const prev = history[history.length - 1];
        setRedoStack([text, ...redoStack]); // save current into redo
        setText(prev);
        setHistory(history.slice(0, history.length - 1));
    };

    const redo = () => {
        if (redoStack.length === 0) return;
        const next = redoStack[0];
        setHistory([...history, text]);
        setText(next);
        setRedoStack(redoStack.slice(1));
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
        setText("");
    };

    const removeExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    };
    const buttons = [
        { name: "Clear Text", onClick: clearText },
        { name: "Uppercase", onClick: uppercaseText },
        { name: "Lowercase", onClick: lowercaseText },
        { name: "Capitalize", onClick: capitalizeText },
        { name: "Undo", onClick: undo },
        { name: "Redo", onClick: redo },
        { name: "Copy Text", onClick: copyText },
        { name: "Remove Spaces", onClick: removeExtraSpaces },
    ];

    return (
        <main className='flex flex-col items-center bg-gray-800 min-h-screen'>
            <section className='flex flex-col justify-center items-center gap-4 mt-[7vh]'>
                <h1 className='font-bold text-4xl text-white'>Text Utils</h1>
                <textarea
                    value={text}
                    onChange={handleChange}
                    placeholder='Type or paste your text here...'
                    className='min-h-[30vh] w-[90vw] border border-gray-500 rounded-lg outline-none focus:ring-1 p-2 text-white'
                />
                <p className="text-white mt-2 w-[90vw]">
                    {text.trim().split(/\s+/).filter(Boolean).length} words, {text.length} characters
                </p>
            </section>
            <div className='lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-[90vw] grid gap-4 my-[3vh]'>
                {buttons.map(({ name, onClick }, idx) => (
                    <button
                        key={idx}
                        onClick={onClick}
                        className=' 
                        sm:mt-4 mt-2
                        hover:cursor-pointer px-4 py-1.5 rounded-lg bg-gray-600 hover:bg-gray-700 text-white'
                    >
                        {name}
                    </button>
                ))}
            </div>
        </main>
    );
}
