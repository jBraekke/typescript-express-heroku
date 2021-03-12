export interface IApartment {
  title: string;
  description: string;
  address: string;
  city: string;
  date?: Date;

  squareMeter: number;
  bedrooms: number;
  bathrooms: number;
  price: number;

  apartment: boolean;
  incoming: boolean;
  house: boolean;
  commerce: boolean;

  deposit: boolean;
  rentGuarantee: boolean;
  parking: boolean;
  newlyBuilt: boolean;
  imagePath?: string;
}

export interface IApartmentFilter {
  apartment: boolean;
  incoming: boolean;
  house: boolean;
  commerce: boolean;
  newlyBuilt: boolean;
  city: string;
}

export interface IApartmentProps {
  props: IApartment;
}
