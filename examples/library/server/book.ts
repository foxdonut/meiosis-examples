import { IReply, IRequestHandler, Request, Server } from "hapi";
import { Database } from "sql.js";
import { Book, getAllBooks } from "library-persistence";

function addBookRoutes(server: Server, db: Database): void {
  const handler: any = (request: Request, reply: IReply) => {
    const books: Array<Book> = getAllBooks(db);
    reply(books);
  };

  server.route({
    method: "GET",
    path: "/books",
    handler
  });
}

export { addBookRoutes };
