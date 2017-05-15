import React from "react";

import { profileLink } from "../util";

const articleLink = slug => "#/article/" + slug;

export const createView = () => model => {
  const username = model.author.username;

  return (
    <div key={'article' + model.slug} className="article-preview">
      <div className="article-meta">
        <a href={profileLink(username)}><img src={model.author.image} /></a>
        <div className="info">
          <a href={profileLink(username)} className="author">{username}</a>
          <span className="date">{new Date(model.createdAt).toDateString()}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {model.favoritesCount}
        </button>
      </div>
      <a href={articleLink(model.slug)} className="preview-link">
        <h1>{model.title}</h1>
        <p>{model.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {model.tagList.map(tag => (
            <li key={'articleTag' + tag} className="tag-default tag-pill tag-outine">tag</li>
          ))}
        </ul>
      </a>
    </div>
  );
};
