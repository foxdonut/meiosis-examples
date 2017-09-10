export const createView = components => model => (
  <div>
    <h4>App</h4>
    {components.air.view(model.air)}
    {components.water.view(model.water)}
  </div>
);
