import { IReply, IRequestHandler, Request, Server } from "hapi";
import { Database } from "sql.js";
import { Book, getAllBooks } from "../persistence/book";

function addBookRoutes(server: Server, db: Database): void {
  const handler: any = function(request: Request, reply: IReply) {
    const books: Array<Book> = getAllBooks(db);
    reply(books);
  };

  server.route({
    method: "GET",
    path: "/examples/library/api/books",
    handler
  });
}

export { addBookRoutes };
