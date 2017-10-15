export const createBreweryList = actions => ({
  view: model => {
    return (
      <ul>
        {model.breweryList.map(brewery =>
          <li key={brewery.id}>
            <a href={"#/breweryList/" + brewery.id}>{brewery.title}</a>
            {" "}
            <button className="btn btn-default btn-xs"
              onClick={actions.breweryDetails({breweryId: brewery.id})}>
              {brewery.title}
            </button>
          </li>
        )}
      </ul>
    );
  }
});
