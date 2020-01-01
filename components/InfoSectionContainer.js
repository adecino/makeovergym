import React, {Component} from "react";

class InfoSectionContainer extends Component {
    render () {
        return (
            <div className = "infoSectionContainer">
                <h1>San Marino's Most Popular Women's Gym</h1>

                <p className = "shoutout">A goal-driven environment for women to achieve greatness</p>
                <p> We are building a community of lasting friendships and self-growth through education and wellness. </p>

                <p className = "shoutout">A membership package that works for everyone</p>
                <p> We have different packages and memberships including exercise classes, self defense, personal training, open gym, a referral program of specialists in the area towards your needs, and a total body makeover with stylists, hair, and make up!  </p>
                
                <p className = "shoutout">The Most Healthy Challenge</p>
                <p> Every 2 months you can buy in to the Most Healthy Challenge to win one of the 10 prizes!  The ultimate goal is to help you be healthy in a fun way. </p>
                
                <p className = "shoutout">Personal Goal Check-Ins</p>
                <p> Every 6 weeks there is a free 1:1 meeting with the owners or trainers to make sure you are moving towards your personal goals. Free measurements and changing your membership based on your needs. </p>
            <style jsx> {`
                .infoSectionContainer {
                    float: right;
                    width: 50%;
                    background-color: #404040;
                    text-align: left;
                    font-family: Lato;
                    color: white;
                    margin-top: 0px;
                }

                .infoSectionContainer h1 {
                    font-weight: 900;
                    margin-top: 0vh;
                    margin-bottom: 0vh;
                    font-size: 4vw;
                    padding-left: 1.5vw;
                    padding-top: 5px;
                    line-height: 9vh;
                }

                .infoSectionContainer p {
                    padding-left: 1.5vw;
                    font-size: 1.25vw;
                }

                .infoSectionContainer .shoutout {
                    font-weight: 700;
                    padding-left: 1.5vw;
                    font-size: 20px;
                }

                @media screen and (max-width: 820px) {
                    .infoSectionContainer {
                        width: 100%;
                    }

                    .infoSectionContainer h1 {
                        font-size: 8vw;
                        line-height: normal;
                    }

                    .infoSectionContainer .shoutout {
                        font-size: 5vw;
                        margin-right: 5vw;
                    }

                    .infoSectionContainer p {
                        font-size: 4vw;
                        margin-right: 5vw;
                    }
                }
            `}</style>
            </div>
        );
    }
}

export default InfoSectionContainer;