import React, { useState } from 'react';

export default function TextForm() {
    const [text, setText] = useState(""); // state to store textarea value
    const [capitalizedText, setCapitalizedText] = useState("");

    const capitalize = () => {
        const lower = text.toLowerCase();
        const capitalized = lower.charAt(0).toUpperCase() + lower.slice(1);
        setCapitalizedText(capitalized); // store result
    }

    return (
        <>
            <section className='flex flex-col justify-center items-center gap-4 mt-[5vh]'>
                <h1 className='font-bold text-3xl text-blue-500'>Text Utills</h1>
                <textarea
                    value={text}                  // controlled textarea
                    onChange={(e) => setText(e.target.value)} // update state
                    className='min-h-[30vh] w-[90vw] border rounded-lg outline-none focus:ring-1 p-2 text-blue-500'
                />
            </section>

            <div className='flex flex-col justify-center items-center gap-4 mt-[5vh]'>
                <h1>Number of Words: {text.split(" ").filter(word => word !== "").length}</h1>
                <h1>Capitalized Text: {capitalizedText}</h1>
            </div>

            <button onClick={capitalize} className='border hover:cursor-pointer px-4 py-2 mt-4'>
                Capitalize Text
            </button>
        </>
    );
}
