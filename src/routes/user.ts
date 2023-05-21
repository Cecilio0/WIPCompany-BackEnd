import { Router } from "express";
import { getSaves, logInUser, checkField, registerUser, overwriteSaves} from "../controllers/users";

const router = Router();
//router.tipoRequest('rutaALaRequest', (request, respuesta))
router.get('/:username/:password', logInUser);

router.post('/check', checkField);

router.post('/register', registerUser);

router.get('/saves/:id', getSaves);

router.post('/saves', overwriteSaves);

export { router };