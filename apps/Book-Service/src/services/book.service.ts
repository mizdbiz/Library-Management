// src/services/book.service.ts
import { BookRepository } from '../repositories/book.repository';
import { Book } from '../entities/book.entity';

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  getBooks(): Book[] {
    return this.bookRepository.getAllBooks();
  }
}
