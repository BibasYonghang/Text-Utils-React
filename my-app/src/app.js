
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light') // wheather dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#031535'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white' 
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" about="aboutTextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading='Enter the text to Analyze Below:' mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
