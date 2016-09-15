import jsnox from "jsnox";
import { createVElement } from "inferno";

const h = jsnox({
  isValidElement: obj => obj.length,
  createElement: createVElement
});

export default h;
