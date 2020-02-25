import React from "react";

const InfoSectionContainer = () => {
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
                background-color: #404040;
                color: white;
                float: right;
                margin-top: 0px;
                text-align: left;
                width: 50%;
            }
            .infoSectionContainer h1 {
                font-family: Helvetica;
                font-size: 4vw;
                font-weight: 900;
                line-height: 9vh;
                margin: 0px;
                padding: 1vw 0 0 1.5vw;
            }
            .infoSectionContainer p {
                font-family: Helvetica;
                font-size: 1.25vw;
                padding-left: 1.5vw;
            }
            .infoSectionContainer .shoutout {
                font-family: Helvetica;
                font-size: 20px;
                font-weight: 700;
                padding-left: 1.5vw;
            }
            @media screen and (max-width: 820px) {
                .infoSectionContainer {
                    width: 100%;
                }
                .infoSectionContainer h1 {
                    font-family: Helvetica;
                    font-size: 8vw;
                    line-height: normal;
                }
                .infoSectionContainer .shoutout {
                    font-family: Helvetica;
                    font-size: 5vw;
                    margin-right: 5vw;
                }
                .infoSectionContainer p {
                    font-family: Helvetica;
                    font-size: 4vw;
                    margin-right: 5vw;
                }
            }
        `}</style>
        </div>
    );
}

export default InfoSectionContainer;