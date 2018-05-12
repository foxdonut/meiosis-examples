import React from "react";

export const createView = actions => model => (
  //oninit: actions.loadPopularTags,
  <div>
    <p>Popular Tags</p>
    <div className="tag-list">
      {model.tags.map(tag => (
        <a key={'tag' + tag} className="tag-pill tag-default" href=""
          onClick={actions.tagFilter(tag)}>{tag}</a>
      ))}
    </div>
  </div>
);
