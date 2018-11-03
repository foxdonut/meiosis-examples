export const service = model => {
  // Display the url in the browser's location bar.
  const url = model.url
  if (document.location.hash !== url) {
    window.history.pushState({}, "", url)
  }
}
