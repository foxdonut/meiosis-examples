export const createBeerDetails = () => ({
  view: model => (
    <p>Details of beer {model.page.params.id}</p>
  )
});
