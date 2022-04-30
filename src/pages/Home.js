import React from 'react'

function Home() {
    return (
        <div>
            <h3>Giggity</h3>
            <p>Track all your gig earnings in one place</p>
            <div>
                <p>YTD Earnings: $0.00</p>
            </div>
            <div>
                <button className="addGig_button">+ $$$</button>
                <form className="addGig_form">
                    <div>
                        <input type="date" placeholder="Date" />
                        <label for="start">Start</label>
                        <input type="time" name="start" />
                        <label for="finish">Finish</label>
                        <input type="time" name="finish" />
                    </div>
                    <div>
                        <input type="text" placeholder="Company"/>
                        <input type="text" placeholder="Position"/>
                    </div>
                    <div>
                        <select>
                            <option value="hourly">Hourly</option>
                            <option value="flat">Flat Rate</option>
                        </select>
                        <input type="number" placeholder="Shift Pay"/>
                        <input type="number" placeholder="Hourly Wage" />
                        <input type="number" placeholder="Tips" />
                    </div>
                    <div>
                        <input type="number" placeholder="Total Earnings" />
                        <input type="checkbox" name="taxed" />
                        <label for="taxed">Taxed?</label>
                    </div>
                    <div>
                        <textarea placeholder="Notes" rows="4" cols="70" />
                    </div>
                    <input type="submit" value="Add Gig" />
                </form>
            </div>
            <div>
                <p>Recent Gigs</p>
            </div>
        </div>
    )
}

export default Home
