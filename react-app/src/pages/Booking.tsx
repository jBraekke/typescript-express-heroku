import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { BookingItem } from '../../../server/types/BookingType';

const Booking = (): JSX.Element => {
    const [bookings, setBookings] = useState<BookingItem[]>();

    useEffect(() => {

        fetch('/api/booking')
            .then(response => response.json())
            .then(json => setBookings(json.bookings))
            .catch(error => console.error('woops, something unexpected came up', error))

    }, []);

    return (
        <div>
            <h1>
                Alle bookinger
            </h1>
            <ul>
                {
                    bookings?.map((booking) =>
                        <li key={booking.id}>
                            {booking.navn} ({booking.bookingDate && format(new Date(booking.bookingDate), 'dd.MM.yyyy')})
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Booking;