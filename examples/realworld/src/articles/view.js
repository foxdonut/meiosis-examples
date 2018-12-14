export const view = ({ articleSummary, pager }) => state => [
  //state.articles.map(article => articleSummary(state, article)),
  state.articles.map((article, idx) => [["div", "#", idx], articleSummary(state, article)]),
  pager(state)
]
