import _ from "lodash";

import { credentialsApi, setToken } from "realworld-services";

export const createActions = (update, path, method) => ({
  sendCredentials: model => {
    credentialsApi[method]({ user: model }).
      then(user => {
        setToken(user.user.token);
        update(model => _.merge(model, user));
        //m.route.set("/");
      }).
      catch(err => update(model => _.set(model, _.concat(path, ["errors"]), err.errors)));
  }
});
