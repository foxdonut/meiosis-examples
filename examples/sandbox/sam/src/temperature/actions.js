export const createActions = propose => ({
  togglePrecipitations: evt => propose({ precipitations: evt.target.checked }),

  changePrecipitation: evt => propose({ precipitation: evt.target.value }),

  editDate: evt => propose({ date: evt.target.value }),

  increase: amount => () => propose({ amount }),

  changeUnits: () => propose({ changeUnits: true }),
});
