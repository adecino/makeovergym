import React from "react";

const ScheduleSection = () => {
    return (
        <div className = "scheduleSection">
            <p className = "shoutout">Open Gym Hours:</p>
            <p>Monday-Friday: 6:30am-8:30pm</p>
            <p>Saturday-Sunday: 7:00am-12:00pm</p>

            <p className = "shoutout">Class Schedule Weekday Mornings:</p>
            <p>Zumba: 7:30am-8:30am</p>
            <p>Weight Training: 8:30am-9:30am</p>
            <p>Yoga: 9:30am-10:30am</p>

            <p className = "shoutout">Class Schedule Weekday Evenings:</p>
            <p>Yoga: 5:30pm-6:30pm</p>
            <p>Weight Training: 6:30pm-7:30pm</p>
            <p>Zumba: 7:30pm-8:30pm</p>

            <p className = "shoutout">Class Schedule Weekends:</p>
            <p>Zumba: 7:30am-8:30am</p>
            <p>Weight Training: 8:30am-9:30am</p>
            <p>Yoga: 9:30am-10:30am</p>

            <style jsx>{`
                .scheduleSection {
                    font-family: Lato;                    
                }
                .scheduleSection .shoutout {
                    font-size: 20px;
                    font-weight: 700;
                    padding-left: 20px;
                }
                .scheduleSection p {
                    padding-left: 20px;
                }
            `}</style>
        </div>
    );
}

export default ScheduleSection;