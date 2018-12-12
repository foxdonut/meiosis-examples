import { PS } from "patchinko/explicit"

export const patches = {
  clearForm: id => ({
    [id]: PS({
      todo: { priority: "", description: "" },
      validationErrors: { }
    })
  })
}
