import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class createPacienteDto{
    @IsString()
    @IsNotEmpty()
    pacienteNombre: string;

    @IsString()
    @IsNotEmpty()
    pacienteApellido: string;

    @IsNumber()
    pacienteEdad: number;

    @IsString()
    pacienteTelefono: string;

    @IsDate()
    @IsNotEmpty()
    pacienteFecha_nacimiento: Date;

    @IsString()
    pacienteDireccion: string;
    
    @IsString()
    pacienteSexo: string;

}
