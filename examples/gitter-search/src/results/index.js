import m from "mithril"

export const Results = {
  view: ({ attrs: { state } }) => {
    const sortedResults = state.results.slice().sort((a, b) => a.index - b.index)
    return sortedResults.map(result =>
      m(
        "div.card.border",
        { key: `result_${result.index}` },
        m(
          "div.card-header.border",
          m(
            "a[target=_blank]",
            { href: `https://gitter.im/${state.channel}?at=${result.messageId}` },
            result.messageId
          ),
          m("span", ` - ${result.name} - ${result.username} - ${result.dateTime}`)
        ),
        m("div.card-body", m.trust(result.text))
      )
    )
  }
}
