import React, { Component } from 'react';
import logo from '../assets/logo.JPG';

const nav = () => {
  const style = {
    backgroundColor: '#FFFFFF',
    color: '#F08045'
  };
  return (
    <nav
      style={style}
      className="navbar navbar-expand-sm navbar-light mb-3 sticky-top"
    >
      <div className="container">
        <a className="navbar-brand mt-1" href="#">
          <img
            className="mb-3"
            src="https://images.ctfassets.net/6krz4kg7somr/4rbWt1PlMkYo4wM0AG404E/3f7fd80ac8a62bd48a235d98bc04127e/logo.png"
            alt="Logo"
            width="70%"
            height="auto"
          />
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item mt-3 p-2">
              <a className="nav-link" href="#">
                frictionless digital
              </a>
            </li>
            <li className="nav-item mt-3 p-2">
              <a className="nav-link" href="#intelligent automation">
                intelligent automation
              </a>
            </li>
            <li className="nav-item mt-3 p-2">
              <a className="nav-link" href="#your future">
                your future
              </a>
            </li>
            <li className="nav-item mt-3 p-2">
              <a className="nav-link" href="#our perspective">
                our perspective
              </a>
            </li>
            <li className="nav-item mt-3 p-2">
              <a className="nav-link" href="#careers">
                careers
              </a>
              <span className="text-monospace" style={style}>
                {' '}
                we're hiring!
              </span>
            </li>
            <li className="nav-item mt-4">
              <a className="nav-link" href="#Let's connect">
                Let's connect
              </a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </nav>
  );
};

export default nav;
