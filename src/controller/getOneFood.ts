import { Request, Response } from "express";
import { prisma } from "../util/client";

export async function GetOneFood(req:Request,res:Response){
    const {id}=req.params;
    const food = await prisma.food.findFirst({
        where:{id}
    });

    if(!food){
        return res.json("not found");
    }
    return res.json(food);
}