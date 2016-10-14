import { Database, QueryResults } from "sql.js";

interface Book {
  id?: string;
  title: string;
  isbn?: string;
  pages?: number;
  publishedDate?: string;
}

function toBook(row: Array<any>): Book {
  return {
    id: row[0],
    title: row[1],
    isbn: row[2],
    pages: row[3],
    publishedDate: row[4]
  };
}

function toBooks(res: QueryResults[]): Array<Book> {
  return res[0].values.map(toBook);
}

function getAllBooks(db: Database): Array<Book> {
  const query: string = "SELECT ID, TITLE, ISBN, PAGES, PUBLISHED_DATE FROM BOOK ORDER BY TITLE";
  const res: Array<QueryResults> = db.exec(query);
  return toBooks(res);
}

export {
  Book,
  getAllBooks
};
