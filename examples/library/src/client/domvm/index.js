import { createView } from "domvm";
import { createApp } from "../app";

const app = createApp(() => null);

const AppView = () => (vm, model) => app.main.view(model);

const vm = createView(AppView, app.models());
const element = document.getElementById("main");
vm.attach(element);
app.models.map(model => vm.update(model));

app.main.initialFetch();
