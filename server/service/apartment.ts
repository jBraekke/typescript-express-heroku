import Apartments from "../model/apartmentSchema";

export const createApartments = async (data) => Apartments.create(data);
export const listApartments = async () => Apartments.find();
