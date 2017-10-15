export const createBreweryDetails = () => ({
  view: model => (
    <p>Details of brewery {model.brewery.id}</p>
  )
});
