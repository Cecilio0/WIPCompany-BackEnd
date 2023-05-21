import { Request, Response } from "express";
import handleHTTP from "../utils/error.handler";
import { insertUser, getUserId, isValueUsed, getUserSaves, overwriteUserSaves } from "../services/user";


const logInUser = async(req:Request, res:Response) => {
    try{
        const responseItem = await getUserId(
            {
                username: req.params.username,
                password: req.params.password
            }
        );

        const data = responseItem ? responseItem : { ERROR: "ERROR_LOGIN"}
        res.send(data);
    } catch(e){
        handleHTTP(res, "ERROR_GET_ITEM");
    }
}

const checkField = async({body}:Request, res:Response) => {
    try{
        const responseItem = await isValueUsed(body)
        res.send(responseItem);
    } catch(e){
        handleHTTP(res, "ERROR_GET_USERS", e);
    }
}

const registerUser = async({ body }:Request, res:Response) => {
    try{
        const responseItem = await insertUser(body);
        res.send(responseItem);
    } catch(e){
        handleHTTP(res, "ERROR_REGISTER_USER", e);
    }
}

const getSaves = async (req:Request, res:Response) => {
    try{
        const responseItem = await getUserSaves(req.params.id);
        res.send(responseItem);
    } catch(e){
        handleHTTP(res, "ERROR_REGISTER_USER", e);
    }
}

const overwriteSaves = async (req:Request, res:Response) => {
    try{
        const responseItem = await overwriteUserSaves(req.params.id, req.body);
        res.send(responseItem);
    } catch(e){
        handleHTTP(res, "ERROR_REGISTER_USER", e);
    }
}

export { logInUser, checkField, registerUser, getSaves, overwriteSaves};