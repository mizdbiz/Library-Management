import { Request, Response } from "express";
import { getAllStudents } from "../services/student.service";
import { Student } from "../entities/student.entity";   

export const getStudents = (req: Request, res: Response): void => {
    const students: Student[] = getAllStudents();
    res.json(students);
};