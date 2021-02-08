export interface IApartment {
  _id: string;
  adresse: string;
  antallSoveRom: number;
  prisPerMnd: number;
  depositum: number;
  husleieGaranti: string;
  by: string;
  images: [{ filename: string }];
}

export interface IApartmentProps {
  apartments: IApartment[];
}
