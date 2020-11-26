export const Actions = update => ({
  togglePrecipitations: (local, value) => update(local.patch({ precipitations: value })),

  changeSky: (local, value) => update(local.patch({ sky: value }))
})
