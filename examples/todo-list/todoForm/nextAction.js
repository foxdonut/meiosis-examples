//const nextAction = ({ model, proposal, actions }) => {
const nextAction = ({ model, proposal, actions }) => {
  proposal.case({
    ValidateTodo: todo => {
      if (Object.keys(model.validationErrors).length === 0) {
        actions.requestSaveTodo(todo);
      }
    },
    SavedTodo: () => actions.clearForm()
  });
};

export default nextAction;
