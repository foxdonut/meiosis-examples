export const state = ({label, todo = { priority: "", description: "" }}) => ({
  label,
  todo,
  validationErrors: {}
})
