import { initialModel } from "./model";
import { Action, createActions } from "./actions";
import receive from "./receive";
import nextAction from "./nextAction";

const todoFormConfig = ({services, view, name, setup}) => {
  return {
    Action,
    config: {
      initialModel,
      actions: createActions(services),
      receive,
      nextAction,
      view,
      setup: setup ? setup(name) : null
    }
  };
};

export default todoFormConfig;
