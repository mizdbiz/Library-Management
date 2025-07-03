import { Student } from "../entities/student.entity";

export const getAllStudents = (): Student[] => {
    return [
        {
            id: 1,
            name: "John Doe",
            email: "joe@gmail.com"
        },      
    ];
}