import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class createMedicoDto{
    @IsString()
    @IsNotEmpty()
    medicoNombre: string;
    
    @IsString()
    medicoApellido: string;
    
    @IsNumber()
    @IsNotEmpty()
    medicoDocumento: string;
    
    @IsString()       
    medicoTelefono: string;
    
    @IsString()
    medicoEmail: string;
}