export const createBreweryDetails = update => ({
  view: model => (
    <div>
      <p>Details of brewery {model.params.id}</p>
    </div>
  )
});
