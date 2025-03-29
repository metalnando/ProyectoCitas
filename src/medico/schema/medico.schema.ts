import { Schema } from "mongoose";

export const medicoSchema = new Schema({
    
    medicoNombre: {type: String, required: true},
    medicoApellido: {type: String, required: true},
    medicoDocumento: {type: String, required: true},
    medicoTelefono: {type: String, required: true},
    medicoEmail: {type: String, required: true},
    
    
})

export interface IMedico extends Document {
    medicoNombre: string;
    medicoApellido: string;
    medicoDocumento: string;
    medicoTelefono: string;
    medicoEmail: string;
    
}

export default medicoSchema;