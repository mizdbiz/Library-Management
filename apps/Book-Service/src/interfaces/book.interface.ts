import { Book } from '../entities/book.entity';

export interface BookRepo {
  findAll(): Promise<Book[]>;
  findById(id: number): Promise<Book | null>;
  create(data: Partial<Book>): Promise<Book>;
  update(id: number, data: Partial<Book>): Promise<Book | null>;
  delete(id: number): Promise<{ message: string }>;
}
