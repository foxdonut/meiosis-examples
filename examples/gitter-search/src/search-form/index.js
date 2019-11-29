import m from "mithril"
import { addMonths, eachDayOfInterval, format, getYear, subDays } from "date-fns"

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

export const searchForm = {
  Actions: update => ({
    changeInput: (field, value) => update({ [field]: value }),
    search: state => {
      const fields = ["channel", "user", "term"].reduce((result, field) => {
        result[field] = state[field].trim()
        return result
      }, {})
      update(fields)

      const error = false

      if (error) {
        update({ status: "Please enter a value for all inputs." })
      } else {
        try {
          const start = new Date(state.year, parseInt(state.month, 10) - 1, 1)
          const end = subDays(addMonths(start, parseInt(state.noOfMonths, 10)), 1)
          const dates = eachDayOfInterval({ start, end })
          const total = dates.length
          let processed = 0

          update({ status: "Searching...", results: new Array(total).fill(null) })

          dates.forEach((dt, index) => {
            const dateString = format(dt, "yyyy/MM/dd")
            m.request({
              url: `https://cors-new.now.sh/https://gitter.im/${state.channel}/archives/${dateString}`,
              responseType: "text"
            }).then(response => {
              processed++

              update({
                status:
                  processed < total
                    ? `Searching... ${Math.round((processed * 100) / total)}%`
                    : "Search completed"
              })

              let name = null
              let username = null
              let dateTime = null

              const resultArray = Array.from(
                new DOMParser()
                  .parseFromString(response, "text/html")
                  .querySelectorAll(".chat-app #chat-container .chat-item")
              )
                .map(node => {
                  const linkIdClass = Object.values(node.classList).filter(cls =>
                    new RegExp("^model-id-").test(cls)
                  )
                  const user = node.querySelector(".chat-item__from")

                  if (user) {
                    name = node.querySelector(".chat-item__from.js-chat-item-from").innerHTML
                    username = node.querySelector(".chat-item__username.js-chat-item-from").innerHTML
                    dateTime = node.querySelector(".chat-item__time.js-chat-time").innerHTML
                  }

                  return {
                    messageId:
                      linkIdClass.length === 1
                        ? linkIdClass[0].split("-")[2]
                        : new Date().getTime(),
                    name,
                    username,
                    dateTime,
                    text: node.querySelector(".chat-item__text.js-chat-item-text").innerHTML
                  }
                })
                .filter(chat => new RegExp(state.user).test(chat.username))
                .filter(chat => new RegExp(state.term, "i").test(chat.text))

              update({
                results: arr => {
                  arr[index] = resultArray
                  return arr
                }
              })
            })
          })
        } catch (err) {
          update({ status: "Error: " + err })
        }
      }
    }
  })
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
          ".col-md-4",
          m(
            "button.btn.btn-primary[type=button]",
            { onclick: () => actions.search(state) },
            "Search"
          )
        )
      )
    )
}
