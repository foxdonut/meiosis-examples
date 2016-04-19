const render = views => model => views.display(model);

const nextAction = actions => model => {
  if (model.requestLoadList) {
    model.requestLoadList = false;
    actions.loadList();
  }
};

const createState = (actions, views) => ({
  render: render(views),
  nextAction: nextAction(actions)
});

export { createState };
