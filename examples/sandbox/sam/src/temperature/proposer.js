export const createProposer = acceptor => proposal => {

  const {
    precipitations,
    precipitation,
    date,
    amount,
    changeUnits
  } = proposal;

  if (proposing(precipitations)) {
    acceptor.togglePrecipitations(precipitations)
  }
  if (proposing(precipitation)) {
    acceptor.changePrecipitation(precipitation)
  }
  if (proposing(date)) {
    acceptor.editDate(date)
  }
  if (proposing(amount)) {
    acceptor.increase(amount)
  }
  if (proposing(changeUnits)) {
    acceptor.changeUnits()
  }
};

const proposing = (x) => typeof x !== 'undefined';
