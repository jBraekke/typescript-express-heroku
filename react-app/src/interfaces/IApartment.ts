export interface IApartment {
  _id: string;
  adresse: string;
  antallSoveRom: number;
  prisPerMnd: number;
  depositum: number;
  husleieGaranti: string;
  by: string;
  images: [
    {
      originalname: string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    }
  ];
}

export interface IApartmentProps {
  props: IApartment;
}
