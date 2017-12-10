import domvm from "domvm";
import { createApp } from "../app";

const app = createApp(() => null);

const AppView = () => (vm, model) => app.main.view(model);

const vm = domvm.createView(AppView, app.models());
//vm.mount(app.element);
//vm.attach(app.element);
vm.mount(app.element, true);
app.models.map(model => vm.update(model));

app.main.initialFetch();
