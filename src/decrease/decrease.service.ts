import { Injectable } from '@nestjs/common';
import { CreateDecreaseDto } from './dto/create-decrease.dto';
import { UpdateDecreaseDto } from './dto/update-decrease.dto';
import { Decrease } from './entities/decrease.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DecreaseService {
  constructor(@InjectModel(Decrease.name) private readonly decreaseModel: Model<Decrease>) {}

  async createDecrease(createDecreaseDto: CreateDecreaseDto): Promise<Decrease> {
    const createdDecrease = new this.decreaseModel(createDecreaseDto).save();
    console.log(createDecreaseDto)
    return createdDecrease;
  }

  async findAllDecreases() : Promise<Decrease[]>{
    return await this.decreaseModel.find().exec();
  }

  async findOneDecrease(id: string): Promise<Decrease> {
    return await this.decreaseModel.findById(id).exec();
  }

  async updateDecrease(id: string, updateDecreaseDto: UpdateDecreaseDto): Promise<Decrease> {
    return await this.decreaseModel.findByIdAndUpdate(id, updateDecreaseDto, { new: true }).exec();
  }

  async removeDecrease(id: string): Promise<Decrease> {
    return await this.decreaseModel.findByIdAndDelete(id).exec();
  }
}
