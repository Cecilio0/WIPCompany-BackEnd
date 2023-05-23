import { Request, Response } from "express";
import handleHTTP from "../utils/error.handler";
import { getComments, insertComment } from "../services/comments";


const uploadComment = async(req:Request, res:Response) => {
    try{
        const responseItem = await insertComment(req.params.id, req.body);
        res.send(responseItem);
    } catch(e){
        handleHTTP(res, "ERROR_REGISTER_USER", e);
    }
}

const fetchComments = async (req:Request, res:Response) => {
    try{
        const responseItem = await getComments();
        res.send(responseItem);
    } catch(e){
        handleHTTP(res, "ERROR_REGISTER_USER", e);
    }
}

export {uploadComment, fetchComments}