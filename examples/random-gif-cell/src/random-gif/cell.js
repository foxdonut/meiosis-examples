import { Actions } from "./actions"

export const createCell = cell => {
  cell.actions = Actions(cell)
  return cell
}
