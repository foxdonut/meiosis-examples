import { Promise } from "es6-promise";

const beerList = [
  { id: "br1", title: "Beer 1" },
  { id: "br2", title: "Beer 2" },
  { id: "br3", title: "Beer 3" },
  { id: "br4", title: "Beer 4" }
];

const breweryList = [
  { id: "brw1", title: "Brewery 1" },
  { id: "brw2", title: "Brewery 2" }
];

export const createServices = () => ({
  loadBeer: () => new Promise(resolve =>
    setTimeout(() => resolve(beerList), 1)
  ),
  loadBrewery: () => new Promise(resolve =>
    setTimeout(() => resolve(breweryList), 1)
  )
});
