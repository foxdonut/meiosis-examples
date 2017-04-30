import { createView } from "./view";
import { articleSummary } from "../articleSummary";

export const articles = {
  create: update => {
    const components = {
      ArticleSummary: articleSummary.create(update)
    };

    return createView(update, components);
  }
};
