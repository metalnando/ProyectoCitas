import { Injectable, NotFoundException } from '@nestjs/common';
import { ICitas } from './Schema/citas.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CrearCitaDto } from './dto/crear-cita.dto';

@Injectable()
export class CitasService {
    constructor(@InjectModel('Citas') private readonly citasModel: Model<ICitas>) {}

    async crerCita(cita: ICitas): Promise<ICitas> {
        const nuevaCita = new this.citasModel(cita);
        return nuevaCita.save();
    }

    // Mostrar todas las citas agendadas 
    async getCitas(): Promise<ICitas[]> 
    {
        return await this.citasModel.find().exec();
    }

    async getCitaById(id:string): Promise<ICitas>{
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new NotFoundException("Id de la cita no valido");
        }
        const cita = await this.citasModel.findById(id).exec();
        if(!cita)
        {
            throw new NotFoundException(`El id ${id} no se encuentra en la base de datos`);
        }
        return cita;
    }

    // Actualizar la cita
    async updateCita(id: string, crearCitaDto:CrearCitaDto):Promise<ICitas>{
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new NotFoundException("Id de la cita no es valido");
        }
        const citaActualizada = await this.citasModel.findByIdAndUpdate(id , crearCitaDto, {new:true});
        if(!citaActualizada){
            throw new NotFoundException(`El id ${id} no se encuentra en la base de datos`);
        }
        return citaActualizada;
    }

    // Eliminar Cita
    async deleteCita(id:string):Promise<ICitas>{
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new NotFoundException("Id de la cita no es valido")
        }
        const citaEliminada = await this.citasModel.findByIdAndDelete(id);
        if(!citaEliminada){
            throw new NotFoundException(`El id ${id} no se encuentra en la base de datos`);
        }
        return citaEliminada;
    }

}
