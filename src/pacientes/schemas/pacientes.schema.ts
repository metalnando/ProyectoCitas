import { Schema, Document } from 'mongoose';

export const PacienteSchema = new Schema({
  pacienteNombre: { type: String, required: true },
  pacienteApellido: { type: String, required: true },
  pacienteEdad: { type: Number, required: true },
  pacienteTelefono: { type: String, required: true },
  pacienteDireccion: { type: String, required: true },
  pacienteFecha_nacimiento: { type: Date, required: true },
  pacienteSexo: { type: String, required: true },
});

export interface IPaciente extends Document {
  pacienteNombre: string;
  pacienteApellido: string;
  pacienteEdad: number;
  pacienteTelefono: string;
  pacienteDireccion: string;
  pacienteFecha_nacimiento: Date;
  pacienteSexo: string;
}