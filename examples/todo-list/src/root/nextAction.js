/* global $ */
export const nextAction = actions => state => {
  if (state.error) {
    $(".ui.modal")
      .modal({
        onApprove: actions.clearError
      })
      .modal("show");
  }
};
