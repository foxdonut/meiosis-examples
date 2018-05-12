import { createLayout } from "../layout";
import { createHome } from "../home";
import { createLogin } from "../login";
import { createRegister } from "../register";
//import { articleDetail } from "../articleDetail";

export const createMainView = update => {
  const pageCreators = [
    createHome,
    createLogin,
    createRegister
  ];
  const pages = pageCreators.reduce((result, create) => {
    const page = create(update);
    result[page.id] = page;
    return result;
  }, {})
  return createLayout(update, pages);
};
