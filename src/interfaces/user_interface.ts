export interface User {
    _id:                object,
    username:           string,
    password:           string,
    correo:             string,
    primer_nombre:      string,
    segundo_nombre:     string,
    apellidos:          string,
    genero:             "M" | "F" | "O",
    fecha_nacimiento:   Date,//se ingresa "yyyy-mm-dd"
    guardado1:          string,
    guardado2:          string,
    guardado3:          string
}

export interface LoginUser {
    username:           string,
    password:           string
}

export interface CheckUserData {
    username:          string,
    correo:            string
}

export interface UpdateSave {
    guardado1:          string,
    guardado2:          string,
    guardado3:          string
}