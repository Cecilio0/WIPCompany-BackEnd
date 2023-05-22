import mongoose from "mongoose";
import { LoginUser, User, CheckUserData, UpdateSave } from "../interfaces/user_interface";
import { UserModel, /*LoginUserModel*/} from "../models/user"

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
            _id: new mongoose.Types.ObjectId(_id)
        },
        {
            _id:true,
            guardado1:true,
            guardado2:true,
            guardado3:true,
        }
    )
    let saves;
    if (responseFind){
        saves = {
            _id: responseFind?._id,
            guardado1 : responseFind?.guardado1,
            guardado2 : responseFind?.guardado2,
            guardado3 : responseFind?.guardado3
        };
    } else {
        saves = "ERROR_USER_NOT_FOUND"
    }
    
    
    return saves;
};

const overwriteUserSaves = async(_id:string, body: UpdateSave) => {
    const responseFind = await UserModel.findOneAndUpdate(
        {
            _id:new mongoose.Types.ObjectId(_id)
        },
        {
            $set:{
                guardado1:body.guardado1,
                guardado2:body.guardado2,
                guardado3:body.guardado3,
            }
            
        },
    )
    return responseFind? responseFind: "ERROR_USER_NOT_FOUND";
};

export { insertUser, getUserId, isValueUsed, getUserSaves, overwriteUserSaves };