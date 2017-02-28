import * as React from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

import { Author, Book } from "../../persistence";
import { BookListModel } from "../app";

function renderAuthor(author: Author) {
  return (
    <div key={ author.id }>{ author.lastName + ", " + author.firstName }</div>
  );
}

function renderBook(booksById: { [id: string]: Book }): (id: string) => any {
  return function(bookId: string): any {
    const book: Book = booksById[bookId];
    return (
      <TableRow key={ book.id }>
        <TableHeaderColumn style={{wordWrap: "break-word", whiteSpace: "normal"}}>{ book.title }</TableHeaderColumn>
        <TableHeaderColumn>{ book.authors.map(renderAuthor) }</TableHeaderColumn>
        <TableHeaderColumn>{ book.genre }</TableHeaderColumn>
      </TableRow>
    );
  };
}

export const circulationView = (model: BookListModel): any => {
  return (
    <Table>
      <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
        <TableRow>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Author(s)</TableHeaderColumn>
          <TableHeaderColumn>Genre</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={ false } stripedRows={ true }>
        { model.bookIds.map(renderBook(model.booksById)) }
      </TableBody>
    </Table>
  );
}
