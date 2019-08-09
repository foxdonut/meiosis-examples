export const Initial = (todo = { priority: "", description: "" }) => ({
  todo,
  validationErrors: () => ({})
})
