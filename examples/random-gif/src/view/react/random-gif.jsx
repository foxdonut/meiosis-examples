import React from "react";
import { only } from "../../util";
import { imgsrc, randomGif } from "../../random-gif";

const onEditTag = id => evt => randomGif.intents.editTag({ id, tag: evt.target.value });
const onNewGif = (id, tag) => () => randomGif.intents.newGif({ id, tag });

export const randomGifView = model => {
  return (<div>
    <span>Tag:</span>
    <input type="text" value={ model.tag } onChange={ only(onEditTag(model.id)) }/>
    <button className="btn btn-xs btn-default" onClick={ only(onNewGif(model.id, model.tag)) }>Random Gif</button>
    <div><img width="200" height="200" src={ imgsrc(model) }/></div>
  </div>);
};
