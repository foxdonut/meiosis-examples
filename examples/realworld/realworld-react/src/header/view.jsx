import React from "react";

import { toLogin } from "../page";

export const createView = actions => model => {
  const active = page => model.page === page ? ".active" : "";

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#/">conduit</a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item {active('Home')}">
            <a className="nav-link" href="#/">Home</a>
          </li>
          {model.signedIn ? [(
          <li key="newPost" className="nav-item">
            <a className="nav-link" href="#/editor">
              <i className="ion-compose"></i>&nbsp;New Post
            </a>
          </li>), (
          <li key="settings" className="nav-item">
            <a className="nav-link" href="#/settings">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          )] : [(
          <li key="register" className="nav-item {active('Register')}">
            <a className="nav-link" href="#/register">Sign up</a>
          </li>), (
          <li key="login" className="nav-item {active('Login')}">
            <a className="nav-link" href="" onClick={actions.goToLoginPage}>Sign in</a>
          </li>
          )]}
        </ul>
      </div>
    </nav>
  );
};
