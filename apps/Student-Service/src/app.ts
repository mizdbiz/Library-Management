import express from 'express';
import * as StudentController from './controllers/student.controller';
import { errorHandler } from './middlewares/error.middleware';


const app = express();
app.use(express.json());

 
app.get('/students', StudentController.getStudents ); 
app.post('/createstudents', StudentController.createStudentController);
app.put('/updatestudent/:id', StudentController.updateStudentController);
app.delete('/deletestudent/:id', StudentController.deleteStudentController);


app.use(errorHandler);   
export default app;
