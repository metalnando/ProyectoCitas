import { Body, Controller, Get, Post } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { Transform } from 'class-transformer';
import { createMedicoDto } from './dto/crear-medico.dto';

@Controller('/medico')
export class MedicoController {
    constructor(private readonly medicoService: MedicoService) {}

    @Post()
    async createMedico(@Body() createMedicoDto: createMedicoDto) {
        return this.medicoService.createMedico(createMedicoDto)
    }

    // Buscar todos los medicos
    @Get()
    async getAllMedicos() {
        return this.medicoService.getMedicos();
        }

    
    

    

}
