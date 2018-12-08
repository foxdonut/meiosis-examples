export const model = ({label, todo = { priority: "", description: "" }}) => ({
  label,
  todo,
  validationErrors: {}
})
