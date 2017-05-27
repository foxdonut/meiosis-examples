/*global window*/
import m from "mithril";
import stream from "mithril/stream";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

// router_js does not seem to provide a proper npm module.
// so, it (and its dependencies) are loaded with <script> tags in index-07.html.
const Router = window.Router.default;

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

const itemDetails = {
  create: update => model => model.id ?
    m("p", "Details of item " + model.id) : null
};

const items = {
  name: "Items",
  create: update => {
    const components = {
      itemDetails: itemDetails.create(update)
    };

    return model => m("div",
      m("p", "Items Page"),
      m("ul",
        m("li", m("a[href='#/items/1']", "Item 1")),
        m("li", m("a[href='#/items/2']", "Item 2"))
      ),
      components.itemDetails(model.params)
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
            m("li" + isActive(items.name),
              m("a[href='#/items']", "Items")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: pages[home.name].handler }, "Home")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: pages[login.name].handler }, "Login")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: () => pages[items.name].handler({}) }, "Items")
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


const router = new Router({
  getHandler: name => ({
    model: params => params,
    setup: pages[name].handler
  }),
  updateURL: url => {
    console.log("update url:", url);
    window.location.hash = url;
  }
});

router.map(match => {
  match("/").to(home.name);
  match("/login").to(login.name);
  match("/items").to(items.name);
  match("/items/:id").to(items.name);
});

window.onpopstate = () => {
  const route = document.location.hash.substring(1);
  router.handleURL(route);
};


const element = document.getElementById("app");
const view = app.create(pages);
models.map(model => m.render(element, view(model)));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
