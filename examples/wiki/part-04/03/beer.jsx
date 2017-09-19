/** @jsx m */
import m from "mithril";

export const createBeer = (update, navigation) => {
  const actions = {
    beerDetails: id => evt => navigation.navigateToBeerDetails({ id }),
  };

  return {
    actions,
    view: model => (
      <div>
        <p>Beer Page</p>
        <ul>
          {model.beerList.map(beer =>
            <li key={beer.id}>
              <a href={"#/beer/" + beer.id}>{beer.title}</a>
              {" "}
              <button className="btn btn-default btn-xs"
                onclick={actions.beerDetails(beer.id)}>
                {beer.title}
              </button>
            </li>
          )}
        </ul>
      </div>
    )
  };
};
