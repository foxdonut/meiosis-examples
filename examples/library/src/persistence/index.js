function toAuthor(row) {
  return {
    id: row[5],
    lastName: row[6],
    firstName: row[7]
  };
}

function toBook(row) {
  return {
    id: row[0],
    title: row[1],
    genre: row[2],
    isbn: row[3],
    description: row[4],
    authors: [ toAuthor(row) ]
  };
}

function toBooks(res) {
  let books = [];

  let lastBookId = null;
  let lastBook = null;
  let rows = res[0].values;

  for (let i = 0, t = rows.length; i < t; i++) {
    let row = rows[i];
    let book = toBook(row);

    if (lastBookId === book.id) {
      lastBook.authors.push(toAuthor(row));
    }
    else {
      if (lastBook !== null) {
        books.push(lastBook);
      }
      lastBookId = book.id;
      lastBook = book;
    }
    if (i === t - 1) {
      books.push(lastBook);
    }
  }

  return books;
}

export function getAllBooks(db) {
  //const query: string = "SELECT ID, TITLE, GENRE, ISBN, DESCRIPTION FROM BOOK ORDER BY TITLE";
  const query = `
    SELECT BK.ID, BK.TITLE, BK.GENRE, BK.ISBN, BK.DESCRIPTION, AUTH.ID AS AUTH_ID, AUTH.LAST_NAME, AUTH.FIRST_NAME
    FROM BOOK BK
    JOIN BOOK_AUTHOR BA ON (BA.BOOK_ID = BK.ID)
    JOIN AUTHOR AUTH ON (BA.AUTHOR_ID = AUTH.ID)
    ORDER BY TITLE ;
  `;
  const res = db.exec(query);
  return toBooks(res);
}
