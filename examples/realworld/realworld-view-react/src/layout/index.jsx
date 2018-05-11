import React from "react";
import _ from "lodash";

import { homePageId } from "../home";

const createHeader = actions => ({
  view: model => {
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
              <a className="nav-link" href="" onClick={actions.loginPage}>Sign in</a>
            </li>
            )]}
          </ul>
        </div>
      </nav>
    );
  }
});

const createFooter = _actions => ({
  view: _model => (
    <footer>
      <div className="container">
        <a href="/" className="logo-font">conduit</a>
        <span className="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>.
          Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  )
});

export const createLayout = (actions, pages) => {
  const footer = createFooter(actions);
  const header = createHeader(actions);

  return model => {
    const pageId = _.defaultTo(_.get(model, "pageId"), homePageId);
    const page = _.defaultTo(_.get(pages, pageId), _.get(pages, homePageId));

    return (
      <div>
        {header.view(model)}
        {page.view(model)}
        {footer.view(model)}
      </div>
    );
  };
};
