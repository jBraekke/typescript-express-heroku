import React from 'react';
import { Link } from 'react-router-dom';

const Main = (): JSX.Element => {
    return (
        <div>
            Main Menu
            <Link to="/new-booking">
                <button>
                    Se bookinger
            </button>
            </Link>
            <Link to="booking">
                <button>
                    Ny booking
            </button>
            </Link>
        </div>
    );
};

export default Main;