import { Request, Response } from 'express';
import * as BookService from '../services/book.service';

export const api = (req: Request, res: Response) => {
  res.send('API is running');
};

export const getBooks = async (req: Request, res: Response): Promise<void> => {
  const books = await BookService.getAllBooks();
  res.status(200).json(books);
};

/*export const createBook = async (req: Request, res: Response): Promise<void> => {
  const { title, author } = req.body;
  const book = await BookService.createBook({ title, author });
  res.status(201).json(book);
};*/

