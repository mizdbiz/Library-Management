import { Book } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository';

export class BookService {
  constructor(private bookRepo: BookRepository) {}
  
  getAllBooks = () => this.bookRepo.findAll();

  getBookById = (id: number) => this.bookRepo.findById(id);

  createBook = (data: Partial<Book>) => this.bookRepo.create(data);

  updateBook = (id: number, data: Partial<Book>) => this.bookRepo.update(id, data);

  deleteBook = (id: number) => this.bookRepo.delete(id);
}