/* global $ */

export const showError = error => {
  $("#error").text(error)

  $(".ui.modal.error")
    .modal({
      onApprove: () => $(".ui.modal.error").modal("hide")
    })
    .modal("show")
}

export const showMessage = message => {
  $("#message").text(message)
  $(".ui.modal.message").modal("show")
}

export const clearMessage = () => $(".ui.modal.message").modal("hide")
