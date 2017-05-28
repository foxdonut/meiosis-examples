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
  create: update => model => (<div>Home Page</div>)
};

const login = {
  create: update => model => (<div>Login Page</div>)
};

const itemSummary = {
  create: update => {
    const actions = {
      itemDetails: id => () => update(
        merge({ page: { id: "ItemDetails", tab: "Items" }, params: { id } })
      )
    };

    return model => model.params.id ? (
      <div>
        <p>
          Summary of item {model.params.id}.
        </p>
        <a href="#" onClick={actions.itemDetails(model.params.id)}>View details</a>
      </div>
    ) : null
  }
};

const items = {
  create: update => {
    const components = {
      itemSummary: itemSummary.create(update)
    };

    const actions = {
      itemSummary: id => () => update(
        merge({ page: { id: "Items", tab: "Items" }, params: { id } })
      )
    };

    return model => (
      <div>
        <p>Items Page</p>
        <ul>
          <li><a href="#" onClick={actions.itemSummary(1)}>Item 1</a></li>
          <li><a href="#" onClick={actions.itemSummary(2)}>Item 2</a></li>
        </ul>
        {components.itemSummary(model)}
      </div>
    );
  }
};

const itemDetails = {
  create: update => model => (<p>Details of item {model.params.id}</p>)
};

const app = {
  model: () => ({
    page: {
      id: "Home",
      tab: "Home"
    },
    params: {}
  }),

  create: update => {
    const pages = {
      Home: {
        view: home.create(update),
        handler: () => update(assoc("page", { id: "Home", tab: "Home" }))
      },
      Login: {
        view: login.create(update),
        handler: () => update(assoc("page", { id: "Login", tab: "Login" }))
      },
      Items: {
        view: items.create(update),
        handler: () => update(merge({ page: { id: "Items", tab: "Items" }, params: {} }))
      },
      ItemDetails: {
        view: itemDetails.create(update),
        handler: () => update(assoc("page", { id: "ItemDetails", tab: "Items" }))
      }
    };

    return model => {
      const page = pages[model.page.id] || pages.Home;
      const isActive = pageName => model.page.tab === pageName ? "active" : "";

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
                <button className="btn btn-default"
                  onClick={pages.Home.handler}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={pages.Login.handler}>Login</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={pages.Items.handler}>Items</button>
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
