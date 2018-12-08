export const patches = {
  showMessage: message => ({ message }),
  clearMessage: () => ({ message: null }),
  showError: error => ({ error }),
  clearError: () => ({ error: null })
}
