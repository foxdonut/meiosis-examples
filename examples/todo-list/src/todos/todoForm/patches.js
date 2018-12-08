import O from "patchinko/constant"

export const patches = {
  clearForm: id => ({ [id]: O({ todo: { priority: "", description: "" }, validationErrors: { } }) })
}
