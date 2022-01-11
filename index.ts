
import express from 'express';
import { addTodo } from './addTodo';
import { deleteTodo } from './deleteTodo';
import { getTodos } from './getTodos';
import { toogleTodo } from './toggleTodo';

const app = express();
app.use(express.json());

app.post('/add',addTodo);
app.get('/todos',getTodos);
app.delete('/deleteTodo/:id',deleteTodo);
app.post('/toggleTodo/:id',toogleTodo);

app.listen(4000, ()=>{
    console.log("server başarılı bir şekilde yüklendi");
}) 
