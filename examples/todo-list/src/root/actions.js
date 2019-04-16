export const navigateTo = pageId => ({ pageId })

export const showMessage = message => ({ message })

export const clearMessage = () => ({ message: null })

export const showError = error => ({ error })

export const clearError = () => ({ error: null })

export const actions = update => ({
  navigateTo: pageId => update(navigateTo(pageId)),

  showMessage: message => update(showMessage(message)),

  clearMessage: () => update(clearMessage()),

  showError: error => update(showError(error)),

  clearError: () => update(clearError())
})
