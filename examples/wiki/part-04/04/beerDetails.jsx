export const createBeerDetails = () => ({
  view: model => (
    <p>Details of beer {model.params.id}</p>
  )
});
