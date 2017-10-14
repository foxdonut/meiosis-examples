import { pages } from "./navigation";
import { createHome } from "./home";
import { createBeerList } from "./beerList";
import { createBeerDetails } from "./beerDetails";
import { createBreweryList } from "./breweryList";

export const createApp = (update, navigation) => {
  const homeComponent = createHome(update);
  const beerListComponent = createBeerList({
    beerDetails: id => _evt => navigation.navigateToBeerDetails({ id })
  });
  const beerDetailsComponent = createBeerDetails(update, navigation);
  const breweryListComponent = createBreweryList(update, navigation);

  const pageMap = {
    [pages.home.id]: homeComponent,
    [pages.beerList.id]: beerListComponent,
    [pages.beerDetails.id]: beerDetailsComponent,
    [pages.breweryList.id]: breweryListComponent
  };

  return {
    model: () => ({
      page: pages.home,
      params: {}
    }),
    view: model => {
      const currentPageId = pageMap[model.page.id] ? model.page.id : pages.home.id;
      const component = pageMap[currentPageId];
      const currentTab = model.page.tab;
      const isActive = tab => tab === currentTab ? "active" : "";

      return (
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className={isActive(pages.home.tab)}>
                <a href="#/">Home</a>
              </li>
              <li className={isActive(pages.beerList.tab)}>
                <a href="#/beerList">Beer</a>
              </li>
              <li className={isActive(pages.breweryList.tab)}>
                <a href="#/breweryList">Brewery</a>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToHome()}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToBeerList()}>Beer</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToBreweryList()}>Brewery</button>
              </li>
            </ul>
          </nav>
          {component.view(model)}
        </div>
      );
    }
  };
};
