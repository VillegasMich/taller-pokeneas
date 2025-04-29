import { Router } from "express";
import { pokeController } from "./controller.js";

export const pokeRouter = Router()
  .get('/', pokeController.getOneInfo)
  .get('/image', pokeController.getOneImage)
