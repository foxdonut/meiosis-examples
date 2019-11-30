import m from "mithril"
import { addMonths, eachDayOfInterval, format, subDays } from "date-fns"

export const Actions = update => ({
  changeInput: (field, value) => update({ [field]: value }),
  search: state => {
    const fields = ["channel", "user", "term"].reduce((result, field) => {
      result[field] = state[field].trim()
      return result
    }, {})
    update(fields)

    const error = fields.channel.length === 0

    if (error) {
      update({ status: "Please enter a channel." })
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
            url: `https://cors-new.now.sh/https://gitter.im/${fields.channel}/archives/${dateString}`,
            responseType: "text"
          })
            .then(response => {
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
                    username = node.querySelector(".chat-item__username.js-chat-item-from")
                      .innerHTML
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
                .filter(chat => new RegExp(fields.user).test(chat.username))
                .filter(chat => new RegExp(fields.term, "i").test(chat.text))

              update({
                results: arr => {
                  arr[index] = resultArray
                  return arr
                }
              })
            })
            .catch(err => {
              update({ status: "Error: " + err })
            })
        })
      } catch (err) {
        update({ status: "Error: " + err })
      }
    }
  }
})
