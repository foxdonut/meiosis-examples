export const receive = id => (model, proposal) => {
  if (proposal.id === id) {
    model.value = proposal.value;
  }
  return model;
};
