import { Request, Response } from "express";
import handleHTTP from "../utils/error.handler";


const getUser = (req:Request, res:Response) => {
    try{

    } catch(e){
        handleHTTP(res, "ERROR_GET_ITEM");
    }
}

const getUsers = (req:Request, res:Response) => {
    try{
        
    } catch(e){
        handleHTTP(res, "ERROR_GET_USERS");
    }
}

const updateUser = (req:Request, res:Response) => {
    try{
        
    } catch(e){
        handleHTTP(res, "ERROR_UPDATE_USER");
    }
}

const registerUser = ({ body }:Request, res:Response) => {
    try{
        res.send(body);
    } catch(e){
        handleHTTP(res, "ERROR_REGISTER_USER");
    }
}

const deleteUser = (req:Request, res:Response) => {
    try{

    } catch(e){
        handleHTTP(res, "ERROR_DELETE_USER");
    }
}

export { getUser, getUsers, updateUser, registerUser, deleteUser };