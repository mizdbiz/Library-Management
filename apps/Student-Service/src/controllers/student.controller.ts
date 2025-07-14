import { Request, Response, NextFunction } from "express";
import { StudentService } from "../services/student.service";
import { StudentRepository } from "../repositories/student.repository";
//import { error } from "console";
  

const studentservice = new StudentService(new StudentRepository());

export const getStudents = async(req: Request, res: Response, next: NextFunction)=> {
    try {
        const students = await studentservice.getAllStudents();
        res.json(students);
    } catch (error) {
        throw new Error("Failed to fetch students");
    }
};

export const createStudentController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const student = studentservice.createstudent(req.body);
        await studentservice.save(student);
        res.status(201).json({ message: "Student created successfully", student });
    } catch (error) {
        throw new Error("Failed to create student");
    }
};

/*export const createStudentController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const student = studentservice.createstudent(req.body);
    await studentservice.save(student);
    res.status(201).json(student);
  } catch (error) {
    // Forward the error to Express error handler
    next(new Error("Failed to create student"));
  }
};*/

export const updateStudentController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const updated = await studentservice.updatestudent(id, req.body);      
        if (updated)
            {res.json(updated);}
        else {
            const err = new Error("Student not found");
            next(err);
        }
    } catch (error) {
        throw new Error("Failed to update student");

};
}
export const deleteStudentController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const result = await studentservice.deletestudent(id);
        if (!result) {
            //return res.status(404).json({ message: "Student not found" });
            throw new Error("Student not found");
        }
        else{
            res.status(200).json({ message: "Student deleted successfully" });
        }
        return res.json(result);
    } catch (error) {
        return next(Error);
    }
};



