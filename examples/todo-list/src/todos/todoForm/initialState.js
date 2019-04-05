export const initialState = ({ label, todo = { priority: "", description: "" } }) => ({
  label,
  todo,
  validationErrors: {}
})
