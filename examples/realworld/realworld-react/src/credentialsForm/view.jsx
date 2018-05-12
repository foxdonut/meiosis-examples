import React from "react";
import { defaultTo } from "ramda";

export const createView = (actions, options) => model => {
  const errors = Object.keys(defaultTo({}, model.errors)).map(key => key + " " + model.errors[key]);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{options.label}</h1>
            <p className="text-xs-center">
              <a href="{options.alternativeLink}">{options.alternativeLabel}</a>
            </p>

            <ul className="error-messages">
              {errors.map((error, index) => (<li key={index}>{error}</li>))}
            </ul>

            <form>
              {options.showUsername && (
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Username"
                    value={model.username} onChange={actions.updateForm("username")} />
                </fieldset>
              )}
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Email"
                  value={model.email} onChange={actions.updateForm("email")} />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" placeholder="Password"
                  value={model.password} onChange={actions.updateForm("password")} />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" onClick={actions.callback(model)}>
                {options.label}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
