import { Request, Response } from "express";
import { prisma } from "../util/client";

export async function GetAllFood(req:Request,res:Response){
    const foods = await prisma.food.findMany();
    return res.json(foods);
}