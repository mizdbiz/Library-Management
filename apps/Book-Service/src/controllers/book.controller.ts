// src/controllers/book.controller.ts
import { Request, Response } from 'express';
import { BookService } from '../services/book.service';

const bookService = new BookService();

export const getBooks = (req: Request, res: Response) => {
  const books = bookService.getBooks();
  res.json(books);
};
