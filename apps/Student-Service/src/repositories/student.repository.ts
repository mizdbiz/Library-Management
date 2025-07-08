import { AppDataSource } from  '../database/data-source';
import { Student } from '../entities/student.entity';

export class StudentRepository {
    private repo = AppDataSource.getRepository(Student);

    find = () => this.repo.find();

    findById = (id: number) => this.repo.findOneBy({ id });

    create = (data: Partial<Student> ) => this.repo.create(data);
    
    update = (id: number, data: Partial<Student>) => this.repo.update(id, data).then(() => this.findById(id));

    delete = (id: number) => this.repo.delete(id).then(() => ({ message: 'Student was deleted' }));

    save = (student: Student) => this.repo.save(student);
}