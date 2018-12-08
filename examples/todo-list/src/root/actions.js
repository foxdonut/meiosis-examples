export const actions = ({ update, patches }) => ({
  navigateTo: pageId => update({ pageId }),
  clearError: () => update(patches.clearError())
})
