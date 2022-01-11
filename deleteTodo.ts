import { Handler } from "express";
import { db } from "./db";
import { SuccessResponse } from "./types";

export const deleteTodo:Handler = (req,res)=>{
    const id = req.params.id;
    const todoIndex = db.findIndex((todo)=>todo.id === id);
    if(todoIndex>=0){
        db.splice(todoIndex,1);
    }

    return res.status(200).send({
        msg : `ID'si ${id} olan başarılı bir şekilde silindi`
    } as SuccessResponse);
}

