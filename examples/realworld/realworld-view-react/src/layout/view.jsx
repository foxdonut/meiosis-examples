import React from "react";

export const createView = (components, pages, getOrDefault) => model => {
  const Page = getOrDefault(pages[model.page]);

  return (
    <div>
      {components.Header(model)}
      {Page(model)}
      {components.Footer(model)}
    </div>
  );
};
