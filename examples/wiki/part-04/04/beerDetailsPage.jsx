export const createBeerDetailsPage = (update, navigation) => {
  const actions = {
    navigateToBeerList: () => navigation.navigateToBeerList()
  };

  return {
    view: model => (
      <div>
        <p>Details of beer {model.params.id}</p>
        <div>
          <a href="#/beerList">Back to beer list</a>
        </div>
        <div>
          <button className="btn btn-default btn-xs"
            onClick={actions.navigateToBeerList}>
            Back to beer list
          </button>
        </div>
      </div>
    )
  };
};
