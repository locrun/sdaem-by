export interface ICottages {
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

  typeOptions: [{ value: string; label: string }];
}
