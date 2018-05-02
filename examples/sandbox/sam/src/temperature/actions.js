export const createActions = Model => ({
  togglePrecipitations: evt => Model.present({ precipitations: evt.target.checked }),

  changePrecipitation: evt => Model.present({ precipitation: evt.target.value }),

  editDate: evt => Model.present({ date: evt.target.value }),

  increase: amount => () => Model.present({ increase: amount }),

  changeUnits: () => Model.present({ changeUnits: true })
});