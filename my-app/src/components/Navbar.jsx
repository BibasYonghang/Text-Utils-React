import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav"> 
            <li className="nav-item" style={{ display: 'flex' }} >
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

        </div>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Default Mode</label>
        </div>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
        </div>

        <div className="form-check form-switch ">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
        </div>

        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="switchCheckDefault" >Enable White Mode</label>
        </div>



      </div>
    </nav>
  );
}

Navbar.propTypes = {  // <-- lowercase 'p' here!
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: `set title here`,
  about: `about text here`
};
