import { Request, Response } from "express";
import { StudentService } from "../services/student.service";
import { StudentRepository } from "../repositories/student.repository";
  

const studentservice = new StudentService(new StudentRepository());

export const getStudents = async(req: Request, res: Response)=> {
    res.json(await studentservice.getAllStudents());
};

export const createStudentController = async(req: Request, res: Response) => {
    const student = await studentservice.createstudent(req.body);
    await studentservice.save(student);
    res.status(201).json(student);
};

export const updateStudentController = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updated = await studentservice.updatestudent(id, req.body);      
    res.json(updated);
};

export const deleteStudentController = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await studentservice.deletestudent(id);
    res.json(result);
};