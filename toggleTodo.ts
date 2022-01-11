import { Handler } from "express";
import { db } from "./db";
import { SuccessResponse } from "./types";


export const toogleTodo:Handler=(req,res)=>{
    const id = req.params.id
    const todoIndex = db.findIndex((todo)=>todo.id === id);
    if(todoIndex>=0){
        db[todoIndex].isDone = !db[todoIndex].isDone;
    }

    return res.status(200).send({
        msg : `ID'si ${id} olan başarılı bir şekilde güncellendi`
    } as SuccessResponse);
}