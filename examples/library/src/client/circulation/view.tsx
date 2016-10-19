import * as React from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

import { Book } from "../../persistence/book";
import { BookListModel, VDom, View } from "../root/types";
import { CirculationActions } from "./actions";

function renderBook(booksById: { [id: string]: Book }): (id: string) => VDom {
  return function(bookId: string): VDom {
    const book: Book = booksById[bookId];
    return (
      <TableRow key={ book.id }>
        <TableHeaderColumn>{ book.title }</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>{ book.genre }</TableHeaderColumn>
      </TableRow>
    );
  };
}

const view: View<BookListModel, CirculationActions> = (model: BookListModel, actions: CirculationActions): VDom => {
  return (
    <Table>
      <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
        <TableRow>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Author(s)</TableHeaderColumn>
          <TableHeaderColumn>Genre</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={ false }>
        { model.bookIds.map(renderBook(model.booksById)) }
      </TableBody>
    </Table>
  );
}

export { view };
