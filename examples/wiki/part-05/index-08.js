import m from "mithril";
import stream from "mithril/stream";
import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const assoc = (prop, value) => model => {
  model[prop] = value;
  return model;
};

const merge = source => target => Object.assign(target, source);

const home = {
  page: {
    id: "Home",
    tab: "Home"
  },
  create: _update => _model => m("div", "Home Page")
};

const login = {
  page: {
    id: "Login",
    tab: "Login"
  },
  create: _update => _model => m("div", "Login Page")
};

const itemSummary = {
  create: _update => model => model.params.id ? [
    m("p",
      "Summary of item " + model.params.id
    ),
    m("a[href='#/items/" + model.params.id + "/details']", "View details"),
    m("span", " "),
    m("button.btn.btn-default.btn-xs", "View details")
  ] : null
};

const items = {
  page: {
    id: "Items",
    tab: "Items"
  },
  create: update => {
    const components = {
      itemSummary: itemSummary.create(update)
    };

    return model => m("div",
      m("p", "Items Page"),
      m("ul",
        m("li",
          m("a[href='#/items/1']", "Item 1"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs", "Item 1")
        ),
        m("li",
          m("a[href='#/items/2']", "Item 2"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs", "Item 2")
        )
      ),
      components.itemSummary(model)
    );
  }
};

const itemDetails = {
  page: {
    id: "ItemDetails",
    tab: "Items"
  },
  create: _update => model => model.params.id ?
    m("p", "Details of item " + model.params.id) : null
};

const pageDefs = {
  create: update => ({
    [home.page.id]: {
      view: home.create(update),
      handler: () => update(assoc("page", home.page))
    },
    [login.page.id]: {
      view: login.create(update),
      handler: () => update(assoc("page", login.page))
    },
    [items.page.id]: {
      view: items.create(update),
      handler: params => update(merge({ page: items.page, params }))
    },
    [itemDetails.page.id]: {
      view: itemDetails.create(update),
      handler: params => update(merge({ page: itemDetails.page, params }))
    },
    defaultPageId: home.page.id
  })
};

const app = {
  model: () => ({
    page: {
      id: "Home",
      tab: "Home"
    },
    params: {}
  }),

  create: pages => {
    return model => {
      const currentPageId = pages[model.page.id] ? model.page.id : pages.defaultPageId;
      const currentTab = model.page.tab;
      const page = pages[currentPageId];
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
                { onclick: pages[home.page.id].handler }, "Home")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: pages[login.page.id].handler }, "Login")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: () => pages[items.page.id].handler({}) }, "Items")
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


const routes = [
  { path: "/", name: home.page.id, action: pages[home.page.id].handler },
  { path: "/login", name: login.page.id, action: pages[login.page.id].handler },
  { path: "/items", children: [
    { path: "/", action: ctx => pages[items.page.id].handler(ctx.params) },
    { path: "/:id?", name: items.page.id, action: ctx => pages[items.page.id].handler(ctx.params) },
    { path: "/:id/details", name: itemDetails.page.id,
      action: ctx => pages[itemDetails.page.id].handler(ctx.params)
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


const element = document.getElementById("app");
const view = app.create(pages);
models.map(model => m.render(element, view(model)));


// resolve initial route
resolveRoute();


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
