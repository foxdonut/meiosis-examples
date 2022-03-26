import { profileApi } from "../services"

export const actions = {
  follow: (cell, username) => profileApi.follow(username).then(cell.update),
  unfollow: (cell, username) => profileApi.unfollow(username).then(cell.update)
}
