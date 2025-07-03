import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Book } from '../entities/book.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234', 
  database: 'books_db',  
  synchronize: true,               
  logging: false,
  entities: [Book],
});