import { Router } from "express";
import { fetchComments, uploadComment } from "../controllers/comments";

const router = Router();
//router.tipoRequest('rutaALaRequest', (request, respuesta))
router.get('/fetch', fetchComments);

router.post('/upload/:id', uploadComment);

export { router };