import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DecreaseService } from './decrease.service';
import { CreateDecreaseDto } from './dto/create-decrease.dto';
import { UpdateDecreaseDto } from './dto/update-decrease.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('decrease')
export class DecreaseController {
  constructor(private readonly decreaseService: DecreaseService) {}

  @Post('create-decrease')
  @MessagePattern("createDecrease")// se comunica con la api por medio de message pattern
  create(@Body() createDecreaseDto: CreateDecreaseDto) {
    return this.decreaseService.createDecrease(createDecreaseDto);
  }

  @Get('/find-all-decreases')
  @MessagePattern("findAllDecreases")
  findAll() {
    return this.decreaseService.findAllDecreases();
  }

  @Get('/find-one-decrease/:id') 
  @MessagePattern('findOneDecrease')
  findOne(id: string) {
    return this.decreaseService.findOneDecrease(id);
  }

  @Put('/update-decrease/:id')
  @MessagePattern('updateDecrease')
  update(payload) { 
    console.log(payload) 
    return this.decreaseService.updateDecrease(payload.id, payload.updateDecreaseDto);
  }

  @Delete('/delete-decrease/:id')
  @MessagePattern('removeDecrease')
  remove(id: string) {
    return this.decreaseService.removeDecrease(id);
  }
}