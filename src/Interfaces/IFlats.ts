export interface IFlats {
  items: {
    id: number;
    city: string;
    address: string;
    metro: string;
    area: string;
    image: string;
    price: string;
    capacity: string;
    rooms: string;
    square: string;
    label: string;
    description: string;
    contacts: {
      avatar: string;
      title: string;
      name: string;
      tel: string;
      email: string;
    };
    socials: string[];
  }[];
  kitchen: string[];
  games: string[];
  capacityOptions: [{ value: string; label: string }];
  areaOptions: [{ value: string; label: string }];
  metroOptions: [{ value: string; label: string }];
  cityOptions: [{ value: string; label: string }];
  roomsOptions: [{ value: string; label: string }];
}
