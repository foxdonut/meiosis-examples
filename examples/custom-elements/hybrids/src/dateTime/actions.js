export const Actions = update => ({
  editDate: (id, value) => update({ [id]: { date: value } }),

  editHour: (id, value) => update({ [id]: { hour: value } }),

  editMinute: (id, value) => update({ [id]: { minute: value } })
})
