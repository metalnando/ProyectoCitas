import { Module } from '@nestjs/common';
import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';
import citasSchema from './Schema/citas.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ICitas } from './Schema/citas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Citas', schema: citasSchema}]) //'citas.name '
  ],
  controllers: [CitasController],
  providers: [CitasService]
})
export class CitasModule {}
