import m from "mithril";
import stream from "mithril/stream";
import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

// Utilities

const assoc = (prop, value) => model => {
  model[prop] = value;
  return model;
};

const merge = source => target => Object.assign(target, source);

// Pages

const home = {
  page: {
    id: "Home",
    tab: "Home"
  },
  create: _update => _model => m("div", "Home Page"),
  display: update => update(assoc("page", home.page))
};

const login = {
  page: {
    id: "Login",
    tab: "Login"
  },
  create: _update => _model => m("div", "Login Page"),
  display: update => update(assoc("page", login.page))
};

const itemDetails = {
  page: {
    id: "ItemDetails",
    tab: "Items"
  },
  create: _update => model => model.params.id ?
    m("p", "Details of item " + model.params.id) : null,
  display: (update, params) => update(merge({ page: itemDetails.page, params }))
};

const items = {
  page: {
    id: "Items",
    tab: "Items"
  },
  create: update => {
    const actions = {
      itemSummary: id => () => items.display(update, { id }),
      itemDetails: id => () => itemDetails.display(update, { id })
    };

    const itemSummary = id => id ? [
      m("p",
        "Summary of item " + id
      ),
      m("a[href='#/items/" + id + "/details']", "View details"),
      m("span", " "),
      m("button.btn.btn-default.btn-xs",
        { onclick: actions.itemDetails(id) }, "View details")
    ] : null;

    return model => m("div",
      m("p", "Items Page"),
      m("ul",
        m("li",
          m("a[href='#/items/1']", "Item 1"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs",
            { onclick: actions.itemSummary(1) }, "Item 1")
        ),
        m("li",
          m("a[href='#/items/2']", "Item 2"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs",
            { onclick: actions.itemSummary(2) }, "Item 2")
        )
      ),
      itemSummary(model.params.id)
    );
  },
  display: (update, params) => update(merge({ page: items.page, params }))
};

// Top-level app

const app = {
  model: () => ({
    page: home.page,
    params: {}
  }),

  create: update => {
    const pageMap = [home, login, items, itemDetails].reduce(
      (acc, next) => {
        acc[next.page.id] = next.create(update);
        return acc;
      }, {}
    );

    return model => {
      const currentPageId = pageMap[model.page.id] ? model.page.id : home.page.id;
      const currentTab = model.page.tab;
      const page = pageMap[currentPageId];
      const isActive = tab => tab === currentTab ? ".active" : "";

      return m("div",
        m("nav.navbar.navbar-default",
          m("ul.nav.navbar-nav",
            m("li" + isActive(home.page.id),
              m("a[href='#/']", "Home")
            ),
            m("li" + isActive(login.page.id),
              m("a[href='#/login']", "Login")
            ),
            m("li" + isActive(items.page.id),
              m("a[href='#/items']", "Items")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: () => home.display(update) }, "Home")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: () => login.display(update) }, "Login")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: () => items.display(update, {}) }, "Items")
            )
          )
        ),
        page(model)
      );
    };
  }
};

// Meiosis setup

const initialModel = app.model();
const update = stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

// Routing

const routes = [
  { path: "/", name: home.page.id, action: () => home.display(update) },
  { path: "/login", name: login.page.id, action: () => login.display(update) },
  { path: "/items", children: [
    { path: "/", action: ctx => items.display(update, ctx.params) },
    { path: "/:id?", name: items.page.id,
      action: ctx => items.display(update, ctx.params)
    },
    { path: "/:id/details", name: itemDetails.page.id,
      action: ctx => itemDetails.display(update, ctx.params)
    }
  ]}
];

const router = new UniversalRouter(routes);

const resolveRoute = () => {
  const route = document.location.hash.substring(1);
  router.resolve(route);
};

window.onpopstate = resolveRoute;


const urlGenerator = generateUrls(router);

const routeSync = model => {
  const route = urlGenerator(model.page.id, model.params || {});
  if (document.location.hash.substring(1) !== route) {
    window.history.pushState({}, "", "#" + route);
  }
};
models.map(routeSync);

// Meiosis setup

const element = document.getElementById("app");
const view = app.create(update);
models.map(model => m.render(element, view(model)));


// resolve initial route
resolveRoute();


// Meiosis Tracer

trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
