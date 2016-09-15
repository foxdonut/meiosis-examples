import { initialModel } from "./model";
import { Action, createActions } from "./actions";
import receive from "./receive";
import nextAction from "./nextAction";

const todoFormConfig = ({services, view, setup}) => {
  return {
    Action,
    config: {
      initialModel,
      actions: createActions(services),
      receive,
      nextAction,
      view,
      setup
    }
  };
};

export default todoFormConfig;
