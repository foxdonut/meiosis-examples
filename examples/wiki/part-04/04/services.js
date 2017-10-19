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

const breweryBeerList = {
  brw1: [beerList[0], beerList[1]],
  brw2: [beerList[2], beerList[3]]
};

export const createServices = () => ({
  loadBeerList: breweryId => new Promise(resolve => {
    const delay = 2000

    setTimeout(() => {
      resolve(breweryId ? breweryBeerList[breweryId] : beerList);
    }, delay);
  }),
  loadBreweryList: () => new Promise(resolve => {
    const delay = 3000;

    setTimeout(() => resolve(breweryList), delay);
  })
});
