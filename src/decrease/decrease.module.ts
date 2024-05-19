import { Module } from '@nestjs/common';
import { DecreaseService } from './decrease.service';
import { DecreaseController } from './decrease.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DecreaseSchema } from './entities/decrease.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Decrease', schema: DecreaseSchema }])],
  controllers: [DecreaseController],
  providers: [DecreaseService],
})
export class DecreaseModule {}
