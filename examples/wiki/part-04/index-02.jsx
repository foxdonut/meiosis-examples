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
  name: "Home",
  create: update => model => (<div>Home Page</div>)
};

const login = {
  name: "Login",
  create: update => model => (<div>Login Page</div>)
};

const itemDetails = {
  create: update => model => model.id ?
    (<p>Details of item {model.id}</p>) : null
};

const items = {
  name: "Items",
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
          <li><a href="#" onClick={actions.viewItem(1)}>Item 1</a></li>
          <li><a href="#" onClick={actions.viewItem(2)}>Item 2</a></li>
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
      [home.name]: {
        view: home.create(update),
        handler: () => update(assoc("page", home.name))
      },
      [login.name]: {
        view: login.create(update),
        handler: () => update(assoc("page", login.name))
      },
      [items.name]: {
        view: items.create(update),
        handler: () => update(merge({ page: items.name, params: {} }))
      },
      defaultPage: home.name
    };

    return model => {
      const currentPage = pages[model.page] ? model.page : pages.defaultPage;
      const page = pages[currentPage];
      const isActive = pageName => pageName === currentPage ? "active" : "";

      return (
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className={isActive(home.name)}>
                <a href="#" onClick={pages[home.name].handler}>Home</a>
              </li>
              <li className={isActive(login.name)}>
                <a href="#" onClick={pages[login.name].handler}>Login</a>
              </li>
              <li className={isActive(items.name)}>
                <a href="#" onClick={pages[items.name].handler}>Items</a>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={pages[home.name].handler}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={pages[login.name].handler}>Login</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={pages[items.name].handler}>Items</button>
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
