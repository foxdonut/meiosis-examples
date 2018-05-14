import React from "react";
import _ from "lodash";

export const createView = actions => model => {
  const errors = Object.keys(_.defaultTo(model.errors, {})).map(key => key + " " + model.errors[key]);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <a href="/login">Already have an account?</a>
            </p>

            <ul className="error-messages">
              {errors.map((error, index) => (<li key={index}>{error}</li>))}
            </ul>

            <form>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Username"
                  value={model.username} onChange={actions.updateForm("username")} />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Email"
                  value={model.email} onChange={actions.updateForm("email")} />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" placeholder="Password"
                  value={model.password} onChange={actions.updateForm("password")} />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" onClick={actions.callback(model)}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
