import { Request, Response } from "express";
import { prisma } from "../util/client";

export async function DeleteFood(req:Request, res:Response){
    const {id} =req.params;

    const food = await prisma.food.findFirst({where:{id}});
    if(!food){
        return res.json("not found").status(400)
    }


    await prisma.food.delete({where:{id}});

    return res.sendStatus(200);
}
