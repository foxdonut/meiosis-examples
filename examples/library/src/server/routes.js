import { getAllBooks } from "../persistence";

function addBookRoutes(server, db) {
  const handler = function(request, reply) {
    const books = getAllBooks(db);
    //reply(books);
    reply(new Promise(resolve => {
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
