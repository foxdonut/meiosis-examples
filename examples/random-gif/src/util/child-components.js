export function childComponents(parentComponent, childComponents) {
  const childActions = {};

  return {
    initialModel: model => {
      Object.keys(childComponents).forEach(key => {
        childComponents[key].initialModel(model);
      });
      return parentComponent.initialModel(model);
    },
    view: (model, actions) => {
      Object.keys(childComponents).forEach(key => {
        if (!childActions[key]) {
          childActions[key] = childComponents[key].actions && childComponents[key].actions(actions.propose) || actions.propose;
          const previousView = childComponents[key].view;
          childComponents[key].view = model => previousView(model, childActions[key]);
        }
      });
      return parentComponent.view(model, actions);
    },
    actions: parentComponent.actions,
    receive: (model, proposal) => {
      Object.keys(childComponents).forEach(key => {
        childComponents[key].receive(model, proposal);
      });
      return parentComponent.receive(model, proposal);
    },
    state: (model, state) => {
      Object.keys(childComponents).forEach(key => {
        childComponents[key].state(model, state);
      });
      return parentComponent.state(model, state);
    },
    ready: actions => {
      Object.keys(childComponents).forEach(key => {
        childComponents[key].ready(childActions[key]);
      });
      return parentComponent.ready(actions);
    },
    postRender: model => {
      Object.keys(childComponents).forEach(key => {
        childComponents[key].postReader(model);
      });
      parentComponent.postRender(model);
    },
    nextAction: context => {
      Object.keys(childComponents).forEach(key => {
        childComponents[key].nextAction(context);
      });
      parentComponent.nextAction(context);
    }
  };
}
