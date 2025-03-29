import { Body, Controller, Post } from '@nestjs/common';
import { CitasService } from './citas.service';
import { ICitas } from './Schema/citas.schema';

@Controller('citas')
export class CitasController {
    constructor(private readonly citasService: CitasService) {}

    @Post()
    async create(@Body() cita: ICitas): Promise<ICitas> {
        return this.citasService.create(cita);
    }
}
