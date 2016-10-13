import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

import { Book } from "../../persistence/book";
import { Model, View } from "./types";

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
          {/* instead of href, use onclick, and propose with url change that does a push on the history */}
          <div><a href="/examples/library/booklist">List</a></div>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
  );
}

export { View, view };