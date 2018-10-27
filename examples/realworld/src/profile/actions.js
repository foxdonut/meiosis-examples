import { profileApi } from "../services"

export const actions = update => ({
  follow: username => profileApi.follow(username).then(update),
  unfollow: username => profileApi.unfollow(username).then(update)
})
