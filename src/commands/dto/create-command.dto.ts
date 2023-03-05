import { Item } from "../entities/command.entity";

export class CreateCommandDto {
  client: string;
  personQuantity: number;
  tableNumber: number;
  items: Item[];
}
