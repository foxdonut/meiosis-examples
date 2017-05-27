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

    return model => (
      <div>
        <p>Items Page</p>
        <ul>
          <li><a href="#/items/1">Item 1</a></li>
          <li><a href="#/items/2">Item 2</a></li>
        </ul>
        {components.itemDetails(model.params)}
      </div>
    );
  }
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
    [items.name]: {
      view: items.create(update),
      handler: params => update(merge({ page: items.name, params }))
    },
    defaultPage: home.name
  })
};

const app = {
  model: () => ({
    page: "Home",
    params: {}
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
              <li className={isActive(items.name)}>
                <a href="#/items">Items</a>
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
                  onClick={() => pages[items.name].handler({})}>Items</button>
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
  "/items/:id?": items.name
};

window.onpopstate = () => {
  const route = document.location.hash.substring(1);
  const resolved = urlMapper.map(route, routes);
  if (resolved) {
    pages[resolved.match].handler(resolved.values);
  }
};


const routeMap = Object.keys(routes).reduce((acc, next) => {
  acc[routes[next]] = next;
  return acc;
}, {});

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
