import { Request, Response } from 'express';
import {getAllBooks,createBook,updateBook,deleteBook,} from '../services/book.service';

export const api = (req: Request, res: Response) => {
  res.send('API is running');
};

export const getBooks = async (req: Request, res: Response) => {
  res.json(await getAllBooks());
};

export const createBookController = async (req: Request, res: Response) => {
  const book = await createBook(req.body);
  res.status(201).json(book);
};

export const updateBookController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = await updateBook(id, req.body);
  res.json(updated);
};

export const deleteBookController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteBook(id);
  res.json(result);
};

