import m from "mithril";

export const createView = (components, pages, getOrDefault) => model => {
  const Page = getOrDefault(pages[model.page]);

  return [
    components.Header(model),
    Page(model),
    components.Footer(model)
  ];
};
