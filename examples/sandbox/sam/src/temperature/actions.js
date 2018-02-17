export const createActions = acceptor => ({
  togglePrecipitations: evt => acceptor.togglePrecipitations(evt.target.checked),

  changePrecipitation: evt => acceptor.changePrecipitation(evt.target.value),

  editDate: evt => acceptor.editDate(evt.target.value),

  increase: amount => () => acceptor.increase(amount),

  changeUnits: () => acceptor.changeUnits(),
});
