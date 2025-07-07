import { AppDataSource } from  '../database/data-source';
import { Student } from '../entities/student.entity';

export const studentRepository = AppDataSource.getRepository(Student);