import { Request, Response } from 'express';
import { getAllBooks } from '../services/book.service';
import { Book } from '../entities/book.entity';

export const api = (req: Request, res: Response) => {
  res.send('API is running');
};

export const getBooks = (req: Request, res: Response): void => {
  const books: Book[] = getAllBooks();
  res.status(200).json(books);
};
