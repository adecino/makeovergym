import React, {Component} from "react";

class InformationSection extends Component {
    render () {
        return (
            <div className = "informationSection">
                <p className = "shoutout">Your first week is free!</p>
                <p> Those who are residents nearby or work in the area, try out a 1 week free trial.  Otherwise you must pay for short-term memberships.</p>

                <p className = "shoutout">Friends and Family Fridays</p>
                <p>Every Friday, up to 5 women can attend the gym with you for free.</p>

                <p className = "shoutout">Self Defense Class</p>
                <p>Held the 1st Saturday of every month with the San Marino Police department or with Krav Maga specialist Tony DeCino. A special admission price of $25 for each person, not included in membership fee, applies. </p>


                <style jsx>{`
                    .informationSection {
                        font-family: Lato;                    
                    }

                    .informationSection .shoutout {
                        font-weight: 700;
                        padding-left: 20px;
                        font-size: 20px;
                    }

                    .informationSection p {
                        padding-left: 20px;
                    }
                `}</style>
            </div>
        );
    }
}

export default InformationSection;