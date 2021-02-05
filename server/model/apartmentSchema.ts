import * as mongoose from "mongoose";
import { model, Types, Document } from "mongoose";

const apartmentSchema = new mongoose.Schema(
  {
    adresse: {
      type: String,
      required: [true, "Fyll ut adresse!"],
      //unique: true, // unique index and value
    },
    antallSoveRom: {
      type: Number,
      required: [true, "Fyll inn antall soverom!"],
      //select: false,
    },
    prisPerMnd: {
      type: Number,
      required: [true, "Skriv inn pris per måned!"],
      //select: false,
    },
    depositum: {
      type: Number,
      required: [true, "Skriv inn depositum!"],
      //select: false,
    },
    husleieGaranti: {
      type: String,
      required: [true, "Fyll ut husleie garanti!"],
    },
    by: {
      type: String,
      required: [true, "Vennligst velg en by!"],
    },

    /*images: {
      type: Object,
      required: false,
    },*/
  },
  //{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  { toJSON: { getters: true } }
);

export interface IApartment {
  adresse: string;
  antallSoveRom: Number;
  prisPerMnd: Number;
  depositum: Number;
  husleieGaranti: string;
  by: string;
  //images?: Object;
}

interface ApartmentModel extends IApartment, Document {}

export default model<ApartmentModel>("Apartments", apartmentSchema);
