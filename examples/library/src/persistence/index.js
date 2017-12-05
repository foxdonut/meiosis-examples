exports.findAllBooks = function(db, cb) {
  //const query: string = "SELECT ID, TITLE, GENRE, ISBN, DESCRIPTION FROM BOOK ORDER BY TITLE";
  const sql = `
    SELECT bk.id, bk.title, bk.genre, bk.isbn, bk.description, auth.id AS authId, auth.lastName, auth.firstName
    FROM book bk
    JOIN bookAuthor ba ON (ba.bookId = bk.id)
    JOIN author auth ON (ba.authorId = auth.id)
    ORDER BY title ;
  `;
  db.all(sql, [], cb);
};
