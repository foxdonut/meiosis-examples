import m from "mithril"
import { eachDayOfInterval, format, parse } from "date-fns"

export const searchForm = {
  Actions: update => ({
    changeInput: (field, value) => update({ [field]: value.trim() }),
    search: state => {
      update({ results: [] })
      const error =
        ["channel", "user", "term", "startDate", "endDate"].filter(
          field => state[field].length === 0
        ).length > 0

      if (error) {
        update({ status: "Please enter a value for all inputs." })
      } else {
        try {
          const dates = eachDayOfInterval({
            start: parse(state.startDate, "yyyy-MM-dd", new Date()),
            end: parse(state.endDate, "yyyy-MM-dd", new Date())
          })
          const total = dates.length
          let processed = 0
          let order = 0

          dates.forEach(dt => {
            const dateString = format(dt, "yyyy/MM/dd")
            order++
            ;(function(index) {
              m.request({
                url: `https://cors-new.now.sh/https://gitter.im/${state.channel}/archives/${dateString}`,
                responseType: "text"
              }).then(response => {
                processed++
                update({ status: `Searching ${processed} of ${total}` })
                Array.from(
                  new DOMParser()
                    .parseFromString(response, "text/html")
                    .querySelectorAll(".chat-app #chat-container .chat-item")
                )
                  .map(node => {
                    const linkIdClass = Object.values(node.classList).filter(cls =>
                      new RegExp("^model-id-").test(cls)
                    )
                    const user = node.querySelector(".chat-item__from")

                    return {
                      index,
                      messageId:
                        linkIdClass.length === 1 ? linkIdClass[0].split("-")[2] : undefined,
                      name: user
                        ? node.querySelector(".chat-item__from.js-chat-item-from").innerHTML
                        : "N/A",
                      username: user
                        ? node.querySelector(".chat-item__username.js-chat-item-from").innerHTML
                        : "N/A",
                      dateTime: user
                        ? node.querySelector(".chat-item__time.js-chat-time").innerHTML
                        : "N/A",
                      text: node.querySelector(".chat-item__text.js-chat-item-text").innerHTML
                    }
                  })
                  .filter(chat => new RegExp(state.user).test(chat.username))
                  .filter(chat => new RegExp(state.term, "i").test(chat.text))
                  .map(result => update({ results: arr => arr.concat(result) }))
              })
            })(order)
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
            m("label", "Start Date:"),
            m("input.form-control[type=date]", {
              value: state.startDate,
              oninput: evt => actions.changeInput("startDate", evt.target.value)
            })
          )
        ),
        m(
          ".col-md-4",
          m(
            ".form-group",
            m("label", "End Date:"),
            m("input.form-control[type=date]", {
              value: state.endDate,
              oninput: evt => actions.changeInput("endDate", evt.target.value)
            })
          )
        ),
        m(
          ".col-md-4",
          m(
            "button.btn.btn-primary.search-button[type=button]",
            { onclick: () => actions.search(state) },
            "Search"
          )
        )
      )
    )
}
