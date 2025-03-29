import { Module } from '@nestjs/common';
import { MedicoController } from './medico.controller';
import { MedicoService } from './medico.service';
import { MongooseModule } from '@nestjs/mongoose';
import { medicoSchema }  from './schema/medico.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Medico', schema: medicoSchema }]), // Registra el modelo
  ],
  controllers: [MedicoController],
  providers: [MedicoService]
})
export class MedicoModule {}
