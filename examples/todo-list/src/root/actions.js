export const actions = {
  navigateTo: pageId => ({ pageId }),
  showMessage: message => ({ message }),
  clearMessage: () => ({ message: null }),
  showError: error => ({ error }),
  clearError: () => ({ error: null })
}
