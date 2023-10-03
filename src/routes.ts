import { Router } from "express";
import { GetAllFood } from "./controller/getAllFood";
import { GetOneFood } from "./controller/getOneFood";
import { CreateFood } from "./controller/createFood";
import { UpdateFood } from "./controller/updateFood";
import { DeleteFood } from "./controller/deleteFood";

const route = Router()

route.get("/food",GetAllFood);
route.get("/food/:id",GetOneFood);
route.post("/food",CreateFood);
route.put("/food/:id",UpdateFood);
route.delete("/food/:id",DeleteFood);

export {route}