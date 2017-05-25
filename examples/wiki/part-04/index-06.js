import flyd from "flyd";
import { h, patch } from "turbodom";
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
  create: update => model => h("div", {}, "Home Page")
};

const login = {
  name: "Login",
  create: update => model => h("div", {}, "Login Page")
};

const item = {
  name: "Item",
  create: update => model => h("div", {}, "Item Page - viewing item " + model.params.id)
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

      return h("div", {}, [
        h("nav", { class: "navbar navbar-default" }, [
          h("ul", { class: "nav navbar-nav" }, [
            h("li", { class: isActive(home.name) }, [
              h("a", { href: "#/" }, "Home")
            ]),
            h("li", { class: isActive(login.name) }, [
              h("a", { href: "#/login" }, "Login")
            ]),
            h("li", { class: isActive(item.name) }, [
              h("a", { href: "#/item/42" }, "Item 42")
            ]),
            h("li", { class: "btn" }, [
              h("button", { class: "btn btn-default", onclick: pages.Home.handler }, "Home")
            ]),
            h("li", { class: "btn" }, [
              h("button", { class: "btn btn-default", onclick: pages.Login.handler }, "Login")
            ]),
            h("li", { class: "btn" }, [
              h("button", { class: "btn btn-default", onclick: () => pages.Item.handler({ id: "42" }) }, "Item 42")
            ])
          ])
        ]),
        page.view(model)
      ]);
    };
  }
};

const initialModel = app.model();
const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

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

const routeResolves = Object.keys(routes).reduce((acc, next) => {
  const keys = [];
  const re = pathToRegexp(next, keys);
  acc.push(route => {
    let result = null;
    const reMatch = re.exec(route);
    if (reMatch) {
      const match = routes[next];
      const values = {};
      for (let i = 1, t = reMatch.length; i < t; i++) {
        values[keys[i - 1].name] = reMatch[i];
      }
      result = { match, values };
    }
    return result;
  });
  return acc;
}, []);

const routeResolve = route => {
  let result = null;
  for (let i = 0, t = routeResolves.length; i < t; i++) {
    result = routeResolves[i](route);
    if (result) {
      break;
    }
  }
  return result;
};


window.onpopstate = () => {
  const route = document.location.hash.substring(1);
  const resolved = routeResolve(route);
  if (resolved) {
    pages[resolved.match].handler(resolved.values);
  }
};


const routeSync = model => {
  const segment = routeMap[model.page] || "/";
  const route = routeCompile[segment](model.params);
  if (document.location.hash.substring(1) !== route) {
    window.history.pushState({}, "", "#" + route);
  }
};
models.map(routeSync);

const createRender = element => {
  let root = null;
  let node = null;

  return view => root = patch(element, root, node, node=view);
};

const element = document.getElementById("app");
const render = createRender(element);
const view = app.create(pages);
models.map(model => render(view(model)));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
