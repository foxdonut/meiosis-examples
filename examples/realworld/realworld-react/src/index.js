import flyd from "flyd";
import ReactDOM from "react-dom";

import { page } from "./page";
import { router } from "./router";
import { credentialsApi } from "./services";
import { viewModel } from "./util";

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import { trace } from "meiosis";

credentialsApi.getUser().then(user => {
  const applyUpdate = (model, modelUpdate) => modelUpdate(model);

  const initialModel = {
    article: {},
    articles: [],
    articlesFilter: {
      limit: 10,
      offset: 0,
      tagFilter: ""
    },
    login: {},
    page: "Home",
    profile: {},
    register: {},
    user,
    tags: []
  };

  const update = flyd.stream();
  const Router = router.create(update);

  const models = flyd.scan(applyUpdate, initialModel, update);
  const viewModels = models.map(viewModel).map(Router.syncRoute);

  const element = document.getElementById("app");
  const view = page.create(update);
  viewModels.map(model => ReactDOM.render(view(model), element));

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  trace({ update, dataStreams: [ models, viewModels ] });
});
