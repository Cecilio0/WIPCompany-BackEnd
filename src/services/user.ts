import mongoose from "mongoose";
import { LoginUser, User, CheckUserData } from "../interfaces/user_interface";
import { UserModel, /*LoginUserModel*/} from "../models/user"
import { response } from "express";

//verificaciones de datos e insercion
const isValueUsed = async(body: CheckUserData) => {
    const responseInsert = await UserModel.find(
        {
            $or: [
                {username : body.username},
                {correo : body.correo},
            ]
        }
        ,
        {
            _id:false,
            username: true
        }
    );
    return responseInsert;
};

const insertUser = async(user: User) => {
    user._id = new mongoose.Types.ObjectId();
    const responseInsert = await UserModel.create(user);
    return responseInsert;
};

//devolver el id como forma de login
const getUserId = async(login: LoginUser) => {
    const responseFind = await UserModel.findOne(
        {
            username: login.username,
            password: login.password
        },
        {
            _id:true
        }
    )
    return responseFind;
};

const getUserSaves = async(_id: string) => {
    const responseFind = await UserModel.findOne(
        {
            _id:_id
        },
        {
            _id:false,
            guardado1:true,
            guardado2:true,
            guardado3:true,
        }
    )
    const saves = [
        {guardado1 : responseFind?.guardado1},
        {guardado2 : responseFind?.guardado2},
        {guardado3 : responseFind?.guardado3},
    ];
    return saves;
};

const overwriteUserSaves = async(body: User) => {
    const responseFind = await UserModel.findOneAndUpdate(
        {
            _id:body._id
        },
        {
            guardado1:body.guardado1,
            guardado2:body.guardado2,
            guardado3:body.guardado3,
        },
    )
    return responseFind;
};

export { insertUser, getUserId, isValueUsed, getUserSaves, overwriteUserSaves };