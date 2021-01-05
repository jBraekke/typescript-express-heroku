import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BookingItem } from '../../../server/types/BookingType';
import DateTimePicker from '../components/DatePicker/DateTimePicker';
import FormField from '../components/FormField/FormField';
import createUUID from '../helpers/CreateUUID';


const NewBooking = (): JSX.Element => {
    const [booking, setBooking] = useState<BookingItem>();
    const [redirect, setRedirect] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (booking) {
            fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...booking, id: createUUID() }),
            }).then(response => {
                if (response.ok) {
                    setRedirect(true);
                }
            })
        }
    };

    return (
        <>
            {redirect && <Redirect to='/booking' />}
            <h1>Ny booking</h1>
            <form onSubmit={e => onSubmit(e)}>
                <FormField label="Navn">
                    <input
                        placeholder="Skriv navn.."
                        required
                        onChange={(e) => setBooking({ ...booking, navn: e.target.value })}
                    />
                </FormField>
                <FormField label="Telefon">
                    <input
                        placeholder="Skriv tlf.."
                        required
                        onChange={(e) => setBooking({ ...booking, tlf: e.target.value })}
                    />
                </FormField>
                <FormField label="Booking tid">
                    <DateTimePicker
                        withPortal
                        callback={(date) => setBooking({ ...booking, bookingDate: date })}
                    />
                </FormField>
                <FormField label="Registeringsnummer">
                    <input
                        placeholder="Skriv registeringsnummer.."
                        required
                        onChange={(e) => setBooking({ ...booking, registreringsnummer: e.target.value })}
                    />
                </FormField>
                <button type="submit">Legg til</button>
            </form>
        </>
    );
};

export default NewBooking;