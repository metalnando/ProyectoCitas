import { Module } from '@nestjs/common';
import { CalendarioController } from './calendario.controller';
import { CalendarioService } from './calendario.service';

@Module({
  controllers: [CalendarioController],
  providers: [CalendarioService]
})
export class CalendarioModule {}
