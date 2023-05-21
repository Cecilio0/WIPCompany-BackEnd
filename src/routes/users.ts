import { Router, Request, Response } from "express";
import { deleteUser, getUser, getUsers, registerUser, updateUser } from "../controllers/users";

const router = Router();
//router.tipoRequest('rutaALaRequest', (request, respuesta))
router.get('/:id', getUser);

router.get('/', getUsers);

router.post('/:id', registerUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export { router };