import * as mongoose from "mongoose";

const ApartmentSchema = new mongoose.Schema(
  {
    adresse: {
      type: String,
      required: [true, "Fyll ut adresse!"],
      unique: true, // unique index and value
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
  },
  //{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  { toJSON: { getters: true } }
);

const Apartments = mongoose.model("Apartment", ApartmentSchema);

export default Apartments;
