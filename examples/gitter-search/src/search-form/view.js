import m from "mithril"
import { getYear } from "date-fns"
import queryString from "query-string"

const years = []
let year = 2015
const maxYear = getYear(new Date())
while (year <= maxYear) {
  years.push(year)
  year++
}

const months = []
const noOfMonths = []
for (let month = 1; month <= 12; month++) {
  months.push((month < 10 ? "0" : "") + month)
  noOfMonths.push(month)
}

export const SearchForm = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "form",
      m(
        ".row",
        m(
          ".col-md-4",
          m(
            ".form-group",
            m("label", "Channel:"),
            m("input.form-control[type=text]", {
              value: state.channel,
              oninput: evt => actions.changeInput("channel", evt.target.value)
            })
          )
        ),
        m(
          ".col-md-4",
          m(
            ".form-group",
            m("label", "User:"),
            m("input.form-control[type=text]", {
              value: state.user,
              oninput: evt => actions.changeInput("user", evt.target.value)
            })
          )
        ),
        m(
          ".col-md-4",
          m(
            ".form-group",
            m("label", "Search term:"),
            m("input.form-control[type=text]", {
              value: state.term,
              oninput: evt => actions.changeInput("term", evt.target.value)
            })
          )
        )
      ),
      m(
        ".row",
        m(
          ".col-md-4",
          m(
            ".form-group",
            m("label", "Year:"),
            m(
              "select.form-control",
              {
                value: state.year,
                onchange: evt => actions.changeInput("year", evt.target.value)
              },
              years.map(year => m("option", { value: year }, year))
            )
          )
        ),
        m(
          ".col-md-4",
          m(
            ".form-group",
            m("label", "Starting Month:"),
            m(
              "select.form-control",
              {
                value: state.month,
                oninput: evt => actions.changeInput("month", evt.target.value)
              },
              months.map(month => m("option", { value: month }, month))
            )
          )
        ),
        m(
          ".col-md-4",
          m(
            ".form-group",
            m("label", "Number of Months to Search:"),
            m(
              "select.form-control",
              {
                value: state.noOfMonths,
                oninput: evt => actions.changeInput("noOfMonths", evt.target.value)
              },
              noOfMonths.map(month => m("option", { value: month }, month))
            )
          )
        )
      ),
      m(
        ".row",
        m(
          ".col-md-1",
          m(
            "button.btn.btn-primary[type=button]",
            { onclick: () => actions.search(state) },
            "Search"
          )
        ),
        m(
          ".col-md-11",
          m(
            "span",
            window.location.protocol,
            "//",
            window.location.host,
            window.location.pathname,
            "?",
            queryString.stringify({
              channel: state.channel,
              user: state.user,
              term: state.term,
              year: state.year,
              month: state.month,
              noOfMonths: state.noOfMonths
            })
          )
        )
      )
    )
}
