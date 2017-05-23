import m from "mithril";
import stream from "mithril/stream";
import R from "ramda";
import pathToRegexp from "path-to-regexp";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const home = {
  create: update => model => m("div", "Home Page")
};

const login = {
  create: update => model => m("div", "Login Page")
};

const item = {
  create: update => model => m("div", "Item Page - viewing item " + model.params.id)
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
      const isActive = pageName => model.page === pageName ? ".active" : "";

      return m("div",
        m("nav.navbar.navbar-default",
          m("ul.nav.navbar-nav",
            m("li" + isActive("Home"),
              m("a[href='#/']", "Home")
            ),
            m("li" + isActive("Login"),
              m("a[href='#/login']", "Login")
            ),
            m("li" + isActive("Item"),
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
  "/": "Home",
  "/login": "Login",
  "/item/:id": "Item"
};
const routeMap = Object.keys(routes).reduce((acc, next) => {
  acc[routes[next]] = next;
  return acc;
}, {});


m.route.prefix("#");

const stub = document.createElement("div");
const noRender = { render: () => null };

m.route(stub, "/", Object.keys(routes).reduce((acc, next) => {
  acc[next] = R.merge({ onmatch: pages[routes[next]].handler }, noRender);
  return acc;
}, {}));


const routeSync = model => {
  const segment = routeMap[model.page] || "/";
  const route = pathToRegexp.compile(segment)(model.params);
  window.history.pushState({}, "", "#" + route);
};
models.map(routeSync);


const element = document.getElementById("app");
const view = app.create(pages);
models.map(model => m.render(element, view(model)));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
