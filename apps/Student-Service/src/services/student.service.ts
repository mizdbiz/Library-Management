import { StudentRepository } from "../repositories/student.repository";
import { Student } from "../entities/student.entity";

export class  StudentService {
    constructor(private studentrepo : StudentRepository){}

    getAllStudents = () => this.studentrepo.find();

    findOneBy = (id: number) => this.studentrepo.findById(id);

    createstudent = (data: Partial<Student>) => this.studentrepo.create(data);

    updatestudent = (id: number, data: Partial<Student>) => this.studentrepo.update(id, data);

    deletestudent = (id: number) => this.studentrepo.delete(id);

    save = (student: Student) => this.studentrepo.save(student);

}




