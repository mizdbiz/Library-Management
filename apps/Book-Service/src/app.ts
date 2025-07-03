import express, { Application } from 'express';
import { getBooks, api } from './controllers/book.controller';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', api);
app.get('/books', getBooks);


export default app;
