import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

import { Book } from "../../persistence/book";
import { Model, View, Propose } from "./types";

function renderBook(booksById: { [id: string]: Book }): (id: string) => View {
  return function(bookId: string): View {
    const book: Book = booksById[bookId];
    return (
      <TableRow key={ book.id }>
        <TableHeaderColumn>{ book.title }</TableHeaderColumn>
      </TableRow>
    );
  };
}

function view(model: Model, propose: Propose): View {
  function onTabsChange(tab: string) {
    propose({ type: "TabChange", tab: tab });
  }

  return (
    <MuiThemeProvider>
      <Tabs value={model.tab} onChange={onTabsChange}>
        <Tab value="books" label="Books">
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
        </Tab>
        <Tab value="other" label="Something Else">
          <div>Coming soon</div>
          {/* instead of href, use onclick, and propose with url change that does a push on the history */}
          <div><a href="/examples/library/booklist">List</a></div>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
  );
}

export { view };
