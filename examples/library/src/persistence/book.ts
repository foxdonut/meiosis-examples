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

function toBook(row: Array<any>): Book {
  return {
    id: row[0],
    title: row[1],
    genre: row[2],
    isbn: row[3],
    description: row[4]
  };
}

function toBooks(res: QueryResults[]): Array<Book> {
  return res[0].values.map(toBook);
}

export function getAllBooks(db: Database): Array<Book> {
  const query: string = "SELECT ID, TITLE, GENRE, ISBN, DESCRIPTION FROM BOOK ORDER BY TITLE";
  const res: Array<QueryResults> = db.exec(query);
  return toBooks(res);
}
