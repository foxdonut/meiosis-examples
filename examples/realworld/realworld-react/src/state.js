import flyd from "flyd";

import { credentialsApi } from "./services";
import { state } from "./util";

export const start = () =>
  credentialsApi.getUser().then(user => {
    const initialModel = {
      article: {},
      articles: [],
      articlesFilter: {
        limit: 10,
        offset: 0,
        tagFilter: ""
      },
      login: {},
      profile: {},
      register: {},
      user,
      tags: []
    };

    const update = flyd.stream();

    const models = flyd.scan((model, func) => func(model), initialModel, update);
    const states = models.map(state);

    return { update, models, states };
  });
