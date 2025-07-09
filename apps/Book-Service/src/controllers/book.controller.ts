import { Request, Response } from 'express';
import { BookService } from '../services/book.service';
import { BookRepository } from '../repositories/book.repository';

const bookService = new BookService(new BookRepository());

export const api = (req: Request, res: Response) => {
    res.send('API is running');
};

export const getBooks = async (req: Request, res: Response) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};

export const createBookController = async (req: Request, res: Response) => {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
};

export const updateBookController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updated = await bookService.updateBook(id, req.body);
    res.json(updated);
};

export const deleteBookController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await bookService.deleteBook(id);
    res.json(result);
};
