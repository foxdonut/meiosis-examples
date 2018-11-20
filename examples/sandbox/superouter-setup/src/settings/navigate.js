export const navigate = {
  Settings: ({ username }) => ({ model, route, update }) => {
    if (model.feed) {
      update({ route, username, feed: "yes" })
    }
    else {
      update({ route, username: "anonymous", feed: "no" })
    }
  }
}
