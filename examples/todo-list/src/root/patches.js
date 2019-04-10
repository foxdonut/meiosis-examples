export const navigateTo = pageId => ({ pageId })

export const showMessage = message => ({ message })

export const clearMessage = () => ({ message: null })

export const showError = error => ({ error })

export const clearError = () => ({ error: null })
