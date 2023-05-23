export interface Comment{
    _id:            object,
    id_usuario:     object,
    contenido:      string,
    fecha_creacion: Date
}

export interface CommentVisual{
    nombre_usuario?: string,
    contenido:      string,
    fecha_creacion: Date
}