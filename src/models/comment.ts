import { Schema, Types, model, Model } from "mongoose";
import { Comment } from "../interfaces/comment_interface";

const CommentSchema = new Schema<Comment>(
    {
        _id:{
            type: Object,
        },
        id_usuario:{
            type: Object,
            required: true
        },
        contenido:{
            type: String,
            required: true
        }, 
        fecha_creacion:{
            type: Date,
            required: true
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

const CommentModel = model("comments", CommentSchema);
/*
const LoginUserSchema = new Schema<LoginUser>(
    {
        
        username:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const LoginUserModel = model("users", UserSchema);
*/

export { CommentModel };