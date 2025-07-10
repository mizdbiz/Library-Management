import { Request, Response, NextFunction } from "express";
import { StudentService } from "../services/student.service";
import { StudentRepository } from "../repositories/student.repository";
  

const studentservice = new StudentService(new StudentRepository());

export const getStudents = async(req: Request, res: Response, next: NextFunction)=> {
    try {
        const students = await studentservice.getAllStudents();
        res.json(students);
    } catch (error) {
        next(error); //throw
    }
};

export const createStudentController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const student = studentservice.createstudent(req.body);
        await studentservice.save(student);
        res.status(201).json(student);
    } catch (error) {
        next(error);
    }
};

export const updateStudentController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const updated = await studentservice.updatestudent(id, req.body);      
        if (updated)
            {res.json(updated);}
        else {
            throw new Error("Student not found");
        }
    } catch (error) {
        next(error);
    }
};

export const deleteStudentController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const result = await studentservice.deletestudent(id);
        res.json(result);
    } catch (error) {
        next(error);
    }
};