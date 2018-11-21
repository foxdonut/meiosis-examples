export const view = ({ actions }) => _model => ["div",
  ["div", "Home Page"],
  ["button", { onClick: () => actions.navigateToYourFeed() }, "Your Feed"],
  ["button", { onClick: () => actions.navigateToGlobalFeed() }, "Global Feed"]
]
