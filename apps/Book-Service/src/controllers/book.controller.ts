import { Request, Response, NextFunction } from 'express';
import { BookService } from '../services/book.service';
import { BookRepository } from '../repositories/book.repository';

const bookService = new BookService(new BookRepository());

export const api = (req: Request, res: Response) => {
    res.send('API is running');
};

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (err) {
        next(err);
    }
};

export const createBookController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
};

export const updateBookController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const id = Number(req.params.id);
        const updated = await bookService.updateBook(id, req.body);
        if (updated) {
            res.json(updated);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    }catch (err) {
        next(err);
    }   
};
    
export const deleteBookController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const result = await bookService.deleteBook(id);
        res.json(result);
    } catch (err) {
        next(err);
    }
};
