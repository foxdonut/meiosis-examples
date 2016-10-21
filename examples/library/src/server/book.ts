import { IReply, IRequestHandler, Request, Server } from "hapi";
import { Database } from "sql.js";
import { Promise } from "es6-promise";
import { Book, getAllBooks } from "../persistence/book";

function addBookRoutes(server: Server, db: Database): void {
  const handler: any = function(request: Request, reply: IReply) {
    const books: Array<Book> = getAllBooks(db);
    //reply(books);
    reply(new Promise((resolve: (value: Array<Book>) => void) => {
      setTimeout(() => resolve(books), 2000);
    }));
  };

  server.route({
    method: "GET",
    path: "/examples/library/api/books",
    handler
  });
}

export { addBookRoutes };
