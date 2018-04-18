export const createView = components => model => (
  <div>
    <h4>App</h4>
    {components.air.view(model)}
    {components.water.view(model)}
  </div>
);
