import m from "mithril";
import { randomGif } from "../random-gif";

export const view = model => (
  <div>
    <div style={ { display: "inline-block" } }>
      { randomGif.view(model.randomGifFirst) }
    </div>
    <div style={{display: "inline-block"}}>
      { randomGif.view(model.randomGifSecond) }
    </div>
  </div>
);
