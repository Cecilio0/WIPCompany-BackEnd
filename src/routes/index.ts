import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const clearFileName = (filename:string):string | undefined =>{
    const file:string | undefined = filename.split('.').shift();
    return file;
}

//el siguiente metodo hara que las rutas para la request sean /nombreArchivoRuta
readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName:string | undefined = clearFileName(filename);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) =>{
            console.log(`se esta corriendo la ruta /${cleanName}`);
            
            router.use(`/${cleanName}`, moduleRouter.router)
        });
    }
});

export {router};