import * as React from "react";
import { ReactElement } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

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
      <Tabs>
        <Tab label="Books">
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
        </Tab>
        <Tab label="Something Else">
          <div>Coming soon</div>
          <div><a href="/examples/library/booklist">List</a></div>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
  );
}

export { View, view };