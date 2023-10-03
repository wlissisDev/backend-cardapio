import { Request, Response } from "express";
import { prisma } from "../util/client";

export async function CreateFood(req: Request, res: Response) {
    const { name, price, url } = req.body;

    if(name===null||price===null||url===null){
        return res.json("dados inválidos")
    }
    
    await prisma.food.create({
        data: {
            name,
            price,
            url
        }
    });
    
    return res.sendStatus(201);
}