import { Router } from "express";
import { pokeController } from "../controllers/controller.js";

export const pokeRouter = Router()
  .get('/', pokeController.getOneInfo)
  .get('/image', pokeController.getOneImage)
