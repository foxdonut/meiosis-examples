import m from "mithril";
import { randomGifView } from "../random-gif/view.jsx";

export const randomGifPairView = model => (
  <div>
    <div style={ { display: "inline-block" } }>
      { randomGifView(model.randomGifFirst) }
    </div>
    <div style={{display: "inline-block"}}>
      { randomGifView(model.randomGifSecond) }
    </div>
  </div>
);
