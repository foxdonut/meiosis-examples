import m from "mithril";
import stream from "mithril/stream";
import pathToRegexp from "path-to-regexp";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const assoc = (prop, value) => model => {
  model[prop] = value;
  return model;
};

const merge = source => target => Object.assign(target, source);

const home = {
  name: "Home",
  create: update => model => m("div", "Home Page")
};

const login = {
  name: "Login",
  create: update => model => m("div", "Login Page")
};

const item = {
  name: "Item",
  create: update => model => m("div", "Item Page - viewing item " + model.params.id)
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
      const isActive = pageName => pageName === currentPage ? ".active" : "";

      return m("div",
        m("nav.navbar.navbar-default",
          m("ul.nav.navbar-nav",
            m("li" + isActive(home.name),
              m("a[href='#/']", "Home")
            ),
            m("li" + isActive(login.name),
              m("a[href='#/login']", "Login")
            ),
            m("li" + isActive(item.name),
              m("a[href='#/item/42']", "Item 42")
            ),
            m("li.btn",
              m("button.btn.btn-default", { onclick: pages.Home.handler }, "Home")
            ),
            m("li.btn",
              m("button.btn.btn-default", { onclick: pages.Login.handler }, "Login")
            ),
            m("li.btn",
              m("button.btn.btn-default", { onclick: () => pages.Item.handler({ id: "42" }) }, "Item 42")
            )
          )
        ),
        page.view(model)
      );
    };
  }
};

const initialModel = app.model();
const update = stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

const pages = pageDefs.create(update);


const routes = {
  "/": home.name,
  "/login": login.name,
  "/item/:id": item.name
};

const routeMap = Object.keys(routes).reduce((acc, next) => {
  acc[routes[next]] = next;
  return acc;
}, {});

const routeCompile = Object.keys(routes).reduce((acc, next) => {
  acc[next] = pathToRegexp.compile(next);
  return acc;
}, {});



m.route.prefix("#");

const stub = document.createElement("div");
const noRender = () => null;

m.route(stub, "/", Object.keys(routes).reduce((acc, next) => {
  acc[next] = { onmatch: pages[routes[next]].handler, render: noRender };
  return acc;
}, {}));


const routeSync = model => {
  const segment = routeMap[model.page] || "/";
  const route = routeCompile[segment](model.params);
  if (document.location.hash.substring(1) !== route) {
    window.history.pushState({}, "", "#" + route);
  }
};
models.map(routeSync);


const element = document.getElementById("app");
const view = app.create(pages);
models.map(model => m.render(element, view(model)));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
