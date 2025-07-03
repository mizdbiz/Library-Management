import { AppDataSource } from '../databases/data-source';
import { Book } from '../entities/book.entity';
/*import { Repository } from 'typeorm';*/

export const BookRepository = AppDataSource.getRepository(Book);
