import React from "react";
import { merge } from "ramda";

export const createView = components => model => (
  <div>
    {model.articles.map(components.ArticleSummary)}
    {components.Pager(merge({ total: model.articlesCount }, model.articlesFilter))}
  </div>
);
