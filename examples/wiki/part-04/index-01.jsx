import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const assoc = (prop, value) => model => {
  model[prop] = value;
  return model;
};

const merge = source => target => Object.assign(target, source);

const home = {
  create: update => model => (
    <div>Home Page</div>
  )
};

const login = {
  create: update => model => (
    <div>Login Page</div>
  )
};

const itemDetails = {
  create: update => model => model.id ?
    (<p>Details of item {model.id}</p>)
    : null
};

const items = {
  create: update => {
    const components = {
      itemDetails: itemDetails.create(update)
    };

    const actions = {
      viewItem: id => () => update(merge({ page: "Items", params: { id } }))
    };

    return model => (
      <div>
        <p>Items Page</p>
        <ul>
          <li>
            <a href="#" onClick={actions.viewItem(1)}>Item 1</a>
          </li>
          <li>
            <a href="#" onClick={actions.viewItem(2)}>Item 2</a>
          </li>
        </ul>
        {components.itemDetails(model.params)}
      </div>
    );
  }
};

const app = {
  model: () => ({
    page: "Home",
    params: {}
  }),

  create: update => {
    const pages = {
      Home: {
        view: home.create(update),
        handler: () => update(assoc("page", "Home"))
      },
      Login: {
        view: login.create(update),
        handler: () => update(assoc("page", "Login"))
      },
      Items: {
        view: items.create(update),
        handler: () => update(merge({ page: "Items", params: {} }))
      }
    };

    return model => {
      const page = pages[model.page] || pages.Home;
      const isActive = pageName => model.page === pageName ? "active" : "";

      return (
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className={isActive("Home")}>
                <a href="#" onClick={pages.Home.handler}>Home</a>
              </li>
              <li className={isActive("Login")}>
                <a href="#" onClick={pages.Login.handler}>Login</a>
              </li>
              <li className={isActive("Items")}>
                <a href="#" onClick={pages.Items.handler}>Items</a>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={pages.Home.handler}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={pages.Login.handler}>Login</button>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={pages.Items.handler}>Items</button>
              </li>
            </ul>
          </nav>
          {page.view(model)}
        </div>
      );
    };
  }
};

const initialModel = app.model();
const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const view = app.create(update);
models.map(model => ReactDOM.render(view(model), element));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
