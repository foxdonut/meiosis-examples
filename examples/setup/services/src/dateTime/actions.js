export const actions = {
  editDate: (cell, value) => cell.update({ dateTime: { date: value } }),

  editHour: (cell, value) => cell.update({ dateTime: { hour: value } }),

  editMinute: (cell, value) => cell.update({ dateTime: { minute: value } })
};
