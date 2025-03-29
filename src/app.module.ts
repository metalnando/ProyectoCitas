import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitasModule } from './citas/citas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { PacientesModule } from './pacientes/pacientes.module';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { MedicoModule } from './medico/medico.module';
import { CalendarioModule } from './calendario/calendario.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://citasmedicasplus:2823620citas@citas.skswp.mongodb.net/citas?'

    ),HttpModule,   
    CitasModule, 
    PacientesModule,
    MetodoPagoModule,
    MedicoModule,
    CalendarioModule
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
