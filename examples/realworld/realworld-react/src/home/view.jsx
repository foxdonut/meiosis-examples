import React from "react";

export const createView = components => model => {
  const content = model.tagFilter ? {
    globalFeedClass: "",
    tagFeedComponent: (<li className="nav-item">
      <a className="nav-link active" href="">{"#" + model.tagFilter}</a></li>)
  } : {
    globalFeedClass: " active",
    tagFeedComponent: null
  };

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {model.signedIn && (<li className="nav-item">
                  <a className="nav-link" href="">Your Feed</a>
                </li>)}
                <li className="nav-item">
                  <a className={'nav-link' + content.globalFeedClass} href="/">Global Feed</a>
                </li>
                {content.tagFeedComponent}
              </ul>
            </div>
            {components.Articles(model)}
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              {components.PopularTags(model)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
