import { Schema, Types, model, Model } from "mongoose";
import { User, LoginUser } from "../interfaces/user_interface";

const UserSchema = new Schema<User>(
    {
        _id:{
            type: Object
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        },
        correo:{
            type: String,
            required: true,
            unique: true
        },
        primer_nombre:{
            type: String,
            required: true,
        },
        segundo_nombre:{
            type: String
        },
        apellidos:{
            type: String,
            required: true,
        },
        genero:{
            type: String,
            enum: ["M", "F", "O"],
            required: true,
        },
        fecha_nacimiento:   {
            type: Date,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UserModel = model("users", UserSchema);
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

export { UserModel, /*LoginUserModel*/ };