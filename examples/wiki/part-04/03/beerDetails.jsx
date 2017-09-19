/** @jsx m */
import m from "mithril";

export const createBeerDetails = update => ({
  view: model => (<p>Details of beer {model.params.id}</p>)
});
