import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Decrease>;

@Schema()
export class Decrease {

    @Prop()
    decrease_id: number;

    @Prop()
    reason_for_decrease: string;

    @Prop()
    date_decrease: Date;

    @Prop()
    product_id: number[];
}

export const DecreaseSchema = SchemaFactory.createForClass(Decrease);