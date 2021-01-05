import { add } from "date-fns";

export type BookingItem = {
    id?: string;
    navn?: string;
    tlf?: string;
    bookingDate?: Date;
    registreringsnummer?: string
};

export const bookingsInit: BookingItem[] = [
    { id: 'BDWE1-233DC', navn: "Ola Normann", tlf: "919 19 192", bookingDate: add(new Date(), { days: 1 }), registreringsnummer: 'AA80433' },
    { id: 'BDWE1-233DA', navn: "Martin Jensen", tlf: "919 19 192", bookingDate: add(new Date(), { days: 24 }), registreringsnummer: 'AA70433' },
    { id: 'BDWE1-233DB', navn: "Bjarne Hansen", tlf: "919 19 191", bookingDate: add(new Date(), { days: 23 }), registreringsnummer: 'AJ69533' },
]