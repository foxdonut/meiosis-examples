import m from "mithril";
import { setAjax } from "realworld-common/src/services";

export const initServices = () => setAjax(m.request);
