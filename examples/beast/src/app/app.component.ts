import { Component } from "@angular/core";

import "../assets/css/styles.css";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public model = {
    value: 20
  };

  protected increase() {
    this.model.value = this.model.value + 1;
  }
}
