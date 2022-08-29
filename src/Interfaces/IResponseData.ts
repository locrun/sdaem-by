export interface IOwnerContacts {
  avatar: string;
  title: string;
  name: string;
  tel: string;
  viber: string;
  whatsapp: string;
  ownerEmail: string;
  mail: string;
}

export interface IResponseData {
  id: number;
  city: string;
  address: string;
  area: string;
  metro: string;
  room: string;
  image: string;
  square: string;
  price: string;
  capacity: string;
  label: string;
  type: string;
  description: string;
  ownerContacts: IOwnerContacts;
}
