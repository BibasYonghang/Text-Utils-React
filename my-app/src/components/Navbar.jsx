import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item" style={{display: 'flex'}} >
              <a className="nav-link" href="/">Home</a>
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
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
