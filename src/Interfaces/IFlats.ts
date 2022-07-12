export interface IFlats {
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
}
