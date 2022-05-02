import { useEffect, useState } from 'react';

function NewGigForm({ handleShowForm }) {
    const [date, setDate] = useState(null);
    const [start, setStart] = useState(null);
    const [finish, setFinish] = useState(null);
    const [company, setCompany] = useState(null);
    const [position, setPosition] = useState(null);
    const [hourly, setHourly] = useState(null);
    const [flat, setFlat] = useState(null);
    const [tips, setTips] = useState(null);
    const [taxed, setTaxed] = useState(null);
    const [notes, setNotes] = useState(null);
    const [total, setTotal] = useState(0);

    const hourlyInput = <input onChange={(e) => setHourly(e.target.value)} type="number" placeholder="Hourly Wage" />
    const flatInput = <input onChange={(e) => setFlat(e.target.value)} type="number" placeholder="Shift Pay"/>
    
    const [payType, setPayType] = useState(hourlyInput);


    

    const handlePayType = (e) => {
        if (e.target.value === "hourly") {
            setPayType(hourlyInput)
        } else if (e.target.value === "flat") {
            setPayType(flatInput)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleShowForm()
        const gig = { date, start, finish, company, position, hourly, flat, tips, taxed, notes, total}
        const newData = JSON.stringify(gig)
        console.log(newData)
    }

    useEffect(() => {
        if (flat) setTotal(flat + tips)
        if (hourly) setTotal(parseFloat(hourly * 5) + parseFloat(tips))
    }, [tips, flat, hourly])

    return (
        <div className="addGig_container">
            <form className="addGig_form" onSubmit={handleSubmit}>
                    <div className="addGig_div">
                        <input onChange={(e) => setDate(e.target.value)} type="date" placeholder="Date" />
                        <div>
                            <label htmlFor="start">Start </label>
                            <input onChange={(e) => setStart(e.target.value)} type="time" name="start" />
                        </div>
                        <div>
                            <label htmlFor="finish">Finish </label>
                            <input onChange={(e) => setFinish(e.target.value)} type="time" name="finish" />
                        </div>
                    </div>
                    <div className="addGig_div">
                        <input onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Company"/>
                        <input onChange={(e) => setPosition(e.target.value)} type="text" placeholder="Position"/>
                    </div>
                    <div className="addGig_div">
                        <select onChange={handlePayType}>
                            <option value="hourly">Hourly</option>
                            <option value="flat">Flat Rate</option>
                        </select>
                        {payType}
                        <input onChange={(e) => setTips(e.target.value)} type="number" placeholder="Tips" />
                    </div>
                    <div className="addGig_div">
                        <div>
                            <input onChange={(e) => setTaxed(e.target.value)} type="checkbox" name="taxed" />
                            <label htmlFor="taxed">Taxed?</label>
                        </div>
                        <input type="number" placeholder="Total Earnings" value={total} />
                    </div>
                    <div className="addGig_div">
                        <textarea onChange={(e) => setNotes(e.target.value)} name="notes" placeholder="Notes" rows="4" cols="70" />
                    </div>
                    <input className="addGig_button" type="submit" value="Add Gig" />
                </form>
        </div>
    )
}

export default NewGigForm
