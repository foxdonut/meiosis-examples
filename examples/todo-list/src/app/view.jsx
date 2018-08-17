// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

export const createView = components => model => (
  <div>
    <div className="row">
      <div className="col-md-4">
        {components.form.view(model)}
      </div>
    </div>
    {components.list.view(model)}
  </div>
);
