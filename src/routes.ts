import { Router } from "express";
import { GetAllFood } from "./controller/getAllFood";
import { GetOneFood } from "./controller/getOneFood";
import { CreateFood } from "./controller/createFood";

const route = Router()

route.get("/food",GetAllFood);
route.get("/food/:id",GetOneFood);
route.post("/food",CreateFood)

export {route}