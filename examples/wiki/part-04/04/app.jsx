import { pages } from "./navigation";
import { createHomePage } from "./homePage";
import { createBeerListPage } from "./beerListPage";
import { createBeerDetailsPage } from "./beerDetailsPage";
import { createBreweryListPage } from "./breweryListPage";
import { createBreweryDetailsPage } from "./breweryDetailsPage";

export const createApp = (update, navigation) => {
  const homePage = createHomePage(update);
  const beerListPage = createBeerListPage({
    beerDetails: id => _evt => navigation.navigateToBeerDetails({ id })
  });
  const beerDetailsPage = createBeerDetailsPage(update, navigation);
  const breweryListPage = createBreweryListPage(update, navigation);
  const breweryDetailsPage = createBreweryDetailsPage(update, navigation);

  const pageMap = {
    [pages.home.id]: homePage,
    [pages.beerList.id]: beerListPage,
    [pages.beerDetails.id]: beerDetailsPage,
    [pages.breweryList.id]: breweryListPage,
    [pages.breweryDetails.id]: breweryDetailsPage
  };

  return {
    model: () => ({
      page: Object.assign({ params: {} }, pages.home)
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
