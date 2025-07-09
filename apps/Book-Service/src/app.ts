import express from 'express';
import * as BookController from './controllers/book.controller';
import { errorHandler } from './middlewares/error.middleware';

const app = express();
app.use(express.json());

app.get('/', BookController.api);
app.get('/books', BookController.getBooks);
app.post('/books', BookController.createBookController);
app.put('/books/:id', BookController.updateBookController);
app.delete('/books/:id', BookController.deleteBookController);
app.use(errorHandler);

export default app;
