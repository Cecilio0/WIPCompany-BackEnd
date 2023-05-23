import mongoose from "mongoose";
import { Comment, CommentVisual } from "../interfaces/comment_interface";
import { CommentModel } from "../models/comment";

const insertComment = async(_id:string, body:Comment) => {
    const responseInsert = await CommentModel.create({
        _id : new mongoose.Types.ObjectId(),
        id_usuario : new mongoose.Types.ObjectId(_id),
        contenido: body.contenido,
        fecha_creacion: Date.now()
    });
    return responseInsert;
}

const getComments = async() => {
    const responseGet = await CommentModel.aggregate(
        [
            {
                $lookup: {
                    from: "users",
                    localField: "id_usuario",
                    foreignField: "_id",
                    as: "comentador"
                }
            },
            {
                $unwind: "$comentador"
            },
            {
                $project: {
                    _id: false,
                    contenido: true,
                    fecha_creacion : true,
                    usuario: "$comentador.username"
                }
            }
        ]
    );
    console.log(responseGet);
    

    return responseGet;
}


export {insertComment, getComments};