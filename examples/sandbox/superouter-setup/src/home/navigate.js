export const navigate = {
  Home: () => ({ route, update }) => {
    if (route.feed) {
      update({ route, feed: "SHOW" })
    }
    else {
      update({ route, feed: "HIDE" })
    }
  }
}
