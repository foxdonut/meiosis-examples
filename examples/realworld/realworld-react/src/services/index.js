import axios from "axios";
import { setAjax } from "realworld-common/src/services";

export const initServices = () => setAjax(axios);
