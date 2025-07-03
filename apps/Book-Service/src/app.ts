import express, { Application } from 'express';
import * as BookController from './controllers/book.controller';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', BookController.api);

app.get('/books', BookController.getBooks);
/*app.post('/books', BookController.createBook);*/

export default app;
