import { IsString, IsDateString, IsNotEmpty, isDate, isString, isDateString } from 'class-validator';

export class CrearCitaDto {
    @IsString()
    pacienteNombre:string;
    
    @IsString()
    pacienteApellido:string;
    
    @IsString()
    pacienteDocumento:string;

    @IsString()
    pacienteTelefono:string;

    @IsString()
    pacienteEmail:string;

    @IsString()
    pacienteDireccion:string;
    
    @IsDateString()
    fechaCita:Date;

    @IsString()
    horaCita:string;

    @IsString()
    motivoCita:string;

    @IsString()
    estadoCita:string;
    
    @IsString()   
    observaciones:string;
}