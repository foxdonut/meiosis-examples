/* global $ */
export const nextAction = actions => state => {
  if (state.error) {
    $(".ui.modal.error")
      .modal({
        onApprove: actions.clearError
      })
      .modal("show");
  }
  else if (state.message) {
    $(".ui.modal.message").modal("show");
  }
  else if (!state.message && $(".ui.modal.message").hasClass("active")) {
    $(".ui.modal.message").modal("hide");
  }
};
