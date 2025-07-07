import { Request, Response } from "express";
import { getAllStudents, createstudent, updatestudent, deleteStudent } from "../services/student.service";
  

export const getStudents = async(req: Request, res: Response)=> {
    res.json(await getAllStudents());
};

export const createStudentController = async(req: Request, res: Response) => {
    const student = await createstudent(req.body);
    res.status(201).json(student);
};

export const updateStudentController = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updated = await updatestudent(id, req.body);      
    res.json(updated);
};

export const deleteStudentController = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await deleteStudent(id);
    res.json(result);
};