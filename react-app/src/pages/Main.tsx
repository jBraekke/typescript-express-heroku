import React from 'react';
import { Link } from 'react-router-dom';

const Main = (): JSX.Element => {
    return (
        <div>
            <h1>Hoved meny</h1>

            <div>
                <Link to="/new-booking">
                    <button>
                        Ny booking
                    </button>
                </Link>
                <Link to="booking">
                    <button>
                        Se bookinger
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Main;