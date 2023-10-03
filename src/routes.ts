import { Router } from "express";
import { GetAllFood } from "./controller/getAllFood";

const route = Router()

route.get("/",GetAllFood);

export {route}