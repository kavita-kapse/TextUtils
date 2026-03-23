import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar({ title = 'set title here', abouttext = 'About Text here', textareatext='Textarea', mode, toggleMode }) {  // Set default props
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${mode==='light'?'dark':'light'}`} href="/">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-${mode==='light'?'dark':'light'} active`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${mode==='light'?'dark':'light'}`} to="/about">{abouttext}</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${mode==='light'?'dark':'light'}`} to="/">{textareatext}</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    abouttext : PropTypes.string.isRequired,
}

