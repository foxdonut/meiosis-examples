export const actions = {
  loadData: (cell) =>
    setTimeout(
      () =>
        cell.update({
          data: ['One', 'Two']
        }),
      1500
    )
};
