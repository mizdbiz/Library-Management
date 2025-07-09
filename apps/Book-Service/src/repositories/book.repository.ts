import { AppDataSource } from '../databases/data-source';
import { Book } from '../entities/book.entity';
import { BookRepo } from '../interfaces/book.interface';

export class BookRepository implements BookRepo {
  private repo = AppDataSource.getRepository(Book);

  findAll(): Promise<Book[]> {
    return this.repo.find();
  }

  findById(id: number): Promise<Book | null> {
    return this.repo.findOneBy({ id });
  }

  create(data: Partial<Book>): Promise<Book> {
    const book = this.repo.create(data);
    return this.repo.save(book);
  }

  async update(id: number, data: Partial<Book>): Promise<Book | null> {
    await this.repo.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<{ message: string }> {
    await this.repo.delete(id);
    return { message: 'Book deleted' };
  }
}
