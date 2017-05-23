import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import R from "ramda";
import Mapper from "url-mapper";
import addressbar from "addressbar";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

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

const item = {
  create: update => model => (
    <div>Item Page - viewing item {model.params.id}</div>
  )
};

const pageDefs = {
  create: update => ({
    Home: {
      view: home.create(update),
      handler: () => update(R.assoc("page", "Home"))
    },
    Login: {
      view: login.create(update),
      handler: () => update(R.assoc("page", "Login"))
    },
    Item: {
      view: item.create(update),
      handler: params => update(model => R.merge(model, { page: "Item", params }))
    }
  })
};

const app = {
  model: () => ({
    page: "Home",
    params: {}
  }),

  create: pages => {
    return model => {
      const page = pages[model.page] || pages.Home;
      const isActive = pageName => model.page === pageName ? "active" : "";

      return (
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className={isActive("Home")}>
                <a href="#/">Home</a>
              </li>
              <li className={isActive("Login")}>
                <a href="#/login">Login</a>
              </li>
              <li className={isActive("Item")}>
                <a href="#/item/42">Item 42</a>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={pages.Home.handler}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={pages.Login.handler}>Login</button>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={() => pages.Item.handler({ id: "42" })}>Item 42</button>
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

const pages = pageDefs.create(update);


const urlMapper = Mapper();
const routes = {
  "/": "Home",
  "/login": "Login",
  "/item/:id": "Item"
};
const routeMap = Object.keys(routes).reduce((acc, next) => {
  acc[routes[next]] = next;
  return acc;
}, {});

addressbar.addEventListener("change", evt => {
  const value = evt.target.value;
  if (value.indexOf("#") > 0) {
    evt.preventDefault();
    addressbar.value = value;
    const hash = value.substring(value.indexOf("#") + 1);
    const matchedRoute = urlMapper.map(hash, routes);
    if (matchedRoute) {
      pages[matchedRoute.match].handler(matchedRoute.values);
    }
  }
});


const routeSync = model => {
  const segment = routeMap[model.page] || "/";
  const route = urlMapper.stringify(segment, model.params);
  const value = addressbar.value;
  addressbar.value = value.substring(0, value.indexOf("#") + 1) + route;
};
models.map(routeSync);


const element = document.getElementById("app");
const view = app.create(pages);
models.map(model => ReactDOM.render(view(model), element));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
