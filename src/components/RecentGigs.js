
function RecentGigs() {
    let gigs = require('../data/gigs.json')

    return (
        <div className="recentGigs">
                <p>Recent Gigs</p>
                <div className="gigs_container">
                    {gigs.map((gig, i) => {
                        return (
                            <div className="gigDetails" key={i}>
                                <p>{gig.date}</p>
                                <p>{gig.company}</p>
                                <p>{gig.position}</p>
                                <p>Hours Worked: {gig.hoursWorked}</p>
                                {gig.hourly ? <p>Hourly Wage: {gig.hourly}</p>
                                    : <p>Shift Pay: {gig.flat}</p>
                                }
                                <p>Tips: {gig.tips}</p>
                                <p>Total: {gig.total}</p>
                            </div>
                        )
                        })}
                </div>
            </div>
    )
}

export default RecentGigs
