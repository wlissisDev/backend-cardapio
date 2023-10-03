import { Request, Response } from "express";
import { prisma } from "../util/client";

export async function UpdateFood(req:Request, res:Response){
    const {id} =req.params;
    const {name, price, url} = req.body;

    const food = await prisma.food.findFirst({where:{id}});
    if(!food){
        return res.json("not found")
    }

    if(name==null||price==null||url==null){
        return res.status(400).json("missing data")
    }

    await prisma.food.update({
        where:{id},
        data:{name, price, url}
    })

    return res.sendStatus(200);
}
