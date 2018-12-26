import _ from "lodash"

export const actions = update => ({
  editDate: value =>
    update(state => _.set(state, ["dateTime", "date"], value)),

  editHour: value =>
    update(state => _.set(state, ["dateTime", "hour"], value)),

  editMinute: value =>
    update(state => _.set(state, ["dateTime", "minute"], value))
})
