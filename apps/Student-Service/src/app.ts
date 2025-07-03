import express from 'express';
import { getStudents } from './controllers/student.controller';

const app = express();
app.use(express.json());

app.get('/students', getStudents ); 

    
export default app;
