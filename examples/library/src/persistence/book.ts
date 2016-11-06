import { Database, QueryResults } from "sql.js";

export interface Author {
  id?: string;
  lastName?: string;
  firstName?: string;
  books?: Array<Book>;
}

export interface Book {
  id?: string;
  title: string;
  genre?: string;
  isbn?: string;
  description?: string;
  authors?: Array<Author>;
}

function toAuthor(row: Array<any>): Author {
  return {
    id: row[5],
    lastName: row[6],
    firstName: row[7]
  };
}

function toBook(row: Array<any>): Book {
  return {
    id: row[0],
    title: row[1],
    genre: row[2],
    isbn: row[3],
    description: row[4],
    authors: [ toAuthor(row) ]
  };
}

function toBooks(res: QueryResults[]): Array<Book> {
  let books: Array<Book> = [];

  let lastBookId: string = null;
  let lastBook: Book = null;
  let rows: Array<any> = res[0].values;

  for (let i: number = 0, t: number = rows.length; i < t; i++) {
    let row: Array<any> = rows[i];
    let book: Book = toBook(row);

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

export function getAllBooks(db: Database): Array<Book> {
  //const query: string = "SELECT ID, TITLE, GENRE, ISBN, DESCRIPTION FROM BOOK ORDER BY TITLE";
  const query: string = `
    SELECT BK.ID, BK.TITLE, BK.GENRE, BK.ISBN, BK.DESCRIPTION, AUTH.ID AS AUTH_ID, AUTH.LAST_NAME, AUTH.FIRST_NAME
    FROM BOOK BK
    JOIN BOOK_AUTHOR BA ON (BA.BOOK_ID = BK.ID)
    JOIN AUTHOR AUTH ON (BA.AUTHOR_ID = AUTH.ID)
    ORDER BY TITLE ;
  `;
  const res: Array<QueryResults> = db.exec(query);
  return toBooks(res);
}
