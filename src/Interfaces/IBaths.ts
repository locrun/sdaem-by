export interface IBaths {
  items: {
    id: number;
    rooms: string;
    image: string;
    city: string;
    square: string;
    price: string;
    type: string;
    capacity: string;
    description: string;
  }[];

  bathsOptions: [{ value: string; label: string }];
}
