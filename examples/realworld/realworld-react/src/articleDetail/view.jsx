import React from "react";
import marked from "marked";
import { path } from "ramda";

const isAuthor = username => article => article.author.username === username;

const authorMeta = article => (
  <span>
    <a className="btn btn-outline-secondary btn-sm" href={'#/editor/' + article.slug}>
      <i className="ion-edit"></i>
      {" "}Edit Article
    </a>
    <button className="btn btn-outline-danger btn-sm">
      <i className="ion-trash-a"></i>
      {" "}Delete Article
    </button>
  </span>
);

const nonAuthorMeta = article => (
  <div>
    <button className="btn btn-sm btn-outline-secondary">
      <i className="ion-plus-round"></i>
      &nbsp;
      Follow {article.author.username}
    </button>
    &nbsp;&nbsp;
    <button className="btn btn-sm btn-outline-primary">
      <i className="ion-heart"></i>
      &nbsp;
      Favorite Post
      <span className="counter">({article.favoritesCount})</span>
    </button>
  </div>
);

const articleMeta = (article, username) => (
  <div className="article-meta">
    <a href="#/profile/username"><img src={article.author.image}/></a>
    <div className="info">
      <a className="author" href="#/profileLink">{article.author.username}</a>
      <span className="date">{new Date(article.createdAt).toDateString()}</span>
    </div>
    {(isAuthor(username) ? authorMeta : nonAuthorMeta)(article)}
  </div>
);

export const createView = actions => model => {
  const article = model.article;
  const username = path(["user", "username"], model);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          {articleMeta(article, username)}
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <h2>{article.description}</h2>
            <div className="tag-list">
              {article.tagList.map(tag => (
                <span key={tag} className="tag-pill tag-default">{tag}</span>
              ))}
            </div>
            <p dangerouslySetInnerHTML={{__html: marked(article.body, { sanitize: true })}}></p>
          </div>
        </div>
        <hr/>
        <div className="article-actions">
          {articleMeta(article, username)}
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea className="form-control" placeholder="Write a comment..." rows="3"
                  onChange={actions.updateCommentField} value={model.comment}></textarea>
              </div>
              <div className="card-footer">
                <img className="comment-author-img" src={article.author.image} />
                <button className="btn btn-sm btn-primary"
                    onClick={actions.addComment(article.slug, model.comment)}>
                  Post Comment
                </button>
              </div>
            </form>
            {model.comments.map(comment => (
              <div key={'comment' + comment.id} className="card">
                <div className="card-block">
                  <p className="card-text">{comment.body}</p>
                </div>
                <div className="card-footer">
                  <a className="comment-author" href="">
                    <img className="comment-author-img" src={comment.author.image}/>
                  </a>
                  &nbsp;
                  <a className="comment-author" href="">{comment.author.username}</a>
                  <span className="date-posted">{new Date(comment.createdAt).toDateString()}</span>
                  <span className="mod-options">
                    <i className="ion-edit"></i>,
                    <i className="ion-trash-a" onClick={actions.deleteComment(article.slug, comment.id)}></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
