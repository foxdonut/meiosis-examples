import m from "mithril"

export const Results = {
  view: ({ attrs: { state } }) =>
    state.results.map(
      resultArray =>
        resultArray &&
        resultArray.map(result =>
          m(
            "div.card.border",
            { key: `result_${result.messageId}` },
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
    )
}
