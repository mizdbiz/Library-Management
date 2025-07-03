import { Book } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository';

export const getAllBooks = async (): Promise<Book[]> => {
  return await BookRepository.find();
};

export const getBookById = async (id: number): Promise<Book | null> => {
  return await BookRepository.findOneBy({ id });
};

/*export const createBook = async (data: Partial<Book>): Promise<Book> => {
  const book = BookRepository.create(data);
  return await BookRepository.save(book);
};

export const updateBook = async (id: number, data: Partial<Book>): Promise<Book | null> => {
  const book = await BookRepository.findOneBy({ id });
  if (!book) return null;

  BookRepository.merge(book, data);
  return await BookRepository.save(book);
};

export const deleteBook = async (id: number): Promise<boolean> => {
  const result = await BookRepository.delete(id);
  return result.affected !== 0;
};
*/