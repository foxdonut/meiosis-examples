import m from "mithril";
import stream from "mithril/stream";

import { app } from "./app";
import { home } from "./home";
import { layout } from "./layout";
import { profile } from "./profile";

const applyUpdate = (model, modelUpdate) => modelUpdate(model);

const initialModel = app.model();

const update = stream();
const models = stream.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
//const view = app.create(update);
//models.map(model => m.render(element, view(model)));

const Home = layout.create(models, update, home);
const Profile = layout.create(models, update, profile);

m.route(element, "/", {
  "/": Home,
  "/profile/:username": Profile
});
