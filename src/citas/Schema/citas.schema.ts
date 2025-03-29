import { Schema } from "mongoose";
import { IPaciente } from "src/pacientes/schemas/pacientes.schema";

const citasSchema = new Schema({
        
    fechaCita: {type: Date, required: true},
    horaCita: {type: String, required: true},
    motivoCita: {type: String, required: true},
    estadoCita: {type: String, required: true},
    observaciones: {type: String},
    paciente: {type: Schema.Types.ObjectId, ref: 'Paciente'},
    
    
})

export interface ICitas extends Document {
    fechaCita: Date;
    horaCita: string;
    motivoCita: string;
    estadoCita: string;
    observaciones: string;
    ICitas:IPaciente;
}

export default citasSchema;
