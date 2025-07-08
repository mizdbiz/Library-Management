import { Request, Response } from "express";
import { Studentservice } from "../services/student.service";
import { StudentRepository } from "../repositories/student.repository";
  

const StudentService = new Studentservice(new StudentRepository());

export const getStudents = async(req: Request, res: Response)=> {
    res.json(await StudentService.getAllStudents());
};

export const createStudentController = async(req: Request, res: Response) => {
    const student = await StudentService.createstudent(req.body);
    await StudentService.save(student);
    res.status(201).json(student);
};

export const updateStudentController = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updated = await StudentService.updatestudent(id, req.body);      
    res.json(updated);
};

export const deleteStudentController = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await StudentService.deletestudent(id);
    res.json(result);
};