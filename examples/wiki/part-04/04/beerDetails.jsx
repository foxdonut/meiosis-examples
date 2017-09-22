export const createBeerDetails = (update, navigation) => {
  const actions = {
    navigateToBeer: () => navigation.navigateToBeer()
  };

  return {
    view: model => (
      <div>
        <p>Details of beer {model.params.id}</p>
        <div>
          <a href="#/beer">Back to beer list</a>
        </div>
        <div>
          <button className="btn btn-default btn-xs"
            onClick={actions.navigateToBeer}>
            Back to beer list
          </button>
        </div>
      </div>
    )
  };
};
