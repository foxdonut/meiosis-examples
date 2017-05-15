import React from "react";
import { range } from "ramda";

export const createView = actions => model => {
  const currentPageNumber = (model.offset / model.limit) + 1;
  const pageList = range(1, Math.ceil(model.total / model.limit) + 1);

  return (
    <nav>
      <ul className="pagination">
        {pageList.map(pageNumber => (
          <li key={'page' + pageNumber} className="page-item{(pageNumber === currentPageNumber ? ' active' : '')}">
            <a className="page-link" href="" onClick={actions.page(model, pageNumber)}>
              {String(pageNumber)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
