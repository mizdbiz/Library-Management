import { BookRepository } from '../repositories/book.repository';

export const getAllBooks = () => BookRepository.find();

export const getBookById = (id: number) => BookRepository.findOneBy({ id });


export const createBook = (data: { title: string; author: string; pages?: number }) =>
  BookRepository.save(BookRepository.create(data));

export const updateBook = async (id: number, data: { title?: string; author?: string; pages?: number }) =>
  (await BookRepository.update(id, data),  getBookById(id));

export const deleteBook = async (id: number) =>
  (await BookRepository.delete(id), { message: 'Book deleted' });
