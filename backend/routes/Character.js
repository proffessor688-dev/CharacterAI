import { addCharacter,getAllCharacter,deleteCharacter } from "../controllers/Character.js";
import { Router } from "express";

const characterRouter=Router();

characterRouter.get('/',getAllCharacter);
characterRouter.post('/add',addCharacter);
characterRouter.delete('/:id',deleteCharacter);


export default characterRouter;
