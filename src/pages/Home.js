import { useState } from 'react';

import NewGigForm from '../components/forms/NewGigForm'
import RecentGigs from '../components/RecentGigs'

function Home() {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => setShowForm(!showForm)

    return (
        <div>
            <h3 className="appName">Giggity</h3>
            <p className="appMotto">Track all your gig earnings in one place</p>
            <div className="YTD_div">
                <p>YTD Earnings: $0.00</p>
            </div>
            <div>
                {!showForm ? <button className="addGig_button" onClick={handleShowForm}>+ $$$</button>
                : <NewGigForm handleShowForm={handleShowForm} />}
            </div>
            <RecentGigs />
        </div>
    )
}

export default Home
