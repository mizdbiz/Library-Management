import { AppDataSource } from '../databases/data-source';
import { Book } from '../entities/book.entity';

export const BookRepository = AppDataSource.getRepository(Book);
