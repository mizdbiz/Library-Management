
import { Student } from '../entities/student.entity';

export interface StudentRepositoryInterface {
    find: () => Promise<Student[]>; 
    findById: (id: number) => Promise<Student | null>;
    create: (data: Partial<Student>) => Student;
    update: (id: number, data: Partial<Student>) => Promise<Student | null>;
    delete: (id: number) => Promise<{ message: string }>;
    save: (student: Student) => Promise<Student>;
}