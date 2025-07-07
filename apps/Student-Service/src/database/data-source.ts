import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Student } from '../entities/student.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234', // Replace with your MySQL password
  database: 'student_db',
  synchronize: true, // Creates tables automatically
  logging: false,
  entities: [Student],
});
