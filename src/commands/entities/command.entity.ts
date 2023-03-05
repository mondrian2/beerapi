export interface Command {
  client: string;
  personQuantity: number;
  tableNumber: number;
  items: Item[];
}

export interface Item {
  name: string;
  unitedValue: number;
  unitedQuantity: number;
}
