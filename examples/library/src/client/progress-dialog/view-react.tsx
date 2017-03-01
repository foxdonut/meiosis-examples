import * as React from "react";
import Dialog from "material-ui/Dialog";
import { Model } from "../app";

export const progressDialogView = function(model: Model): any {
  return (
    <Dialog open={model.inProgress} title="Loading" modal={true} actions={[]}>
      Please wait... (this delay is actually faked on the server for demonstration purposes.)
    </Dialog>
  );
}
