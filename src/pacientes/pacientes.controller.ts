import { Body, Controller, Post, Get, Param, NotFoundException, Put } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { createPacienteDto } from './dto/create-paciente.dto';
import { IPaciente } from './schemas/pacientes.schema';
import { PropertyMetadata } from '@nestjs/core/injector/instance-wrapper';

@Controller('pacientes')
export class PacientesController {
    
    constructor(private readonly pacientesService: PacientesService) {}

    // Crear un nuevo paciente 
    @Post()
    async crearPaciente(@Body() PacienteDto: createPacienteDto): Promise<IPaciente>{
         return this.pacientesService.crearPaciente(PacienteDto);
        }

    // Buscar todos los pacientes 
    @Get()
    async findAllPaciente(): Promise<IPaciente[]> {
        return this.pacientesService.findAllPaciente();
    }

    // Buscar un paciente por id
    @Get(':id')
    async findById(@Param('id') id: string): Promise<IPaciente | null> {
        const paciente = await this.pacientesService.findById(id);
        if (!paciente) {
            throw new NotFoundException('Paciente no encontrado');
        }
        return paciente;
    }

    // Actualizar pacientes 
    @Put(':id')
    async actualizarPaciente(@Param('id') id:string,@Body() pacienteDto:createPacienteDto,): Promise<IPaciente>{
        return this.pacientesService.actualizarPaciente(id,pacienteDto);
    }


}
