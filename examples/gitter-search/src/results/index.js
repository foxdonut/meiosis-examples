import m from "mithril"

export const Results = {
  view: ({ attrs: { state } }) => {
    const sortedResults = state.results.slice().sort((a, b) => a.index - b.index)
    return sortedResults.map(result =>
      m(
        "div.card.border-secondary.mb-3",
        { key: `result_${result.index}` },
        m(
          "div.card-header",
          m(
            "a[target=_blank]",
            { href: `https://gitter.im/${state.channel}?at=${result.messageId}` },
            result.messageId
          ),
          m("span", ` - ${result.dateTime}`)
        ),
        m("div.card-body", m.trust(result.text))
      )
    )
  }
}
