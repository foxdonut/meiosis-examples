import { createView } from "./view";
import { articleSummary } from "../articleSummary";
import { pager } from "../pager";

export const articles = {
  create: update => {
    const components = {
      ArticleSummary: articleSummary.create(update),
      Pager: pager.create(update)
    };

    return createView(components);
  }
};
