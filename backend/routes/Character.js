import { addCharacter,getAllCharacter,deleteCharacter } from "../controllers/Character.js";
import {getImage} from '../middleware/upload.js';
import { Router } from "express";
import {upload} from "../middleware/upload.js";
const characterRouter=Router();

characterRouter.get('/',getAllCharacter);
characterRouter.post('/add',upload.single('avatar'),getImage,addCharacter);
characterRouter.delete('/:id',deleteCharacter);


export default characterRouter;
