// src/repositories/book.repository.ts
import { Book } from '../entities/book.entity';

const books: Book[] = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
];

export class BookRepository {
  getAllBooks(): Book[] {
    return books;
  }
}
