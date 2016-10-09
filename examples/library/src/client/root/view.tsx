import * as React from "react";
import { ReactElement } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { Book } from "../../persistence/book";
import { Model } from "./model";

type View = ReactElement<any>;

function renderBook(book: Book): View {
  return (
    <TableRow key={ book.id }>
      <TableHeaderColumn>{ book.title }</TableHeaderColumn>
    </TableRow>
  );
}

function view(model: Model): View {
  return (
    <MuiThemeProvider>
      <div>
        <div>Books:</div>
        <Table>
          <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={ false }>
            { model.books.map(renderBook) }
          </TableBody>
        </Table>
      </div>
    </MuiThemeProvider>
  );
}

export { View, view };