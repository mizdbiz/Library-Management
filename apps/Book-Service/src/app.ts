// src/app.ts
import express from 'express';
import { getBooks } from './controllers/book.controller';

const app = express();

app.use(express.json());

app.get('/books', getBooks);

export default app;
