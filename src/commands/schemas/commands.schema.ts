import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Item } from '../entities/command.entity';

export type CommandsDocument = HydratedDocument<Command>;

@Schema()
export class Command {
  @Prop()
  client: string;
  @Prop()
  personQuantity: number;
  @Prop()
  tableNumber: number;
  @Prop()
  items: Item[];
}

export const CommandSchema = SchemaFactory.createForClass(Command);
