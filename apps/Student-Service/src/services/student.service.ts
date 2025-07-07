import { studentRepository } from "../repositories/student.repository";

export const getAllStudents = () => studentRepository.find();

export const getStudentById = (id: number) => studentRepository.findOneBy({ id });

export const createstudent = (data: {name: string, email: string }) =>
    studentRepository.save(studentRepository.create(data));

export const updatestudent = async (id: number,data:{ name: string, email: string}) =>
    (await studentRepository.update(id,data), getStudentById(id));

export const deleteStudent = async (id: number) =>
    (await studentRepository.delete(id), {message: 'Student deleted'});

