import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import Mapper from "url-mapper";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const assoc = (prop, value) => model => {
  model[prop] = value;
  return model;
};

const merge = source => target => Object.assign(target, source);

const home = {
  name: "Home",
  create: update => model => (
    <div>Home Page</div>
  )
};

const login = {
  name: "Login",
  create: update => model => (
    <div>Login Page</div>
  )
};

const item = {
  name: "Item",
  create: update => model => (
    <div>Item Page - viewing item {model.params.id}</div>
  )
};

const pageDefs = {
  create: update => ({
    [home.name]: {
      view: home.create(update),
      handler: () => update(assoc("page", home.name))
    },
    [login.name]: {
      view: login.create(update),
      handler: () => update(assoc("page", login.name))
    },
    [item.name]: {
      view: item.create(update),
      handler: params => update(merge({ page: item.name, params }))
    },
    defaultPage: home.name
  })
};

const app = {
  model: () => ({
  }),

  create: pages => {
    return model => {
      const currentPage = pages[model.page] ? model.page : pages.defaultPage;
      const page = pages[currentPage];
      const isActive = pageName => pageName === currentPage ? "active" : "";

      return (
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className={isActive(home.name)}>
                <a href="#/">Home</a>
              </li>
              <li className={isActive(login.name)}>
                <a href="#/login">Login</a>
              </li>
              <li className={isActive(item.name)}>
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
  "/": home.name,
  "/login": login.name,
  "/item/:id": item.name
};
const routeMap = Object.keys(routes).reduce((acc, next) => {
  acc[routes[next]] = next;
  return acc;
}, {});


window.onpopstate = evt => {
  const route = document.location.hash.substring(1);
  const resolved = urlMapper.map(route, routes);
  if (resolved) {
    pages[resolved.match].handler(resolved.values);
  }
};


const routeSync = model => {
  const segment = routeMap[model.page] || "/";
  const route = urlMapper.stringify(segment, model.params || {});
  if (document.location.hash.substring(1) !== route) {
    window.history.pushState({}, "", "#" + route);
  }
};
models.map(routeSync);


const element = document.getElementById("app");
const view = app.create(pages);
models.map(model => ReactDOM.render(view(model), element));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
