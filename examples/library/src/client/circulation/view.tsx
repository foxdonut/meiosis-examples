import * as React from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

import { Book } from "../../persistence/book";
import { Model, VDom, View } from "../root/types";
import { CirculationActions } from "./actions";

function renderBook(booksById: { [id: string]: Book }): (id: string) => VDom {
  return function(bookId: string): VDom {
    const book: Book = booksById[bookId];
    return (
      <TableRow key={ book.id }>
        <TableHeaderColumn>{ book.title }</TableHeaderColumn>
      </TableRow>
    );
  };
}

const view: View = (model: Model, actions: CirculationActions): VDom => {
  return (
    <Table>
      <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
        <TableRow>
          <TableHeaderColumn>Title</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={ false }>
        { model.bookIds.map(renderBook(model.booksById)) }
      </TableBody>
    </Table>
  );
}

export { view };
