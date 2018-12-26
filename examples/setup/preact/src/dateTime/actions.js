export const actions = update => ({
  editDate: value =>
    update(state => {
      state.dateTime.date = value
      return state
    }),

  editHour: value =>
    update(state => {
      state.dateTime.hour = value
      return state
    }),

  editMinute: value =>
    update(state => {
      state.dateTime.minute = value
      return state
    })
})
