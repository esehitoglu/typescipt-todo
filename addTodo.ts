import { Request,Response,Handler} from "express";
import { db } from "./db";
import { SuccessResponse, TodoRequestBody } from "./types";
import { TodoItem } from "./types";

export const addTodo:Handler = (req,res)=>{
    const body:TodoRequestBody = req.body;
    const todoItem:TodoItem = {
        isDone : false,
        text : body.text,
        id : Math.random().toString()
    };
    db.push(todoItem);
    res.status(200).send({
        msg : 'Başarılı bir şekilde eklendi'
    } as SuccessResponse)
}

